import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const faqs = [
  {
    question: "What is your pricing model?",
    answer:
      "My pricing depends on project scope, complexity, and timeline. I offer fixed-price, milestone-based, and hourly models depending on your needs."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, I provide ongoing support, maintenance, and feature enhancements after project launch based on agreed terms."
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes, I'm comfortable signing NDAs to ensure confidentiality and data protection."
  },
  {
    question: "Which tech stacks do you specialize in?",
    answer:
      "I specialize in React, Next.js, Angular, Node.js, .NET, REST APIs, cloud deployment, and AI-powered integrations."
  },
  {
    question: "Can you work with remote teams?",
    answer:
      "Absolutely. I've worked with distributed teams using modern collaboration tools and agile workflows."
  },
  {
    question: "Can you integrate AI features into projects?",
    answer:
      "Yes, I can integrate AI features such as chatbots, automation, analytics, and LLM-powered solutions."
  },
  {
    question: "What time zones do you work in?",
    answer:
      "I'm flexible and can coordinate with clients in UTC ±12, with priority for Europe, USA, and Asia collaborations."
  },
  {
    question: "How do you communicate with clients?",
    answer:
      "I communicate via Slack, Zoom, email, and project management tools with regular updates."
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Small projects usually take 2–4 weeks, while larger systems may take 6–12 weeks depending on scope."
  },
  {
    question: "What types of projects do you take?",
    answer:
      "I work on SaaS platforms, dashboards, web applications, APIs, and scalable enterprise systems."
  }
];

const FAQItem = ({ item, isOpen, onClick }) => (
  <div
    className="border border-gray-200 rounded-lg px-5 py-4
               hover:shadow-sm transition-all"
  >
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full text-left"
    >
      <span className="font-medium text-gray-900">
        {item.question}
      </span>
      <span className="text-xl text-blue-500">
        {isOpen ? "−" : "+"}
      </span>
    </button>

    {isOpen && (
      <p className="mt-3 text-gray-600 text-sm leading-relaxed">
        {item.answer}
      </p>
    )}
  </div>
);

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(6);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSendMessage = () => {
      if (location.pathname !== '/') {
        // Navigate to home first, then scroll
        navigate('/');
        setTimeout(() => {
          const contactSection = document.getElementById('contact');
          contactSection?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Already on home, just scroll
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
      }
    };

 return (
    <section className="  bg-gray-50">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
        <h2 className="text-3xl font-bold mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Answers to common questions about working with me, project timelines,
          and remote collaboration.
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          />
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
}

export default FAQSection
