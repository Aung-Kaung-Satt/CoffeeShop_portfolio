import React, { useState } from 'react';
import './faqstyle.css';

const FAQ = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

    const faqs = [
        {
            question: 'What are your opening hours?',
            answer: 'We are open from 7:00 AM to 9:00 PM every day.',
        },
        {
            question: 'Do you offer dairy-free options?',
            answer: 'Yes, we offer a variety of dairy-free milk options including almond, soy, and oat milk.',
        },
        {
            question: 'Do you have Wi-Fi?',
            answer: 'Yes, we provide free Wi-Fi for all our customers. Just ask for the password at the counter.',
        },
        {
            question: 'Can I order online?',
            answer: 'Yes, you can place your order online through our website or mobile app and pick it up in-store.',
        },
        {
            question: 'Do you offer catering services?',
            answer: 'Yes, we offer catering services for events. Please contact us for more details.',
        },
    ];

    const toggleAnswer = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <h2 className="text-3xl font-bold mb-8 text-brown-800">Frequently Asked Questions</h2>
            <ul className="w-full max-w-2xl bg-slate-50 rounded-lg shadow-lg p-6">
                {faqs.map((faq, index) => (
                    <li key={index} className="mb-4">
                        <h3
                            className="faqquestion text-xl font-semibold text-brown-700 cursor-pointer hover:text-brown-900"
                            onClick={() => toggleAnswer(index)}
                        >
                            {faq.question}
                        </h3>
                        {visibleIndex === index && (
                            <p className="mt-2 text-gray-600">{faq.answer}</p>
                        )}
                        <hr className="mt-4" />
                    </li>
                ))}
            </ul>
        </div>
  );
};

export default FAQ;