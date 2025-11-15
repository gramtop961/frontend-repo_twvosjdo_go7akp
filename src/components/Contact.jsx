import Section from './Section'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <Section id="contact" title="Contact Me" subtitle="Let’s build something exceptional together.">
      <div className="grid lg:grid-cols-2 gap-8">
        <motion.form initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="Your name" />
            <input className="px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="Email" />
          </div>
          <input className="px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="Subject" />
          <textarea rows={5} className="px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="Your message" />
          <button type="button" className="mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all">Send Message</button>
        </motion.form>
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h4 className="text-white font-semibold">Reach out</h4>
          <p className="text-white/70 mt-2">+91 8115106494</p>
          <p className="text-white/70">ranjanadi932@gmail.com</p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="#" aria-label="GitHub" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"><Github size={18} /></a>
            <a href="mailto:ranjanadi932@gmail.com" aria-label="Email" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"><Mail size={18} /></a>
            <a href="tel:+918115106494" aria-label="Phone" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"><Phone size={18} /></a>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
