export const CERTIFICATIONS = [
  {
    title: "Namaste React",
    issuer: "Akshay Saini",
    date: "2023",
    status: "completed",
    description:
      "Comprehensive certification covering React fundamentals, hooks, state management, and best practices.",
    skills: ["React.js", "Hooks", "State Management", "Component Architecture"],
    image: "/react_certificate.jpeg.webp",
    hasCertificate: true,
  },
  {
    title: "Namaste JavaScript",
    issuer: "Akshay Saini",
    date: "2023",
    status: "Completed",
    description: "Certification covering ES6+, algorithms, and functional programming concepts.",
    skills: ["JavaScript ES6+", "Algorithms", "Functional Programming"],
    image: "/namaste js.webp",
    hasCertificate: true,
  },
]

export const PROJECTS = [
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

export const TECH_STACK = {
  Frontend: {
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    technologies: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  Styling: {
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    technologies: ["Tailwind CSS", "Bootstrap", "Material UI"],
  },
  "State Management": {
    color: "bg-gradient-to-r from-green-500 to-emerald-500",
    technologies: ["Redux", "Context API"],
  },
  "Form Handling": {
    color: "bg-gradient-to-r from-orange-500 to-red-500",
    technologies: ["React Hook Form", "Yup"],
  },
  "API & Backend": {
    color: "bg-gradient-to-r from-red-500 to-pink-500",
    technologies: ["RESTful APIs", "Axios", "Fetch"],
  },
  "Tools & DevOps": {
    color: "bg-gradient-to-r from-gray-500 to-slate-500",
    technologies: ["GitHub", "Webpack", "Vite"],
  },
  "CMS & Platforms": {
    color: "bg-gradient-to-r from-indigo-500 to-purple-500",
    technologies: ["Shopify", "WordPress"],
  },
}

export const PERSONAL_INFO = {
  name: "Sreelekha Gundlapudi",
  title: "Frontend Developer",
  email: "sreelekhag310@gmail.com",
  phone: "+91 9642926755",
  location: "Hyderabad, India",
  experience: "3+ years",
  description: "3+ years of experience building dynamic, responsive, and scalable web applications with React.js, Next.js, and modern JavaScript technologies.",
  education: {
    degree: "B.Tech",
    field: "Mechanical Engineering",
    institution: "G. Pulla Reddy Engineering College",
    percentage: "75%"
  },
  social: {
    linkedin: "https://www.linkedin.com/in/gundlapudi-sreelekha-97332b280/",
    github: "https://github.com/SreelekhaGundlapudi"
  }
} 