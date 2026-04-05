import { motion } from "motion/react";
import Slick from "react-slick";
import { Award, Target, Eye, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import dire1 from "../../assets/IMG-20260403-WA0002.jpg";
import dire2 from "../../assets/IMG-20260403-WA0003.jpg";
import dire4 from "../../assets/IMG-20260403-WA0008.jpg";
import dire3 from "../../assets/IMG-20260403-WA0009.jpg";
import fallback from "../../assets/fallback-about.jpg";

const Slider = (Slick as any).default || Slick;
export function About() {
  const currentYear = new Date().getFullYear();
  const compAge = currentYear - 2015;
  const team = [
    {
      name: "Francis Omoregbe A. Ehikhaese",
      role: "CEO & Managing Director",
      image: dire1,
    },
    {
      name: "Kehinde A. O. Isijola",
      role: "Director",
      image: dire2,
    },
    {
      name: "Godsent Osagie Ehikhaese",
      role: "Director",
      image: dire3,
    },
    {
      name: "Joy Ehikhaese",
      role: "Director",
      image: dire4,
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "With the full complement of industrytried and tested professionals in ouremploy, and at our disposal,every business transactionwith us is treated with quality skill, speed and cost advantage to all parties involved, in order to deliver reasonable and affordable housing.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the global reference point, and the first port of call to anyone in need  of housing property acquisition that is handled with core ethical values and professionalism.",
    },
    {
      icon: Award,
      title: "Our Core Values",
      description:
        "Capacity,Commitment, Assurance, Professionalism, Accountability, Cost effectiveness, Integrity, Transparency, Industry, Excellence, and Service Delivery.",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "A diverse group of experienced professionals passionate about helping clients find their perfect property and investment opportunities.",
    },
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
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <ImageWithFallback
          src={fallback}
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
                Elevating the standard of luxury real estate for over {compAge} years.
                We're more than just agents – we're your partners in finding the
                perfect property.
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
              <h2 className="text-4xl font-bold mb-6">Our Profile</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vineyard Of Nature Estate Limited was incorporated as a private
                limited liability company on the 24th day of September, 2015 to
                carry on the business of estate development, sales of developed
                properties, as well as undeveloped landed properties in Nigeria
                and elsewhere outside the country.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As part of the company's corporate objectives, it is engaged in
                making available layout and survey plans of land purchased
                through and from the company. Vineyard Of Nature Estate Limited
                was also incorporated to engage in the marketing of developed
                properties, undeveloped landed properties and estate developed
                in any part of the country and beyond, and all other business
                activities which facilitate the effective and efficient
                performance of its core activity of estate development, sales
                and marketing of developed and undeveloped lands.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With the above core mandate, the directors of Vineyard Of Nature
                Estate Limited have crafted a vision that would further guide
                the company's pursuit of its business relationship with its
                various stakeholders - buyers, sellers, property transaction
                brokers, e.t.c, and the government regulatory institutions.
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
            <h2 className="text-4xl font-bold mb-4">
              Meet Our Team And Board of Directors
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="px-8">
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
                      <h3 className="text-xl font-semibold mb-2">
                        {member.name}
                      </h3>
                      <p className="text-primary mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground">
                        {member.bio}
                      </p>
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
