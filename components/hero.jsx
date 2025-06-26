"use client"

import { Github, Linkedin, Mail, MapPin, Phone, Code, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { PERSONAL_INFO } from "@/lib/constants"

export function Hero() {
  return (
    <section className="min-h-screen gradient-bg text-white flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Code className="w-8 h-8 text-cyan-400" />
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-cyan-300">
              {PERSONAL_INFO.title}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {PERSONAL_INFO.description}
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-400">
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {PERSONAL_INFO.location}
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                <Phone className="w-4 h-4 text-purple-400" />
                {PERSONAL_INFO.phone}
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                <Mail className="w-4 h-4 text-blue-400" />
                {PERSONAL_INFO.email}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="modern" size="lg" asChild>
                <Link href={PERSONAL_INFO.social.linkedin} target="_blank">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Link>
              </Button>
              <Button variant="modern" size="lg" asChild>
                <Link href={PERSONAL_INFO.social.github} target="_blank">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button variant="modern" size="lg" asChild>
                <Link href="#contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
