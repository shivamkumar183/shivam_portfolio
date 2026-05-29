import React from 'react'
import { motion } from 'framer-motion'

export default function MobileMenu({open, onClose}){
  const menuVariants = {
    hidden: {
      opacity: 0,
      x: 20,
      pointerEvents: 'none'
    },
    visible: {
      opacity: 1,
      x: 0,
      pointerEvents: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  }

  const backdropVariants = {
    hidden: {
      opacity: 0,
      pointerEvents: 'none'
    },
    visible: {
      opacity: 1,
      pointerEvents: 'auto',
      transition: {
        duration: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.3
      }
    })
  }

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'YouTube', href: '#youtube' },
    { name: 'Contact', href: '#contact' }
  ]

  if(!open) return null

  return (
    <motion.div
      className="fixed inset-0 z-50"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={backdropVariants}
    >
      {/* Backdrop with blur */}
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        variants={backdropVariants}
      />

      {/* Menu Panel */}
      <motion.div
        className="absolute top-20 right-4 w-72 bg-gradient-to-br from-[#0a1929]/95 to-[#071226]/95 backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-indigo-500/20"
        variants={menuVariants}
      >
        {/* Menu Items List */}
        <motion.ul className="flex flex-col gap-2">
          {links.map((link, index) => (
            <motion.li
              key={link.name}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <a
                href={link.href}
                onClick={onClose}
                className="block px-4 py-3 rounded-lg text-white font-medium capitalize hover:bg-indigo-500/20 hover:text-indigo-300 transition-all duration-200 hover:translate-x-1 cursor-pointer"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Divider */}
        <div className="my-4 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

        {/* Resume Button */}
        <motion.div
          custom={links.length}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
            className="block px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold text-center hover:shadow-lg hover:from-purple-500 hover:to-indigo-400 transition-all duration-200 transform hover:scale-105 cursor-pointer"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
