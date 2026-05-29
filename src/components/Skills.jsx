import React from 'react'
import { motion } from 'framer-motion'

const groups = [
  {title:'Programming', items:[{name:'Java',val:85},{name:'Python',val:92},{name:'JavaScript',val:88}]},
  {title:'Web Development', items:[{name:'HTML',val:95},{name:'CSS',val:90},{name:'React',val:88},{name:'Tailwind',val:84}]},
  {title:'AI/ML', items:[{name:'NumPy',val:90},{name:'Pandas',val:88},{name:'TensorFlow',val:80}]},
  {title:'Tools', items:[{name:'Git',val:92},{name:'GitHub',val:92},{name:'VS Code',val:95},{name:'Postman',val:78}]}
]

function SkillBar({name, val}){
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm">
        <div className="text-gray-200">{name}</div>
        <div className="text-gray-400">{val}%</div>
      </div>
      <div className="w-full bg-white/6 h-2 rounded mt-2 overflow-hidden">
        <motion.div initial={{width:0}} whileInView={{width:`${val}%`}} transition={{duration:0.9}} className="h-2 bg-gradient-to-r from-purple-500 to-indigo-400" />
      </div>
    </div>
  )
}

function SkillCard({title, items}){
  return (
    <div className="glass p-4 rounded-lg">
      <h4 className="font-semibold mb-4">{title}</h4>
      <div>
        {items.map(i => <SkillBar key={i.name} name={i.name} val={i.val} />)}
      </div>
    </div>
  )
}

export default function Skills(){
  return (
    <div>
      <div className="text-center mb-12">
        <h3 className="text-2xl font-semibold mb-4">TOOLS & TECHNOLOGIES</h3>
        <h4 className="text-xl font-medium mb-2">Tech Stack</h4>
        <p className="text-gray-300 mb-8">Technologies and tools I work with daily.</p>
      </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: 'React', icon: '⚛️', category: 'Frontend', link: 'https://react.dev' },
            { name: 'JavaScript', icon: '🟨', category: 'Language', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
            { name: 'Python', icon: '🐍', category: 'Language', link: 'https://www.python.org' },
            { name: 'Java', icon: '☕', category: 'Language', link: 'https://www.geeksforgeeks.org/java/' },
            { name: 'HTML5', icon: '🏗️', category: 'Frontend', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
            { name: 'CSS3', icon: '🎨', category: 'Frontend', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
            { name: 'Tailwind CSS', icon: '💨', category: 'Frontend', link: 'https://tailwindcss.com' },
            { name: 'SQL', icon: '🗄️', category: 'Database', link: 'https://www.geeksforgeeks.org/sql-tutorial/' },
            { name: 'MongoDB', icon: '🍃', category: 'Database', link: 'https://www.mongodb.com/docs/' },
            { name: 'Machine Learning', icon: '🤖', category: 'AI/ML', link: 'https://www.geeksforgeeks.org/machine-learning/' },
            { name: 'Express', icon: '🚂', category: 'Backend', link: 'https://expressjs.com' },
            { name: 'Bootstrap', icon: '📱', category: 'Frontend', link: 'https://getbootstrap.com/docs' },
            { name: 'Git', icon: '📚', category: 'Tools', link: 'https://git-scm.com/doc' },
            { name: 'GitHub', icon: '🐙', category: 'Tools', link: 'https://docs.github.com' },
            { name: 'VS Code', icon: '💻', category: 'Tools', link: 'https://code.visualstudio.com/docs' },
            { name: 'Node.js', icon: '🟢', category: 'Backend', link: 'https://nodejs.org/en/docs/' },
            { name: 'TensorFlow', icon: '🧠', category: 'AI/ML', link: 'https://www.tensorflow.org' }
          ].map((tech) => (
            <a
              key={tech.name}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block no-underline"
            >
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="glass p-4 rounded-lg text-center hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/50 hover:border hover:border-indigo-400/60 transition-all duration-300 cursor-pointer h-full"
              >
                <div className="text-3xl mb-2 transition-transform duration-300 hover:rotate-12">{tech.icon}</div>
                <div className="text-sm font-medium text-gray-200 group-hover:text-indigo-400">{tech.name}</div>
                <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{tech.category}</div>
              </motion.div>
            </a>
          ))}
        </div>
    </div>
  )
}
