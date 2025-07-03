"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { contactContent } from "@/lib/content"

export function ContactSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="text-center mb-16">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
            >
              Let&apos;s Build Something Amazing
            </motion.h2>
          </div>

          <motion.p variants={fadeInUp} className="text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
            {contactContent.description}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:samratnakarmi1@gmail.com" target="_blank">
              <Button size="lg" className="group">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="https://github.com/Samrat-Nakarmi" target="_blank">
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-4 w-4" />
                View GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/samrat-nakarmi-90968321a/" target="_blank">
              <Button variant="outline" size="lg">
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
