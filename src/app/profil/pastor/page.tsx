import React from "react";
import PageHeader from "@/components/PageHeader";

const pastores = [
  {
    name: "Romo Laurensius Tata Priyana, Pr.",
    role: "Pastor Kepala Paroki",
    image: "https://placehold.co/400x400"
  },
  {
    name: "Romo Antonius Widianto, Pr.",
    role: "Pastor Vikaris Parokial",
    image: "https://placehold.co/400x400"
  },
  {
    name: "Romo Benedictus Hari Juliawan, SJ.",
    role: "Pastor Bantuan",
    image: "https://placehold.co/400x400"
  },
  // Add more placeholders if needed
];

export default function PastorPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <PageHeader 
        title="Pastor Paroki" 
        subtitle="Gembala Umat Santo Yakobus Bantul"
      />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {pastores.map((pastor, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all group">
              <div className="aspect-square w-full overflow-hidden bg-slate-100">
                <img 
                  src={pastor.image} 
                  alt={pastor.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-slate-800 text-lg mb-1 group-hover:text-amber-600 transition-colors">
                  {pastor.name}
                </h3>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">
                  {pastor.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
