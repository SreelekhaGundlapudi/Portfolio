import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink, Calendar } from "lucide-react"

export function Certifications() {
  const certifications = [
    {
      title: "Namaste React",
      issuer: "Akshay Saini",
      date: "2023",
      status: "completed",
      description:
        "Comprehensive certification covering React fundamentals, hooks, state management, and best practices.",
      skills: ["React.js", "Hooks", "State Management", "Component Architecture"],
    },
    {
      title: "Namaste JavaScript",
      issuer: "Akshay Saini",
      date: "2023",
      status: "Completed",
      description: "Certification covering ES6+, algorithms, and functional programming concepts.",
      skills: ["JavaScript ES6+", "Algorithms", "Functional Programming"],
    },
   
  ]

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Certifications & Learning
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <Badge variant={cert.status === "Completed" ? "default" : "secondary"}>{cert.status}</Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {cert.issuer} • {cert.date}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">{cert.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm text-gray-900 dark:text-white">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Continuous Learning</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  I'm committed to staying updated with the latest technologies and best practices in frontend
                  development. Currently pursuing advanced certifications in React, Next.js, and modern web development.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Next.js", "TypeScript", "GraphQL", "Testing", "Performance Optimization"].map((topic, index) => (
                    <Badge key={index} variant="secondary">
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
  )
}
