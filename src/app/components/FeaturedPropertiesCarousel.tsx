import Slick from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { PropertyCard } from "./PropertyCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import pent from "../../assets/pent.jpg";
import villa1 from "../../assets/villa1.jpg";
import apart from "../../assets/apart1.jpg";
import mans from "../../assets/hero-carou1.jpg";
import { useEffect, useState } from "react";
import { s } from "motion/react-client";

interface ArrowProps {
  onClick?: () => void;
}
const Slider = (Slick as any).default || Slick;
function PrevArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute -left-5 top-1/2 hidden md:block  -translate-y-1/2 z-10 bg-primary hover:bg-primary/90 p-3 rounded-full transition-all shadow-lg"
    >
      <ChevronLeft className="h-5 w-5 text-primary-foreground" />
    </button>
  );
}

function NextArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute -right-5 top-1/2 hidden md:block -translate-y-1/2 z-10 bg-primary hover:bg-primary/90 p-3 rounded-full transition-all shadow-lg"
    >
      <ChevronRight className="h-5 w-5 text-primary-foreground" />
    </button>
  );
}

export function FeaturedPropertiesCarousel() {
  const properties = [
    {
      id: 1,
      image: villa1,
      title: "Modern Luxury Villa",
      location: "Lekki Phase 1, LG",
      price: "₦8,500,000",
      beds: 6,
      baths: 7,
      sqft: 8500,
      type: "For Sale"
    },
    {
      id: 2,
      image: pent,
      title: "Downtown Penthouse",
      location: "Marina, LG",
      price: "₦12,000,000",
      beds: 4,
      baths: 5,
      sqft: 5200,
      type: "For Sale"
    },
    {
      id: 3,
      image: mans,
      title: "RedBrick Mansion",
      location: "Oluyole, IB",
      price: "₦15,750,000",
      beds: 5,
      baths: 6,
      sqft: 7200,
      type: "For Sale"
    },
    {
      id: 4,
      image: apart,
      title: "Contemporary Loft",
      location: "Garki, Abuja",
      price: "₦3,200,000",
      beds: 3,
      baths: 3,
      sqft: 2800,
      type: "For Rent"
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
  speed: 800,
  slidesToShow: slidesToShow,
  slidesToScroll: 1, 
  autoplay: true,
  autoplaySpeed: 6000,
  pauseOnHover: true,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //     }
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 2,
  //       arrows: false,
  //       centerPadding: "20px",
  //     }
  //   },
  //   {
  //     breakpoint: 525,
  //     settings: {
  //       slidesToShow: 1,
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: "20px",
  //     }
  //   }
  // ]
};

  return (
    <div className="relative w-full max-w-full overflow-hidden px-4 sm:px-8 md:px-16">
      <Slider {...settings} className="property-slider">
        {properties.map((property) => (
          <div key={property.id} className="outline-none px-2 py-4 flex">
            <PropertyCard {...property} />
          </div>
        ))}
      </Slider>
    </div>
  );
}