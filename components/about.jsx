import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <section id="about" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>

          <Card className="mb-8 gradient-card border-0 shadow-2xl">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate Frontend Developer with 3 years of hands-on experience in building dynamic, responsive,
                and scalable web applications. I specialize in modern JavaScript (ES6+), React.js, and Next.js with a
                strong focus on component-based architecture, state management, and performance optimization.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Throughout my career, I've worked on diverse projects ranging from inventory management systems to
                healthcare applications, always focusing on delivering high-quality, maintainable code within deadlines.
                I'm experienced in integrating RESTful APIs, building reusable UI components, and working in Agile
                environments.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">What I Do</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      Frontend Development with React.js & Next.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Responsive Web Design
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      API Integration & State Management
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      Performance Optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Component-based Architecture
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">Education</h3>
                  <div className="space-y-4">
                    <div className="glass-effect p-4 rounded-lg">
                      <Badge variant="modern" className="mb-3">
                        B.Tech
                      </Badge>
                      <p className="text-sm text-gray-300">
                        Mechanical Engineering
                        <br />
                        G. Pulla Reddy Engineering College
                        <br />
                        <span className="text-cyan-300 font-semibold">75%</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
