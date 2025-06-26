import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TECH_STACK } from "@/lib/constants"

export function Skills() {
  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Technology Stack</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(TECH_STACK).map(([category, data], index) => (
              <Card key={index} className="h-full gradient-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-full h-2 ${data.color} rounded-full mb-4 shadow-lg`}></div>
                  <CardTitle className="text-lg text-center text-white">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {data.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="glass" className="w-full justify-center text-gray-300 border-gray-600">
                        {tech}
                      </Badge>
                    ))}
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
