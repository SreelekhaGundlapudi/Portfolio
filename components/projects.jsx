import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Building } from "lucide-react"
import { PROJECTS } from "@/lib/constants"

export function Projects() {
  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects & Experience</h2>

          <div className="space-y-8">
            {PROJECTS.map((project, index) => (
              <Card key={index} className="overflow-hidden gradient-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2 text-white">{project.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4 text-cyan-400" />
                          <span>{project.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-purple-400" />
                          <span>{project.period}</span>
                        </div>
                      </div>
                    </div>
                  
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-cyan-300">Key Features:</h4>
                    <ul className="grid md:grid-cols-2 gap-1 text-sm text-gray-400">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-cyan-300">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="glass" className="text-gray-300 border-gray-600">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
