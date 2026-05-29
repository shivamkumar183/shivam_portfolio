import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact(){
  const formRef = useRef()

  const sendEmail = (e)=>{
    e.preventDefault()
    // Replace serviceId, templateId, userId with your EmailJS credentials
    // Example: emailjs.sendForm(process.env.EMAILJS_SERVICE, process.env.EMAILJS_TEMPLATE, formRef.current, process.env.EMAILJS_USER)
    emailjs.sendForm('service_fg2q3cq','template_5szvc3y', formRef.current,'mkogTTm3TL7GXrveO')
      .then(()=> alert('Message sent — replace placeholders with your EmailJS keys to enable sending.'))
      .catch(()=> alert('Failed to send — please check EmailJS credentials.'))
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
