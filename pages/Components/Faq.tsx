'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  { question: "What is the BeSpoke Interior Design Portfolio?", answer: "The portfolio is a curated collection of our best residential projects, showcasing a wide range of styles, budgets, and home types to provide inspiration and demonstrate our design capabilities." },
  { question: "What are the sections of the BeSpoke Portfolio?", answer: "The portfolio is divided into 'Delivered Projects,' which are completed and handed over to clients, and 'Upcoming Properties,' which are detailed design proposals for future homes." },
  { question: "Can I use BeSpoke's portfolio for design inspiration?", answer: "Absolutely! The portfolio is designed to be a source of inspiration. You can browse through various designs and save ideas for your own home." },
  { question: "How does BeSpoke ensure quality in its designs?", answer: "We use a combination of expert designers, high-quality materials from trusted brands, and a rigorous 146-point quality check to ensure every project meets our high standards." },
  { question: "Can I get a similar design for my home from BeSpoke?", answer: "Yes. If you like a design from our portfolio, our designers can adapt and customize it to fit your space, requirements, and budget perfectly." },
  { question: "How do I get started with BeSpoke for my home interiors?", answer: "You can start by booking a free online consultation. Simply fill out the form on our website, and one of our design experts will get in touch with you." },
  { question: "What is the typical timeline for completing a project with BeSpoke?", answer: "The timeline varies based on the scope and complexity of the project. However, we are known for our efficient processes and on-time delivery, which we will discuss and agree upon before starting." },
  { question: "Where can I view the BeSpoke Portfolio?", answer: "You can view our portfolio directly on this webpage. It is regularly updated with our latest and greatest projects." },
];

const FaqItem = ({ item }: { item: typeof faqData[0] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-5 px-6"
      >
        <span className="text-md font-medium text-gray-800">{item.question}</span>
        <ChevronDown
          size={24}
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-gray-600">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          FAQ About BeSpoke Portfolio
        </h2>
        <div className="bg-white rounded-lg shadow-md border">
          {faqData.map((item, index) => (
            <FaqItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;