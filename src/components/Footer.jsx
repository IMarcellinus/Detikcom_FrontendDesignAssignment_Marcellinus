
const Footer = () => {
  return (
    <div className="w-full bg-[#007CBD]">
      <div className="flex-items-center text-white py-7 md:px-12 px-9">
        <p>
          <b>detik</b>finance
        </p>
        <p className="uppercase font-bold md:text-2xl">business plan</p>
        <p className="tracking-widest">competition 2023</p>
      </div>
      <div className="text-white px-9 sm:px-12 pt-7 pb-5 lg:flex lg:justify-between">
        <div className="lg:w-2/2 xl:w-2/3">
          <p className="">
            Detikfinance memberikan ruang kepada para startup di Indonesia untuk
            menunjukkan, serta mempromosikan brand mereka untuk mendapatkan
            perhatian dari venture capital atau angel investor
          </p>
        </div>
        <div className="text-white pb-5 pt-5 flex flex-row gap-7 lg:w/1-2">
          {/* Logo Twitter */}
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M20.4691 1.15674L20.968 1.12366C20.9547 0.92309 20.8226 0.749983 20.6327 0.684238C20.4427 0.618493 20.2319 0.672896 20.0974 0.822335L20.4691 1.15674ZM19.5428 5.38374C19.5428 5.1076 19.3189 4.88374 19.0428 4.88374C18.7666 4.88374 18.5428 5.1076 18.5428 5.38374H19.5428ZM10.5 6.65674V7.15674H11V6.65674H10.5ZM1.92637 1.15674L2.39462 0.981414C2.32485 0.795078 2.15124 0.667842 1.95255 0.657424C1.75385 0.647006 1.56789 0.755389 1.47902 0.933408L1.92637 1.15674ZM7.5 14.1567L7.85383 14.51C7.97619 14.3875 8.02642 14.2103 7.98661 14.0418C7.94679 13.8732 7.8226 13.7373 7.65833 13.6825L7.5 14.1567ZM0.5 16.871V16.371C0.279732 16.371 0.0854109 16.5152 0.0215057 16.726C-0.0423996 16.9368 0.0391667 17.1645 0.222353 17.2869L0.5 16.871ZM17.9515 2.54728L17.5806 2.88262L17.7608 3.08187L18.0264 3.04164L17.9515 2.54728ZM19.9702 1.18982C20.0446 2.31173 19.9783 3.02069 19.7838 3.56917C19.5929 4.10721 19.2609 4.54093 18.6968 5.08144L19.3887 5.80346C20.0033 5.21454 20.4605 4.65244 20.7262 3.9035C20.9882 3.16501 21.0458 2.29583 20.968 1.12366L19.9702 1.18982ZM19.5428 6.42458V5.44245H18.5428V6.42458H19.5428ZM19.5428 5.44245V5.38374H18.5428V5.44245H19.5428ZM10 5.65674V6.65674H11V5.65674H10ZM14.8223 0.656738C12.125 0.656738 10 3.00739 10 5.65674H11C11 3.50737 12.7282 1.65674 14.8223 1.65674V0.656738ZM18.5428 6.42458C18.5428 12.7167 13.2624 18.1567 7 18.1567V19.1567C13.8342 19.1567 19.5428 13.2493 19.5428 6.42458H18.5428ZM1.45811 1.33206C2.22305 3.37504 5.10161 7.15674 10.5 7.15674V6.15674C5.62855 6.15674 3.05605 2.74796 2.39462 0.981414L1.45811 1.33206ZM1.47902 0.933408C0.00554863 3.8849 -0.242404 6.75389 0.775073 9.1888C1.79256 11.6237 4.03467 13.527 7.34167 14.631L7.65833 13.6825C4.54668 12.6436 2.57561 10.904 1.69776 8.80324C0.819895 6.70244 0.994452 4.14287 2.37372 1.38007L1.47902 0.933408ZM7.14617 13.8035C6.26646 14.6845 3.76165 16.371 0.5 16.371V17.371C4.08491 17.371 6.83174 15.5337 7.85383 14.51L7.14617 13.8035ZM18.3224 2.21194C17.4594 1.25758 16.2107 0.656738 14.8223 0.656738V1.65674C15.916 1.65674 16.8991 2.12888 17.5806 2.88262L18.3224 2.21194ZM18.0264 3.04164C19.0619 2.88482 20.0775 2.33966 20.8409 1.49114L20.0974 0.822335C19.4829 1.50545 18.6743 1.93211 17.8766 2.05292L18.0264 3.04164ZM0.222353 17.2869C2.47016 18.7877 4.63313 19.1567 7 19.1567V18.1567C4.75713 18.1567 2.80895 17.8115 0.777647 16.4552L0.222353 17.2869Z"
              fill="#F2F2F2"
            />
          </svg>
          {/* Logo Instagram */}
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M16 5.65674H17M4.5 0.656738H16.5C18.7091 0.656738 20.5 2.4476 20.5 4.65674V16.6567C20.5 18.8659 18.7091 20.6567 16.5 20.6567H4.5C2.29086 20.6567 0.5 18.8659 0.5 16.6567V4.65674C0.5 2.4476 2.29086 0.656738 4.5 0.656738ZM10.5 14.6567C8.29086 14.6567 6.5 12.8659 6.5 10.6567C6.5 8.4476 8.29086 6.65674 10.5 6.65674C12.7091 6.65674 14.5 8.4476 14.5 10.6567C14.5 12.8659 12.7091 14.6567 10.5 14.6567Z"
              stroke="#F2F2F2"
            />
          </svg>
          {/* Logo Facebook */}
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M10.5 20.6567C4.97715 20.6567 0.5 16.1796 0.5 10.6567C0.5 5.13389 4.97715 0.656738 10.5 0.656738C16.0228 0.656738 20.5 5.13389 20.5 10.6567C20.5 16.1796 16.0228 20.6567 10.5 20.6567ZM10.5 20.6567V8.65674C10.5 7.55217 11.3954 6.65674 12.5 6.65674H14M7 12.6567H14"
              stroke="#F2F2F2"
            />
          </svg>
        </div>
      </div>
      <div className="px-9 pb-5 sm:px-12">
        <hr className="border border-white" />
      </div>
      <div className="pb-7 px-9 text-white text-sm sm:px-12">
        <p>© 2023 Detikcom. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
