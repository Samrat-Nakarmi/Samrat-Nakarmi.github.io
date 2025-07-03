"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { projectsData } from "@/lib/projects"

export function ProjectsSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
            >
              What I&apos;ve Built
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <motion.div key={project.title} variants={fadeInUp} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                      <a href={project.link} target="_blank"><ExternalLink className="h-5 w-5 text-slate-400 hover:text-slate-600 cursor-pointer" /></a>
                    </div>
                    <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((technology) => (
                          <Badge key={technology} variant="outline" className="text-xs">
                            {technology}
                          </Badge>
                        ))}
                      </div>

                      <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                        {project.duration && (
                          <div className="flex items-center gap-2">
                            <span className="font-medium">Duration:</span>
                            <span>{project.duration}</span>
                          </div>
                        )}
                        {project.role && (
                          <div className="flex items-center gap-2">
                            <span className="font-medium">Role:</span>
                            <span>{project.role}</span>
                          </div>
                        )}
                        {project.focus && (
                          <div className="flex items-center gap-2">
                            <span className="font-medium">Focus:</span>
                            <span>{project.focus}</span>
                          </div>
                        )}
                        {project.features && (
                          <div className="flex items-center gap-2">
                            <span className="font-medium">Features:</span>
                            <span>{project.features}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
