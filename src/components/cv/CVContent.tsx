import { Badge } from "../ui/badge"
import { Trophy } from "lucide-react"
import { motion } from "motion/react"
import { CV_DATA } from "../../lib/data"

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
              {CV_DATA.summary}
            </p>
          </section>

          <section>
              <h2 className="text-xl font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b-2 border-[#5000CA] pb-2 mb-6">
                Education
              </h2>
              <div className="space-y-6">
                {CV_DATA.education.map((edu, index) => (
                  <div key={index} className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <div>
                       <h3 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                       <p className="text-[#5000CA] font-medium">{edu.school}</p>
                       <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                         {edu.description}
                       </p>
                    </div>
                    <span className="text-gray-500 text-sm whitespace-nowrap">{edu.period}</span>
                  </div>
                ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b-2 border-[#5000CA] pb-2 mb-6">
              Experience
            </h2>
            <div className="space-y-8">
              {CV_DATA.experience.map((exp, index) => (
                <JobItem
                  key={index}
                  role={exp.role}
                  company={exp.company}
                  period={exp.period}
                  location={exp.location}
                  details={exp.highlights}
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b-2 border-[#5000CA] pb-2 mb-6">
              Awards & Certificates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CV_DATA.awards.map((award, index) => (
                <AwardCard
                  key={index}
                  title={award.title}
                  issuer={award.issuer}
                  date={award.year}
                />
              ))}
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
              {CV_DATA.skills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} percentage={skill.level} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b-2 border-[#00CACC] pb-2 mb-6">
              Languages
            </h2>
             <ul className="space-y-2">
              {CV_DATA.languages.map((lang, index) => (
                <li key={index} className="flex justify-between">
                  <span>{lang.name}</span>
                  <span className="text-gray-500">{lang.level}</span>
                </li>
              ))}
            </ul>
          </section>

           <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-white border-b-2 border-[#00CACC] pb-2 mb-6">
              Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {CV_DATA.interests.map((interest, index) => (
                <Badge key={index} variant="outline">{interest}</Badge>
              ))}
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
