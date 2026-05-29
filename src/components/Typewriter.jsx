import React, { useState, useEffect } from 'react'

const roles = [
  'Full Stack Developer',
  'UI/UX Designer',
  'AI/ML Enthusiast',
  'Java Developer',
  'Software Developer'
]

export default function Typewriter() {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
        if (charIndex === 0) {
          setIsDeleting(false)
          setRoleIndex((roleIndex + 1) % roles.length)
        }
      } else {
        setDisplayText(currentRole.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
        if (charIndex === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timer)
  }, [charIndex, roleIndex, isDeleting])

  return (
    <span className="typewriter text-purple-400">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
