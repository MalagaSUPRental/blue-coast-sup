'use client'
import { useTranslation } from '@/lib/useTranslation'

const TELEGRAM_URL = 'https://t.me/bluecoastsup'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep via-ocean-mid to-ocean-deep" />

      {/* Animated water rings */}
      <div className="absolute inset-0 overflow-hidden">
        {[1, 2, 3].map(i => (
          <div
            key={i}
            className="absolute rounded-full border border-turquoise/10"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animation: `pulse ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      {/* Wave shapes */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg viewBox="0 0 1440 120" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,64 C360,120 720,0 1080,64 C1260,92 1380,44 1440,64 L1440,120 L0,120 Z" fill="#F2E9D8" opacity="0.15"/>
          <path d="M0,80 C480,40 960,100 1440,80 L1440,120 L0,120 Z" fill="#F2E9D8" opacity="0.08"/>
          <path d="M0,96 C360,80 720,112 1080,96 C1260,88 1380,104 1440,96 L1440,120 L0,120 Z" fill="white" opacity="1"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-32">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-turquoise/30 text-turquoise text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-turquoise pulse-glow" />
          {t('hero.badge')}
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-delay-1 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          {t('hero.headline').split(' ').slice(0, 2).join(' ')}{' '}
          <span className="text-turquoise italic">{t('hero.headline').split(' ').slice(2).join(' ')}</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up-delay-2 text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          {t('hero.sub')}
        </p>

        {/* CTA */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-turquoise hover:bg-turquoise-light text-ocean-deep font-bold text-base sm:text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-turquoise/40 pulse-glow"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.927 6.834l-1.676 7.894c-.126.567-.457.708-.927.44l-2.565-1.89-1.237 1.19c-.137.137-.252.252-.517.252l.184-2.617 4.765-4.305c.207-.184-.045-.286-.32-.102L7.89 14.42 5.361 13.64c-.557-.174-.568-.557.117-.824l9.687-3.73c.46-.168.864.112.762.748z"/>
            </svg>
            {t('hero.cta')}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-white/40 text-xs">
          <span>{t('hero.scroll')}</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent animate-bounce" />
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.1; transform: translate(-50%, -50%) scale(1.05); }
        }
      `}</style>
    </section>
  )
}
