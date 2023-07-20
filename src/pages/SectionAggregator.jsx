import React from "react";
import gambar1 from "../assets/images/gambar1.png";
import gambar2 from "../assets/images/gambar2.png";
import gambar3 from "../assets/images/gambar3.png";
import gambar4 from "../assets/images/gambar4.png";
import gambar5 from "../assets/images/gambar5.png";
import gambar6 from "../assets/images/gambar6.png";

const SectionAggregator = () => {
  return (
    <div className="w-full h-full py-14">
      <div className="px-4 lg:px-8">
        <h1 className="uppercase font-bold text-biru-muda text-3xl">
          latest update
        </h1>
      </div>
      <div className="grid md:grid-cols-3" id="aggregator">
        <div className="pt-10 flex flex-col px-4 lg:px-8 select-none hover:text-biru-muda group">
          <img
            src={gambar1}
            className="transition-transform transform origin-center scale-100 group-hover:scale-110 hover:scale-40"
            alt="Gambar 1"
          />
          <p className="">
            Alpha JWC Ventures Suntikkan Dana Segar kepada OnlinePajak dan Stoqo
          </p>
          <p className="font-thin text-[#7A7B7E]">1 hari yang lalu</p>
        </div>
        <div className="pt-10 px-4 flex flex-col lg:px-8 group select-none hover:text-biru-muda">
          <img
            src={gambar2}
            className="transition-transform transform origin-center scale-100 group-hover:scale-110 hover:scale-40"
            alt="Gambar 2"
          />
          <p>
            Startup Lifepack Rampungkan Pendanaan Seri A yang Dipimpin Golden
            Gate Ventures
          </p>
          <p className="font-thin text-[#7A7B7E]">1 hari yang lalu</p>
        </div>
        <div className="pt-10 px-4 flex flex-col lg:px-8 group select-none hover:text-biru-muda">
          <img
            src={gambar3}
            alt="Gambar 3"
            className="transition-transform transform origin-center scale-100 group-hover:scale-110 hover:scale-40"
          />
          <p>
            Angel Investor Adalah? Berikut Jenis, Contoh dan Cara Mendapatkannya
          </p>
          <p className="font-thin text-[#7A7B7E]">1 hari yang lalu</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3">
        <div className="pt-10 flex flex-col px-4 lg:px-8 hover:text-biru-muda group select-none">
          <img
            src={gambar4}
            alt="Gambar 4"
            className="transition-transform transform origin-center scale-100 group-hover:scale-110 hover:scale-40"
          />
          <p>
            Crowe Indonesia Gelar Diskusi terkait Valuasi Startup & Laporan ESG
          </p>
          <p className="font-thin text-[#7A7B7E]">1 hari yang lalu</p>
        </div>
        <div className="pt-10 px-4 flex flex-col lg:px-8 hover:text-biru-muda group select-none">
          <img
            src={gambar5}
            alt="Gambar 5"
            className="transition-transform transform origin-center scale-100 group-hover:scale-110 hover:scale-40"
          />
          <p>Startup Fresh Factory Bangun Ratusan Gudang Dingin di 103 Kota</p>
          <p className="font-thin text-[#7A7B7E]">1 hari yang lalu</p>
        </div>
        <div className="pt-10 px-4 flex flex-col lg:px-8 hover:text-biru-muda group select-none">
          <img
            src={gambar6}
            alt="Gambar 6"
            className="transition-transform transform origin-center scale-100 group-hover:scale-110 hover:scale-40"
          />
          <p>Startup Pertanian RI Dapat Pendanaan Awal, Totalnya Rp 90 M</p>
          <p className="font-thin text-[#7A7B7E]">1 hari yang lalu</p>
        </div>
      </div>
    </div>
  );
};

export default SectionAggregator;
