"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const baseItems: Gallery4Item[] = [
  {
    id: "construction",
    title: "Gold Coast Construction",
    description: "Luxury estate builds with calm execution and premium finishes.",
    href: "https://gc-construction-example.vercel.app/",
    image: "/Architectural.png",
  },
  {
    id: "landscaping",
    title: "Gold Coast Landscaping",
    description: "Outdoor living spaces that elevate Gold Coast properties.",
    href: "https://gc-landscaping-example.vercel.app/",
    image: "/new.png",
  },
];

const Gallery4 = ({
  title = "Featured Examples",
  description = "Recent sites we’ve shipped. Built fast, tuned for conversions, and ready to win jobs.",
  items = baseItems,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    update();
    carouselApi.on("select", update);
    return () => {
      carouselApi.off("select", update);
    };
  }, [carouselApi]);

  return (
    <section className="w-full">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/40">
            <span className="h-px w-8 bg-orange-500" />
            Examples
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              {title}
            </h2>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl">
              {description}
            </p>
          </div>
        </div>
        <div className="hidden sm:flex gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-40"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            className="bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-40"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <Carousel
        setApi={setCarouselApi}
        opts={{
          align: "start",
          loop: false,
          breakpoints: {
            "(max-width: 768px)": {
              dragFree: true,
            },
          },
        }}
      >
        <CarouselContent className="ml-0">
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-full sm:basis-1/2 lg:basis-1/2 pl-0 sm:pl-4"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm h-full">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col gap-2">
                    <div className="text-sm font-semibold text-white group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </div>
                    <div className="text-sm text-white/60 leading-relaxed">
                      {item.description}
                    </div>
                    <div className="text-xs text-white/50 group-hover:text-white/80 transition-colors mt-1">
                      View live →
                    </div>
                  </div>
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-6 flex items-center justify-center gap-2 sm:hidden">
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              currentSlide === index ? "bg-orange-500" : "bg-white/20"
            }`}
            onClick={() => carouselApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export { Gallery4 };
