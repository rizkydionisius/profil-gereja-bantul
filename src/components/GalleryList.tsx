"use client";

import React, { useState, useMemo } from "react";
import { Image as ImageIcon, ExternalLink, Calendar, Filter } from "lucide-react";
import Link from "next/link";
import { Database } from "@/types/database";

type GalleryEvent = Database['public']['Tables']['gallery_events']['Row'];

// Helper for Indonesian Month Names
const MONTH_NAMES = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

// Helper to format date nicely
const formatDate = (dateString: string) => {
  const parts = dateString.split("-");
  // Handle potential bad date formats
  if (parts.length < 3) return dateString;
  
  const [year, month, day] = parts;
  return `${day} ${MONTH_NAMES[parseInt(month) - 1]} ${year}`;
};

export default function GalleryList({ events }: { events: GalleryEvent[] }) {
  const [activeYear, setActiveYear] = useState("Semua");
  const [activeMonth, setActiveMonth] = useState("Semua");

  // 1. Get Unique Years
  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(events.map(item => item.event_date.split("-")[0])));
    return ["Semua", ...uniqueYears.sort((a, b) => Number(b) - Number(a))];
  }, [events]);

  // 2. Get Available Months for Selected Year
  const availableMonths = useMemo(() => {
    if (activeYear === "Semua") return [];

    const monthsInYear = new Set(
      events
        .filter(item => item.event_date.startsWith(activeYear))
        .map(item => parseInt(item.event_date.split("-")[1], 10) - 1) // 0-indexed month
    );
    
    return Array.from(monthsInYear)
      .sort((a, b) => a - b)
      .map(index => ({
        value: index.toString(),
        label: MONTH_NAMES[index]
      }));
  }, [activeYear, events]);

  // 3. Filter Logic
  const filteredEvents = useMemo(() => {
    return events.filter(item => {
      const parts = item.event_date.split("-");
      if (parts.length < 2) return false;
      
      const yearStr = parts[0];
      const monthStr = parts[1];
      const monthIndex = parseInt(monthStr, 10) - 1;

      // Filter Year
      if (activeYear !== "Semua" && yearStr !== activeYear) return false;

      // Filter Month (only if Year is selected)
      if (activeYear !== "Semua" && activeMonth !== "Semua") {
        if (monthIndex.toString() !== activeMonth) return false;
      }

      return true;
    });
  }, [activeYear, activeMonth, events]);

  const handleYearChange = (year: string) => {
    setActiveYear(year);
    setActiveMonth("Semua"); // Reset month when year changes
  };

  return (
    <div className="container mx-auto px-4 md:px-8 max-w-6xl mt-12">
      
      {/* FILTER SECTION */}
      <div className="flex flex-col items-center mb-12 space-y-6">
        
        {/* Level 1: Year Filter */}
        <div className="bg-white p-1 rounded-full shadow-sm border border-slate-100 inline-flex flex-wrap justify-center">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
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

        {/* Level 2: Month Filter */}
        {activeYear !== "Semua" && (
          <div className="flex flex-wrap justify-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
            <button
              onClick={() => setActiveMonth("Semua")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                activeMonth === "Semua"
                  ? "bg-amber-100 text-amber-700 border-amber-200"
                  : "bg-white text-slate-500 border-slate-200 hover:border-amber-500 hover:text-amber-600"
              }`}
            >
              Semua Bulan
            </button>
            
            {availableMonths.map((month) => (
              <button
                key={month.value}
                onClick={() => setActiveMonth(month.value)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  activeMonth === month.value
                    ? "bg-amber-100 text-amber-700 border-amber-200"
                    : "bg-white text-slate-500 border-slate-200 hover:border-amber-500 hover:text-amber-600"
                }`}
              >
                {month.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* EVENTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <div 
            key={event.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group flex flex-col h-full"
          >
            {/* Thumbnail */}
            <div className="relative aspect-[3/2] overflow-hidden bg-slate-200">
              {event.cover_image ? (
                <img 
                  src={event.cover_image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-300">
                  <ImageIcon size={48} />
                </div>
              )}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                {event.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-amber-600 text-sm font-bold mb-2">
                <Calendar size={16} />
                <span>{formatDate(event.event_date)}</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4 line-clamp-2">
                {event.title}
              </h3>
              
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {filteredEvents.length === 0 && (
        <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-200">
          <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Filter className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-700 mb-2">Tidak ada dokumentasi</h3>
          <p className="text-slate-500 max-w-md mx-auto">
            Belum ada dokumentasi yang ditemukan untuk filter 
            <span className="font-semibold text-slate-700 mx-1">
              {activeYear}
            </span> 
            {activeMonth !== "Semua" && (
              <span> 
                 bulan <span className="font-semibold text-slate-700">{MONTH_NAMES[parseInt(activeMonth)]}</span>
              </span>
            )}
            .
          </p>
        </div>
      )}

    </div>
  );
}
