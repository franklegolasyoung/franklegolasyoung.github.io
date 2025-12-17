import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Code2, 
  Palette, 
  Terminal, 
  Cpu,
  Globe,
  Database,
  Layout,
  Server
} from "lucide-react"

import avatarImg from "../assets/images/avatar.jpg"
import pixcloudImg from "../assets/images/pixcloud.jpg"
import chatlahImg from "../assets/images/chatlah.png"
import cospedImg from "../assets/images/cosped.png"
import zoteroImg from "../assets/images/zotero.png"

export const PERSONAL_INFO = {
  name: "Zhuochen Yang",
  initials: "ZY",
  tagline: "AI Engineer (Security)",
  role: "AI Engineer (Security) @ ST Engineering",
  location: "Singapore",
  availability: "",
  email: "frankyoung@outlook.sg",
  photo: avatarImg,
  socials: [
    { name: "GitHub", icon: Github, url: "https://github.com/franklegolasyoung" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/zhuochenyang/" },
    { name: "Medium", icon: Globe, url: "https://medium.com/@frank1045325433" },
    { name: "Email", icon: Mail, url: "mailto:frankyoung@outlook.sg" }
  ]
}

export const SHOWCASE_DATA = {
  about: [
    "I am a Singapore-based AI Engineer specializing in LLM security and safety, holding a Master of Science in Artificial Intelligence from Nanyang Technological University.",
    "Complementing my core expertise in AI and cybersecurity, I actively develop full-stack applications and operate a freelance photography practice, blending technical precision with creative vision to deliver innovative solutions across technology and visual arts domains.",
    "Reachable at frankyoung@outlook.sg for collaborative opportunities."
  ],
  expertise: [
    {
      title: "Full Stack Development",
      icon: Layout,
      description:
        "Experienced in building scalable web applications using Spring Boot, Flask, and FastAPI. Proficient across frontend (React, TypeScript) and backend development with a strong understanding of RESTful APIs and microservices architecture.",
      tags: ["Spring Boot", "React", "TypeScript", "FastAPI", "PostgreSQL", "Microservices"]
    },
    {
      title: "DevOps & Cloud Infrastructure",
      icon: Server,
      description:
        "Skilled in containerization, orchestration, and cloud deployment. Comfortable with distributed systems and CI/CD pipelines running on AWS and GCP.",
      tags: ["Docker", "Kafka", "GitHub Actions", "AWS", "GCP", "Nginx"]
    },
    {
      title: "AI & LLM Security",
      icon: Cpu,
      description:
        "Building intelligent applications with LLMs, RAG systems, and AI agents while researching security and safety for generative AI systems.",
      tags: ["PyTorch", "LangGraph", "RAG", "LLM Security", "Agents", "MCP"]
    }
  ],
  timeline: [
    {
      year: "2024 - Present",
      title: "AI Engineer (Security)",
      company: "ST Engineering • Singapore",
      description:
        "Researching privacy attacks and defenses for LLM systems and delivering GenAI security tooling for enterprise programs.",
      tags: ["LLM Security", "GenAI", "Safety Research"]
    },
    {
      year: "2024 - Present",
      title: "Full-stack Self-motivated Developer",
      company: "Independent • Singapore",
      description:
        "Shipping LangChain workflows, Spring Boot backends, and production ML experiments for personal ventures and freelance clients.",
      tags: ["LangChain", "Spring Boot", "Docker"]
    },
    {
      year: "2022 - 2024",
      title: "M.Sc Artificial Intelligence",
      company: "Nanyang Technological University",
      description:
        "Focused on large language models, deep learning, computer vision, natural language processing, and time series analysis.",
      tags: ["LLMs", "Deep Learning", "NLP"]
    },
    {
      year: "2018 - 2022",
      title: "B.Eng Computer Science",
      company: "Harbin Institute of Technology",
      description: "Built a rigorous foundation in algorithms, operating systems, and user experience design.",
      tags: ["Algorithms", "Systems", "UX"]
    }
  ],
  projects: [
    {
      title: "PixCloud",
      description:
        "Image storage, sharing, and collaboration platform powered by Spring Boot, Vue, MySQL, Redis, AWS, COS Storage, Kafka, and CDN acceleration.",
      image: pixcloudImg,
      tags: ["Spring Boot", "Vue", "MySQL", "Redis", "AWS"],
      url: "https://www.pixcloud.cc/"
    },
    {
      title: "ChatLah",
      description:
        "RAG-Agent system for equities research that fuses market news, prices, retrieval/reranking, and structured LLM reasoning to produce traceable investment briefs.",
      image: chatlahImg,
      tags: ["LangChain", "PostgreSQL", "AWS", "RAG", "Agents"],
      url: "https://www.chatlah.cc"
    },
    {
      title: "CoSPED Research Paper",
      description:
        "First-author AAAI-26 paper introducing a consistent soft prompt targeted data extraction framework plus defensive strategies for LLM privacy.",
      image: cospedImg,
      tags: ["Research", "LLM Security", "AAAI-26"],
      url: "https://www.semanticscholar.org/paper/CoSPED%3A-Consistent-Soft-Prompt-Targeted-Data-and-Yang-Wai/fb09eaceb17a4813fd8ce3496d01e1c78c6cec06"
    },
    {
      title: "Zotero Snap",
      description:
        "Maintainer for the Linux Snap Store build of Zotero, simplifying installation and lifecycle management for research teams on Linux.",
      image: zoteroImg,
      tags: ["Zotero", "Snapcraft", "DevOps"],
      url: "https://github.com/franklegolasyoung/zotero-snap"
    }
  ],
  contact: {
    heading: "Let's build trustworthy AI and full-stack systems.",
    subheading:
      "Got a product, research idea, or collaboration in mind? I'm happy to chat about LLM security, GenAI platforms, or photography-tech hybrids.",
    channels: [
      { type: "email", label: "Email", value: "frankyoung@outlook.sg", href: "mailto:frankyoung@outlook.sg" },
      { type: "schedule", label: "Time Zone", value: "UTC+8:00 (SGT)" },
      { type: "location", label: "Location", value: "Singapore" }
    ]
  }
}

export const CV_DATA = {
  summary:
    "Singapore-based AI Engineer focusing on Generative AI security, privacy attacks/defenses, and safety research. I pair hands-on LLM experimentation with production-ready full-stack systems and DevOps foundations, and I keep a creative practice alive through photography and storytelling.",
  experience: [
    {
      company: "ST Engineering",
      role: "AI Engineer (Security)",
      period: "Jan 2024 - Present",
      location: "Singapore",
      logo: Cpu,
      highlights: [
        "Lead research and development across LLM security, privacy attack simulations, and safety evaluations for enterprise deployments.",
        "Designed internal tooling that detects jailbreak attempts and AI-generated text to safeguard mission-critical workflows.",
        "Published the first-author paper \"CoSPED: Consistent Soft-Prompt Targeted Data Extraction & Defense\" accepted at AAAI-26's AI Alignment track."
      ]
    },
    {
      company: "Independent",
      role: "Full-stack & GenAI Builder",
      period: "2024 - Present",
      location: "Singapore / Remote",
      logo: Layout,
      highlights: [
        "Architected full-stack products such as PixCloud (media collaboration) and ChatLah (LLM-assisted equities research).",
        "Implemented LangChain / LangGraph agents, Spring Boot + FastAPI services, and observability pipelines deployed with Docker and Nginx.",
        "Collaborated with designers, founders, and researchers to translate ambiguous ideas into shippable software."
      ]
    }
  ],
  education: [
    {
      school: "Nanyang Technological University",
      degree: "M.Sc Artificial Intelligence",
      period: "2022 - 2024",
      description:
        "Specialized in large language models, deep learning, computer vision, NLP, and time series analysis with a focus on responsible AI."
    },
    {
      school: "Harbin Institute of Technology",
      degree: "B.Eng Computer Science and Technology",
      period: "2018 - 2022",
      description:
        "Built a strong foundation in algorithms, operating systems, computer networks, database systems, and user experience design."
    }
  ],
  skills: [
    { name: "Python", level: 100 },
    { name: "Java", level: 80 },
    { name: "C++", level: 70 },
    { name: "LangChain / RAG", level: 85 },
    { name: "Spring Boot & FastAPI", level: 80 },
    { name: "Docker & Cloud Infra", level: 75 }
  ],
  languages: [
    { name: "Chinese", level: "Native", percentage: 100 },
    { name: "English", level: "Professional", percentage: 85 },
    { name: "Spanish", level: "Conversational", percentage: 20 }
  ],
  awards: [
    {
      title: "CoSPED: Consistent Soft Prompt Targeted Data Extraction & Defense",
      issuer: "AAAI-26 AI Alignment Track",
      year: "2026"
    },
    {
      title: "Oracle AI Vector Search Certified Professional",
      issuer: "Oracle",
      year: "2025"
    },
    {
      title: "NVIDIA: Building RAG Agents with LLMs",
      issuer: "NVIDIA",
      year: "2024"
    },
    {
      title: "Mathematics for Machine Learning: Multivariate Calculus",
      issuer: "Imperial College London (Coursera)",
      year: "2021"
    },
    {
      title: "Text Retrieval and Search Engines",
      issuer: "University of Illinois (Coursera)",
      year: "2021"
    },
    {
      title: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
      issuer: "Stanford University (Coursera)",
      year: "2021"
    }
  ],
  interests: ["Table Tennis", "Photography", "Cats", "Open Source", "LLM Safety"]
}
