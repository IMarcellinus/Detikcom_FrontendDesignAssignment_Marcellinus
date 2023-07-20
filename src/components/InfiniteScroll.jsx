import { useState, useEffect, useRef } from "react";
import ImageItem from "../components/ImageItem";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.png";
import logo7 from "../assets/images/logo7.png";
import logo8 from "../assets/images/logo8.png";
import "../assets/css/InfiniteScroll.css";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const InfiniteScroll = () => {
  const containerRef = useRef(null);
  const [loadedLogos, setLoadedLogos] = useState([]);
  const logoWidth = 100; // Ganti sesuai dengan lebar gambar logo

  useEffect(() => {
    // Tambahkan kode untuk gerakan otomatis ke kiri setiap beberapa detik
    const container = containerRef.current;
    const scrollStep = 0.5;
    const scrollingInterval = 1;
    let scrollAmount = 0;
    let scrollInterval = null;

    const startAutoScroll = () => {
      scrollAmount += scrollStep;
      container.scrollLeft += scrollStep;

      if (scrollAmount >= logoWidth) {
        scrollAmount = 0;
        container.appendChild(container.firstElementChild);
        container.scrollLeft -= logoWidth;
      }
    };

    const startScrolling = () => {
      if (!scrollInterval) {
        scrollInterval = setInterval(startAutoScroll, scrollingInterval);
      }
    };

    const stopScrolling = () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
        scrollInterval = null;
      }
    };

    // container.addEventListener("mouseenter", stopScrolling);
    container.addEventListener("mouseleave", startScrolling);

    startScrolling();

    // Bersihkan interval ketika komponen dibongkar
    return () => {
      stopScrolling();
    };
  }, []);

  useEffect(() => {
    // Update logo list ketika komponen pertama kali dimuat
    updateLoadedLogos(0);
  }, []);

  const updateLoadedLogos = (startIndex) => {
    const newLogos = [...logos, ...logos.slice(0, startIndex)];
    setLoadedLogos(newLogos);
  };

  return (
    <div className="w-full h-26 overflow-hidden">
      <div
        ref={containerRef}
        className="flex overflow-hidden w-full h-auto px-24"
      >
        {loadedLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-26 h-26 mx-2 object-contain"
          />
        ))}
      </div>
    </div>
  );
};


export default InfiniteScroll;
