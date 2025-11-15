import Section from './Section'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const data = [
  {
    title: 'Hostel Management System',
    tech: 'React.js • Tailwind • Node • Express • MongoDB • JWT • Cheerio • Razorpay',
    points: [
      'Signup limited to eligible students via university result scraping.',
      'Role-based dashboards for students, provosts, and chief provosts.',
      'OTP-based registration (Nodemailer) and secure payments (Razorpay).',
    ],
  },
  {
    title: 'StudyNotion – EdTech Platform',
    tech: 'React • Node • MongoDB • JWT • Tailwind • Razorpay • Cloudinary',
    points: [
      'Instructor dashboards for course creation & management.',
      'Student dashboards for enrolling & accessing course content.',
      'Payment gateway, OTP verification, Cloudinary-based media upload.',
    ],
  },
  {
    title: 'AI Code Reviewer',
    tech: 'React • Node • Express • MongoDB • JWT • Gemini API • Prism.js',
    points: [
      'AI-powered code review with Gemini.',
      'JWT authentication with user history tracking.',
      'Syntax-highlighted code rendering with image input support.',
    ],
  },
]

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <Section id="projects" title="Projects" subtitle="Interactive 3D cards with details in modals.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((p, i) => (
          <motion.button
            key={p.title}
            onClick={() => setActive(p)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="group text-left p-6 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
          >
            <div className="h-36 rounded-xl bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30 mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(34,211,238,0.35),transparent_45%),radial-gradient(circle_at_110%_120%,rgba(168,85,247,0.35),transparent_45%)]" />
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
            </div>
            <h3 className="text-white font-semibold">{p.title}</h3>
            <p className="text-white/60 text-sm mt-1">{p.tech}</p>
            <ul className="mt-3 text-white/80 text-sm space-y-1">
              {p.points.map((pt) => (
                <li key={pt}>• {pt}</li>
              ))}
            </ul>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ type: 'spring', stiffness: 220, damping: 20 }} className="max-w-2xl w-full rounded-2xl border border-white/10 bg-[#0B0B0B] p-6 shadow-2xl">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-white text-xl font-semibold">{active.title}</h3>
                  <p className="text-white/60 mt-1">{active.tech}</p>
                </div>
                <button onClick={() => setActive(null)} className="px-3 py-1.5 rounded-lg bg-white/5 text-white/80 hover:bg-white/10">Close</button>
              </div>
              <ul className="mt-4 text-white/80 space-y-2">
                {active.points.map((pt) => (
                  <li key={pt}>• {pt}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
