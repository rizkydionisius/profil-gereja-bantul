"use client";

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Image as ImageIcon, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";

// Mock Data
const events = [
  {
    id: 1,
    title: "Pelantikan Dewan Paroki",
    date: "14 Jan",
    year: "2026",
    category: "Organisasi",
    thumbnail: "https://placehold.co/600x400?text=Pelantikan+Dewan",
    link: "https://google.com"
  },
  {
    id: 2,
    title: "Perayaan Natal 2025",
    date: "25 Des",
    year: "2025",
    category: "Liturgi",
    thumbnail: "https://placehold.co/600x400?text=Natal+2025",
    link: "https://google.com"
  },
  {
    id: 3,
    title: "Penerimaan Sakramen Krisma",
    date: "20 Nov",
    year: "2025",
    category: "Sakramen",
    thumbnail: "https://placehold.co/600x400?text=Sakramen+Krisma",
    link: "https://google.com"
  },
  {
    id: 4,
    title: "Jalan Salib Jumat Agung",
    date: "18 Apr",
    year: "2025",
    category: "Liturgi",
    thumbnail: "https://placehold.co/600x400?text=Jalan+Salib",
    link: "https://google.com"
  }
];

export default function GaleriPage() {
  const [activeYear, setActiveYear] = useState("Semua");
  const years = ["Semua", "2026", "2025"];

  const filteredEvents = activeYear === "Semua" 
    ? events 
    : events.filter(event => event.year === activeYear);

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <PageHeader 
        title="Galeri Dokumentasi" 
        subtitle="Dokumentasi kegiatan Paroki Santo Yakobus Bantul"
        image="https://placehold.co/1920x600?text=Galeri+Dokumentasi"
      />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl mt-12">
        
        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full shadow-sm border border-slate-100 inline-flex">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeYear === year 
                    ? "bg-amber-600 text-white shadow-md" 
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group flex flex-col h-full"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[3/2] overflow-hidden bg-slate-200">
                <img 
                  src={event.thumbnail} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                  {event.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-amber-600 text-sm font-bold mb-2">
                  <Calendar size={16} />
                  <span>{event.date} {event.year}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4 line-clamp-2">
                  {event.title}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-slate-50">
                  <Link 
                    href={event.link}
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-slate-200 text-slate-600 font-semibold text-sm hover:border-amber-600 hover:text-amber-600 transition-colors"
                  >
                    Buka Google Drive
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">Belum ada dokumentasi untuk tahun {activeYear}</p>
          </div>
        )}

      </div>
    </main>
  );
}
