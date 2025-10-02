import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import img_1 from "../assets/1.jpg";
import img_2 from "../assets/2.jpg";
import img_3 from "../assets/3.jpg";
import img_4 from "../assets/4.jpg";
import img_5 from "../assets/5.jpg";
import img_6 from "../assets/6.jpg";
import img_7 from "../assets/7.jpg";
import img_8 from "../assets/8.jpg";

const foods = [
  {
    img: img_1,
    title: "Pizza Margherita",
    desc: "Classic Italian pizza topped with fresh tomatoes, mozzarella, and basil.",
  },
  {
    img: img_2,
    title: "Cheeseburger",
    desc: "Juicy beef patty with cheddar cheese, lettuce, tomato, and pickles.",
  },
  {
    img: img_3,
    title: "Pasta Alfredo",
    desc: "Creamy Alfredo sauce tossed with fettuccine pasta and parmesan.",
  },
  {
    img: img_4,
    title: "Sushi Platter",
    desc: "Fresh salmon, tuna, and shrimp rolls served with wasabi and soy sauce.",
  },
  {
    img: img_5,
    title: "Ice Cream Sundae",
    desc: "Vanilla ice cream topped with chocolate sauce, nuts, and a cherry.",
  },
  {
    img: img_6,
    title: "Grilled Sandwich",
    desc: "Toasted bread filled with cheese, veggies, and tangy sauces.",
  },
  {
    img: img_7,
    title: "Fried Chicken",
    desc: "Crispy fried chicken served with fries and spicy dip.",
  },
  {
    img: img_8,
    title: "Pancakes",
    desc: "Fluffy pancakes with maple syrup and butter on top.",
  },
];

const FoodSlider = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-white text-3xl font-medium mb-6">Delicious Foods</h1>

      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        className="w-[80%] max-w-5xl"
      >


        
        {foods.map((food, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={food.img}
                alt={food.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h2 className="text-white font-bold text-lg">{food.title}</h2>
                <p className="text-gray-300 text-sm">{food.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FoodSlider;
