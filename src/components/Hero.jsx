import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaYoutube, FaRocket } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import Typewriter from './Typewriter'

export default function Hero(){
  return (
    <div className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="glass rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-8 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
          <div className="flex-1">

            <motion.h1 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:0.06}} className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="block text-white">Building digital</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">experiences</span>
            </motion.h1>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}} className="mt-4 text-xl md:text-2xl font-semibold h-8 textmuted">
              <Typewriter />
            </motion.div>

            <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.12}} className="mt-10 max-w-xl text-gray-300">Building intelligent systems that solve real-world problems.</motion.p>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.18}} className="mt-8 flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 shadow-lg hover:scale-105 transform transition">View Work <FaRocket className="ml-1"/></a>
              <a href="#contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition">Contact Me</a>
            </motion.div>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.22}} className="mt-8 flex items-center gap-4 text-2xl text-gray-300">
              <a href="https://www.linkedin.com/in/shivamkumar183/" aria-label="LinkedIn" className="p-2 rounded hover:text-indigo-400 transition"><FaLinkedin /></a>
              <a href="https://github.com/shivamkumar183" aria-label="GitHub" className="p-2 rounded hover:text-gray-300 transition"><FaGithub /></a>
              <a href="https://leetcode.com/u/Shivam_Sourav_183/" aria-label="LeetCode" className="p-2 rounded hover:text-orange-400 transition"><SiLeetcode /></a>
              <a href="https://www.youtube.com/@theshivamsourav" aria-label="YouTube" className="p-2 rounded hover:text-red-500 transition"><FaYoutube /></a>
            </motion.div>
          </div>

          <motion.div initial={{opacity:0, x:30}} animate={{opacity:1, x:0}} transition={{delay:0.2}} className="w-full lg:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden border border-white/6 bg-gradient-to-br from-black/60 to-black/30 p-6">
              <div className="aspect-video bg-[linear-gradient(135deg,#0b1220,transparent)] rounded-lg overflow-hidden flex items-center justify-center">
                <img alt="code-mockup" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" className="object-cover w-full h-full opacity-80" />
              </div>
            </div>

            
            <div className="absolute right-6 bottom-6 hidden md:flex glass px-3 py-2 rounded-lg flex items-center gap-3 shadow-md">
              <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-black text-sm">⚡</div>
              <div>
                <div className="text-xs text-gray-300">Performance</div>
                <div className="font-semibold">Fast</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
