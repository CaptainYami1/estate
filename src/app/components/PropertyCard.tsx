import { Link } from "react-router";
import { motion } from "motion/react";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PropertyCardProps {
  id: number;
  image: string;
  title: string;
  location: string;
  // price: string;
  beds: number;
  baths: number;
  sqft: number;
  type?: string;
}

export function PropertyCard({
  id,
  image,
  title,
  location,
  // price,
  beds,
  baths,
  sqft,
  // type = "For Sale"
}: PropertyCardProps) {
  

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border bottom-0!"
    >
      {/* <Link to={`/property/${id}`}> */}
        <div className=" h-64 overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
         
        </div>

        <div className="p-6">
          <div className="mb-3">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{location}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1.5 text-primary" />
                <span>{beds}</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1.5 text-primary" />
                <span>{baths}</span>
              </div>
              <div className="flex items-center">
                <Square className="h-4 w-4 mr-1.5 text-primary" />
                <span>{sqft.toLocaleString()} sq ft</span>
              </div>
            </div>
          </div>

         {/* <div className="flex items-center justify-between">
             <div>
              <p className="text-sm text-muted-foreground mb-1">Price</p>
              <p className="text-2xl font-bold text-primary">{price}</p>
            </div> 
            <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors">
              View Details
            </button>
          </div>*/}
        </div>
      {/* </Link> */}
    </motion.div>
  );
}
