// import { useState } from "react";
import { motion } from "motion/react";
import { PropertyCard } from "../components/PropertyCard";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import prop1 from "../../assets/Duplex-in-Nigeria.jpg";
import prop2 from "../../assets/villa1.jpg";
import prop3 from "../../assets/Diamond Estate , Magodo, _2.jpg.webp";
import prop4 from "../../assets/house2.jpg";
import prop5 from "../../assets/house3.jpeg";
import prop6 from "../../assets/house4.webp";
import prop7 from "../../assets/house5.jpg";
import prop8 from "../../assets/bungalow-nigeria.jpg";
import prop9 from "../../assets/Real-Estate.jpg";

export function Listings() {
  const properties = [
    {
      id: 1,
      image: prop1,
      title: "Villa in Ogun",
      location: "Mowe, OG",
      price: "₦8,500,000",
      beds: 6,
      baths: 7,
      sqft: 8500,
      type: "For Sale",
    },
    {
      id: 2,
      image: prop2,
      title: "Modern Luxury Villa",
      location: "Lekki Phase 1, LG",
      price: "₦70,000,000",
      beds: 4,
      baths: 5,
      sqft: 5200,
      type: "For Sale",
    },
    {
      id: 3,
      image: prop3,
      title: "Landed property in Owode",
      location: "Owode, OG",
      price: "₦15,750,000",
      beds: 5,
      baths: 6,
      sqft: 7200,
      type: "For Sale",
    },
    {
      id: 4,
      image: prop4,
      title: "Red-Brick Mansion",
      location: "Oluyole, IB",
      price: "₦3,200,000",
      beds: 3,
      baths: 3,
      sqft: 2800,
      type: "For Rent",
    },
    {
      id: 5,
      image: prop5,
      title: "Luxury Mansion in Banana Island",
      location: "Banana Island, LG",
      price: "₦6,800,000",
      beds: 4,
      baths: 4,
      sqft: 4200,
      type: "For Sale",
    },
    {
      id: 6,
      image: prop6,
      title: "Under-Construction Building",
      location: "Ibafon, OG",
      price: "₦4,500,000",
      beds: 3,
      baths: 4,
      sqft: 3600,
      type: "For Sale",
    },
    {
      id: 7,
      image: prop7,
      title: "Under-Construction Building",
      location: "Ogijo, OG",
      price: "₦9,200,000",
      beds: 7,
      baths: 8,
      sqft: 10500,
      type: "For Sale",
    },
    {
      id: 8,
      image: prop8,
      title: "Contemporary Loft Apartment",
      location: "Garki, Abuja",
      price: "₦11,500,000",
      beds: 5,
      baths: 6,
      sqft: 6800,
      type: "For Sale",
    },
    {
      id: 9,
      image: prop9,
      title: "Housing Estate in Ogun",
      location: "Owode, OG",
      price: "₦7,300,000",
      beds: 4,
      baths: 5,
      sqft: 5500,
      type: "For Rent",
    },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4">Property Listings</h1>
            <p className="text-xl opacity-90">
              Browse our exclusive collection of luxury properties
            </p>
          </motion.div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                Looking for Properties in a Specific Location?
              </h3>
              <p className="text-muted-foreground">
                These are just a selection of our available properties. We have
                an extensive portfolio of luxury homes across all premium
                locations. Contact our agents for exclusive listings and
                personalized property recommendations tailored to your needs.
              </p>
            </div>
            <a href="tel:+2348037161694" type="tel">
              <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                <Phone className="h-4 w-4 mr-2" />
                Contact Agent
              </Button>
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PropertyCard {...property} />
            </motion.div>
          ))}

          <a href="https://wa.me/2348037161694?text=Hi,%20I'm%20interested%20in%20your%20luxury%20properties">
            <button className="flex items-center gap-2 w-fit bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors mt-4">
              <MessageCircle /> Send a message
            </button>
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            We have access to many exclusive off-market properties and new
            listings that aren't shown here. Let our expert agents help you find
            the perfect property in your desired location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                <Mail className="h-5 w-5 mr-2" />
                Contact Us
              </Button>
            </Link>
            <a href="tel:+2348037161694" type="tel">
              <Button
                size="lg"
                variant="outline"
                className="min-w-[200px] bg-white/10 hover:bg-white/20 border-white text-white"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call: +234 803 716 1694
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
