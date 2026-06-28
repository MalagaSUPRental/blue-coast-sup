'use client'
import { useTranslation } from '@/lib/useTranslation'

const TELEGRAM_URL = 'https://t.me/bluecoastsup'

const priceItems = [
  { key: 'prices.4h', price: 30, popular: false },
  { key: 'prices.day', price: 40, popular: false },
  { key: 'prices.24h', price: 50, popular: true },
  { key: 'prices.2d', price: 85, popular: false },
  { key: 'prices.3d', price: 115, popular: false },
]

const includesItems = [
  { key: 'prices.board', icon: '🏄' },
  { key: 'prices.paddle', icon: '🚣' },
  { key: 'prices.leash', icon: '🔗' },
  { key: 'prices.pump', icon: '💨' },
  { key: 'prices.bag', icon: '🎒' },
  { key: 'prices.instructions', icon: '📖' },
]

export default function Prices() {
  const { t } = useTranslation()

  return (
    <section id="prices" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-turquoise text-xs font-bold uppercase tracking-widest mb-3">
            {t('prices.label')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean-deep mb-4">
            {t('prices.title')}
          </h2>
          <p className="text-ocean-deep/60 text-base sm:text-lg">
            {t('prices.sub')}
          </p>
        </div>

        {/* Price cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-12">
          {priceItems.map(({ key, price, popular }) => (
            <a
              key={key}
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group rounded-2xl p-5 sm:p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
                popular
                  ? 'bg-ocean-deep text-white shadow-lg shadow-ocean-deep/20'
                  : 'bg-sand hover:bg-ocean-deep hover:text-white border border-sand-dark hover:border-transparent'
              }`}
            >
              {popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-turquoise text-ocean-deep text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  {t('prices.popular')}
                </div>
              )}
              <div className={`text-3xl sm:text-4xl font-bold mb-1 ${popular ? 'text-turquoise' : 'text-ocean-deep group-hover:text-turquoise'}`}>
                {price}€
              </div>
              <div className={`text-sm font-medium ${popular ? 'text-white/70' : 'text-ocean-deep/60 group-hover:text-white/70'}`}>
                {t(key)}
              </div>
              <div className={`mt-3 text-xs font-semibold ${popular ? 'text-turquoise/80' : 'text-ocean-deep/40 group-hover:text-turquoise/70'}`}>
                {t('prices.book')} →
              </div>
            </a>
          ))}
        </div>

        {/* Includes + Deposit */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Includes */}
          <div className="bg-sand rounded-3xl p-6 sm:p-8">
            <h3 className="font-semibold text-ocean-deep text-base mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-turquoise/20 text-turquoise text-xs flex items-center justify-center">✓</span>
              {t('prices.includes')}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {includesItems.map(({ key, icon }) => (
                <div key={key} className="flex items-center gap-2 text-sm text-ocean-deep/70">
                  <span className="text-base">{icon}</span>
                  <span>{t(key)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deposit */}
          <div className="bg-ocean-deep rounded-3xl p-6 sm:p-8 text-white">
            <h3 className="font-semibold text-base mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-turquoise/20 text-turquoise text-xs flex items-center justify-center">€</span>
              {t('prices.deposit')}
            </h3>
            <div className="text-turquoise text-3xl font-bold mb-2">{t('prices.deposit.amount')}</div>
            <p className="text-white/60 text-sm leading-relaxed">{t('prices.deposit.note')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
