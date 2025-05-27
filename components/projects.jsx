import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Building } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "IoT",
      company: "Seven83 Systems",
      period: "Sep 2024 – Present",
      description:
       "IoT-based device tracking and management system that allows real-time monitoring and control of devices located at various sites",
      technologies: ["Next.js", "OneLogin", "RESTful APIs"],
      features: [
         "Designed and implemented a customizable device dashboard using React GridLayout with widgets that provide real-time data visualization and device status updates.",
         "Worked on the main process flow, implementing robust search and filter functionality to help users quickly locate devices and relevant data.",
         "Enabled users to upload device photos and facilitated bulk uploading of devices via API streamlining device management and improving operational efficiency.",
          "Integrated dynamic charts into the dashboard, offering intuitive insights into device performance metrics for better decision-making."
      ],
    },
    {
      title: "Ticketing Management Tool",
      company: "Seven83 Systems",
      period: "2024",
      description:
        ":Contributed to development and testing of Ticketing tool(ServiceNow) aimed at managing issues for tabs and laptops for educational Institutions.",
      technologies: ["Next.js", "Tailwind CSS", "JavaScript", "RESTful APIs"],
      features: [
        "Developed a master data as per the client requirements and standards such as SLAs, Incident Priority and Severity standards, Ticket Status, Issue report",
        "Worked on ticket flow at different stages for asset management.",
        "Connected with one login for authentication, sidebar menu, navigation and permissions",
        "Fixed functional issues and optimized ticket workflows for better efficiency",
      ],
    },
    {
      title: "Inventory Management System",
      company: "Seven83 Systems",
      period: "2024",
      description:
        "Developed real-time inventory dashboards with monthly comparison charts and optimized stock flow processes.",
      technologies: ["React.js", "Chart.js", "JavaScript", "RESTful APIs"],
      features: [
        "Real-time inventory dashboards",
        "Monthly comparison charts and analytics",
        "Optimized inward/outward stock flow processes",
        "Reduced manual errors and improved efficiency",
      ],
    },
    {
      title: "CLEH-UI Dashboard",
      company: "CBL Solutions",
      period: "Jan 2024 – Jun 2024",
      description:
        "Developed comprehensive dashboard using Material UI, MUI-Charts, and Vite with reusable UI components.",
      technologies: ["React.js", "Material UI", "MUI-Charts", "Vite", "Azure DevOps"],
      features: [
        "Dashboard with Material UI and MUI-Charts",
        "Reusable UI components (navbar, tabs, modals)",
        "Performance testing with JMeter",
        "Deployment using Azure DevOps",
      ],
    },
    {
      title: "Medical Lease Management",
      company: "Cognizant Technologies (Kaiser Permanente)",
      period: "Mar 2021 – Aug 2022",
      description:
        "Built multi-step medical lease forms and report generation features with Microsoft Azure Authentication.",
      technologies: ["React.js", "Material UI", "Microsoft Azure", "JavaScript"],
      features: [
        "Multi-step medical lease forms",
        "Report generation features",
        "Microsoft Azure Authentication integration",
        "Maintainable SPA with scalable structure",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Projects & Experience</h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span>{project.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.period}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Key Features:</h4>
                    <ul className="grid md:grid-cols-2 gap-1 text-sm text-gray-600 dark:text-gray-400">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
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
