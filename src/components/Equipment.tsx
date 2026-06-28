'use client'
import { useTranslation } from '@/lib/useTranslation'

export default function Equipment() {
  const { t } = useTranslation()

  const boards = [
    {
      nameKey: 'equip.board1.name',
      descKey: 'equip.board1.desc',
      length: '10\'6" (322cm)',
      tags: ['equip.tag.allaround', 'equip.tag.beginner', 'equip.tag.stable'],
      color: '#0ABFBC',
      accentColor: '#3DD6D0',
    },
    {
      nameKey: 'equip.board2.name',
      descKey: 'equip.board2.desc',
      length: '10\'2" (310cm)',
      tags: ['equip.tag.compact', 'equip.tag.responsive', 'equip.tag.agile'],
      color: '#134074',
      accentColor: '#0ABFBC',
    },
  ]

  return (
    <section id="equipment" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-turquoise text-xs font-bold uppercase tracking-widest mb-3">
            {t('equip.label')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean-deep mb-4">
            {t('equip.title')}
          </h2>
          <p className="text-ocean-deep/60 text-base sm:text-lg">
            {t('equip.sub')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {boards.map((board, i) => (
            <div
              key={i}
              className="group rounded-3xl overflow-hidden border border-sand-dark hover:border-turquoise/30 transition-all duration-300 hover:shadow-xl hover:shadow-ocean-deep/10"
            >
              {/* Board visual */}
              <div className="relative h-48 sm:h-56 overflow-hidden" style={{ backgroundColor: board.color }}>
                <svg viewBox="0 0 600 220" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Water */}
                  <rect x="0" y="120" width="600" height="100" fill={board.color} opacity="0.8"/>
                  {/* Board shape */}
                  <g transform="translate(120, 60)">
                    <defs>
                      <linearGradient id={`boardGrad${i}`} x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={board.accentColor} stopOpacity="0.9"/>
                        <stop offset="50%" stopColor="white" stopOpacity="0.95"/>
                        <stop offset="100%" stopColor={board.accentColor} stopOpacity="0.9"/>
                      </linearGradient>
                    </defs>
                    {/* Inflatable SUP board shape */}
                    <path
                      d="M0,30 Q30,-15 180,-10 Q320,-5 360,25 Q370,32 360,40 Q320,65 180,65 Q30,68 0,40 Q-8,35 0,30 Z"
                      fill={`url(#boardGrad${i})`}
                      stroke="white"
                      strokeWidth="1"
                      strokeOpacity="0.3"
                    />
                    {/* Board deck */}
                    <path
                      d="M20,30 Q30,18 180,16 Q310,14 340,28 Q350,35 340,42 Q310,52 180,50 Q30,50 20,40 Q16,36 20,30 Z"
                      fill="white"
                      opacity="0.15"
                    />
                    {/* Handle */}
                    <rect x="155" y="26" width="50" height="14" rx="7" fill="black" opacity="0.2"/>
                    {/* Fin */}
                    <path d="M340,45 L370,90 L360,45 Z" fill={board.accentColor} opacity="0.7"/>
                    {/* Paddle */}
                    <line x1="260" y1="-40" x2="200" y2="30" stroke="white" strokeWidth="3" opacity="0.7"/>
                    <ellipse cx="198" cy="32" rx="8" ry="16" fill="white" opacity="0.5" transform="rotate(-30 198 32)"/>
                  </g>
                  {/* Water waves */}
                  <path d="M0,140 Q150,125 300,140 Q450,155 600,140" fill="none" stroke="white" strokeWidth="1.5" opacity="0.2"/>
                  <path d="M0,160 Q150,148 300,160 Q450,172 600,160" fill="none" stroke="white" strokeWidth="1" opacity="0.15"/>
                  {/* Board number badge */}
                  <circle cx="540" cy="40" r="24" fill="white" opacity="0.15"/>
                  <text x="540" y="47" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" opacity="0.8">{i + 1}</text>
                </svg>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 bg-sand">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-ocean-deep mb-2">
                  {t(board.nameKey as any)}
                </h3>
                <p className="text-ocean-deep/60 text-sm sm:text-base leading-relaxed mb-5">
                  {t(board.descKey as any)}
                </p>

                {/* Specs */}
                <div className="flex items-center gap-4 mb-5 text-sm">
                  <div className="flex items-center gap-1.5 text-ocean-deep/70">
                    <svg className="w-4 h-4 text-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span>{t('equip.length')}: <strong>{board.length}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-ocean-deep/70">
                    <svg className="w-4 h-4 text-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{t('equip.type')}: <strong>{t('equip.inflatable')}</strong></span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {board.tags.map(tagKey => (
                    <span
                      key={tagKey}
                      className="text-xs font-medium bg-ocean-deep/8 text-ocean-deep/70 px-3 py-1.5 rounded-full"
                    >
                      {t(tagKey as any)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
