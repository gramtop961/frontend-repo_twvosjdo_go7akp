import Section from './Section'
import { motion } from 'framer-motion'

const items = [
  'Hack the Vibe 2025 — Built Arya, a FastAPI-based AI platform with multilingual speech & file processing using Gemini & Sarvam AI.',
  'Winner — CodeAstra Coding Contest (HackerRank)'
]

export default function Achievements() {
  return (
    <Section id="achievements" title="Certifications & Achievements">
      <div className="grid gap-4">
        {items.map((t, i) => (
          <motion.div key={t} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-5 rounded-2xl border border-white/10 bg-white/[0.04]">
            <p className="text-white/85">{t}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
