import { motion } from "motion/react";
import Slick from "react-slick";
import { Award, Target, Eye, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const Slider = (Slick as any).default || Slick;
export function About() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NDY4NTA2MHww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "15+ years of experience in luxury real estate"
    },
    {
      name: "Michael Chen",
      role: "Director of Sales",
      image: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDY3OTg2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Specialist in high-value property transactions"
    },
    {
      name: "Emily Rodriguez",
      role: "Senior Agent",
      image: "https://images.unsplash.com/photo-1763478958776-ebd04b6459ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWFsdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0NzE5ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Expert in coastal and waterfront properties"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide exceptional real estate services that exceed client expectations and create lasting relationships built on trust and integrity."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the most trusted and innovative luxury real estate firm, setting new standards in the industry through excellence and dedication."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Integrity, excellence, innovation, and client satisfaction are at the core of everything we do. We're committed to delivering results."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A diverse group of experienced professionals passionate about helping clients find their perfect property and investment opportunities."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1634412114581-6376e49ef8e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3NDYxNjQyMXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="About us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About VineyardOfNature
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Elevating the standard of luxury real estate for over 25 years. 
                We're more than just agents – we're your partners in finding the perfect property.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 1999, VineyardOfNature began with a simple vision: to transform the 
                luxury real estate experience. What started as a boutique agency has grown 
                into one of the most respected names in premium properties.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the years, we've facilitated over $2.5 billion in property transactions, 
                helped more than 850 families find their dream homes, and established ourselves 
                as industry leaders in luxury real estate.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our success is built on unwavering commitment to our clients, deep market 
                knowledge, and a passion for excellence that drives everything we do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1699363059417-aeda250390eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3dudG93biUyMGNpdHklMjBza3lsaW5lfGVufDF8fHx8MTc3NDcxOTgzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our office"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core principles guide every decision and interaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-xl shadow-lg border border-border"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="px-12">
            <Slider {...settings}>
              {team.map((member, index) => (
                <div key={index} className="px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -10 }}
                    className="bg-card rounded-xl overflow-hidden shadow-lg border border-border"
                  >
                    <div className="h-80 overflow-hidden">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                      <p className="text-primary mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's find your perfect property together
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
