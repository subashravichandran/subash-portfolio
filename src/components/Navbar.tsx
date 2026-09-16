import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-4">
          <a
            href="#"
            onClick={closeMenu}
            className="text-lg font-bold tracking-tight text-white"
          >
            Subash<span className="text-blue-400">.</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#experience"
              className="transition hover:text-white"
            >
              Experience
            </a>

            <a
              href="#skills"
              className="transition hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition hover:bg-blue-400"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white md:hidden"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <div className="flex flex-col gap-1 text-sm">
              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                About
              </a>

              <a
                href="#experience"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                Experience
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-lg bg-blue-500 px-3 py-3 font-medium text-white hover:bg-blue-400"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar