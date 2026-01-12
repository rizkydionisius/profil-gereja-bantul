import React from "react";
import { schedules, ScheduleItem } from "@/lib/data";
import { Clock, MapPin } from "lucide-react";

export default function ScheduleSection() {
  // Group schedules by category
  const categorizedSchedules = schedules.reduce((acc, schedule) => {
    if (!acc[schedule.category]) {
      acc[schedule.category] = [];
    }
    acc[schedule.category].push(schedule);
    return acc;
  }, {} as Record<string, ScheduleItem[]>);

  // Misa Mingguan (Main Focus)
  const misaMingguan = categorizedSchedules["Misa Mingguan"] || [];
  
  // Other Masses (Harian, Jumat Pertama)
  const misaHarian = categorizedSchedules["Misa Harian"] || [];
  const jumatPertama = categorizedSchedules["Jumat Pertama"] || [];
  
  // Combine for balanced layout or display logic
  // Requirement: "Misa Harian" and "Jumat Pertama" balanced.
  
  return (
    <section id="jadwal" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Jadwal Misa
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Jadwal perayaan Ekaristi di Gereja Santo Yakobus Bantul.
            Silakan hadir sesuai jadwal yang tersedia.
          </p>
        </div>

        <div className="space-y-16">
          {/* MISA MINGGUAN SECTION */}
          <div>
            <h3 className="text-2xl font-bold text-slate-700 mb-8 border-l-4 border-amber-500 pl-4">
              Misa Mingguan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {misaMingguan.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100 group"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-sm font-semibold rounded-full mb-4">
                      {item.day}
                    </span>
                    
                    <div className="flex items-center gap-2 text-4xl font-extrabold text-slate-800 mb-2">
                      <Clock className="w-6 h-6 text-slate-400 group-hover:text-amber-600 transition-colors" />
                      {item.time}
                    </div>
                    
                    <div className="w-full h-px bg-slate-100 my-4" />
                    
                    <div className="space-y-2 text-slate-600">
                      <p className="font-medium text-slate-900">{item.language}</p>
                      <div className="flex items-center justify-center gap-1.5 text-sm text-slate-500">
                        <MapPin size={16} />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MISA HARIAN & JUMAT PERTAMA (BALANCED GRID 2 COLS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misa Harian */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center h-full">
              <h3 className="text-xl font-bold text-slate-700 mb-6 border-b-2 border-slate-100 pb-2 w-full">
                Misa Harian
              </h3>
              {misaHarian.map((item) => (
                <div key={item.id} className="w-full">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm font-semibold rounded-full mb-4">
                    {item.day}
                  </span>
                  <div className="flex justify-center items-center gap-2 text-4xl font-extrabold text-slate-800 mb-2">
                    <Clock className="w-6 h-6 text-slate-400" />
                    {item.time}
                  </div>
                  <p className="text-slate-500 mt-2">{item.location}</p>
                </div>
              ))}
            </div>

            {/* Jumat Pertama */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center h-full">
              <h3 className="text-xl font-bold text-slate-700 mb-6 border-b-2 border-slate-100 pb-2 w-full">
                Misa Jumat Pertama
              </h3>
               {jumatPertama.map((item) => (
                <div key={item.id} className="w-full">
                   <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-sm font-semibold rounded-full mb-4">
                    Setiap {item.day}
                  </span>
                  <div className="flex justify-center items-center gap-2 text-4xl font-extrabold text-slate-800 mb-2">
                    <Clock className="w-6 h-6 text-amber-500" />
                    {item.time}
                  </div>
                   <p className="text-slate-500 mt-2">{item.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
