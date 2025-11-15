import Section from './Section'
import { motion } from 'framer-motion'

const skills = [
  { label: 'JavaScript', lvl: 90 },
  { label: 'TypeScript', lvl: 75 },
  { label: 'C++', lvl: 70 },
  { label: 'C', lvl: 65 },
  { label: 'React.js', lvl: 90 },
  { label: 'Node.js', lvl: 85 },
  { label: 'Express.js', lvl: 85 },
  { label: 'Redux', lvl: 70 },
  { label: 'Tailwind CSS', lvl: 90 },
  { label: 'MongoDB', lvl: 80 },
  { label: 'SQL', lvl: 70 },
  { label: 'Git/GitHub', lvl: 85 },
  { label: 'Postman', lvl: 80 },
  { label: 'Figma', lvl: 75 },
  { label: 'Socket.IO', lvl: 65 },
  { label: 'HTML5/CSS3', lvl: 90 },
  { label: 'Windows', lvl: 90 },
]

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Interactive skill bars with neon glow.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="p-4 rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="flex items-center justify-between">
              <p className="text-white/90">{s.label}</p>
              <p className="text-white/60 text-sm">{s.lvl}%</p>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: s.lvl + '%' }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }} className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 shadow-[0_0_20px_4px_rgba(56,189,248,0.35)]" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
