
const Section = () => {
  return (
    <section className="bg-cover bg-no-repeat bg-hero-section h-screen w-full">
      <div className="px-8 mx-auto max-w-screen-xl py-44 lg:py-64 md:text-center">
        <p className="mb-4 text-2xl font-semibold text-white lg:text-xl sm:px-16 lg:px-48">
          Detikfinance Business Plan Competition 2023
        </p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl uppercase sm:text-center">
          empowering indonesia startup
        </h1>
        <p className="text-white font-semibold sm:text-center md:max-w-4xl md:mx-auto">
          Detikfinance memberikan ruang kepada para startup di Indonesia untuk
          menunjukkan, serta mempromosikan brand mereka untuk mendapatkan
          perhatian dari venture capital atau angel investor
        </p>
        <div className="flex space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 py-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#3EB7DD] hover:bg-cyan-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Dapatkan startup kamu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section;
