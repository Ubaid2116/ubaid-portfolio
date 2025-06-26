"use client"

import { useState, useRef, FC, FormEvent } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import Particles from "@/components/ui/particles"

// Define a type for our form data
interface FormData {
  name: string
  email: string
  message: string
}

const ContactSection: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false)

  const formRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(formRef, { once: true, amount: 0.2 })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmissionSuccess(true)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden" id="contact">
      {/* Animated background grid */}
      <motion.div
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-emerald-500/10 animate-pulse" />
      </motion.div>

      {/* Particles Component */}
      <Particles />

      <div className="relative container mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Have a question or want to collaborate? Drop us a message and we&apos;ll get back to you soon.
          </motion.p>
        </div>

        {/* Contact Form */}
        <motion.div
          ref={formRef}
          className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white px-4 py-3 focus:border-emerald-500 focus:ring-emerald-500"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white px-4 py-3 focus:border-emerald-500 focus:ring-emerald-500"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-white px-4 py-3 focus:border-emerald-500 focus:ring-emerald-500"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto h-14 px-8 bg-gradient-to-r from-purple-600 via-emerald-600 to-purple-600 text-white rounded-lg transition-all duration-300 hover:from-purple-500 hover:via-emerald-500 hover:to-purple-500 shadow-lg shadow-purple-500/25 border border-white/10"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Success Modal */}
      <Dialog open={submissionSuccess} onOpenChange={() => setSubmissionSuccess(false)}>
        <DialogContent className="sm:max-w-[425px] bg-gray-900/95 backdrop-blur-lg text-white border border-white/10">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Mail className="w-6 h-6 text-gray-300" aria-hidden="true" />
              <span>Thank You!</span>
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Your message has been sent successfully. We&apos;ll get back to you soon.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default ContactSection
