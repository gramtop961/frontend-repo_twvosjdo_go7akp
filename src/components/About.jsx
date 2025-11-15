import Section from './Section'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="Full Stack Developer passionate about building scalable products.">
      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2">
          <p className="text-white/80 leading-relaxed">
            Full Stack Developer with hands-on experience in building secure and high-performance web applications using the MERN stack: MongoDB, Express.js, React.js, and Node.js. Demonstrated ability to design intuitive user interfaces and robust RESTful APIs, with a passion for continuous learning and delivering scalable user-facing solutions.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { k: 'Location', v: 'Lucknow, Uttar Pradesh' },
              { k: 'Email', v: 'ranjanadi932@gmail.com' },
              { k: 'Phone', v: '+91 8115106494' },
              { k: 'Open to', v: 'Internships & Freelance' },
            ].map((item) => (
              <div key={item.k} className="p-4 rounded-xl border border-white/10 bg-white/[0.03]">
                <p className="text-white/50 text-xs">{item.k}</p>
                <p className="text-white mt-1">{item.v}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="">
          <div className="p-1 rounded-2xl bg-gradient-to-b from-cyan-500/30 via-blue-500/20 to-purple-500/30">
            <div className="rounded-2xl p-6 bg-[#0B0B0B] border border-white/10">
              <p className="text-white/70 text-sm">Quick Facts</p>
              <ul className="mt-4 space-y-2 text-white/90 text-sm">
                <li>• MERN stack specialist</li>
                <li>• REST & JWT Auth</li>
                <li>• UI/UX minded developer</li>
                <li>• Loves performance tuning</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
