'use client'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/lib/useTranslation'

const TELEGRAM_URL = 'https://t.me/bluecoastsup'

export default function StickyCTA() {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-turquoise hover:bg-turquoise-light text-ocean-deep font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-full shadow-2xl shadow-turquoise/40 transition-all duration-300 hover:scale-105 pulse-glow whitespace-nowrap"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.927 6.834l-1.676 7.894c-.126.567-.457.708-.927.44l-2.565-1.89-1.237 1.19c-.137.137-.252.252-.517.252l.184-2.617 4.765-4.305c.207-.184-.045-.286-.32-.102L7.89 14.42 5.361 13.64c-.557-.174-.568-.557.117-.824l9.687-3.73c.46-.168.864.112.762.748z"/>
        </svg>
        {t('sticky.cta')}
      </a>
    </div>
  )
}
