import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <section id="about" className="py-2 bg-[#ccc1b3]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mt-5">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#6b533c] dark:text-white">About Me</h2>

          <Card className="mb-8 bg-[#dbd4cb] border-[#dbd4cb]">
            <CardContent className="p-8">
              <p className="text-lg text-[#6b5333] leading-relaxed mb-6">
                I'm a passionate Frontend Developer with 3 years of hands-on experience in building dynamic, responsive,
                and scalable web applications. I specialize in modern JavaScript (ES6+), React.js, and Next.js with a
                strong focus on component-based architecture, state management, and performance optimization.
              </p>

              <p className="text-lg text-[#6b5333] leading-relaxed mb-6">
                Throughout my career, I've worked on diverse projects ranging from inventory management systems to
                healthcare applications, always focusing on delivering high-quality, maintainable code within deadlines.
                I'm experienced in integrating RESTful APIs, building reusable UI components, and working in Agile
                environments.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#6b5333]">What I Do</h3>
                  <ul className="space-y-2 text-[#6b5333]">
                    <li>• Frontend Development with React.js & Next.js</li>
                    <li>• Responsive Web Design</li>
                    <li>• API Integration & State Management</li>
                    <li>• Performance Optimization</li>
                    <li>• Component-based Architecture</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#6b5333]">Education</h3>
                  <div className="space-y-3">
                    <div>
                      <Badge variant="neon" className="mb-2">
                        B.Tech
                      </Badge>
                      <p className="text-sm text-[#6b5333]">
                        Mechanical Engineering
                        <br />
                        G. Pulla Reddy Engineering College
                        <br />
                        75%
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
