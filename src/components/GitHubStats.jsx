import React from 'react'

export default function GitHubStats(){
  return (
    <div className="glass p-6 rounded-lg">
      <h3 className="text-2xl font-semibold">GitHub</h3>
      <p className="text-gray-300 text-sm mt-2">Profile: <a href="https://github.com/shivamkumar183" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-white">github.com/shivamkumar183</a></p>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-white/5 rounded hover:bg-white/10 transition">
          <h4 className="font-semibold">Contributions</h4>
          <p className="text-sm text-gray-300 mt-2">Add a contributions graph from GitHub or a stats service here.</p>
        </div>
        <div className="p-4 bg-white/5 rounded hover:bg-white/10 transition">
          <h4 className="font-semibold">Top Languages</h4>
          <p className="text-sm text-gray-300 mt-2">Show your top repo languages from GitHub for a stronger profile section.</p>
        </div>
      </div>

      <p className="text-sm text-gray-400 mt-3">Use GitHub API or services like GitHub Readme Stats to replace these placeholders with live data.</p>
    </div>
  )
}
