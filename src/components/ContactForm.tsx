
import { useState } from "react";
import { ChevronRight, Loader } from "lucide-react";
import { toast } from "sonner";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: "cre8ivefour@gmail.com",
      subject: formData.subject,
      message: formData.message,
    };
    
    try {
      // You need to sign up for EmailJS and get your own service ID, template ID, and user ID
      // Replace the placeholders below with your actual IDs
      await emailjs.send(
        "service_98im0db", // Create a service and get ID from EmailJS dashboard
        "template_813u6yc", // Create an email template and get ID from EmailJS dashboard
        templateParams,
        "bjKMvqEsvR4U2AVQe" // Get your user ID from EmailJS dashboard
      );
      
      toast.success("Message sent successfully! We'll respond shortly.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 md:p-8 shadow-xl animate-fade-in">
      <div className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input 
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cre8ive-teal focus:border-transparent transition-all outline-none"
            placeholder="John Doe"
          />
        </div>
        
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input 
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cre8ive-teal focus:border-transparent transition-all outline-none"
            placeholder="john@example.com"
          />
        </div>
        
        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            What service are you interested in?
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cre8ive-teal focus:border-transparent transition-all outline-none"
          >
            <option value="" disabled>Select a service</option>
            <option value="Web Development">Web Development</option>
            <option value="Video Editing">Video Editing</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Audio Production">Audio Production</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cre8ive-teal focus:border-transparent transition-all outline-none resize-none"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>
        
        <div className="pt-2">
          <p className="text-xs text-gray-500 mb-4">
            Your message will be sent to cre8ivefour@gmail.com
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <Loader size={18} className="animate-spin mr-2" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <ChevronRight size={18} className="ml-1" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
