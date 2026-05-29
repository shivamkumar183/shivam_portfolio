import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({project, onOpen}){
  return (
    <motion.div whileHover={{y:-6}} className="glass p-4 rounded-lg cursor-pointer" onClick={()=>onOpen(project)}>
      <h4 className="font-semibold">{project.title}</h4>
      <p className="text-sm text-gray-300 mt-2">{project.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">{project.tech.map(t=> <span key={t} className="text-xs bg-white/5 px-2 py-1 rounded">{t}</span>)}</div>
      <div className="mt-4 flex gap-3 text-sm text-indigo-300">
        <a href={project.github} onClick={(e)=>e.stopPropagation()}>GitHub</a>
        <a href={project.demo} onClick={(e)=>e.stopPropagation()}>Live</a>
      </div>
    </motion.div>
  )
}
