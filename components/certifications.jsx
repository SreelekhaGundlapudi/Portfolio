"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { Award, ExternalLink, Calendar, CheckCircle, Download } from "lucide-react"
import { CERTIFICATIONS } from "@/lib/constants"
import Image from "next/image"

export function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewCertificate = (certificate) => {
    setSelectedCertificate(certificate)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCertificate(null)
  }

  const handleDownload = (imagePath) => {
    const link = document.createElement('a')
    link.href = imagePath
    link.download = selectedCertificate?.title || 'certificate'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Certifications & Learning
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CERTIFICATIONS.map((cert, index) => (
                <Card key={index} className="h-full gradient-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant={cert.status === "Completed" ? "modern" : "modern"} className="text-gray-300 border-gray-600">{cert.status}</Badge>
                    </div>
                    <CardTitle className="text-lg mb-2 text-white">{cert.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>
                        {cert.issuer} • {cert.date}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4 text-sm">{cert.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm text-cyan-300">Skills Covered:</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="glass" className="text-xs text-gray-300 border-gray-600">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      variant="modern" 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleViewCertificate(cert)}
                      disabled={!cert.hasCertificate}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {cert.hasCertificate ? "View Certificate" : "Certificate Not Available"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="max-w-2xl mx-auto gradient-card border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-white">Continuous Learning</h3>
                  <p className="text-gray-300 mb-6">
                    I'm committed to staying updated with the latest technologies and best practices in frontend
                    development. Currently pursuing advanced certifications in React, Next.js, and modern web development.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Next.js", "TypeScript", "GraphQL", "Testing", "Performance Optimization"].map((topic, index) => (
                      <Badge key={index} variant="glass" className="text-gray-300 border-gray-600">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title={selectedCertificate?.title || "Certificate"}
      >
        {selectedCertificate && (
          <div className="space-y-6">
            {/* Certificate Header */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedCertificate.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Issued by {selectedCertificate.issuer}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Completed in {selectedCertificate.date}
              </p>
            </div>

            {/* Certificate Status */}
            <div className="flex items-center justify-center">
              <Badge variant="modern" className="text-sm px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                {selectedCertificate.status}
              </Badge>
            </div>

            {/* Certificate Image */}
            {selectedCertificate.hasCertificate && selectedCertificate.image && (
              <div className="relative w-full h-96 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <Image
                  src={selectedCertificate.image}
                  alt={`${selectedCertificate.title} Certificate`}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div 
                  className="hidden items-center justify-center h-full text-gray-500 dark:text-gray-400"
                  style={{ display: 'none' }}
                >
                  <div className="text-center">
                    <Award className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Certificate image not found</p>
                    <p className="text-sm">Please check the image path: {selectedCertificate.image}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Certificate Description */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Description</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {selectedCertificate.description}
              </p>
            </div>

            {/* Skills Covered */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Skills & Technologies Covered</h4>
              <div className="grid grid-cols-2 gap-2">
                {selectedCertificate.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificate Benefits */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What This Certification Demonstrates</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Comprehensive understanding of {selectedCertificate.title.includes('React') ? 'React.js fundamentals and modern development practices' : 'JavaScript ES6+ and advanced programming concepts'}</li>
                <li>• Practical experience with real-world development scenarios</li>
                <li>• Commitment to continuous learning and professional development</li>
                <li>• Industry-recognized validation of technical skills</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 pt-4">
              {selectedCertificate.hasCertificate && selectedCertificate.image && (
                <Button 
                  variant="modern" 
                  onClick={() => handleDownload(selectedCertificate.image)}
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Certificate
                </Button>
              )}
              <Button 
                variant="modern" 
                onClick={closeModal}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}
