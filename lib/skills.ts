import { Code, Database, Globe, ArrowRight } from "lucide-react"
import type { SkillCategory } from "@/lib/types"

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "SVG animations"],
    color: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express", "PostgreSQL", "REST APIs", "GraphQL APIs"],
    color: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    title: "Dev Tools",
    icon: Globe,
    skills: ["Git", "Docker", "WebSockets", "WebRTC"],
    color: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Extra Skills",
    icon: ArrowRight,
    skills: ["SEO", "Accessibility", "Performance Optimization", "Motion Design"],
    color: "bg-orange-100 dark:bg-orange-900",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
]
