import React from 'react';

export const DuasManual = () => {
  return (
    <div className="max-w-[650px] mx-auto p-[30px] border-2 border-[#eee] rounded-[15px] bg-white text-[#333] font-sans leading-relaxed">
      <h2 className="text-[#2c3e50] text-center border-b-2 border-[#f1c40f] pb-[10px] text-2xl font-bold mb-4 uppercase tracking-wider">
        🌿 Panduan Jar of Duas
      </h2>

      <div className="bg-[#fcfcfc] p-[20px] rounded-[10px] border border-dashed border-[#ccc] mb-[25px] text-left">
        <h3 className="text-[#2980b9] text-xl font-semibold mb-4 border-l-[5px] border-[#2980b9] pl-[10px] mt-[25px] first:mt-0">
          Cara Membaca Slip Doa
        </h3>
        <p className="mb-2">Gunakan langkah-langkah berikut untuk menemukan ketenangan dan koneksi dengan Allah:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Pilih:</strong> Ambil satu slip kertas dari toples yang warnanya sesuai dengan perasaan atau suasana hati Anda saat ini.</li>
          <li><strong>Buka:</strong> Buka lipatan kertas satu kali (seperti membuka buku kecil).</li>
          <li><strong>Sisi Kanan:</strong> Fokus pada bagian ini untuk membaca <strong>Teks Arab</strong> dan <strong>Transliterasi Inggris</strong> guna membantu pelafalan yang benar.</li>
          <li><strong>Sisi Kiri:</strong> Baca bagian ini untuk meresapi makna doa melalui <strong>Terjemahan Bahasa Indonesia</strong> dan <strong>Bahasa Inggris</strong>.</li>
        </ol>
      </div>

      <h3 className="text-[#2980b9] text-xl font-semibold mb-4 border-l-[5px] border-[#2980b9] pl-[10px] text-left">
        Kategori Warna Doa
      </h3>
      
      <div className="overflow-x-auto bg-white">
        <table className="w-full border-collapse mt-5 bg-white text-left text-sm sm:text-base">
          <thead>
            <tr>
              <th className="p-[15px] border-b border-[#eee] bg-[#f8f9fa] text-[#2c3e50] font-bold">Warna</th>
              <th className="p-[15px] border-b border-[#eee] bg-[#f8f9fa] text-[#2c3e50] font-bold">Suasana Hati</th>
              <th className="p-[15px] border-b border-[#eee] bg-[#f8f9fa] text-[#2c3e50] font-bold">Tujuan Doa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-[15px] border-b border-[#eee]">
                <span className="inline-block w-[20px] h-[20px] align-middle rounded-[4px] mr-[12px] border border-[#ddd]" style={{ backgroundColor: '#ffc0cb' }}></span>
                <strong>Pink</strong>
              </td>
              <td className="p-[15px] border-b border-[#eee]">Senang / Bahagia</td>
              <td className="p-[15px] border-b border-[#eee]">Untuk merayakan kegembiraan dan berbagi kebahagiaan dengan Allah.</td>
            </tr>
            <tr>
              <td className="p-[15px] border-b border-[#eee]">
                <span className="inline-block w-[20px] h-[20px] align-middle rounded-[4px] mr-[12px] border border-[#ddd]" style={{ backgroundColor: '#add8e6' }}></span>
                <strong>Biru</strong>
              </td>
              <td className="p-[15px] border-b border-[#eee]">Sedih</td>
              <td className="p-[15px] border-b border-[#eee]">Untuk menemukan penghiburan dan kesembuhan di saat berduka.</td>
            </tr>
            <tr>
              <td className="p-[15px] border-b border-[#eee]">
                <span className="inline-block w-[20px] h-[20px] align-middle rounded-[4px] mr-[12px] border border-[#ddd]" style={{ backgroundColor: '#e5ccac' }}></span>
                <strong>Cokelat Muda</strong>
              </td>
              <td className="p-[15px] border-b border-[#eee]">Bersyukur</td>
              <td className="p-[15px] border-b border-[#eee]">Untuk melatih rasa syukur atas segala nikmat yang telah diterima.</td>
            </tr>
            <tr>
              <td className="p-[15px] border-b border-[#eee]">
                <span className="inline-block w-[20px] h-[20px] align-middle rounded-[4px] mr-[12px] border border-[#ddd]" style={{ backgroundColor: '#e0b0ff' }}></span>
                <strong>Ungu</strong>
              </td>
              <td className="p-[15px] border-b border-[#eee]">Cemas / Khawatir</td>
              <td className="p-[15px] border-b border-[#eee]">Untuk menenangkan hati dan pikiran dari rasa takut atau gelisah.</td>
            </tr>
            <tr>
              <td className="p-[15px] border-b border-[#eee]">
                <span className="inline-block w-[20px] h-[20px] align-middle rounded-[4px] mr-[12px] border border-[#ddd]" style={{ backgroundColor: '#90ee90' }}></span>
                <strong>Hijau</strong>
              </td>
              <td className="p-[15px] border-b border-[#eee]">Marah / Sepi</td>
              <td className="p-[15px] border-b border-[#eee]">Untuk meredam amarah atau mencari kedekatan Allah saat merasa sendiri.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center italic mt-[40px] text-[#7f8c8d] text-[0.9em]">
        <p>&quot;Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram.&quot; (Ar-Ra&apos;d: 28)</p>
      </div>
    </div>
  );
};