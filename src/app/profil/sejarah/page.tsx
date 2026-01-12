import React from "react";
import PageHeader from "@/components/PageHeader";

export default function SejarahPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <PageHeader 
        title="Sejarah Paroki" 
        subtitle="Perjalanan Iman Umat Santo Yakobus Bantul dari Masa ke Masa"
      />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl mt-12">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="prose prose-lg prose-slate text-slate-700">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">Awal Mula</h3>
              <p>
                Gereja Katolik Santo Yakobus Bantul memiliki sejarah panjang yang tidak terlepas dari perkembangan misi Katolik di wilayah Yogyakarta bagian selatan.
                Benih iman mulai tumbuh seiring dengan kehadiran para misionaris awal yang membawa kabar gembira Injil.
              </p>
              <p>
                Pada awalnya, pelayanan umat dilakukan di rumah-rumah warga secara sederhana. 
                Semangat persaudaraan yang kuat menjadi pondasi utama terbentuknya komunitas basis yang solid.
              </p>

              <h3 className="text-2xl font-bold text-amber-600 mb-4 mt-8">Pembangunan Gereja</h3>
              <p>
                Seiring bertambahnya jumlah umat, kebutuhan akan tempat ibadah yang lebih layak menjadi tak terelakkan. 
                Dengan semangat gotong royong, umat mulai mengumpulkan dana dan tenaga untuk membangun gedung gereja pertama.
              </p>
              <p>
                Gereja Santo Yakobus Bantul akhirnya diberkati dan diresmikan sebagai paroki mandiri, 
                menjadi tonggak sejarah pelayanan pastoral yang lebih terorganisir di wilayah Bantul.
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative md:sticky md:top-24">
                <img 
                  src="https://placehold.co/800x600" 
                  alt="Sejarah Gereja Lama" 
                  className="rounded-lg shadow-md w-full object-cover aspect-[4/3] mb-4"
                />
                <p className="text-sm text-center text-slate-500 italic">
                  Gedung Gereja pada masa awal pembangunan.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
