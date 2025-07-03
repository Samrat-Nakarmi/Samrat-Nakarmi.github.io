import type { Project } from "@/lib/types"

export const projectsData: Project[] = [
  {
    title: "PickNCare",
    description:
      "A 7-month-long care-focused web platform where I led frontend development using Next.js and responsive design best practices.",
    tech: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
    duration: "7 months",
    role: "Frontend Lead",
    link: "https://pickncare.com/"
  },
  {
    title: "Khutruke",
    description:
      "A blockchain-based transparent fundraising app with staged fund releases via proof-of-work — built with community trust in mind.",
    tech: ["Blockchain", "Web3", "React", "Smart Contracts"],
    focus: "Community Trust",
    link: "https://github.com/Deerwalk-Developers-Community/khutruk"
  },
  {
    title: "Online Interview Platform",
    description:
      "An end-to-end proctoring system using WebRTC, Judge0, YOLO for face detection, and real-time monitoring tools.",
    tech: ["WebRTC", "Judge0", "YOLO", "Real-time Monitoring", "Face Detection"],
    features: "Typing Speed & Clipboard Tracking",
    link: "https://github.com/Samrat-Nakarmi/CoProctor"
  },
]
