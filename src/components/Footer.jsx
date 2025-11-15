export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Aditya Ranjan. All rights reserved.</p>
        <p className="text-white/40 text-sm mt-3 sm:mt-0">Built with love, code, and neon glows.</p>
      </div>
    </footer>
  )
}
