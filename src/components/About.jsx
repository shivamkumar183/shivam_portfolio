import React from 'react'
import { motion } from 'framer-motion'
import profileImage from '../assets/media/images/profile.png'

export default function About(){
  return (
    <div className="relative py-16 md:py-24">
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
            {/* <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">I'm a passionate Full-Stack Developer and Machine Learning enthusiast.</h3>
             */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">I'm a technology professional currently working as an Associate, Correspondence – Template Development at Onity Group, with an academic background in Computer Science Engineering specializing in Artificial Intelligence and Machine Learning.</p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">In my current role, I work with backend correspondence systems, ICM, Scalar, and Customer Communications Management (CCM). My responsibilities include template development, workflow management, quality control testing, and validating templates to ensure accuracy, consistency, and reliability.</p>

            {/* <p className="text-gray-300 text-lg leading-relaxed mb-6">I have a strong foundation in <span className="text-purple-400 font-semibold">Java, JavaScript, and Python</span>, and I love transforming ideas into clean, efficient, and user-friendly digital solutions. I'm skilled in full-stack development, from crafting responsive front-end interfaces to building robust backend systems.</p> */}


            <p className="text-gray-300 text-lg leading-relaxed mb-6">Alongside my professional experience, I have a strong interest in software engineering, full-stack development, and artificial intelligence. My technical skills include Java, JavaScript, Python, React, and machine learning technologies. I enjoy developing applications, solving technical problems, and exploring innovative ways to use technology to improve business processes.</p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">I'm committed to continuous learning and professional growth, with a focus on strengthening my programming, backend development, and AI/ML skills to build scalable, efficient, and intelligent solutions for real-world challenges.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
