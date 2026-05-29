import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact(){
  const formRef = useRef()

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE || 'service_fg2q3cq'
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE || 'template_5szvc3y'
  const userId = import.meta.env.VITE_EMAILJS_USER || 'mkogTTm3TL7GXrveO'

  const sendEmail = (e)=>{
    e.preventDefault()
    emailjs.sendForm(serviceId, templateId, formRef.current, userId)
      .then(() => alert('Message sent successfully! I will get back to you soon.'))
      .catch((error) => {
        console.error('EmailJS error:', error)
        alert('Failed to send the message. Please contact me directly at hshivam183kumar@gmail.com.')
      })
  }

  return (
    <div className="glass p-6 rounded-lg">
      <h3 className="text-2xl font-semibold">Contact</h3>
      <div className="mt-4 md:flex gap-6">
        <form ref={formRef} onSubmit={sendEmail} className="flex-1">
          <input name="name" placeholder="Name" aria-label="Name" className="w-full p-3 rounded bg-transparent border border-white/5" required />
          <input name="email" placeholder="Email" aria-label="Email" type="email" className="w-full p-3 rounded bg-transparent border border-white/5 mt-3" required />
          <textarea name="message" placeholder="Message" aria-label="Message" className="w-full p-3 rounded bg-transparent border border-white/5 mt-3 h-32" required />
          <div className="flex items-center gap-3 mt-3">
            <button type="submit" className="px-4 py-2 bg-indigo-600 rounded">Send Message</button>
            <a href="mailto:hshivam183kumar@gmail.com" className="text-sm text-gray-400">Or email: hshivam183kumar@gmail.com</a>
          </div>
        </form>
        <div className="w-full md:w-1/3">
          <div className="glass p-4 rounded">
            <p><strong>Email:</strong> hshivam183kumar@gmail.com</p>
            <p className="mt-2"><strong>Phone:</strong> +91-6205223671</p>
            <div className="mt-4 flex gap-3 text-xl">
              <a href="https://www.linkedin.com/in/shivamkumar183/" aria-label="LinkedIn" className="hover:text-indigo-400"><FaLinkedin /></a>
              <a href="https://github.com/shivamkumar183" aria-label="GitHub" className="hover:text-gray-300"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
