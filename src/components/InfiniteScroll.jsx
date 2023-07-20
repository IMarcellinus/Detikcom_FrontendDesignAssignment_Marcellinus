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

const InfiniteScroll = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const scrollStep = 6; // Percepat scroll dengan menurunkan nilai scrollStep
    const scrollInterval = 10; // Percepat animasi dengan menurunkan nilai scrollInterval
    let scrollAmount = 0;
    let scrollTimer;

    const startScroll = () => {
      scrollTimer = setInterval(() => {
        scrollContainer.scrollLeft += scrollStep;
        scrollAmount += scrollStep;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          clearInterval(scrollTimer);
          scrollAmount = 0;
          setTimeout(startScroll, 2000); // Mengatur jeda waktu sebelum animasi scroll dimulai lagi
        }
      }, scrollInterval);
    };

    if (scrollContainer) {
      startScroll();
    }

    return () => {
      clearInterval(scrollTimer);
    };
  }, []);

  return (
    <div className="w-full h-64 overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="flex h-full overflow-x-hidden scrollbar-none"
        style={{
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
        }}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-none w-64 h-64 scroll-snap-align-start mx-2 rounded-lg shadow-md"
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
