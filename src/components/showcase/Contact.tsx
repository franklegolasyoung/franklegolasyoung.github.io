import { useEffect, useRef, useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Mail, Calendar, MapPin, Send } from "lucide-react"
import ReCAPTCHA from "react-google-recaptcha"
import emailjs from "@emailjs/browser"
import { SHOWCASE_DATA } from "../../lib/data"
import Giscus from "@giscus/react"
import { MapMyVisitors } from "./MapMyVisitors"

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

export function Contact() {
  const contact = SHOWCASE_DATA.contact
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [formState, setFormState] = useState<FormState>({ name: "", email: "", subject: "", message: "" })
  const [errors, setErrors] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false
  })
  const [recaptchaToken, setRecaptchaToken] = useState("")
  const [statusMessage, setStatusMessage] = useState("")
  const [statusType, setStatusType] = useState<"idle" | "success" | "error">("idle")
  const [isSending, setIsSending] = useState(false)
  const [giscusTheme, setGiscusTheme] = useState<"light" | "dark">("light")

  const handleChange = (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }))
    setErrors((prev) => ({ ...prev, [field]: false }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newErrors = {
      name: formState.name.trim() === "",
      email: formState.email.trim() === "",
      subject: formState.subject.trim() === "",
      message: formState.message.trim() === ""
    }
    setErrors(newErrors)

    if (Object.values(newErrors).some(Boolean)) {
      setStatusType("error")
      setStatusMessage("请完整填写所有字段。")
      return
    }

    if (!recaptchaToken) {
      setStatusType("error")
      setStatusMessage("请先完成验证码。")
      return
    }

    try {
      setIsSending(true)
      await emailjs.send(
        "service_3twdyz9",
        "template_554cqjg",
        {
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
          "g-recaptcha-response": recaptchaToken
        },
        "-MUHXq1IRPep8NK80"
      )
      setStatusType("success")
      setStatusMessage("已发送！我会尽快回复。")
      setFormState({ name: "", email: "", subject: "", message: "" })
      setRecaptchaToken("")
      recaptchaRef.current?.reset()
    } catch (error) {
      console.error(error)
      setStatusType("error")
      setStatusMessage("发送失败，请稍后重试或直接邮件联系。")
      recaptchaRef.current?.reset()
    } finally {
      setIsSending(false)
    }
  }

  const handleRecaptcha = (token: string | null) => {
    setRecaptchaToken(token ?? "")
  }

  useEffect(() => {
    const updateGiscusTheme = () => {
      const isDark = document.documentElement.classList.contains("dark")
      setGiscusTheme(isDark ? "dark" : "light")
    }

    updateGiscusTheme()
    const observer = new MutationObserver(updateGiscusTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const mediaHandler = () => {
      const stored = localStorage.getItem("theme")
      if (!stored) {
        updateGiscusTheme()
      }
    }
    mediaQuery.addEventListener("change", mediaHandler)

    return () => {
      observer.disconnect()
      mediaQuery.removeEventListener("change", mediaHandler)
    }
  }, [])

  return (
    <section className="py-24" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-4xl font-bold mb-6">{contact.heading}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">{contact.subheading}</p>
            
            <div className="space-y-6">
              {contact.channels.map((channel) => (
                <div key={channel.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#5000CA]/10 flex items-center justify-center text-[#5000CA]">
                    {renderIcon(channel.type)}
                  </div>
                  <div>
                    <h3 className="font-bold">{channel.label}</h3>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-[#5000CA] transition-colors"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">{channel.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-2">
            <CardContent className="p-6 md:p-8">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label htmlFor="name" className="text-sm font-medium">Name</label>
                     <Input
                       id="name"
                       placeholder="Your name"
                       value={formState.name}
                       onChange={handleChange("name")}
                       aria-invalid={errors.name}
                     />
                     {errors.name && <p className="text-xs text-red-500">Please enter your name.</p>}
                   </div>
                   <div className="space-y-2">
                     <label htmlFor="email" className="text-sm font-medium">Email</label>
                     <Input
                       id="email"
                       type="email"
                       placeholder="you@example.com"
                       value={formState.email}
                       onChange={handleChange("email")}
                       aria-invalid={errors.email}
                     />
                     {errors.email && <p className="text-xs text-red-500">Please enter your email.</p>}
                   </div>
                </div>
                
                <div className="space-y-2">
                   <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                   <Input
                     id="subject"
                     placeholder="Project inquiry"
                     value={formState.subject}
                     onChange={handleChange("subject")}
                     aria-invalid={errors.subject}
                   />
                   {errors.subject && <p className="text-xs text-red-500">Please enter a subject.</p>}
                </div>

                <div className="space-y-2">
                   <label htmlFor="message" className="text-sm font-medium">Message</label>
                   <Textarea
                     id="message"
                     placeholder="Tell me about your project..."
                     className="min-h-[120px]"
                     value={formState.message}
                     onChange={handleChange("message")}
                     aria-invalid={errors.message}
                   />
                   {errors.message && <p className="text-xs text-red-500">Please add some details.</p>}
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex justify-center">
                    <ReCAPTCHA sitekey="6Ldc4SAsAAAAAKoAw7iOehR3ZKFwQRAIh03fkEcC" onChange={handleRecaptcha} ref={recaptchaRef} />
                  </div>
                  <Button
                    className="gap-2 shadow-lg shadow-[#5000CA]/25 bg-[#5000CA] hover:bg-[#3f009a] text-white px-6 self-start"
                    disabled={isSending}
                  >
                    {isSending ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
                  </Button>
                  {statusMessage && (
                    <p className={`text-sm ${statusType === "success" ? "text-emerald-500" : "text-red-500"}`}>{statusMessage}</p>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* MapMyVisitors Widget */}
        <MapMyVisitors />

        {/* Giscus / Message Board Placeholder */}
        <div className="mt-24 max-w-4xl mx-auto">
           <div className="text-center mb-8">
             <h3 className="text-2xl font-bold mb-2">Discussion</h3>
             <p className="text-gray-600 dark:text-gray-400">Leave a comment or question below.</p>
           </div>
           
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f0f0f] overflow-hidden">
               <div className="bg-gray-50 dark:bg-gray-900 px-6 py-3 border-b border-gray-200 dark:border-gray-800 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"/>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                  <div className="w-3 h-3 rounded-full bg-green-500"/>
                  <span className="ml-2 text-xs text-gray-500 font-mono">giscus-widget</span>
               </div>
              <div className="p-6 md:p-8 bg-white dark:bg-[#0a0a0a]">
                <Giscus
                  key={`giscus-${giscusTheme}`}
                  repo="franklegolasyoung/portfolio"
                  repoId="R_kgDOPVHv-Q"
                  category="Announcements"
                  categoryId="DIC_kwDOPVHv-c4Ctk9o"
                  mapping="number"
                  term="1"
                  strict="1"
                  reactionsEnabled="1"
                  emitMetadata="1"
                  inputPosition="top"
                  theme={giscusTheme}
                  lang="en"
                  loading="lazy"
                />
              </div>
           </div>
        </div>

      </div>
    </section>
  )
}

function renderIcon(type?: string) {
  if (type === "email") {
    return <Mail className="w-6 h-6" />
  }
  if (type === "schedule") {
    return <Calendar className="w-6 h-6" />
  }
  return <MapPin className="w-6 h-6" />
}
