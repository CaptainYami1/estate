import { useState } from "react";
import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import Slick from "react-slick";
import { 
  Bed, Bath, Square, MapPin, Car, Home, 
  Share2, Heart, ChevronLeft, ChevronRight, 
  Phone,
  Mail,
  MessageCircle
} from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";


const Slider = (Slick as any).default || Slick;
interface ArrowProps {
  onClick?: () => void;
}

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full transition-all shadow-lg"
    >
      <ChevronLeft className="h-6 w-6 text-gray-800" />
    </button>
  );
}

function NextArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full transition-all shadow-lg"
    >
      <ChevronRight className="h-6 w-6 text-gray-800" />
    </button>
  );
}

export function PropertyDetails() {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);

  const propertyImages = [
    "https://images.unsplash.com/photo-1759256243437-9c8f7238c42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBtYW5zaW9uJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzc0NzE4NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1762732793012-8bdab3af00b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGVudGhvdXNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc0NzE5ODI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1658280911730-467b4764c09c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBraXRjaGVuJTIwbWFyYmxlfGVufDF8fHx8MTc3NDcxNTQ3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwc3VpdGV8ZW58MXx8fHwxNzc0Njc5NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1661333587575-25c87c14f398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjBsdXh1cnl8ZW58MXx8fHwxNzc0NjA4ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const features = [
    "Gourmet Chef's Kitchen",
    "Smart Home Technology",
    "Private Wine Cellar",
    "Home Theater",
    "Infinity Pool",
    "Spa & Sauna",
    "3-Car Garage",
    "Landscaped Gardens",
    "Security System",
    "Panoramic Views"
  ];

  return (
    <div className="pt-20">
      {/* Image Carousel */}
      <div className="relative h-[70vh] overflow-hidden">
        <Slider {...settings}>
          {propertyImages.map((image, index) => (
            <div key={index} className="relative h-[70vh]">
              <ImageWithFallback
                src={image}
                alt={`Property view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
        
        <div className="absolute top-6 right-6 z-20 flex gap-3">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="bg-white/90 hover:bg-white p-3 rounded-full transition-all shadow-lg"
          >
            <Heart
              className={`h-6 w-6 ${
                isLiked ? "fill-red-500 text-red-500" : "text-gray-800"
              }`}
            />
          </button>
          <button className="bg-white/90 hover:bg-white p-3 rounded-full transition-all shadow-lg">
            <Share2 className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Property Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold mb-3">Modern Luxury Villa</h1>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>123 Luxury Lane, Beverly Hills, CA 90210</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">Price</p>
                  <p className="text-4xl font-bold text-primary">$8,500,000</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 p-6 bg-secondary/20 rounded-xl">
                <div className="text-center">
                  <Bed className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold mb-1">6</p>
                  <p className="text-sm text-muted-foreground">Bedrooms</p>
                </div>
                <div className="text-center">
                  <Bath className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold mb-1">7</p>
                  <p className="text-sm text-muted-foreground">Bathrooms</p>
                </div>
                <div className="text-center">
                  <Square className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold mb-1">8,500</p>
                  <p className="text-sm text-muted-foreground">Sq Ft</p>
                </div>
                <div className="text-center">
                  <Car className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold mb-1">3</p>
                  <p className="text-sm text-muted-foreground">Garage</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Experience the pinnacle of luxury living in this stunning modern villa. 
                  Meticulously designed with the finest materials and cutting-edge technology, 
                  this architectural masterpiece offers unparalleled comfort and sophistication.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The open-concept design seamlessly blends indoor and outdoor living spaces, 
                  featuring floor-to-ceiling windows that frame breathtaking views. Every detail 
                  has been carefully considered to create a home that exceeds the highest expectations.
                </p>
              </div>

              {/* Features & Amenities */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-card border border-border rounded-xl">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Property Type</p>
                  <p className="font-semibold">Single Family Home</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Year Built</p>
                  <p className="font-semibold">2024</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Lot Size</p>
                  <p className="font-semibold">15,000 sq ft</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">HOA Fees</p>
                  <p className="font-semibold">$850/month</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Property ID</p>
                  <p className="font-semibold">LE-{id}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Status</p>
                  <p className="font-semibold text-green-600">Available</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Contact Form */}
           <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-xl p-6 sticky top-28"
            >
              <h3 className="text-xl font-bold mb-6">Interested in This Property?</h3>
              
              <div className="space-y-3 mb-6">
                {/* Phone Contact */}
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-4 p-4 bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-lg transition-all group"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Call Now</p>
                    <p className="text-primary text-sm">+1 (555) 123-4567</p>
                  </div>
                </a>

                {/* Email Contact */}
                <a
                  href="mailto:info@luxeestate.com?subject=Property%20Inquiry%20-%20Modern%20Luxury%20Villa"
                  className="flex items-center gap-4 p-4 bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-lg transition-all group"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Email Us</p>
                    <p className="text-primary text-sm">info@luxeestate.com</p>
                  </div>
                </a>

                {/* WhatsApp Contact */}
                <a
                  href="https://wa.me/15551234567?text=Hi,%20I'm%20interested%20in%20the%20Modern%20Luxury%20Villa%20property"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-lg transition-all group"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">WhatsApp</p>
                    <p className="text-primary text-sm">Chat Instantly</p>
                  </div>
                </a>
              </div>

              <Button asChild className="w-full bg-primary hover:bg-primary/90 mb-3">
                <Link to="/contact">Visit Contact Page</Link>
              </Button>

              <div className="bg-secondary/30 p-4 rounded-lg">
                <p className="text-sm text-center text-muted-foreground">
                  Our agents are available Mon-Sat, 9AM-6PM to schedule private viewings
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Listed by</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Vineyard Of Nature</p>
                    {/* <p className="text-sm text-muted-foreground">Luxury Division</p> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
