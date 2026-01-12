import React from "react";
import PageHeader from "@/components/PageHeader";

const pelayanan = [
  "Bidang Liturgi",
  "Bidang Pewartaan",
  "Bidang Pelayanan Kemasyarakatan",
  "Bidang Paguyuban dan Persaudaraan",
  "Bidang Sarana Prasarana",
  "Bidang Penelitian dan Pengembangan",
  "Tim Komsos",
  "Tim PSE",
];

const lingkungan = [
  { wilayah: "Wilayah 1 (Bantul Kota)", lingkungans: ["Lingkungan 1", "Lingkungan 2", "Lingkungan 3"] },
  { wilayah: "Wilayah 2 (Palbapang)", lingkungans: ["Lingkungan 4", "Lingkungan 5"] },
  { wilayah: "Wilayah 3 (Sewon)", lingkungans: ["Lingkungan 6", "Lingkungan 7", "Lingkungan 8"] },
  { wilayah: "Wilayah 4 (Bambanglipuro)", lingkungans: ["Lingkungan 9", "Lingkungan 10"] },
  // Add detailed data as needed
];

export default function LingkunganPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <PageHeader 
        title="Tim Pelayanan & Lingkungan" 
        subtitle="Struktur Organisasi dan Wilayah Pelayanan Gereja"
      />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Tim Pelayanan Section */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
              Tim Pelayanan Paroki
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 divide-y divide-slate-50">
              {pelayanan.map((item, idx) => (
                <div key={idx} className="p-4 hover:bg-amber-50 transition-colors flex items-center justify-between group cursor-pointer">
                  <span className="font-medium text-slate-700 group-hover:text-amber-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lingkungan Section */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
              Daftar Lingkungan
            </h2>
            <div className="space-y-4">
              {lingkungan.map((wilayah, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                  <div className="bg-slate-100 px-6 py-4 border-b border-slate-200">
                    <h3 className="font-bold text-slate-800">{wilayah.wilayah}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {wilayah.lingkungans.map((ling, lIdx) => (
                        <li key={lIdx} className="flex items-center gap-2 text-slate-600">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                          {ling}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
