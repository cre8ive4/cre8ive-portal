
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Faq = () => {
  // FAQ data
  const faqs = [
    {
      question: "What services does Cre8ive4 offer?",
      answer:
        "We offer a comprehensive range of creative services including web development, video editing, graphic design, and audio production. Our team works across these disciplines to deliver holistic digital solutions for businesses and individuals.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our pricing varies based on the scope, complexity, and specific requirements of each project. We offer customized quotes after understanding your needs through an initial consultation. Contact us to discuss your project and receive a tailored estimate.",
    },
    {
      question: "What is your typical turnaround time?",
      answer:
        "Turnaround times depend on the project scope and our current workload. Simple projects might take 1-2 weeks, while more complex ones can take 4-8 weeks or more. We'll provide a timeline estimate during our initial consultation and keep you updated throughout the process.",
    },
    {
      question: "Do you offer ongoing maintenance for websites?",
      answer:
        "Yes, we offer website maintenance packages to keep your site secure, updated, and performing optimally. These packages can include regular updates, security monitoring, content updates, and technical support.",
    },
    {
      question: "Can you help with revisions to an existing website or video?",
      answer:
        "Absolutely! We regularly work with clients to improve or update existing digital assets. Whether you need design refreshes, functionality improvements, or content updates, we can help bring your existing materials up to current standards.",
    },
    {
      question: "What is your process for starting a new project?",
      answer:
        "Our process begins with an initial consultation to understand your goals and requirements. We then develop a proposal outlining scope, timeline, and cost. Once approved, we move into the creative phase with regular check-ins for feedback before delivering the final product.",
    },
    {
      question: "Do you offer rush services for urgent projects?",
      answer:
        "Yes, we can accommodate rush projects when our schedule allows. Rush projects may include an additional fee depending on the timeline and complexity. Please contact us as soon as possible if you have an urgent request.",
    },
    {
      question: "What types of businesses do you typically work with?",
      answer:
        "We work with a diverse range of clients from small businesses and startups to larger enterprises and individuals. Our experience spans many industries including hospitality, technology, retail, healthcare, education, and more.",
    },
    {
      question: "Can you provide references or examples of your work?",
      answer:
        "Yes! Please visit our portfolio page to see samples of our previous projects. We can also provide references from past clients upon request during our consultation process.",
    },
    {
      question: "Do you offer discounts for non-profits or multiple projects?",
      answer:
        "We offer special rates for non-profit organizations and for clients who engage us for multiple projects. Please mention your non-profit status or multiple project needs during our initial consultation.",
    },
  ];
  
  return (
    <main className="pt-20">
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block bg-cre8ive-yellow/20 text-cre8ive-teal text-sm font-medium py-1 px-3 rounded-full mb-3">
              FAQ
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-cre8ive-teal mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services, process, and pricing.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="glass-panel rounded-xl overflow-hidden border-0 shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left text-cre8ive-teal font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Still have questions section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4 text-cre8ive-teal">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you couldn't find the answer to your question, feel free to reach out to us directly.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Contact Us
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faq;
