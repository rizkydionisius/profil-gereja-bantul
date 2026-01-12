import React from "react";
import Link from "next/link";
import { heroContent } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://placehold.co/1920x1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
            {heroContent.headline}
          </h1>
          {/* Subheadline removed per request */}
          
          <div className="pt-2">
            <Link
              href="/jadwal"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-amber-600 rounded-full hover:bg-amber-700 transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 ring-offset-2 focus:ring-2 ring-amber-500"
            >
              {heroContent.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
