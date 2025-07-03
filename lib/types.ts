import type { LucideIcon } from "lucide-react"

export interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: string[]
  color: string
  iconColor: string
}

export interface Project {
  title: string
  description: string
  tech: string[]
  link: string
  duration?: string
  role?: string
  focus?: string
  features?: string
}

export interface ContactInfo {
  description: string
  email?: string
  github?: string
  linkedin?: string
}
