import React from 'react'
import { motion } from 'framer-motion'
import profileImage from '../assets/media/images/profile.png'

export default function About(){
  return (
    <div className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-16">
          <h3 className="text-purple-400 font-semibold text-sm uppercase tracking-widest">WHO I AM</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4"></div>
        </motion.div>

        <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="glass rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
          <motion.img 
            src={profileImage}
            alt="Profile" 
            className="w-96 h-96 rounded-2xl object-cover border-2 border-white/10 shadow-lg flex-shrink-0"
            whileHover={{filter: "brightness(1.1) drop-shadow(0 0 10px rgba(128, 90, 213, 0.6))"}}
            transition={{duration: 0.2}}
          />

          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">I'm a passionate Full-Stack Developer and Machine Learning enthusiast.</h3>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">I enjoy building scalable web applications and intelligent systems that solve real-world problems. My passion lies in creating digital solutions that are not just functional, but also beautiful and user-centric.</p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">I have a strong foundation in <span className="text-purple-400 font-semibold">Java, JavaScript, and Python</span>, and I love transforming ideas into clean, efficient, and user-friendly digital solutions. I'm skilled in full-stack development, from crafting responsive front-end interfaces to building robust backend systems.</p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">I continuously improve my skills through real-world projects, internships, and problem-solving practice. Whether it's contributing to open-source projects or building personal applications, I'm always pushing myself to learn and grow.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
