import Slick from "react-slick";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import img1 from "../../assets/face-50yearold-african-woman.jpg";
import img2 from "../../assets/Ni0xLmpwZw.jpg";
import img3 from "../../assets/aiman.jpg"

const Slider = (Slick as any).default || Slick;
export function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "Dr Sarah Johnson",
      role: "Property Investor",
      image: img1,
      rating: 5,
      testimonial: "VineyardOfNature helped me find the perfect investment property. Their team was professional, knowledgeable, and made the entire process seamless. Highly recommended!"
    },
    {
      name: "Michael Uche",
      role: "First-time Homebuyer",
      image: img2,
      rating: 4,
      testimonial: "As a first-time buyer, I was nervous about the process. The VineyardOfNature team guided me every step of the way and found me a home that exceeded my expectations."
    },
    {
      name: "Azeez Ogunkoya",
      role: "Luxury Home buyer",
      image: img3,
      rating: 5,
      testimonial: "Buying my home was made incredibly easy with VineyardOfNature. They marketed my property beautifully and within weeks after bayment, all necessary documents were handed to me without stress."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    fade: true,
    pauseOnHover: true,
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg border border-border">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 ring-4 ring-primary/20">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-lg text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.testimonial}"
                </p>

                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
