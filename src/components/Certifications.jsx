import React from 'react'

const certs = [
  {
    title: 'Microsoft Certified: Azure AI Fundamentals',
    desc: 'Microsoft – 2025',
    link: 'https://learn.microsoft.com/en-us/users/shivamkumar-0742/transcript/vmpm5cep301xxzl'
  },
  {
    title: 'Data Structures and Algorithms',
    desc: 'Udemy – 2025',
    link: 'https://www.udemy.com/certificate/UC-bc8f83f7-7834-4768-a796-072359b0956f/'
  },
  {
    title: 'Machine Learning with Python',
    desc: 'Coursera – 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/3SNTMVJ2V3A5?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    title: 'Introduction to Agile Development and Scrum',
    desc: 'Coursera – 2025',
    link: 'https://www.coursera.org/account/accomplishments/verify/ZRS29B3BIJJ6?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    title: 'AMCAT Certified: Software Development Trainee',
    desc: 'Aspiring Minds – 2025',
    link: 'https://www.myamcat.com/certificate/35471750/software-development-trainee/166'
  }
]

const achievements = [
  {
    title: 'ML Blitz Hackathon',
    org: 'Alliance University',
    link: 'https://drive.google.com/file/d/1Az_xhdTJLZMw3VafrskinvKVGkOjBnMA/view?usp=sharing'
  },
  {
    title: 'Code Sangram Hackathon',
    org: 'Alliance One 3.0',
    link: 'https://drive.google.com/file/d/1I9p3dcy-CLFB_5IRKh1oFMjphryYroBF/view?usp=sharing'
  }
]

export default function Certifications(){
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Certifications & Achievements</h3>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {certs.map(c => (
          <div key={c.title} className="glass p-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <h4 className="font-semibold">{c.title}</h4>
            <p className="text-gray-300 text-sm mt-2">{c.desc}</p>
            {c.link ? (
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-cyan-300 hover:text-white text-sm"
              >
                View certificate
              </a>
            ) : (
              <p className="mt-4 text-xs text-gray-500">Add certificate link in the data to enable view</p>
            )}
          </div>
        ))}
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Achievements</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map(item => (
            <div key={item.title} className="glass p-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
              <h5 className="font-semibold">{item.title}</h5>
              <p className="text-gray-300 text-sm mt-1">{item.org}</p>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-cyan-300 hover:text-white text-sm"
                >
                  View certificate
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
