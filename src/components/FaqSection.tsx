
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "When should I consider seeing a foot surgeon as a diabetic?",
      answer: "The American Diabetic Society recommends regular check-ups at least once a year. However, if you experience pain, decreased sensation in your foot, slipping of slippers, tingling sensations in your hands or feet, areas with hard skin (callosities), changes in foot or toe shape, or wounds and swelling, it is crucial to seek medical attention."
    },
    {
      question: "I have had a non-bothersome wound for two years. Do I still need to get it checked?",
      answer: "Absolutely. Any wounds, ulcers, or areas of hardness should be examined promptly. They can become a source of infection, which may lead to sudden infections, multiple surgeries, prolonged hospital stays, and in severe cases, amputation. Early evaluation and appropriate foot management can help prevent these complications."
    },
    {
      question: "I've heard that diabetic patients should avoid surgery due to infection risks. How can I undergo foot surgery if needed?",
      answer: "The risk of infection is higher when blood sugar levels are uncontrolled. If elective surgery is necessary, it is important to consult with your physician, endocrinologist, or one of our panel doctors. Together, we will determine the best time for surgery when it is safe to proceed. In cases of infection that require drainage, surgery can help in controlling your blood sugar levels."
    },
    {
      question: "What are the essential precautions and daily care needed for diabetic foot health?",
      answer: "It is essential to examine your foot daily for signs of dryness, calluses, injuries, and shoe bites. Regularly clean your feet with appropriate moisturizer and provide daily care. Always wear properly fitting footwear that supports and protects your feet. If you have any doubts or concerns, consult your doctor for guidance."
    },
    {
      question: "Can diabetes affect my feet even if I don't have any noticeable symptoms?",
      answer: "Yes, diabetes can still affect your feet even without noticeable symptoms. It is important to remember that diabetes can cause nerve damage and decrease blood flow to the feet, leading to a condition called diabetic neuropathy. This can result in a loss of sensation and delayed wound healing. Therefore, it is crucial to prioritize regular foot check-ups and proper foot care, even if you don't experience any immediate symptoms."
    },
    {
      question: "How can I prevent foot complications as a diabetic?",
      answer: "To prevent foot complications, there are several important measures you can take. Firstly, maintain good blood sugar control to minimize the risk of nerve damage and poor circulation. Additionally, perform daily foot inspections to identify any abnormalities or injuries promptly. Keep your feet clean and moisturized, avoiding excessive dryness. Wear comfortable, well-fitting shoes and socks that provide adequate support and protection. Lastly, consult your healthcare provider for personalized guidance and advice on preventing foot complications based on your specific condition."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-clinic-text mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-clinic-text font-medium text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-clinic-text/80 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
