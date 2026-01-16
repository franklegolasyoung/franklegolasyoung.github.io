import { PERSONAL_INFO } from "../../lib/data"

export function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#5000CA] flex items-center justify-center text-white font-bold text-lg">
              {PERSONAL_INFO.initials}
            </div>
            <span className="font-bold text-xl tracking-tight">{PERSONAL_INFO.name}</span>
        </div>

        <div className="flex items-center gap-6">
          {PERSONAL_INFO.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="text-gray-500 hover:text-[#5000CA] transition-colors"
              target={social.url.startsWith('http') ? '_blank' : undefined}
              rel={social.url.startsWith('http') ? 'noreferrer' : undefined}
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
