'use client'
import { useTranslation } from '@/lib/useTranslation'

const TELEGRAM_URL = 'https://t.me/bluecoastsup'

const deliveryOptions = [
  { key: 'pickup.malaga', price: '5€', icon: '🏖️' },
  { key: 'pickup.elpalo', price: '10€', icon: '🌊' },
  { key: 'pickup.outside', price: '20€', icon: '🗺️' },
]

export default function Pickup() {
  const { t } = useTranslation()

  return (
    <section id="pickup" className="bg-sand py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-turquoise text-xs font-bold uppercase tracking-widest mb-3">
            {t('pickup.label')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean-deep">
            {t('pickup.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto">
          {/* Free Pickup */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-sand-dark">
            <div className="w-12 h-12 rounded-2xl bg-turquoise/10 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="inline-block bg-turquoise/10 text-turquoise text-xs font-bold px-3 py-1 rounded-full mb-3">
              FREE
            </div>
            <h3 className="font-display text-xl font-bold text-ocean-deep mb-3">
              {t('pickup.free.title')}
            </h3>
            <p className="text-ocean-deep/60 text-sm sm:text-base leading-relaxed">
              {t('pickup.free.body')}
            </p>
            {/* Map pin visual */}
            <div className="mt-5 flex items-center gap-2 text-xs text-ocean-deep/50 bg-sand rounded-xl px-4 py-3">
              <svg className="w-4 h-4 text-turquoise flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Hospital Carlos Haya area · Málaga
            </div>
          </div>

          {/* Delivery */}
          <div className="bg-ocean-deep rounded-3xl p-6 sm:p-8 text-white">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold mb-5">
              {t('pickup.delivery.title')}
            </h3>
            <div className="space-y-3">
              {deliveryOptions.map(({ key, price, icon }) => (
                <div key={key} className="flex items-center justify-between bg-white/8 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">{icon}</span>
                    <span className="text-white/80 text-sm">{t(key)}</span>
                  </div>
                  <span className="text-turquoise font-bold text-sm">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-turquoise hover:bg-turquoise-light text-ocean-deep font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-turquoise/30"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.927 6.834l-1.676 7.894c-.126.567-.457.708-.927.44l-2.565-1.89-1.237 1.19c-.137.137-.252.252-.517.252l.184-2.617 4.765-4.305c.207-.184-.045-.286-.32-.102L7.89 14.42 5.361 13.64c-.557-.174-.568-.557.117-.824l9.687-3.73c.46-.168.864.112.762.748z"/>
            </svg>
            {t('pickup.book.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
