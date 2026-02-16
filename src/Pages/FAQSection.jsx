 import { useState } from "react";
 import { useNavigate, useLocation } from "react-router-dom";
 
 // FAQ data
const faqs = [
  {
    question: "What is your pricing model?",
    answer:
      "My pricing depends on the project requirements, features, and timeline. For most projects, I prefer fixed pricing or milestone-based payments so everything stays clear and manageable."
  },
  {
    question: "Do you provide support after project completion?",
    answer:
      "Yes, I can provide support after the project is completed, including small fixes, updates, or guidance if needed."
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes, I’m open to signing NDAs to maintain confidentiality and protect client information."
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "I mainly work with React, JavaScript, Tailwind CSS, Node.js, Express, MongoDB, and Unity for game development. I’m always learning new technologies to improve my skills."
  },
  {
    question: "Can you work with remote teams?",
    answer:
      "Yes, I’m comfortable working with remote teams and communicating through online collaboration tools."
  },
  {
    question: "Are you open to learning new tools or technologies?",
    answer:
      "Absolutely. I enjoy learning new technologies and adapting to project requirements to deliver the best possible results."
  },
  {
    question: "What time zones do you work in?",
    answer:
      "I’m flexible with working hours and can adjust my schedule to coordinate with different time zones when needed."
  },
  {
    question: "How do you communicate during projects?",
    answer:
      "I usually communicate through WhatsApp, Zoom, email, or other collaboration tools, and I provide regular updates on progress."
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Small projects usually take 1–3 weeks depending on the complexity, while larger projects may take longer based on requirements."
  },
  {
    question: "What types of projects are you interested in?",
    answer:
      "I’m interested in working on web applications, frontend projects, MERN stack applications, and Unity game development projects where I can learn and grow."
  }
];

 
 // Single FAQ Item
 const FAQItem = ({ item, isOpen, onClick }) => (
   <div className="border border-gray-200 rounded-lg px-5 py-4 hover:shadow-sm transition-all">
     <button
       onClick={onClick}
       className="flex justify-between items-center w-full text-left"
     >
       <span className="font-medium text-gray-900">{item.question}</span>
       <span className="text-xl text-blue-500">{isOpen ? "−" : "+"}</span>
     </button>
 
     {isOpen && (
       <div className="mt-3 text-gray-600 text-sm leading-relaxed animate-fadeIn">
         <p>{item.answer}</p>
       </div>
     )}
   </div>
 );
 
 // FAQ Section
 const FAQSection = () => {
   const [openIndex, setOpenIndex] = useState(null);
   const navigate = useNavigate();
   const location = useLocation();
 
   const handleSendMessage = () => {
     if (location.pathname !== "/") {
       navigate("/");
       setTimeout(() => {
         const contactSection = document.getElementById("contact");
         contactSection?.scrollIntoView({ behavior: "smooth" });
       }, 100);
     } else {
       const contactSection = document.getElementById("contact");
       contactSection?.scrollIntoView({ behavior: "smooth" });
     }
   };
 
   return (
     <section className="bg-gray-50">
       <div className="max-w-6xl mx-auto px-6 py-20">
         {/* Header */}
         <div className="text-center mb-14">
           <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
           <p className="text-gray-600 max-w-2xl mx-auto">
             Answers to common questions about working with me, project timelines,
             and remote collaboration.
           </p>
         </div>
 
         {/* FAQ Grid */}
         <div className="columns-1 md:columns-2 gap-6 space-y-6">
           {faqs.map((item, index) => (
             <div key={index} className="break-inside-avoid">
               <FAQItem
                 item={item}
                 isOpen={openIndex === index}
                 onClick={() =>
                   setOpenIndex(openIndex === index ? null : index)
                 }
               />
             </div>
           ))}
         </div>
 
         {/* CTA */}
         <div className="text-center mt-14">
           <p className="text-gray-600 mb-4">Still have questions?</p>
           <div className="flex justify-center gap-4">
             <button
               onClick={handleSendMessage}
               className="border border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-sky-600 hover:text-white transition"
             >
               Send a Message
             </button>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default FAQSection;
 