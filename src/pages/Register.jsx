import Header from "../components/Header";
import iconTambah from "../assets/images/icontambah.png";
import Footer from "../components/Footer";

const Register = () => {
  return (
    <>
      <Header />
      <section className="bg-cover bg-no-repeat bg-register-section sm:h-[500px] h-screen w-full">
        <div className="pt-64 sm:px-24 px-3 md:mb-20 mb-16">
          <div className="text-center w-full">
            <p className="text-white capitalize text-4xl font-bold">
              registrasi
            </p>
          </div>
          <div className="bg-white w-full flex flex-col rounded-lg mt-9 shadow">
            <div className="px-6 pt-8">
              <input
                type="text"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                value="Nama Perusahaan*"
                disabled
              />
            </div>
            <div className="px-6 py-5">
              <input
                type="text"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                value="Email*"
                disabled
              />
            </div>
            <div className="px-6 pb-5">
              <input
                type="text"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                value="Nomor Telepon*"
                disabled
              />
              <p className="text-sm text-[#828282] pt-2">Isi hanya angka</p>
            </div>
            <div className="px-6 pb-5">
              <textarea
                rows="4"
                type="text"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                value="Tentang Perusahaan (Max. 200 character)*"
                disabled
              />
              <div className="flex flex-col md:flex-row py-5 gap-4">
                <div className="md:w-1/2 bg-gray-100 flex justify-center flex-col items-center text-center py-20">
                  <img src={iconTambah} className="h-5 w-5" />
                  <p>Upload file logo*</p>
                  <input id="dropzone-file" type="file" className="hidden" />
                </div>
                <ol className="list-decimal px-6 w-full flex flex-col justify-center ">
                  <li className="text-black">Format file: .png, .jpg, .jpeg</li>
                  <li className="text-black">Maksimal ukuran file 200KB</li>
                  <li className="text-black">
                    Hindari penggunaan logo berwarna putih
                  </li>
                  <li className="text-black">Minimal lebar 300px</li>
                </ol>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  value="Profil Perusahaan atau Deck (opsional)"
                  disabled
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 px-4 text-sm font-medium h-full text-white bg-[#007CBD] rounded-lg border  hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Upload File
                </button>
              </div>
              <div>
                <p className="text-sm text-[#828282] pt-2 pb-5">
                  Format file .pdf , maksimal size 20mb
                </p>
              </div>
              <div>
                <input
                  type="text"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  value="Link website*"
                  disabled
                />
                <p className="text-sm text-[#828282] pt-2">
                  Website, Sosial Media, dll. Sertakan protokol URL (https://
                  atau http://).
                </p>
              </div>
              <div className="flex items-center pt-4 pb-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ml-2 text-sm  text-[#071424]">
                  Dengan menekan tombol &quot;Daftar&quot;, Saya menyetujui
                  syarat dan ketentuan yang berlaku
                </label>
              </div>
              <div className="flex justify-center">
                <button className="py-4 px-24 rounded-md bg-[#007CBD] text-white">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Register;
