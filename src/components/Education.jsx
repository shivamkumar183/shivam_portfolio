import React from 'react'
import { motion } from 'framer-motion'

const timeline = [
  {
    id:1,
    title: 'B.Tech in Computer Science and Engineering (AI/ML)',
    subtitle: 'Alliance University, Bengaluru',
    period: '2022 – 2026',
    details: 'CGPA: 8.6/10'
  },
  {
    id:2,
    title: 'XII (CBSE)',
    subtitle: 'S.B.P. Vidya-Vihar, Bihar',
    period: '2021',
    details: 'Percentage: 77.7%'
  },
  {
    id:3,
    title: 'X (CBSE)',
    subtitle: 'Adwaita Mission High School, Bihar',
    period: '2019',
    details: 'Percentage: 80%'
  }
]

function TimelineItem({item}){
  return (
    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-20}} viewport={{once:true}} className="relative pl-8 pb-8">
      <div className="absolute left-0 top-1 w-3 h-3 bg-indigo-500 rounded-full" />
      <div className="glass p-4 rounded-md">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold">{item.title}</h4>
            <div className="text-sm text-gray-400">{item.subtitle}</div>
          </div>
          <div className="text-sm text-gray-400">{item.period}</div>
        </div>
        <p className="text-sm text-gray-300 mt-2">{item.details}</p>
      </div>
    </motion.div>
  )
}

export default function Education(){
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Education</h3>
      <div className="border-l border-white/6 pl-6">
        {timeline.map(t => <TimelineItem key={t.id} item={t} />)}
      </div>
    </div>
  )
}
