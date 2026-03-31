import Slick from "react-slick";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

const Slider = (Slick as any).default || Slick;
export function LocationsCarousel() {
  const locations = [
    {
      city: "Banana Island",
      properties: "50+ Properties",
      image: "https://images.unsplash.com/photo-1699363059417-aeda250390eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3dudG93biUyMGNpdHklMjBza3lsaW5lfGVufDF8fHx8MTc3NDcxOTgzMXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Premium Manhattan penthouses and luxury apartments"
    },
    {
      city: "Abuja",
      properties: "80+ Properties",
      image: "https://images.unsplash.com/photo-1759256243437-9c8f7238c42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBtYW5zaW9uJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzc0NzE4NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Tinubu estates and Wike Hills mansions"
    },
    {
      city: "Lagos",
      properties: "190+ Properties",
      image: "https://images.unsplash.com/photo-1764660732489-6d6e5d0673e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaGZyb250JTIwdmlsbGElMjBzdW5zZXR8ZW58MXx8fHwxNzc0NzE5ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Beachfront villas and oceanview condos"
    },
    // {
    //   city: "Portharcourt",
    //   properties: "220+ Properties",
    //   image: "https://images.unsplash.com/photo-1634412114581-6376e49ef8e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3NDYxNjQyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    //   description: "Ultra-luxury skyscraper residences"
    // }
  ];

   const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className="relative px-2 sm:px-4">
      <Slider {...settings}>
        {locations.map((location, index) => (
          <div key={index} className="px-2 sm:px-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative h-80 sm:h-96 rounded-xl overflow-hidden group cursor-pointer"
            >
              <ImageWithFallback
                src={location.image}
                alt={location.city}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-accent" />
                  <span className="text-accent font-semibold text-sm sm:text-base">{location.properties}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">{location.city}</h3>
                <p className="text-gray-200 opacity-90 text-sm sm:text-base">{location.description}</p>
                
                <button className="mt-3 sm:mt-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-lg transition-all text-sm sm:text-base opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                  Explore Properties
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}