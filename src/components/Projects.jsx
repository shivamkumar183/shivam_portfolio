import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectModal from './ProjectModal'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id:1,
    title:'Stock Trading Platform - inspired by Zerodha ',
    desc:'Developed a full  stack stock trading platform with secure JWT  authentication, RESTful APIs, and MongoDB database integration.',
    tech:['React','Node.js','Express','MongoDB','JWT'],
    github:"https://github.com/shivamkumar183/zerodha-fullstack-clone",
    demo:'https://youtu.be/SelM3vwJW6E?si=4Y9qzfBLxqd7WcQG',
    youtubeId:'SelM3vwJW6E'
  },
  {
    id:2,
    title:'Breast Cancer Detection using CNN',
    desc:'Image classification pipeline using convolutional neural networks.',
    tech:['Python','TensorFlow','Keras'],
    github:"https://colab.research.google.com/drive/1NbUCuW4j5Gp_WIVCfWc8vEwIkWKevvnL?usp=sharing",
    demo:'https://colab.research.google.com/drive/1NbUCuW4j5Gp_WIVCfWc8vEwIkWKevvnL?usp=sharing',
    youtubeId:'61a4XITIFCw'
  },
  {
    id:3,
    title:'Online Exam Registration System',
    desc:'Full-stack app for managing registration, auth, and scheduling.',
    tech:['HTML', 'CSS', 'PHP', 'MySQL', 'XAMPP'],
    github:"https://github.com/shivamkumar183/skiltell-exam-registration",
    demo:'#',
    youtubeId:'HPrdZs6KDmA'
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
