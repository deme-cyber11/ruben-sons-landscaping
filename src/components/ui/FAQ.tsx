'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How quickly can you respond to emergency tree removal?',
    answer:
      'Our emergency response team is available 24/7, 365 days a year. In most cases, we dispatch a crew within 2 hours of your call. For trees on structures or blocking roads, we prioritize immediate response. Call us at 301-844-8429 for emergencies.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes, we are fully licensed as a Maryland Tree Expert and carry $2 million in liability insurance plus workers\' compensation coverage on every job. This protects both your property and our crew. We\'re happy to provide proof of insurance upon request.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'Absolutely. We provide free, no-obligation on-site estimates for all projects. One of our certified arborists will visit your property, assess the work needed, and provide a detailed written quote—usually within 24 hours. There\'s never any pressure to commit.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We proudly serve the entire DMV region including Washington DC, Montgomery County, Prince George\'s County, Frederick County in Maryland, and Arlington, Fairfax, Alexandria, and Loudoun County in Virginia. If you\'re unsure if we service your area, just give us a call.',
  },
  {
    question: 'How do I know I\'m getting a fair price?',
    answer:
      'We believe in transparent, upfront pricing. Our written quotes include a detailed breakdown of all work and costs—no hidden fees, no surprise charges. We also offer price matching on comparable quotes from licensed and insured competitors.',
  },
  {
    question: 'What happens if I\'m not satisfied with the work?',
    answer:
      'Your satisfaction is guaranteed. If you\'re not completely happy with our work, let us know within 48 hours and we\'ll return to make it right at no additional cost. We\'ve built our reputation on quality work and standing behind it—that\'s why we have hundreds of 5-star reviews.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-charcoal pr-8">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary-green/10 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-primary-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after FAQ */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Have more questions? We&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:301-844-8429"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-green text-white font-semibold rounded-lg hover:bg-primary-green/90 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call 301-844-8429
            </a>
            <a
              href="mailto:perezmabel0@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-green text-primary-green font-semibold rounded-lg hover:bg-primary-green hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
