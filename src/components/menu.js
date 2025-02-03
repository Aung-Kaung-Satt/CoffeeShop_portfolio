import React, { useRef } from "react";
import Card from "./card";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./slidestyle";
import { Navigation, Pagination, Mousewheel, Autoplay } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/scrollbar";
// import "swiper/css/autoplay";
// import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const coffeeMenu = [
  {
    key: 1,
    type: "Espresso",
    price: 2.5,
    srcpic: "../../images/espresso.jpg",
  },
  {
    key: 2,
    type: "Americano",
    price: 2.75,
    srcpic: "../../images/americano.webp",
  },
  {
    key: 3,
    type: "Latte",
    price: 3.5,
    srcpic: "../../images/latte.jpeg",
  },
  {
    key: 4,
    type: "Cappuccino",
    price: 3.75,
    srcpic: "../../images/cappuccino.jpeg",
  },
  {
    key: 5,
    type: "Mocha",
    price: 4.0,
    srcpic: "../../images/mocha.png",
  },
  {
    key: 6,
    type: "Macchiato",
    price: 3.25,
    srcpic: "../../images/Macchiato.avif",
  },
];

const cards = coffeeMenu.map((item, index) => (
  <Card
    key={item.key}
    type={item.type}
    price={item.price}
    srcpic={item.srcpic}
  />
));

const SliderCards = coffeeMenu.map((item, index) => (
  <SwiperSlide key={item.key}>
    <Slide coffeeMenu={item} />
  </SwiperSlide>
));

const Menu = () => {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div className="min-h-screen mt-5">
      <h1 className="text-5xl font1 text-[#894D47] leading-normal text-center">
        Coffee Menu
      </h1>

      <Swiper
      ref={swiperRef}
        className="w-5/6 h-2/5 mx-auto my-6 rounded-md"
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // Continue autoplay after user interaction
          pauseOnMouseEnter: true, 
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        modules={[Navigation, Pagination, Mousewheel,Autoplay]}
      >
        {SliderCards}
      </Swiper>

      <div className="flex flex-wrap justify-center gap-10">{cards}</div>
    </div>
  );
};

export default Menu;
