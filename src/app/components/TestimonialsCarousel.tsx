import Slick from "react-slick";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const Slider = (Slick as any).default || Slick;
export function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Property Investor",
      image: "https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NDY4NTA2MHww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      testimonial: "VineyardOfNature helped me find the perfect investment property. Their team was professional, knowledgeable, and made the entire process seamless. Highly recommended!"
    },
    {
      name: "Michael Chen",
      role: "First-time Homebuyer",
      image: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDY3OTg2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      testimonial: "As a first-time buyer, I was nervous about the process. The VineyardOfNature team guided me every step of the way and found me a home that exceeded my expectations."
    },
    {
      name: "Emily Rodriguez",
      role: "Luxury Home Seller",
      image: "https://images.unsplash.com/photo-1763478958776-ebd04b6459ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWFsdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0NzE5ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      testimonial: "Selling my luxury home was made incredibly easy with VineyardOfNature. They marketed my property beautifully and found the perfect buyer within weeks."
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
