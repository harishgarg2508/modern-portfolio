'use client'

import React, { useState, useEffect, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Loader2, Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [result, setResult] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const getRandomGradient = () => {
    const gradients = [
      'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
      'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
      'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
    ]
    return gradients[Math.floor(Math.random() * gradients.length)]
  }

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        setName('')
        setEmail('')
        setMessage('')
        setIsSubmitted(false)
        setResult('')
      }, 3000)
    }
  }, [isSubmitted])

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult("Sending....")

    const formData = new FormData(event.currentTarget)
    formData.append("access_key", "683bdd67-0ccd-46f0-90a4-50285c263157") // Your Web3Forms access key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setResult("Form Submitted Successfully")
        setIsSubmitting(false)
        setIsSubmitted(true)
      } else {
        console.log("Error", data)
        setResult(data.message)
        setIsSubmitting(false)
      }
    } catch (error) {
      console.log("Error", error)
      setResult("Something went wrong, please try again.")
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-white-100 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.form
        onSubmit={onSubmit}
        className="bg-black/10 p-8 rounded-lg shadow-lg w-full max-w-md space-y-6 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Get in Touch
        </h2>

        <motion.input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
          className="w-full p-3 border bg-white/40 border-gray-300 rounded-md focus:outline-none"
          style={{
            background: getRandomGradient(),
          }}
        />

        <motion.input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          style={{
            background: getRandomGradient(),
          }}
        />

        <motion.textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none min-h-[150px]"
          style={{
            background: getRandomGradient(),
          }}
        />

        <motion.button
          type="submit"
          className="w-full p-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md font-semibold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={isSubmitting || isSubmitted}
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin mx-auto" />
          ) : isSubmitted ? (
            <CheckCircle className="mx-auto" />
          ) : (
            <Send className="mx-auto" />
          )}
        </motion.button>

        {result && (
          <p className={`text-center ${isSubmitted ? 'text-green-500' : 'text-red-500'}`}>
            {result}
          </p>
        )}
      </motion.form>
    </motion.div>
  )
}