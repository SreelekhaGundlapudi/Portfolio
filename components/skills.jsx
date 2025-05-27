import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const techStack = {
    Frontend: {
      color: "bg-blue-500",
      technologies: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    },
    Styling: {
      color: "bg-purple-500",
      technologies: ["Tailwind CSS", "Bootstrap", "Material UI"],
    },
    "State Management": {
      color: "bg-green-500",
      technologies: ["Redux", "Context API"],
    },
    "Form Handling": {
      color: "bg-orange-500",
      technologies: ["React Hook Form", "Yup"],
    },
    "API & Backend": {
      color: "bg-red-500",
      technologies: ["RESTful APIs", "Axios", "Fetch"],
    },
    "Tools & DevOps": {
      color: "bg-gray-500",
      technologies: ["Git", "GitHub", "Webpack", "Vite"],
    },
    // Testing: {
    //   color: "bg-yellow-500",
    //   technologies: ["Jest", "React Testing Library", "JMeter", "Cypress"],
    // },
    "CMS & Platforms": {
      color: "bg-indigo-500",
      technologies: ["Shopify", "WordPress"],
    },
  }

  return (
    <section id="tech-stack" className="py-20 bg-[#dbd4cb]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 mt-5 text-[#6b533c]">Technology Stack</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, data], index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className={`w-full h-2 ${data.color} rounded-full mb-4`}></div>
                  <CardTitle className="text-lg text-center">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {data.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="w-full justify-center">
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
