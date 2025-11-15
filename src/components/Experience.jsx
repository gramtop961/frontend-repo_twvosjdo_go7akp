import Section from './Section'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Hands-on industry exposure.">
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="grid gap-10">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 items-start">
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-2 size-3 rounded-full bg-cyan-400 shadow-[0_0_15px_4px_rgba(34,211,238,0.5)]" />
            <div className="text-white/80">
              <p className="text-sm text-white/60">06/2025 – 07/2025 • Remote</p>
              <h3 className="text-white font-semibold mt-1">Web Development Intern — VaultofCodes</h3>
            </div>
            <ul className="text-white/80 space-y-2 mt-4 sm:mt-0">
              <li>• Developed responsive UIs using React.js & Tailwind CSS for client dashboards.</li>
              <li>• Integrated REST APIs with Axios and improved performance via modular routing.</li>
              <li>• Collaborated on backend logic with Express.js and optimized MongoDB schemas.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
