import { Badge } from "../ui/badge"
import { Award, ExternalLink, Trophy } from "lucide-react"
import { motion } from "motion/react"

export function CVContent() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          
          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b-2 border-[#5000CA] pb-2 mb-6">
              Professional Summary
            </h2>
            <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed text-[0.95em]">
              Singapore-based Cyber Security Engineer focusing on Generative AI security, privacy attacks/defenses, and safety research. I pair
              hands-on LLM experimentation with production-ready full-stack systems and DevOps foundations, and I keep a creative
              practice alive through photography and storytelling.
            </p>
          </section>

          <section>
              <h2 className="text-xl font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b-2 border-[#5000CA] pb-2 mb-6">
                Education
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                  <div>
                     <h3 className="text-lg font-bold text-gray-900 dark:text-white">M.Sc Artificial Intelligence</h3>
                     <p className="text-[#5000CA] font-medium">Nanyang Technological University</p>
                     <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                       Specialized in large language models, deep learning, computer vision, NLP, and time series analysis with a focus on responsible AI.
                     </p>
                  </div>
                  <span className="text-gray-500 text-sm whitespace-nowrap">2022 - 2024</span>
                </div>
                 <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                  <div>
                     <h3 className="text-lg font-bold text-gray-900 dark:text-white">B.Eng Computer Science and Technology</h3>
                     <p className="text-[#5000CA] font-medium">Harbin Institute of Technology</p>
                     <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                       Built a strong foundation in algorithms, operating systems, networks, databases, and user experience design.
                     </p>
                  </div>
                  <span className="text-gray-500 text-sm whitespace-nowrap">2018 - 2022</span>
                </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b-2 border-[#5000CA] pb-2 mb-6">
              Experience
            </h2>
            <div className="space-y-8">
              <JobItem 
                role="Cyber Security Engineer"
                company="ST Engineering"
                period="Jan 2024 - Present"
                location="Singapore"
                details={[
                  "Lead research and development across LLM security, privacy attack simulations, and safety evaluations for enterprise deployments.",
                  "Designed internal tooling that detects jailbreak attempts and AI-generated text to safeguard mission-critical workflows.",
                  "Published the first-author paper \"CoSPED: Consistent Soft-Prompt Targeted Data Extraction & Defense\" accepted at AAAI-26's AI Alignment track."
                ]}
              />
              <JobItem 
                role="Full-stack & GenAI Builder"
                company="Independent"
                period="2024 - Present"
                location="Singapore / Remote"
                details={[
                  "Architected full-stack products such as PixCloud (media collaboration) and ChatLah (LLM-assisted equities research).",
                  "Implemented LangChain / LangGraph agents, Spring Boot + FastAPI services, and observability pipelines deployed with Docker and Nginx.",
                  "Collaborated with designers, founders, and researchers to translate ambiguous ideas into shippable software."
                ]}
              />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b-2 border-[#5000CA] pb-2 mb-6">
              Awards & Certificates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AwardCard 
                title="CoSPED: Consistent Soft Prompt Targeted Data Extraction & Defense" 
                issuer="AAAI-26 AI Alignment Track" 
                date="2026"
              />
              <AwardCard 
                title="Oracle AI Vector Search Certified Professional" 
                issuer="Oracle" 
                date="2025"
              />
              <AwardCard 
                title="NVIDIA: Building RAG Agents with LLMs" 
                issuer="NVIDIA" 
                date="2024"
              />
              <AwardCard 
                title="Mathematics for Machine Learning: Multivariate Calculus" 
                issuer="Imperial College London (Coursera)" 
                date="2021"
              />
              <AwardCard 
                title="Text Retrieval and Search Engines" 
                issuer="University of Illinois (Coursera)" 
                date="2021"
              />
              <AwardCard 
                title="Divide and Conquer, Sorting and Searching, and Randomized Algorithms" 
                issuer="Stanford University (Coursera)" 
                date="2021"
              />
            </div>
          </section>

        </div>

        {/* Sidebar */}
        <div className="space-y-12">
          
          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b-2 border-[#00CACC] pb-2 mb-6">
              Skills
            </h2>
            <div className="space-y-4">
              <SkillBar name="Python" percentage={100} />
              <SkillBar name="Java" percentage={80} />
              <SkillBar name="C++" percentage={70} />
              <SkillBar name="LangChain / RAG" percentage={85} />
              <SkillBar name="Spring Boot & FastAPI" percentage={80} />
              <SkillBar name="Docker & Cloud Infra" percentage={75} />
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b-2 border-[#00CACC] pb-2 mb-6">
              Languages
            </h2>
             <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Chinese</span>
                <span className="text-gray-500">Native</span>
              </li>
               <li className="flex justify-between">
                <span>English</span>
                <span className="text-gray-500">Professional</span>
              </li>
               <li className="flex justify-between">
                <span>Spanish</span>
                <span className="text-gray-500">Conversational</span>
              </li>
            </ul>
          </section>

           <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b-2 border-[#00CACC] pb-2 mb-6">
              Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Table Tennis</Badge>
              <Badge variant="outline">Photography</Badge>
              <Badge variant="outline">Cats</Badge>
              <Badge variant="outline">Open Source</Badge>
              <Badge variant="outline">LLM Safety</Badge>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function JobItem({ role, company, period, location, details }: any) {
  return (
    <div className="relative border-l-2 border-gray-200 dark:border-gray-800 pl-6 pb-2">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#5000CA] border-4 border-white dark:border-[#0a0a0a]" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{role}</h3>
        <span className="text-sm font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{period}</span>
      </div>
      <div className="flex items-center gap-2 text-[#5000CA] font-medium mb-3">
        <span>{company}</span>
        <span className="text-gray-300">•</span>
        <span className="text-gray-500 text-sm font-normal">{location}</span>
      </div>
      <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
        {details.map((detail: string, i: number) => (
          <li key={i}>{detail}</li>
        ))}
      </ul>
    </div>
  )
}

function SkillBar({ name, percentage }: { name: string, percentage: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm font-medium mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-[#00CACC]" 
        />
      </div>
    </div>
  )
}

function AwardCard({ title, issuer, date }: { title: string, issuer: string, date: string }) {
  return (
    <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex flex-col gap-2 hover:border-[#5000CA] transition-colors">
       <div className="flex items-start justify-between">
         <div className="w-8 h-8 rounded-full bg-[#5000CA]/10 flex items-center justify-center text-[#5000CA]">
           <Trophy className="w-4 h-4" />
         </div>
         <span className="text-xs text-gray-400">{date}</span>
       </div>
       <div>
         <h4 className="font-bold text-gray-900 dark:text-white leading-tight">{title}</h4>
         <p className="text-sm text-gray-500">{issuer}</p>
       </div>
    </div>
  )
}
