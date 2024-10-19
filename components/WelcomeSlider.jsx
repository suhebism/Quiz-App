// components/Slider.js
"use client";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
const banners = [
  {
    id: 1,
    text: "Welcome to our website!",
    img: "/img/bird.png",
  },
  {
    id: 2,
    text: "Discover amazing features!",
    img: "/img/bird.png",
  },
  {
    id: 3,
    text: "Join us today!",
    img: "/img/bird.png",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const goToBanner = (index) => {
    setCurrentIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextBanner,
    onSwipedRight: prevBanner,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="relative w-full max-w-lg mx-auto px-3 flex flex-col gap-36 overflow-hidden" {...handlers}>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="min-w-full flex flex-colcursor-pointer select-none"
          >
            <div className="mt-20 h-20 w-full p-4 gap-6 rounded-lg flex flex-col items-center justify-between">
              <h1 className="text-black text-lg font-black">{banner.text}</h1>
              <Image width={100} height={100} src={banner.img} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToBanner(index)}
            className={`mx-1 w-1 h-1 rounded-full transition-all ease-in-out duration-300 ${
              index === currentIndex
                ? "min-w-[60px] h-1 bg-gray-300 transition-all ease-in-out duration-300"
                : "w-1 bg-gray-300 transition-all ease-in-out duration-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
