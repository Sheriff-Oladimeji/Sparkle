"use client"
import React, { useState } from "react";
import {AiOutlineDown, AiOutlineRight} from "react-icons/ai"

const faqData = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We specialize in design, website development, and branding. Our team of experts can create stunning designs, develop responsive websites, and craft unique brand identities that align with your business goals.",
  },
  {
    id: 2,
    question: "How long does it take to complete a project?",
    answer:
      "The project timeline depends on various factors, such as the scope of the project, complexity, and client requirements. We work closely with our clients to define clear project timelines and milestones. On average, our projects are completed within 4-8 weeks.",
  },
  {
    id: 3,
    question: "What is your design process?",
    answer:
      "Our design process involves several stages, including discovery, research, concept development, design iteration, and finalization. We collaborate closely with our clients to understand their vision and goals, ensuring that the design aligns with their brand identity and target audience.",
  },
  {
    id: 4,
    question: "Do you provide ongoing support after the project is completed?",
    answer:
      "Yes, we offer ongoing support and maintenance services after the project is completed. We believe in building long-term relationships with our clients and provide assistance with any issues, updates, or additional features that may be required post-launch.",
  },
];

const Faq = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (itemId) => {
    if (openItems.includes(itemId)) {
      setOpenItems(openItems.filter((id) => id !== itemId));
    } else {
      setOpenItems([...openItems, itemId]);
    }
  };

  return (
    <div className="mt-8 py-12 bg-[#f2f4f5] ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border-2 border-gray-300 py-8"
              onClick={() => toggleItem(item.id)}
            >
              <div className="flex justify-between items-center w-[90%] mx-auto">
                <h3 className="text-xl leading-7 font-bold cursor-pointer">
                  {item.question}
                </h3>
                <button className="text-xl font-bold" name="button">
                  {openItems.includes(item.id) ? (
                    <AiOutlineDown size={20} />
                  ) : (
                    <AiOutlineRight size={20} />
                  )}
                </button>
              </div>
              {openItems.includes(item.id) && (
                <div className="mt-4 text-gray-700 w-[90%] mx-auto">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
