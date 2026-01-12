import { useState } from "react";
import { Plus } from "../icons/Plus";
import { motion ,AnimatePresence } from "motion/react";

const generalFAQs = [
  {
    question: "How does the Venmo Chatbot help users?",
    answer:
      "The Venmo Chatbot helps users instantly by answering questions related to payments, transactions, and account information without waiting for human support.",
  },
  {
    question: "Is the Venmo Chatbot available 24/7?",
    answer:
      "Yes, the chatbot is available 24/7 and can assist users anytime, even outside normal business hours.",
  },
  {
    question: "Do I need to install anything to use the chatbot?",
    answer:
      "No installation is required. The chatbot works directly within the platform and can be accessed instantly.",
  },
  {
    question: "Can I use the chatbot on mobile devices?",
    answer:
      "Yes, the chatbot is fully responsive and works seamlessly on mobile, tablet, and desktop devices.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="lg:ml-60 max-w-3xl">
      <h1 className="text-4xl text-[#1D293D] flex justify-center font-bold mb-8">
        Frequently Asked Questions
      </h1>

      {generalFAQs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-b py-6">
            
            <div
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex items-center justify-between cursor-pointer"
            >
              <p className="text-lg font-semibold text-[#1D293D]">
                {faq.question}
              </p>

              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Plus className="w-6 h-6" />
              </motion.div>
            </div>

            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-gray-600 text-lg">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
