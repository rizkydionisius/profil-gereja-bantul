import React from "react";
import PageHeader from "@/components/PageHeader";
import { Target, Heart, Users, Lightbulb } from "lucide-react";

export default function VisiMisiPage() {
  const missions = [
    {
      icon: <Heart className="w-6 h-6 text-amber-600" />,
      text: "Mewujudkan persekutuan umat Allah yang guyub, rukun, dan bersaudara."
    },
    {
      icon: <Users className="w-6 h-6 text-amber-600" />,
      text: "Memberdayakan seluruh umat untuk terlibat aktif dalam pelayanan gereja dan masyarakat."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-600" />,
      text: "Menjadi saksi Kristus yang nyata di tengah masyarakat Bantul yang majemuk."
    },
    {
      icon: <Target className="w-6 h-6 text-amber-600" />,
      text: "Mengembangkan pastoral yang berbasis data dan menjawab kebutuhan riil umat."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <PageHeader 
        title="Visi & Misi" 
        subtitle="Arah Dasar Perjalanan Pastoral Paroki Santo Yakobus Bantul"
      />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl mt-12 space-y-12">
        {/* Visi Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 md:p-12 text-center border-t-4 border-amber-500">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Visi Paroki</h2>
          <blockquote className="text-xl md:text-2xl font-serif italic text-amber-700 max-w-3xl mx-auto leading-relaxed">
            "Terwujudnya Umat Allah yang Beriman Mendalam, Tangguh, dan Misioner dalam Membangun Peradaban Kasih."
          </blockquote>
        </section>

        {/* Misi Section */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Misi Paroki</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missions.map((misi, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="shrink-0 p-3 bg-amber-50 rounded-full">
                  {misi.icon}
                </div>
                <p className="text-slate-700 font-medium leading-relaxed mt-1">
                  {misi.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
