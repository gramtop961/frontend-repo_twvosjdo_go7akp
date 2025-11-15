import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const nav = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="text-white font-semibold tracking-widest text-sm sm:text-base">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">ADITYA</span>
            <span className="ml-1 text-white/70">RANJAN</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-white/70 hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" aria-label="GitHub" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:ranjanadi932@gmail.com" aria-label="Email" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors">
              <Mail size={18} />
            </a>
            <a href="tel:+918115106494" aria-label="Phone" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors">
              <Phone size={18} />
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/5 text-white/90 hover:bg-white/10">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden grid gap-2 pb-4">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg bg-white/5 text-white/80 hover:text-white hover:bg-white/10">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
