import React from 'react'

export default function ProjectModal({project, onClose}){
  if(!project) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose}></div>
      <div className="glass p-6 rounded-lg z-10 max-w-3xl w-full">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <button onClick={onClose} className="text-gray-400">Close</button>
        </div>
        <p className="mt-4 text-gray-300">{project.desc}</p>
        <div className="mt-4">
          <h4 className="font-semibold">Tech Stack</h4>
          <div className="mt-2 flex gap-2">{project.tech.map(t=> <span key={t} className="text-xs bg-white/5 px-2 py-1 rounded">{t}</span>)}</div>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Demo Video</h4>
          <div className="mt-2 aspect-video bg-black rounded overflow-hidden">
            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${project.youtubeId}`} title="YouTube video" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
