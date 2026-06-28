'use client'
import { useTranslation } from '@/lib/useTranslation'

const ruleKeys = [
  'rules.1', 'rules.2', 'rules.3', 'rules.4', 'rules.5', 'rules.6', 'rules.7'
]

export default function Rules() {
  const { t } = useTranslation()

  return (
    <section id="rules" className="bg-ocean-deep py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-turquoise text-xs font-bold uppercase tracking-widest mb-3">
            {t('rules.label')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            {t('rules.title')}
          </h2>
        </div>

        <div className="space-y-3">
          {ruleKeys.map((key, i) => (
            <div
              key={key}
              className="flex items-start gap-4 bg-white/5 hover:bg-white/8 rounded-2xl px-5 sm:px-6 py-4 transition-colors"
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-turquoise/20 text-turquoise text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                {t(key as any)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
