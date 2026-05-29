import React from 'react'
import { motion } from 'framer-motion'

const timeline = [
  {
    id:1,
    title: 'Intern – Infosys Springboard Virtual Internship 6.0 (Online)',
    subtitle: 'Frontend Engineer',
    period: 'Nov 2025 – Jan 2026',
    details: 'Worked as a Frontend Engineer on a team-based project titled "Intelligent Speech Therapy Platform." \n• Collaborated with frontend, backend, and NLP teams to build a user-friendly and accessible web interface. \n• Designed and developed responsive UI components to support speech therapy workflows. \n• Integrated frontend features with backend APIs and NLP-driven functionalities. \n• Focused on usability, performance, and clean code practices in a real-world project environment. \n• Gained hands-on experience in team collaboration, Agile-style development, and end-to-end product building.'
  },
  {
    id:2,
    title: 'Prompt Engineering Intern',
    subtitle: 'Scale AI',
    period: 'Sep 2023 – Dec 2023',
    details: 'Designed prompts and evaluation harnesses for model behavior. Worked on dataset creation and fine-tuning workflows. Tech: Python, prompt design, evaluation metrics.'
  }
]

function TimelineItem({item}){
  const renderDetails = (details) => {
    if (details.includes('•')) {
      const points = details.split('•').filter(point => point.trim());
      return (
        <ul className="text-sm text-gray-300 mt-4 space-y-3 list-disc list-outside pl-5 mb-2">
          {points.map((point, index) => (
            <li key={index} className="leading-relaxed">{point.trim()}</li>
          ))}
        </ul>
      );
    }
    return <p className="text-sm text-gray-300 mt-2">{details}</p>;
  };

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
        {renderDetails(item.details)}
      </div>
    </motion.div>
  )
}

export default function Experience(){
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Experience</h3>
      <div className="border-l border-white/6 pl-6">
        {timeline.map(t => <TimelineItem key={t.id} item={t} />)}
      </div>
    </div>
  )
}
