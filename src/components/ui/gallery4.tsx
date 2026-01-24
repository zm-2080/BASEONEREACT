"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel-embla";

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
  items?: Gallery4Item[];
}

const data = [
  {
    id: "construction",
    title: "Gold Coast Construction",
    description:
      "Professional construction website showcasing luxury estate builds with modern design, mobile-first experience, and clear calls-to-action that drive quote requests.",
    href: "https://gc-construction-example.vercel.app/",
    image: "/Architectural.png",
  },
  {
    id: "landscaping",
    title: "Gold Coast Landscaping",
    description:
      "Stunning landscaping website featuring outdoor living transformations with optimized gallery, fast loading times, and seamless contact forms that convert visitors into clients.",
    href: "https://gc-landscaping-example.vercel.app/",
    image: "/new.png",
  },
  {
    id: "electrical",
    title: "Gold Coast Electrical",
    description:
      "Clean electrical services website built for trust and conversions, with easy navigation, service breakdowns, and instant quote requests that keep phones ringing.",
    href: "https://gc-electrical-example.vercel.app/",
    image: "/Electrical.png",
  },
];

const Gallery4 = ({
  title = "Local Projects We've Built",
  description = "Built fast, tuned for conversions, and ready to win jobs. See how we help local trades and service businesses look credible online.",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section id="examples" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-black/40">
              <span className="h-px w-8 bg-purple-600" />
              Examples
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
              {title}
            </h2>
            <p className="max-w-2xl text-gray-600 text-base sm:text-lg">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto disabled:opacity-30 hover:bg-purple-100 text-black"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto disabled:opacity-30 hover:bg-purple-100 text-black"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            loop: true,
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="-ml-4">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <a 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group block"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl border-2 border-purple-200 shadow-lg transition-all duration-300 group-hover:border-purple-400 group-hover:shadow-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/90 mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center text-sm font-medium text-white">
                        Visit site{" "}
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-purple-600 w-8" : "bg-purple-600/20 hover:bg-purple-600/40"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
