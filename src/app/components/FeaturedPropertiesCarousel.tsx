import Slick from "react-slick";
import { PropertyCard } from "./PropertyCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import pent from "../../assets/pent.jpg";
import villa1 from "../../assets/villa1.jpg";
import apart from "../../assets/apart1.jpg";
import mans from "../../assets/hero-carou1.jpg";

interface ArrowProps {
  onClick?: () => void;
}
const Slider = (Slick as any).default || Slick;
function PrevArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-primary hover:bg-primary/90 p-3 rounded-full transition-all shadow-lg"
    >
      <ChevronLeft className="h-5 w-5 text-primary-foreground" />
    </button>
  );
}

function NextArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-primary hover:bg-primary/90 p-3 rounded-full transition-all shadow-lg"
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="px-12 featured-carousel-wrapper">
      <Slider {...settings} className="bottom-0!">
        {properties.map((property) => (
          <div key={property.id} className="px-4 flex ">
            <PropertyCard {...property} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
