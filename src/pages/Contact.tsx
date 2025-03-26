
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <main className="pt-20">
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block bg-cre8ive-yellow/20 text-cre8ive-teal text-sm font-medium py-1 px-3 rounded-full mb-3">
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-cre8ive-teal mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">
              Have a project in mind or want to learn more about our services? We'd love to hear from you!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-panel rounded-2xl p-6 md:p-8 shadow-xl animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-cre8ive-teal">Contact Information</h2>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="bg-cre8ive-teal/10 text-cre8ive-teal p-3 rounded-xl mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Email Us</h3>
                      <a href="mailto:contact@cre8ive4.com" className="text-cre8ive-teal hover:underline font-medium">
                        contact@cre8ive4.com
                      </a>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="bg-cre8ive-teal/10 text-cre8ive-teal p-3 rounded-xl mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Call Us</h3>
                      <a href="tel:+1234567890" className="text-cre8ive-teal hover:underline font-medium">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="bg-cre8ive-teal/10 text-cre8ive-teal p-3 rounded-xl mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Visit Us</h3>
                      <p className="text-gray-700">
                        123 Creative Drive, <br />
                        Digital City, DC 12345
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cre8ive-teal text-white p-3 rounded-full hover:bg-cre8ive-teal/90 transition-colors"
                    >
                      <Instagram size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cre8ive-teal text-white p-3 rounded-full hover:bg-cre8ive-teal/90 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="mailto:contact@cre8ive4.com"
                      className="bg-cre8ive-teal text-white p-3 rounded-full hover:bg-cre8ive-teal/90 transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-xl h-64 md:h-80 animate-fade-in">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30594994064!2d-74.25986652425023!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1649369433069!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
