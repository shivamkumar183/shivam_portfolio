import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectModal from './ProjectModal'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id:1,
    title:'Zerodha Trading Dashboard',
    desc:'Frontend-heavy real-time trading UI showcasing charts and widgets.',
    tech:['React','Tailwind','WebSockets'],
    github:"https://github.com/shivamkumar183/zerodha-fullstack-clone",
    demo:'#',
  },
  {
    id:2,
    title:'Breast Cancer Detection using CNN',
    desc:'Image classification pipeline using convolutional neural networks.',
    tech:['Python','TensorFlow','Keras'],
    github:"https://colab.research.google.com/drive/1NbUCuW4j5Gp_WIVCfWc8vEwIkWKevvnL?usp=sharing",
    demo:'#',
  },
  {
    id:3,
    title:'Online Exam Registration System',
    desc:'Full-stack app for managing registration, auth, and scheduling.',
    tech:['React','Node.js','MongoDB'],
    github:"https://github.com/shivamkumar183/skiltell-exam-registration",
    demo:'#',
  }
]

export default function Projects(){
  const [active, setActive] = useState(null)
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Projects</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} onOpen={(proj)=>setActive(proj)} />
        ))}
      </div>
      {active && <ProjectModal project={active} onClose={()=>setActive(null)} />}
    </div>
  )
}
