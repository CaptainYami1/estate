import Slick from "react-slick";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";

const Slider = (Slick as any).default || Slick;
export function LocationsCarousel() {
  const locations = [
    {
      city: "Lagos",
      properties: "35+ Properties",
      image: "https://images.unsplash.com/photo-1699363059417-aeda250390eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3dudG93biUyMGNpdHklMjBza3lsaW5lfGVufDF8fHx8MTc3NDcxOTgzMXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Premium beach houses and luxury apartments"
    },
    {
      city: "Ogun",
      properties: "80+ Properties",
      image: "https://images.unsplash.com/photo-1759256243437-9c8f7238c42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBtYW5zaW9uJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzc0NzE4NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Vineyard of nature estates houses and landed properties"
    },
    {
      city: "Ibadan",
      properties: "19+ Properties",
      image: "https://images.unsplash.com/photo-1764660732489-6d6e5d0673e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaGZyb250JTIwdmlsbGElMjBzdW5zZXR8ZW58MXx8fHwxNzc0NzE5ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Landed properties with nice cozy environments"
    }
  ];

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

function getSlidesToShow() {
  if (typeof window === "undefined") return 3; 
  const width = window.innerWidth;

  if (width < 640) return 1;  
  if (width < 1024) return 2;  
  return 3;               
}

 useEffect(() => {
   const handleResize = () => setSlidesToShow(getSlidesToShow());
   window.addEventListener("resize", handleResize);
   handleResize(); // run on mount
   return () => window.removeEventListener("resize", handleResize);
 }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
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
          centerMode: false,
        }
      }
    ]
  };

  return (
    <div>
      <Slider {...settings}>
        {locations.map((location, index) => (
          <div key={index} className="px-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative h-96 rounded-xl overflow-hidden group cursor-pointer"
            >
              <ImageWithFallback
                src={location.image}
                alt={location.city}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 mr-2 text-accent" />
                  <span className="text-accent font-semibold">{location.properties}</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">{location.city}</h3>
                <p className="text-gray-200 opacity-90">{location.description}</p>
                
                <button className="mt-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-2 rounded-lg transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
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
