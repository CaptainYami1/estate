import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";


export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Computer Village Avenue", "Ikeja, LG 10001", "Nigeria"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+234 803 123-4567", "+234 815 567-8901", "Mon-Sat: 9AM-6PM"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@vineyardofnature.com", "sales@vineyardofnature.com", "support@vineyardofnature.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 7PM", "Saturday: 10AM - 6PM", "Sunday: By Appointment"]
    }
  ];

 

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Have a question or ready to find your dream property? We're here to help.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-lg border border-border text-center"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground mb-1">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Contact Our Team</h2>
              <p className="text-muted-foreground mb-8">
                Choose your preferred method to reach out to our luxury real estate specialists.
              </p>

              <div className="space-y-4">
                {/* Phone Contact */}
                <motion.a
                  href="tel:+15551234567"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block bg-card p-6 rounded-xl border border-border hover:border-primary transition-all shadow-md hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">Call Us Now</h3>
                      <p className="text-primary font-medium">+234 803 123-4567</p>
                      <p className="text-sm text-muted-foreground">Available Mon-Sat, 9AM-6PM</p>
                    </div>
                    <Send className="h-5 w-5 text-muted-foreground" />
                  </div>
                </motion.a>

                {/* Email Contact */}
                <motion.a
                  href="mailto:info@vineyardofnature@gmail.com?subject=Property%20Inquiry"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block bg-card p-6 rounded-xl border border-border hover:border-primary transition-all shadow-md hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                      <p className="text-primary font-medium">info@vineyardofnature@gmail.com</p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                    <Send className="h-5 w-5 text-muted-foreground" />
                  </div>
                </motion.a>

                {/* WhatsApp Contact */}
                <motion.a
                  href="https://wa.me/2348155678901?text=Hi,%20I'm%20interested%20in%20your%20luxury%20properties"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block bg-card p-6 rounded-xl border border-border hover:border-primary transition-all shadow-md hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                      <p className="text-primary font-medium">+234 815 567-8901</p>
                      <p className="text-sm text-muted-foreground">Chat with us instantly</p>
                    </div>
                    <Send className="h-5 w-5 text-muted-foreground" />
                  </div>
                </motion.a>

                {/* Visit Office */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="block bg-card p-6 rounded-xl border border-border shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">Visit Our Office</h3>
                      <p className="text-muted-foreground">123 Luxury Avenue</p>
                      <p className="text-muted-foreground">Manhattan, NY 10001</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Secondary Contact Info */}
              <div className="mt-8 bg-secondary/20 p-6 rounded-xl">
                <h4 className="font-semibold mb-3">Additional Contacts</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-medium">Sales Team:</span>{" "}
                    <a href="mailto:sales@vineyardofnature@gmail.com" className="text-primary hover:underline">
                      sales@vineyardofnature@gmail.com
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium">Support:</span>{" "}
                    <a href="mailto:support@vineyardofnature@gmail.com" className="text-primary hover:underline">
                      support@vineyardofnature@gmail.com
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium">Alternative Phone:</span>{" "}
                    <a href="tel:+2348155678901" className="text-primary hover:underline">
                      +234 815 567-8901
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="h-96 bg-secondary/20 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126846.01254231359!2d3.281126809493276!3d6.529528755506534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa2a3999%3A0xd7a8324bddbba1f0!2sIkeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1774737905211!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>

              <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
                <h3 className="text-2xl font-bold mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                    <span className="text-muted-foreground">
                      Get personalized property recommendations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                    <span className="text-muted-foreground">
                      Schedule private viewings and tours
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                    <span className="text-muted-foreground">
                      Receive expert market insights and advice
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                    <span className="text-muted-foreground">
                      Get assistance with financing and negotiations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                    <span className="text-muted-foreground">
                      Access exclusive off-market listings
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "How do I schedule a property viewing?",
                a: "You can schedule a viewing by filling out the contact form above, calling us directly, or clicking the 'Schedule Viewing' button on any property listing."
              },
              {
                q: "Do you charge buyers a fee?",
                a: "No, our services for buyers are completely free. We're compensated by the property sellers."
              },
              {
                q: "What areas do you serve?",
                a: "We specialize in luxury properties across major metropolitan areas including Lagos, Portharcourt, Ibadan, and Abuja."
              },
              {
                q: "Can you help with property financing?",
                a: "Yes, we work with trusted mortgage brokers and lenders who specialize in luxury property financing."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
