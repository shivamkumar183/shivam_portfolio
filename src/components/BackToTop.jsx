import React from 'react'

export default function BackToTop(){
  const scrollTop = ()=> window.scrollTo({top:0, behavior:'smooth'})
  return (
    <button aria-label="Back to top" onClick={scrollTop} className="fixed right-6 bottom-6 w-12 h-12 rounded-full glass flex items-center justify-center text-xl shadow-lg">↑</button>
  )
}
