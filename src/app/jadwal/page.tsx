"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import { Clock, MapPin, Calendar } from "lucide-react";

export default function JadwalPage() {
  const misaMingguan = [
    { day: "Sabtu Sore", time: "16:00 WIB" },
    { day: "Minggu Pagi", time: "06:00 WIB" },
    { day: "Minggu Siang", time: "08:00 WIB" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <PageHeader 
        title="Jadwal Misa" 
        subtitle="Perayaan Ekaristi di Gereja Santo Yakobus Bantul"
        image="https://placehold.co/1920x600?text=Jadwal+Misa"
      />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl mt-12 space-y-16">
        
        {/* MISA MINGGUAN */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-amber-600" />
            <h2 className="text-3xl font-bold text-slate-800">Misa Mingguan</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {misaMingguan.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center group h-full"
              >
                <div className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 font-bold rounded-full mb-6">
                  {item.day}
                </div>
                <div className="flex items-center justify-center gap-2 text-4xl font-extrabold text-slate-800 mb-4 group-hover:text-amber-600 transition-colors">
                  <Clock className="w-8 h-8 text-amber-500" />
                  {item.time}
                </div>
                <div className="w-full h-px bg-slate-100 my-4" />
                <p className="text-slate-500 font-medium">Gereja Pusat</p>
              </div>
            ))}
          </div>
        </section>

        {/* MISA HARIAN & JUMAT PERTAMA */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-8 border-l-4 border-amber-500 pl-4">Jadwal Lainnya</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Harian */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center h-full">
              <h3 className="text-xl font-bold text-slate-700 mb-4">Misa Harian</h3>
              <div className="text-4xl font-bold text-slate-800 mb-2">05:30 WIB</div>
              <p className="text-amber-600 font-medium">Senin - Sabtu</p>
              <p className="text-slate-500 text-sm mt-4 italic">Gereja Santo Yakobus Bantul</p>
            </div>

            {/* Jumat Pertama */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center h-full">
              <h3 className="text-xl font-bold text-slate-700 mb-4">Misa Jumat Pertama</h3>
              <div className="text-4xl font-bold text-slate-800 mb-2">17:00 WIB</div>
              <p className="text-amber-600 font-medium">Setiap Jumat Pertama</p>
              <p className="text-slate-500 text-sm mt-4 italic">Gereja Pusat</p>
            </div>
          </div>
        </section>

        {/* Note */}
        <div className="bg-amber-50 rounded-lg p-4 text-center text-amber-800 font-medium border border-amber-100">
          <p>Catatan: Seluruh perayaan Ekaristi dirayakan dalam Bahasa Indonesia.</p>
        </div>

      </div>
    </main>
  );
}
