// import { useState } from "react";
import { motion } from "motion/react";
import { PropertyCard } from "../components/PropertyCard";
import {  Phone, Mail, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export function Listings() {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1759256243437-9c8f7238c42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBtYW5zaW9uJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzc0NzE4NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: "₦8,500,000",
      beds: 6,
      baths: 7,
      sqft: 8500,
      type: "For Sale"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1762732793012-8bdab3af00b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGVudGhvdXNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc0NzE5ODI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Downtown Penthouse",
      location: "Manhattan, NY",
      price: "₦12,000,000",
      beds: 4,
      baths: 5,
      sqft: 5200,
      type: "For Sale"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1764660732489-6d6e5d0673e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaGZyb250JTIwdmlsbGElMjBzdW5zZXR8ZW58MXx8fHwxNzc0NzE5ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Beachfront Villa",
      location: "Malibu, CA",
      price: "₦15,750,000",
      beds: 5,
      baths: 6,
      sqft: 7200,
      type: "For Sale"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1663756915301-2ba688e078cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc3NDYyNTE5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Contemporary Loft",
      location: "SoHo, NY",
      price: "₦3,200,000",
      beds: 3,
      baths: 3,
      sqft: 2800,
      type: "For Rent"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1658280911730-467b4764c09c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBraXRjaGVuJTIwbWFyYmxlfGVufDF8fHx8MTc3NDcxNTQ3OHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Designer Townhouse",
      location: "Chelsea, London",
      price: "₦6,800,000",
      beds: 4,
      baths: 4,
      sqft: 4200,
      type: "For Sale"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwc3VpdGV8ZW58MXx8fHwxNzc0Njc5NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Luxury Apartment",
      location: "Miami Beach, FL",
      price: "₦4,500,000",
      beds: 3,
      baths: 4,
      sqft: 3600,
      type: "For Sale"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1661333587575-25c87c14f398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjBsdXh1cnl8ZW58MXx8fHwxNzc0NjA4ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Resort-Style Estate",
      location: "Paradise Valley, AZ",
      price: "₦9,200,000",
      beds: 7,
      baths: 8,
      sqft: 10500,
      type: "For Sale"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1634412114581-6376e49ef8e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3NDYxNjQyMXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Glass Skyscraper Residence",
      location: "Downtown Dubai",
      price: "₦11,500,000",
      beds: 5,
      baths: 6,
      sqft: 6800,
      type: "For Sale"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1699363059417-aeda250390eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3dudG93biUyMGNpdHklMjBza3lsaW5lfGVufDF8fHx8MTc3NDcxOTgzMXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "City View Penthouse",
      location: "Chicago, IL",
      price: "₦7,300,000",
      beds: 4,
      baths: 5,
      sqft: 5500,
      type: "For Rent"
    }
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
                These are just a selection of our available properties. We have an extensive portfolio of luxury homes across all premium locations. Contact our agents for exclusive listings and personalized property recommendations tailored to your needs.
              </p>
            </div>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                <Phone className="h-4 w-4 mr-2" />
                Contact Agent
              </Button>
            </Link>
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
            We have access to many exclusive off-market properties and new listings that aren't shown here. 
            Let our expert agents help you find the perfect property in your desired location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                <Mail className="h-5 w-5 mr-2" />
                Contact Us
              </Button>
            </Link>
            <a href="tel:+2348037161694" type="tel">
              <Button size="lg" variant="outline" className="min-w-[200px] bg-white/10 hover:bg-white/20 border-white text-white">
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