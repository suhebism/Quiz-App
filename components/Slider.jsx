// components/Slider.js
"use client";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const banners = [
  {
    id: 1,
    text: "Welcome to our website!",
    title: "PLAYER VS PLAYER",
    desc: "Compete with other aspirants in your state",
    desc2:
      "Compete with other aspirants in your state, When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    text: "Discover amazing features!",
    title: "PLAYER VS PLAYER",
    desc: "Compete with other aspirants in your state",
    desc2:
      "Compete with other aspirants in your state, When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    text: "Join us today!",
    title: "PLAYER VS PLAYER",
    desc: "Compete with other aspirants in your state",
    desc2:
      "Compete with other aspirants in your state, When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
    <div className="relative w-full max-w-lg mx-auto" {...handlers}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="min-w-full flex flex-col items-start justify-start text-white px-5 gap-3 cursor-pointer select-none"
            >
              <h2 className="text-sm font-bold">{banner.text}</h2>
              <div className="bg-[#BAD8F4] h-20 w-full p-4 rounded-lg flex items-center justify-between">
                <div className="">
                  <h1 className="text-black text-lg font-black">{banner.title}</h1>
                  <p className="font-thin text-black text-xs">{banner.desc}</p>
                </div>
                <div className="text-2xl text-white bg-black w-16 h-12 flex items-center justify-center rounded-full font-black">
                  Go
                </div>
              </div>
              <p className="font-thin text-xs">{banner.desc2}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToBanner(index)}
            className={`mx-1 w-[6px] h-1 rounded-full ${
              index === currentIndex
                ? " w-[44px] h-1 bg-gray-300"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
