"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import { PERSONAL_INFO } from "@/lib/constants"

export function Contact() {
  const formRef = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await emailjs.sendForm(
        'service_sreeg2629',            
        'template_1nqto29',        
        formRef.current,
        'he0nPms9q9p5l8TZb' 
      )
      setSubmitStatus('success')
      formRef.current.reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Contact Me</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="gradient-card border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-gray-300">sreeg2629@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <p className="text-gray-300">+91 8919655041</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Location</h3>
                      <p className="text-gray-300">Hyderabad, India</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-600">
                    <h3 className="font-semibold mb-4 text-white">Connect with me</h3>
                    <div className="flex gap-4">
                      <Button variant="modern" size="sm" asChild>
                        <Link href={PERSONAL_INFO.social.linkedin} target="_blank">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Link>
                      </Button>
                      <Button variant="neon" size="sm" asChild>
                        <Link href={PERSONAL_INFO.social.github} target="_blank">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="gradient-card border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white">Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="user_name" className="block text-sm font-medium mb-2 text-white">
                          Name
                        </label>
                        <Input 
                          id="user_name"
                          name="user_name"
                          placeholder="Your name" 
                          className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="user_email" className="block text-sm font-medium mb-2 text-white">
                          Email
                        </label>
                        <Input 
                          id="user_email"
                          name="user_email"
                          type="email" 
                          placeholder="your.email@example.com" 
                          className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">
                        Subject
                      </label>
                      <Input 
                        id="subject"
                        name="subject"
                        placeholder="What's this about?" 
                        className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                        Message
                      </label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or just say hello!" 
                        rows={5} 
                        className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                        required
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <div className="flex items-center gap-2 p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-green-300">Message sent successfully!</span>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-red-400" />
                        <span className="text-red-300">Failed to send message. Please try again.</span>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      variant="modern" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
