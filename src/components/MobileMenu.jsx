import React from 'react'

export default function MobileMenu({open, onClose}){
  if(!open) return null
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      <div className="absolute top-16 right-4 w-64 bg-[#071226]/80 glass p-4 rounded-md shadow-lg">
        <ul className="flex flex-col gap-3">
          <li><a href="#about" onClick={onClose}>About</a></li>
          <li><a href="#education" onClick={onClose}>Education</a></li>
          <li><a href="#skills" onClick={onClose}>Skills</a></li>
          <li><a href="#projects" onClick={onClose}>Projects</a></li>
          <li><a href="#experience" onClick={onClose}>Experience</a></li>
          <li><a href="#contact" onClick={onClose}>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}
