'use client'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/lib/useTranslation'
import { locales, localeNames, type Locale } from '@/lib/i18n'

const TELEGRAM_URL = 'https://t.me/bluecoastsup'

export default function Navbar() {
  const { t, locale, changeLocale } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { key: 'nav.about', href: '#about' },
    { key: 'nav.prices', href: '#prices' },
    { key: 'nav.pickup', href: '#pickup' },
    { key: 'nav.equipment', href: '#equipment' },
    { key: 'nav.faq', href: '#faq' },
    { key: 'nav.contact', href: '#contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ocean-deep/95 backdrop-blur-md shadow-lg shadow-ocean-deep/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-turquoise flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 3.5C19 2 17 2 15.5 3.5L3.5 15.5C2 17 2 19 3.5 20.5C5 22 7 22 8.5 20.5L20.5 8.5C22 7 22 5 20.5 3.5Z"/>
                  <path d="M12 20L14 18L8 12L6 14C5 15 5 16.5 6 17.5L8.5 20C9.5 21 11 21 12 20Z" opacity="0.6"/>
                </svg>
              </div>
              <span className="text-white font-semibold text-base sm:text-lg tracking-tight">
                Blue Coast <span className="text-turquoise">SUP</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map(({ key, href }) => (
                <a
                  key={key}
                  href={href}
                  className="text-white/80 hover:text-turquoise text-sm font-medium transition-colors duration-200"
                >
                  {t(key)}
                </a>
              ))}
            </div>

            {/* Right side: lang + CTA */}
            <div className="flex items-center gap-3">
              {/* Language switcher */}
              <div className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-1">
                {locales.map((loc, i) => (
                  <span key={loc} className="flex items-center">
                    {i > 0 && <span className="text-white/30 text-xs mx-0.5">·</span>}
                    <button
                      onClick={() => changeLocale(loc as Locale)}
                      className={`text-xs font-semibold px-1 py-0.5 rounded transition-colors ${
                        locale === loc
                          ? 'text-turquoise'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      {localeNames[loc as Locale]}
                    </button>
                  </span>
                ))}
              </div>

              {/* Desktop CTA */}
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 bg-turquoise hover:bg-turquoise-light text-ocean-deep font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-turquoise/30"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.927 6.834l-1.676 7.894c-.126.567-.457.708-.927.44l-2.565-1.89-1.237 1.19c-.137.137-.252.252-.517.252l.184-2.617 4.765-4.305c.207-.184-.045-.286-.32-.102L7.89 14.42 5.361 13.64c-.557-.174-.568-.557.117-.824l9.687-3.73c.46-.168.864.112.762.748z"/>
                </svg>
                {t('nav.book')}
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="w-5 space-y-1">
                  <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                  <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-ocean-deep/95 backdrop-blur-md" onClick={() => setMenuOpen(false)} />
        <div className={`absolute top-16 left-0 right-0 bg-ocean-deep border-t border-white/10 transition-transform duration-300 ${menuOpen ? 'translate-y-0' : '-translate-y-4'}`}>
          <div className="px-6 py-6 space-y-1">
            {navLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block text-white/80 hover:text-turquoise text-base font-medium py-3 border-b border-white/5 transition-colors"
              >
                {t(key)}
              </a>
            ))}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full mt-4 bg-turquoise text-ocean-deep font-semibold py-3 rounded-full"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.927 6.834l-1.676 7.894c-.126.567-.457.708-.927.44l-2.565-1.89-1.237 1.19c-.137.137-.252.252-.517.252l.184-2.617 4.765-4.305c.207-.184-.045-.286-.32-.102L7.89 14.42 5.361 13.64c-.557-.174-.568-.557.117-.824l9.687-3.73c.46-.168.864.112.762.748z"/>
              </svg>
              {t('nav.book')}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
