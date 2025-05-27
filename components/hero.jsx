"use client"

import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  return (
<section className="min-h-screen bg-[#dbd4cb] text-[#6b533c] flex items-center ">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-[1fr_320px] gap-6 items-center ml-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0c0b07]">Sreelekha Gundlapudi</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#6b533c]">Frontend Developer</h2>
            <p className="text-lg text-[#6b533c] mb-8 max-w-xl">
              3+ years of experience building dynamic, responsive, and scalable web applications with React.js, Next.js,
              and modern JavaScript technologies.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-[#b9a185]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Hyderabad, India
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                8919655041
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                sreeg2629@gmail.com
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="neon" size="lg" asChild>
                <Link href="https://www.linkedin.com/in/gundlapudi-sreelekha-97332b280/" target="_blank">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Link>
              </Button>
              <Button variant="neon" size="lg" asChild>
                <Link href="https://github.com/SreelekhaGundlapudi" target="_blank">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button variant="neon" size="lg" asChild>
                <Link href="#contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-[300px] h-[300px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden shadow-2xl border-2 border-blue-500/40">
              <Image
                src="/images/profile.jpg" // Make sure this path is correct and image exists
                alt="Sreelekha Gundlapudi"
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
