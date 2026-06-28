'use client'
import { useState } from 'react'
import { useTranslation } from '@/lib/useTranslation'

const faqItems = [
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q3', a: 'faq.a3' },
  { q: 'faq.q4', a: 'faq.a4' },
  { q: 'faq.q5', a: 'faq.a5' },
]

export default function FAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-sand py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-turquoise text-xs font-bold uppercase tracking-widest mb-3">
            {t('faq.label')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean-deep">
            {t('faq.title')}
          </h2>
        </div>

        <div className="space-y-3">
          {faqItems.map(({ q, a }, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen ? 'bg-ocean-deep shadow-lg shadow-ocean-deep/10' : 'bg-white border border-sand-dark hover:border-turquoise/30'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left"
                >
                  <span className={`font-semibold text-sm sm:text-base pr-4 ${isOpen ? 'text-white' : 'text-ocean-deep'}`}>
                    {t(q as any)}
                  </span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-turquoise text-ocean-deep rotate-45' : 'bg-sand-dark text-ocean-deep'
                  }`}>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5">
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                      {t(a as any)}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
