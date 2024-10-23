import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How quickly will I receive my certificate?',
    answer: "Upon successful purchase, you'll receive your certificate credentials within minutes. Our automated system ensures instant delivery to your registered email address."
  },
  {
    question: 'Can I publish apps on the App Store with these certificates?',
    answer: "Yes, our certificates are officially recognized by Apple and allow you to publish apps on the App Store, following Apple's standard review process and guidelines."
  },
  {
    question: "What's included in the certificate package?",
    answer: 'Each certificate package includes the digital certificate, detailed setup instructions, access to our support team, and complementary development tools to help you get started.'
  },
  {
    question: 'How long are the certificates valid?',
    answer: "All certificates are valid for one year from the date of issuance. We'll notify you before expiration so you can renew and maintain uninterrupted access."
  },
  {
    question: 'Do you provide technical support?',
    answer: 'Yes, we provide comprehensive technical support to help you with certificate installation, configuration, and any issues you might encounter during development.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers. All transactions are secure and processed through encrypted channels.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about our certificates</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-left font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}