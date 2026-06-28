'use client'
import { useTranslation } from '@/lib/useTranslation'

const TELEGRAM_URL = 'https://t.me/bluecoastsup'
const WHATSAPP_URL = 'https://wa.me/34600000000'
const PHONE = '+34 600 000 000'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-turquoise text-xs font-bold uppercase tracking-widest mb-3">
            {t('contact.label')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean-deep mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-ocean-deep/60 text-base sm:text-lg">
            {t('contact.sub')}
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {/* Telegram */}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 bg-sand hover:bg-ocean-deep rounded-3xl p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 border border-sand-dark hover:border-transparent"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#0088cc]/10 group-hover:bg-[#0088cc]/20 flex items-center justify-center transition-colors">
              <svg className="w-7 h-7 text-[#0088cc]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.927 6.834l-1.676 7.894c-.126.567-.457.708-.927.44l-2.565-1.89-1.237 1.19c-.137.137-.252.252-.517.252l.184-2.617 4.765-4.305c.207-.184-.045-.286-.32-.102L7.89 14.42 5.361 13.64c-.557-.174-.568-.557.117-.824l9.687-3.73c.46-.168.864.112.762.748z"/>
              </svg>
            </div>
            <div>
              <p className="font-semibold text-ocean-deep group-hover:text-white text-sm mb-1">Telegram</p>
              <p className="text-ocean-deep/50 group-hover:text-white/60 text-xs">{t('contact.telegram')}</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 bg-sand hover:bg-ocean-deep rounded-3xl p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 border border-sand-dark hover:border-transparent"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 group-hover:bg-[#25D366]/20 flex items-center justify-center transition-colors">
              <svg className="w-7 h-7 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <p className="font-semibold text-ocean-deep group-hover:text-white text-sm mb-1">WhatsApp</p>
              <p className="text-ocean-deep/50 group-hover:text-white/60 text-xs">{t('contact.whatsapp')}</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex flex-col items-center gap-4 bg-sand rounded-3xl p-6 sm:p-8 text-center border border-sand-dark">
            <div className="w-14 h-14 rounded-2xl bg-turquoise/10 flex items-center justify-center">
              <svg className="w-7 h-7 text-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-ocean-deep text-sm mb-1">{t('contact.location')}</p>
              <p className="text-ocean-deep/50 text-xs">Costa del Sol, Spain</p>
            </div>
          </div>
        </div>

        {/* Big CTA */}
        <div className="bg-gradient-to-br from-ocean-deep to-ocean-mid rounded-3xl p-8 sm:p-12 text-center">
          <p className="text-white/60 text-sm mb-2">{PHONE}</p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-turquoise hover:bg-turquoise-light text-ocean-deep font-bold text-base sm:text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-turquoise/40"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.927 6.834l-1.676 7.894c-.126.567-.457.708-.927.44l-2.565-1.89-1.237 1.19c-.137.137-.252.252-.517.252l.184-2.617 4.765-4.305c.207-.184-.045-.286-.32-.102L7.89 14.42 5.361 13.64c-.557-.174-.568-.557.117-.824l9.687-3.73c.46-.168.864.112.762.748z"/>
            </svg>
            {t('sticky.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
