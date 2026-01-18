"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import { Clock, Calendar } from "lucide-react";

export default function JadwalPage() {
  const scheduleData = [
    {
      name: "Gereja Santo Yakobus Bantul",
      items: [
        { label: "Sabtu Sore", time: "16:00 WIB", note: "Misa Mingguan" },
        { label: "Minggu Pagi", time: "06:00 WIB", note: "Misa Mingguan" },
        { label: "Minggu Siang", time: "08:00 WIB", note: "Misa Mingguan" },
        { label: "Misa Harian", time: "05:30 WIB", note: "Senin - Sabtu" },
        { label: "Jumat Pertama", time: "17:00 WIB", note: "Setiap Jumat Pertama" },
      ]
    },
    {
      name: "Gereja Mater Dei Imogiri",
      items: [
        { label: "Minggu Pagi", time: "07:00 WIB", note: "Misa Mingguan" },
      ]
    },
    {
      name: "Gereja Maria Rosari Gesikan",
      items: [
        { label: "Sabtu (Minggu I & III)", time: "17:00 WIB", note: "Misa Mingguan" },
        { label: "Kamis Wage", time: "16:00 WIB", note: "Misa Lansia" },
      ]
    },
    {
      name: "Gereja Yakobus Alfeus Pajangan",
      items: [
        { label: "Sabtu (Minggu II & IV)", time: "17:00 WIB", note: "Misa Mingguan" },
        // Placeholder time as requested
        { label: "Minggu IV", time: "10:00 WIB", note: "Misa Kerahiman" },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <PageHeader 
        title="Jadwal Misa" 
        subtitle="Perayaan Ekaristi di Gereja Santo Yakobus Bantul"
        image="https://placehold.co/1920x600?text=Jadwal+Misa"
      />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl mt-12 space-y-16">
        
        {scheduleData.map((church, index) => (
          <section key={index} className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-8 h-8 text-amber-600 shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-amber-500 pl-4">
                {church.name}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {church.items.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center group h-full flex flex-col items-center justify-center"
                >
                  <div className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 font-bold rounded-full mb-6">
                    {item.label}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-4xl font-extrabold text-slate-800 mb-4 group-hover:text-amber-600 transition-colors">
                    <Clock className="w-8 h-8 text-amber-500" />
                    <span className="whitespace-nowrap">{item.time}</span>
                  </div>
                  <div className="w-full h-px bg-slate-100 my-4" />
                  <p className="text-slate-500 font-medium">{item.note}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Note */}
        <div className="bg-amber-50 rounded-lg p-4 text-center text-amber-800 font-medium border border-amber-100">
          <p>Catatan: Seluruh perayaan Ekaristi dirayakan dalam Bahasa Indonesia.</p>
        </div>

      </div>
    </main>
  );
}
