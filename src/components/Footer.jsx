import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 py-6">
      <div className="container mx-auto px-6 lg:px-20 text-center text-sm text-gray-400">
        <div>© {new Date().getFullYear()} Shivam Kumar. All rights reserved.</div>
        <div className="mt-2">Built with React & Tailwind</div>
      </div>
    </footer>
  )
}
