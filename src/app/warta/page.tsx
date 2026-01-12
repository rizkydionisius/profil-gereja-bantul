import React from "react";
import PageHeader from "@/components/PageHeader";
import { wartaDummy } from "@/lib/data";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WartaPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <PageHeader 
        title="Warta Paroki" 
        subtitle="Berita, Pengumuman, dan Informasi Terkini"
      />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wartaDummy.map((item) => (
            <article key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="h-48 overflow-hidden bg-slate-200">
                <img 
                  src={`https://placehold.co/600x400?text=Warta+${item.id}`} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-amber-600 font-medium mb-3">
                  <Calendar size={16} />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 hover:text-amber-600 transition-colors cursor-pointer">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <Link 
                    href={`#`} 
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-amber-600 transition-colors"
                  >
                    Baca Selengkapnya
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
