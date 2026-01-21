"use client";

import React from "react";
import LiquidMetalHero from "@/components/ui/liquid-metal-hero";
import StackFeatureSection from "@/components/ui/stack-feature-section";
import { Compare } from "@/components/ui/compare";
import HoverFooter from "@/components/ui/hover-footer";
import TextBlockAnimation from "@/components/ui/text-block-animation";

export default function Home() {
  return (
    <main className="bg-[#07090b] text-white">
      <LiquidMetalHero
        title="Websites that win jobs."
        subtitle="Professional, mobile-fast sites for $499. Stop losing quotes to competitors with better websites. No bloat, just leads."
        primaryCtaLabel="Request Proposal"
        secondaryCtaLabel="View Portfolio"
        onPrimaryCtaClick={() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}
        onSecondaryCtaClick={() => {
          document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
        }}
        features={[
          "$499 Build",
          "$30/mo Support",
          "3-5 Day Turnaround"
        ]}
      />

      {/* Text Block Animation Section */}
      <section className="w-full py-8 sm:py-12 lg:py-16 bg-[#07090b] relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-20">
            {/* Main Headline */}
            <div className="max-w-5xl">
              <TextBlockAnimation
                blockColor="#f97316"
                animateOnScroll={true}
                delay={0.1}
                duration={0.7}
                stagger={0.08}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-white">
                  Stop losing quotes.<br />
                  <span className="text-orange-500">Start winning jobs.</span>
                </h2>
              </TextBlockAnimation>
            </div>

            {/* Value Proposition */}
            <div className="max-w-4xl space-y-8">
              <TextBlockAnimation 
                blockColor="#07090b" 
                duration={0.6}
                stagger={0.05}
              >
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/80 font-light">
                  Your competitors have better websites. That&apos;s why they&apos;re getting the quotes you should be winning. 
                  We build <strong className="text-white font-semibold">professional, mobile-fast sites</strong> that make your business look 
                  as good as your work.
                </p>
              </TextBlockAnimation>

              <TextBlockAnimation 
                blockColor="#f97316" 
                duration={0.65}
                stagger={0.06}
              >
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/70">
                  No agency bloat. No confusing contracts. Just a <strong className="text-orange-500 font-semibold">$499 custom website</strong> and 
                  <strong className="text-orange-500 font-semibold"> $30/month</strong> for hosting, security, and quick edits. 
                  Live in 3-5 days.
                </p>
              </TextBlockAnimation>
            </div>

            {/* Testimonial Quote */}
            <div className="pl-4 sm:pl-6 lg:pl-8 border-l-2 border-orange-500/50 max-w-3xl">
              <TextBlockAnimation 
                blockColor="#07090b" 
                duration={0.6}
              >
                <p className="text-base sm:text-lg md:text-xl italic text-white/60 leading-relaxed">
                  &quot;Best investment I made for my business this year. Simple process, great result, and I finally look professional online.&quot;
                </p>
                <p className="mt-4 text-sm sm:text-base text-white/50 font-medium">
                  — Sarah Mitchell, GC Landscaping
                </p>
              </TextBlockAnimation>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl pt-2 sm:pt-4 pb-1 sm:pb-2">
        <StackFeatureSection />
      </section>

      <section id="compare" className="w-full px-4 sm:px-6 lg:px-8 pt-1 sm:pt-2 pb-6 sm:pb-10">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-white/50 mb-4">
            <span className="h-px w-8 bg-orange-500"></span>
            The Difference
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Before vs. After
          </h2>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto">
            See the transformation. Generic templates vs. custom Base One design.
          </p>
        </div>
        
        <div className="flex justify-center items-center w-full">
          <div className="w-full max-w-6xl bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
              <div className="text-center sm:text-left">
                <div className="text-sm font-semibold text-white/40 mb-2">Before</div>
                <div className="text-lg font-bold text-white">Generic Template</div>
              </div>
              <div className="text-center sm:text-right sm:ml-auto">
                <div className="text-sm font-semibold text-white/40 mb-2">After</div>
                <div className="text-lg font-bold text-orange-500">Base One Design</div>
              </div>
            </div>
            <Compare
              firstImage="/old.png"
              secondImage="/new.png"
              firstImageClassName="object-cover object-center"
              secondImageClassname="object-cover object-center"
              className="h-[320px] w-full sm:h-[480px] lg:h-[600px] rounded-2xl"
              slideMode="hover"
              showHandlebar={true}
            />
            <div className="mt-6 text-center text-sm text-white/60">
              Hover or drag to compare
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-white text-black py-6 sm:py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-black/60 mb-2">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-500"></span>
                Selected Work
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Recent builds</h2>
            </div>
            <a
              href="#contact"
              className="text-sm font-bold border-b-2 border-orange-500 pb-0.5 hover:text-orange-500 transition-colors"
            >
              Get yours built next {"->"}
            </a>
          </div>

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Gold Coast Construction",
                meta: "Luxury Estate Construction • Premium Builds",
                img:
                  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
                url: "https://gc-construction-example.vercel.app/",
              },
              {
                title: "Gold Coast Landscaping",
                meta: "Landscape Design • Outdoor Living Spaces",
                img: "/new.png",
                url: "https://gc-landscaping-example.vercel.app/",
              },
              {
                title: "Coming Soon",
                meta: "More Projects • Portfolio",
                img:
                  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
                url: "#contact",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.url}
                target={item.url.startsWith("http") ? "_blank" : undefined}
                rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] rounded-2xl sm:rounded-3xl bg-gray-100 overflow-hidden mb-4 sm:mb-5 border border-black/5 relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <h3 className="text-base sm:text-lg font-bold group-hover:text-orange-500 transition-colors">{item.title}</h3>
                <p className="text-xs sm:text-sm text-black/60">{item.meta}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-10">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-8 sm:space-y-10 mb-8 lg:mb-0">
            <div>
              <div className="text-xs uppercase tracking-widest text-white/40 mb-2">
                Websites Delivered
              </div>
              <div className="text-5xl sm:text-6xl font-bold text-white tracking-tighter">
                240<span className="text-orange-500">+</span>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-white/40 mb-2">
                Hosted Clients
              </div>
              <div className="text-5xl sm:text-6xl font-bold text-white tracking-tighter">
                70<span className="text-orange-500">+</span>
              </div>
            </div>
            <div className="relative p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10">
              <p className="text-white/80 italic text-sm mb-4">
                Best investment I made for my business this year. Simple process and great
                result.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                <div className="text-xs font-bold">
                  John D. <span className="text-white/40 font-normal">- Plumber</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Common Questions</h3>
            <div className="divide-y divide-white/10 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
              {[
                {
                  q: "What exactly do I get for $499?",
                  a:
                    "You get a fully custom designed, 5-page website built to look great on mobile and desktop. This includes your Home, About, Services, Gallery, and Contact pages.",
                },
                {
                  q: "What does the $30/month cover?",
                  a:
                    "This covers high-speed hosting, SSL security, daily backups, and up to 15 minutes of content edits per month.",
                },
                {
                  q: "Do I own the website?",
                  a:
                    "Yes. Once the $499 invoice is paid, the design and content are yours. If you ever want to move hosts, we can package the files for you.",
                },
                {
                  q: "How long does it take?",
                  a:
                    "Typically 3-5 business days from when we receive your content (logo, text, images).",
                },
              ].map((item, idx) => (
                <details key={item.q} className="group p-4 sm:p-6 cursor-pointer" open={idx === 0}>
                  <summary className="flex items-center justify-between gap-3 sm:gap-4 font-semibold text-white list-none text-sm sm:text-base">
                    {item.q}
                    <span className="text-orange-500 text-lg sm:text-xl group-open:rotate-45 transition-transform duration-300 flex-shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 sm:mt-4 text-sm text-white/60 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-5 relative overflow-hidden rounded-2xl sm:rounded-3xl bg-orange-500 p-6 sm:p-10 flex flex-col justify-between min-h-[280px] sm:min-h-auto">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3 sm:mb-4">
                Ready to look <br /> professional?
              </h3>
              <p className="text-white/80 text-sm mb-6 sm:mb-8">
                Fill out the form and we'll text you a quote and timeline within 2 hours.
              </p>
            </div>
            <div className="relative z-10">
              <div className="text-xs uppercase tracking-widest text-white/60 mb-2">
                Contact Direct
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white break-all">hello@baseone.au</div>
            </div>
          </div>

          <div className="md:col-span-7">
            <form className="rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 h-full">
              <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-white/20 text-sm sm:text-base"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 mb-2 block">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="0400 ..."
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-white/20 text-sm sm:text-base"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your project..."
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-white/20 text-sm sm:text-base resize-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-5 sm:mt-6 w-full rounded-xl bg-white text-black py-3 sm:py-4 font-bold text-sm hover:bg-gray-200 transition-colors"
              >
                Send Enquiry {"->"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <HoverFooter />
      </main>
  );
}
