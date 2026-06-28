'use client'
import { useTranslation } from '@/lib/useTranslation'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="bg-sand py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-ocean-mid">
              {/* SVG illustration of water/SUP scene */}
              <svg viewBox="0 0 600 450" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Sky */}
                <defs>
                  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0B2545"/>
                    <stop offset="100%" stopColor="#134074"/>
                  </linearGradient>
                  <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0ABFBC"/>
                    <stop offset="100%" stopColor="#0B2545"/>
                  </linearGradient>
                  <linearGradient id="board" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3DD6D0"/>
                    <stop offset="100%" stopColor="#0ABFBC"/>
                  </linearGradient>
                </defs>
                <rect width="600" height="450" fill="url(#sky)"/>
                {/* Sun */}
                <circle cx="480" cy="80" r="45" fill="#F2E9D8" opacity="0.9"/>
                <circle cx="480" cy="80" r="35" fill="#D9C9A8" opacity="0.6"/>
                {/* Horizon mountains */}
                <path d="M0,220 L80,160 L150,200 L230,130 L320,170 L400,120 L480,155 L560,100 L600,140 L600,240 L0,240 Z" fill="#0B2545" opacity="0.5"/>
                {/* Water surface */}
                <rect x="0" y="230" width="600" height="220" fill="url(#water)"/>
                {/* Water ripples */}
                <ellipse cx="300" cy="260" rx="200" ry="15" fill="none" stroke="#3DD6D0" strokeWidth="1.5" opacity="0.3"/>
                <ellipse cx="300" cy="300" rx="160" ry="10" fill="none" stroke="#3DD6D0" strokeWidth="1" opacity="0.2"/>
                <ellipse cx="150" cy="350" rx="100" ry="8" fill="none" stroke="#3DD6D0" strokeWidth="1" opacity="0.15"/>
                <ellipse cx="450" cy="340" rx="120" ry="8" fill="none" stroke="#3DD6D0" strokeWidth="1" opacity="0.15"/>
                {/* SUP board */}
                <g transform="translate(230, 200)">
                  <ellipse cx="70" cy="42" rx="80" ry="12" fill="url(#board)" opacity="0.9"/>
                  <path d="M10,40 Q70,-10 130,40 Q70,52 10,40 Z" fill="url(#board)" opacity="0.95"/>
                  <path d="M50,10 Q70,-5 90,10" stroke="white" strokeWidth="2" fill="none" opacity="0.5"/>
                  {/* Person silhouette */}
                  <circle cx="70" cy="22" r="8" fill="#F2E9D8"/>
                  <path d="M70,30 L70,10 M60,20 L80,20" stroke="#F2E9D8" strokeWidth="3" strokeLinecap="round"/>
                  {/* Paddle */}
                  <line x1="80" y1="5" x2="40" y2="50" stroke="#D9C9A8" strokeWidth="2.5"/>
                  <ellipse cx="38" cy="52" rx="6" ry="10" fill="#D9C9A8" transform="rotate(-30 38 52)"/>
                </g>
                {/* Small waves */}
                <path d="M0,380 Q75,368 150,380 Q225,392 300,380 Q375,368 450,380 Q525,392 600,380" fill="none" stroke="white" strokeWidth="1.5" opacity="0.2"/>
                <path d="M0,410 Q75,398 150,410 Q225,422 300,410 Q375,398 450,410 Q525,422 600,410" fill="none" stroke="white" strokeWidth="1" opacity="0.15"/>
                {/* Sparkles */}
                <circle cx="100" cy="270" r="2" fill="white" opacity="0.6"/>
                <circle cx="490" cy="290" r="2" fill="white" opacity="0.5"/>
                <circle cx="350" cy="310" r="1.5" fill="white" opacity="0.4"/>
                <circle cx="180" cy="330" r="1.5" fill="white" opacity="0.3"/>
              </svg>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-sand-dark">
              <div className="w-10 h-10 rounded-xl bg-turquoise/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-ocean-deep/50 font-medium">From</p>
                <p className="text-ocean-deep font-bold text-lg">30€ / 4h</p>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-turquoise text-xs font-bold uppercase tracking-widest mb-3">
              {t('about.label')}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean-deep leading-tight mb-6">
              {t('about.title')}
            </h2>
            <p className="text-ocean-deep/70 text-base sm:text-lg leading-relaxed mb-8">
              {t('about.body')}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {(['about.tag1', 'about.tag2', 'about.tag3'] as const).map(key => (
                <span
                  key={key}
                  className="inline-flex items-center gap-1.5 bg-ocean-deep text-white text-sm font-medium px-4 py-2 rounded-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-turquoise" />
                  {t(key)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
