"use client";
import React, { useState } from "react";

function FAQs() {
  const [searchTerm, setSearchTerm] = useState("");
  const faqs = [
    {
      question: "How do I book a facility?",
      answer:
        "To book a facility, simply navigate to the booking section, select your desired space, and follow the prompts to finalize your reservation.",
    },
    {
      question: "What types of facilities can I book?",
      answer:
        "You can book various facilities including classrooms, conference rooms, and recreational spaces, depending on availability.",
    },
    {
      question: "How will I receive notifications about my bookings?",
      answer:
        "You will receive notifications via email and in-app alerts to keep you updated on your bookings and any changes.",
    },
    {
      question: "Can I cancel or modify my bookings?",
      answer:
        "Yes, you can easily cancel or modify your bookings through the user dashboard, subject to our cancellation policy.",
    },
    {
      question: "What should I do if I encounter issues while booking?",
      answer:
        "If you face any issues, please contact our support team for assistance, and we'll help resolve it as quickly as possible.",
    },
  ];

  const filterFAQs = () => {
    return faqs.filter(
      ({ question, answer }) =>
        question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  const toggleFAQ = (index: number) => {
    const answerDiv = document.getElementById(`answer-${index}`);
    if (answerDiv) {
      answerDiv.classList.toggle("hidden");
    }
  };

  const highlightText = (text: string, filter: string): string => {
    const regex = new RegExp(`(${filter})`, "gi");
    return text.replace(
      regex,
      (match: string) => `<span className="highlight">${match}</span>`
    );
  };

  return (
    <div className="p-8 bg-white rounded shadow sm:w-full lg:w-1/2 mx-auto my-10">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">
          Frequently Asked Questions
        </h1>
        <input
          type="text"
          id="searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search FAQs"
          className="w-full sm:w-1/3 p-2 mb-4 sm:mb-0 border rounded"
        />
      </div>
      <ul id="faqList">
        {filterFAQs().map((faq, index) => (
          <li key={index} className="mb-4">
            <button
              className="w-full text-left p-4 bg-gray-100 rounded-t shadow hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              {index + 1}.{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: highlightText(faq.question, searchTerm),
                }}
              />
            </button>
            <div
              id={`answer-${index}`}
              className="p-4 bg-white border rounded-b shadow-inner hidden"
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: highlightText(faq.answer, searchTerm),
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQs;
