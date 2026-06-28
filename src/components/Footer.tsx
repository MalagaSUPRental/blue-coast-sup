'use client'
import { useTranslation } from '@/lib/useTranslation'

const TELEGRAM_URL = 'https://t.me/bluecoastsup'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-ocean-deep border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-turquoise flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 3.5C19 2 17 2 15.5 3.5L3.5 15.5C2 17 2 19 3.5 20.5C5 22 7 22 8.5 20.5L20.5 8.5C22 7 22 5 20.5 3.5Z"/>
              </svg>
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Blue Coast <span className="text-turquoise">SUP</span></p>
              <p className="text-white/40 text-xs">{t('footer.tagline')}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-turquoise transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.927 6.834l-1.676 7.894c-.126.567-.457.708-.927.44l-2.565-1.89-1.237 1.19c-.137.137-.252.252-.517.252l.184-2.617 4.765-4.305c.207-.184-.045-.286-.32-.102L7.89 14.42 5.361 13.64c-.557-.174-.568-.557.117-.824l9.687-3.73c.46-.168.864.112.762.748z"/>
              </svg>
            </a>
            <span className="text-white/30 text-xs">{t('footer.copy')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
