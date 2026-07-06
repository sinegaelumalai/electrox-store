import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import watch from "../assets/watch.png";
import earbuds from "../assets/earbuds.webp";
import speaker from "../assets/speaker.png";
import powerbank from "../assets/powerbank.png";

const slides = [
  {
    title: "Premium Smart Watch",
    subtitle: "Experience Next Generation Technology",
    image: watch,
  },
  {
    title: "Wireless Earbuds",
    subtitle: "Crystal Clear Sound Anytime",
    image: earbuds,
  },
  {
    title: "Bluetooth Speaker",
    subtitle: "Feel Every Beat",
    image: speaker,
  },
  {
    title: "Fast Charging Power Bank",
    subtitle: "Power That Never Stops",
    image: powerbank,
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      className="rounded-3xl overflow-hidden"
    >
      {slides.map((item, index) => (
        <SwiperSlide key={index}>
          <section className="bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-300">

            <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

              <div className="lg:w-1/2">

                <p className="text-red-500 uppercase tracking-widest font-semibold mb-4">
                  New Collection 2026
                </p>

                <h1 className="text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight">
                  {item.title}
                </h1>

                <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg leading-8">
                  {item.subtitle}
                </p>

                <button className="mt-8 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition">
                  Shop Now
                </button>

              </div>

              <div className="lg:w-1/2 flex justify-center">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[380px] hover:scale-110 transition duration-500"
                />

              </div>

            </div>

          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;