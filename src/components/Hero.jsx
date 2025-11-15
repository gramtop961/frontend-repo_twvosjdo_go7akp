import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] grid place-items-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.14),transparent_40%)]" />
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-28 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-left">
          <p className="text-cyan-300/90 text-xs tracking-[0.35em] uppercase">Full Stack Developer</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight text-white">
            ADITYA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">RANJAN</span>
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl">
            Building secure, high-performance web applications with the MERN stack.
            I design intuitive UIs and robust REST APIs, focused on scalability and seamless user experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-xl bg-white/5 text-white/90 hover:bg-white/10">Contact Me</a>
          </div>
          <div className="mt-8 text-sm text-white/70 space-y-1">
            <p>+91 8115106494 • Lucknow, Uttar Pradesh</p>
            <p>ranjanadi932@gmail.com</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
          <div className="absolute -inset-1 rounded-3xl blur-2xl opacity-40 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20" />
          <div className="absolute inset-0 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
