import iconpensil from "../assets/images/iconpensil.png";
import iconcentang from "../assets/images/iconcentang.png";
import iconpresentasi from "../assets/images/iconpresentasi.png";

const SectionMekanisme = () => {
  return (
    <section className="bg-cover bg-no-repeat bg-mekanisme-section min-h-screen w-full flex justify-center items-center" id="mechanism">
      <div className="lg:px-44 w-full h-auto px-2">
        <h1 className="text-white text-4xl capitalize font-bold py-8">
          Mekanisme
        </h1>
        <div className="rounded-lg border w-full flex p-6 lg:py-8 lg:px-8 bg-white mb-6 flex-col lg:flex-row">
          <img src={iconpensil} alt="icon pensil" className="h-14 w-14" />
          <div className="w-full">
            <div className="flex justify-between w-full flex-col lg:flex-row">
              <p className="text-biru-muda lg:pl-8 text-xl font-bold pt-7 lg:pt-0 pb-2">
                Registrasi
              </p>
              <p className="text-biru-muda pb-2">1 - 30 Januari 2023</p>
            </div>
            <ol className="list-decimal list-outside lg:pl-12 mt-2 pl-4">
              <li className="text-black">
                Calon peserta diminta untuk mengisi formulir pendaftaran online
                yang berisi informasi pribadi, kontak, dan rincian tim pada{" "}
                <span className="text-biru">link berikut</span>
              </li>
              <li className="text-black">
                Selain itu, peserta juga diharapkan mengunggah ringkasan rencana
                bisnis mereka yang mencakup visi, misi, strategi, dan analisis
                pasar
              </li>
            </ol>
          </div>
        </div>
        <div className="rounded-lg border w-full flex p-6 lg:py-8 lg:px-8 bg-white mb-6 flex-col lg:flex-row">
          <img src={iconcentang} alt="icon pensil" className="h-14 w-14" />
          <div className="w-full">
            <div className="flex justify-between w-full flex-col lg:flex-row">
              <p className="text-biru-muda lg:pl-8 text-xl font-bold pt-7 lg:pt-0 pb-2 capitalize">
                seleksi peserta
              </p>
              <p className="text-biru-muda pb-2">1 - 7 Februari 2023</p>
            </div>
            <ol className="list-decimal list-outside lg:pl-12 mt-2 pl-4">
              <li className="text-black">
                Tim seleksi akan meninjau setiap pendaftaran dan mengevaluasi
                kualitas dan kelayakan bisnis plan yang diajukan
              </li>
              <li className="text-black">
                Kriteria evaluasi dapat mencakup inovasi, potensi pertumbuhan,
                kelayakan keuangan, dan kejelasan presentasi
              </li>
              <li className="text-black">
                Peserta yang memenuhi persyaratan seleksi akan dipilih sebagai
                finalis dan berhak melanjutkan ke tahap berikutnya
              </li>
            </ol>
          </div>
        </div>
        <div className="rounded-lg border w-full flex p-6 lg:py-8 lg:px-8 bg-white mb-6 flex-col lg:flex-row">
          <img src={iconpresentasi} alt="icon pensil" className="h-14 w-14" />
          <div className="w-full">
            <div className="flex justify-between w-full flex-col lg:flex-row">
              <p className="text-biru-muda lg:pl-8 text-xl font-bold pt-7 lg:pt-0 pb-2 capitalize">
                pengumuman peserta terpilih
              </p>
              <p className="text-biru-muda pb-2">8 Februari 2023</p>
            </div>
            <ol className="list-decimal list-outside lg:pl-12 mt-2 pl-4">
              <li className="text-black">
                Pengumuman finalis akan dilakukan melalui email
              </li>
              <li className="text-black">
                Finalis akan diinformasikan tentang jadwal presentasi dan
                persiapan yang diperlukan
              </li>
              <li className="text-black">
                Pada acara pengumuman pemenang, setiap finalis akan
                mempresentasikan rencana bisnis mereka di hadapan panel juri
              </li>
              <li className="text-black">
                Setelah presentasi, panel juri akan melakukan evaluasi dan
                mengumumkan pemenang kompetisi business plan
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMekanisme;
