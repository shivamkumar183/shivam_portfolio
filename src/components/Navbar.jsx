import React, { useState } from 'react'
import { motion } from 'framer-motion'
import MobileMenu from './MobileMenu'

const links = ["about", "education", "skills", "projects", "experience", "certifications", "youtube", "contact"]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-40 top-0 glass py-3 backdrop-blur-md"
    >
      <div className="container mx-auto px-6 lg:px-20 flex items-center justify-between">
        <a href="#hero" className="text-xl font-semibold flex items-center gap-2">
          <span className="text-indigo-400">&lt;Shivam /&gt;</span>
        </a>

        <ul className="hidden md:flex gap-6 items-center text-sm">
          {links.map(l => (
            <li key={l}><a href={`#${l}`} className="hover:underline capitalize text-gray-200/90">{l}</a></li>
          ))}
          <li>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-3 py-1 rounded-md bg-gradient-to-r from-purple-600 to-indigo-500 text-sm shadow">Resume</a>
          </li>
        </ul>

        <div className="md:hidden">
          <motion.button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg glass text-white text-xl hover:bg-indigo-500/20 hover:text-indigo-300 transition-all duration-200"
          >
            ☰
          </motion.button>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </motion.nav>
  )
}
