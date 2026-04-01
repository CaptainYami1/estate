import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Slick from "react-slick";
import hero1 from "../../assets/hero-carou1.jpg";
import hero2 from "../../assets/heroCarou2.jpg";
import hero3 from "../../assets/heroCarou3.jpg";
import { Link } from "react-router-dom";

interface ArrowProps {
  onClick?: () => void;
}
const Slider = (Slick as any).default || Slick;
function PrevArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 hidden md:block -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
    >
      <ChevronLeft className="h-6 w-6 text-white" />
    </button>
  );
}

function NextArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
    >
      <ChevronRight className="h-6 w-6 text-white" />
    </button>
  );
}

export function HeroCarousel() {
  const slides = [
    {
      image: hero1,
      title: "Luxury Modern Estates",
      subtitle: "Discover Your Dream Home",
      description: "Explore our exclusive collection of premium properties",
    },
    {
      image: hero2,
      title: "Elegant Penthouses",
      subtitle: "Experience Urban Luxury",
      description: "Sophisticated living spaces in prime locations",
    },
    {
      image: hero3,
      title: "Beachfront Paradise",
      subtitle: "Coastal Living Redefined",
      description: "Wake up to breathtaking ocean views every day",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <div className="absolute inset-0">
              <ImageWithFallback
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
            </div>

            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-2xl"
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-accent text-lg mb-4 uppercase tracking-wider"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-xl text-gray-200 mb-8"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Link to="/listings">
                      <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105">
                        Explore Properties
                      </button>
                    </Link>
                    <Link to="/contact">
                      <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105">
                        Contact Us
                      </button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
