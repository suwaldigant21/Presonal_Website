"use client"

import type React from "react"
import { useState } from "react"
import SectionWrapper from "./section-wrapper"
import { Animated } from "./animations/animate"
import { Github } from "lucide-react"
import ReCAPTCHA from "react-google-recaptcha"

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)

  const SITE_KEY = "6LfbET8rAAAAAIvf1wHYqRHe5vuGAlRDtptNewV8" // Google reCAPTCHA site key for digantsuwal.com.np

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)
    setSubmitError("")

    if (!captchaValue) {
      setSubmitError("Please complete the captcha verification.")
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })
      if (response.ok) {
        setSubmitSuccess(true)
        setFormState({ name: "", email: "", message: "" })
        setCaptchaValue(null)
      } else {
        const data = await response.json()
        setSubmitError(data.error || "There was an error submitting the form. Please try again.")
      }
    } catch (error) {
      setSubmitError("There was an error submitting the form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SectionWrapper id="contact" className="bg-[#f6f0cf] py-16 px-8 dark:bg-gray-900" title="Contact">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left side - Contact Info */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <Animated animation="fadeInUp" delay={0.1}>
              <h2 className="text-5xl font-black mb-12 text-black dark:text-white uppercase">GET IN TOUCH</h2>
            </Animated>

            <div className="space-y-8 mt-16">
              <div>
                <h3 className="text-lg font-bold mb-1 text-black dark:text-white uppercase">ADDRESS</h3>
                <p className="text-black dark:text-white">Suryabinayak,</p>
                <p className="text-black dark:text-white">Bhaktapur, Nepal</p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-1 text-black dark:text-white uppercase">LINKED IN</h3>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                  <a
                    href="https://www.linkedin.com/in/digantsuwal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:underline"
                  >
                    www.linkedin.com/in/digantsuwal
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-1 text-black dark:text-white uppercase">GITHUB</h3>
                <div className="flex items-center">
                  <Github className="w-5 h-5 mr-2" />
                  <a
                    href="https://github.com/suwaldigant21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:underline"
                  >
                    https://github.com/suwaldigant21
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-1 text-black dark:text-white uppercase">EMAIL</h3>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  >
                    <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 17.25V6.75zm1.72-.53a.75.75 0 0 0-.97 1.14l8.25 7.125a.75.75 0 0 0 .97 0l8.25-7.125a.75.75 0 1 0-.97-1.14L12 12.19 3.97 6.22z"/>
                  </svg>
                  <a href="mailto:digantsuwal21@gmail.com" className="text-black dark:text-white hover:underline">
                    digantsuwal21@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="w-full md:w-1/2 lg:w-3/5">
            <Animated animation="fadeInUp" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                {/* Centered and bold text */}
                <p className="text-xl font-bold mb-8 text-black dark:text-white text-center">
                  Have something on your mind? Let's discuss
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    {/* Bold label */}
                    <label htmlFor="name" className="block text-black dark:text-white mb-2 font-bold text-lg md:text-xl">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-2 bg-transparent border-t-0 border-x-0 border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-black dark:focus:border-white text-black dark:text-white text-lg md:text-xl"
                    />
                  </div>

                  <div>
                    {/* Bold label */}
                    <label htmlFor="email" className="block text-black dark:text-white mb-2 font-bold text-lg md:text-xl">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-2 bg-transparent border-t-0 border-x-0 border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-black dark:focus:border-white text-black dark:text-white text-lg md:text-xl"
                    />
                  </div>

                  <div>
                    {/* Bold label */}
                    <label htmlFor="message" className="block text-black dark:text-white mb-2 font-bold text-lg md:text-xl">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-0 py-2 bg-transparent border-t-0 border-x-0 border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-black dark:focus:border-white text-black dark:text-white resize-none text-lg md:text-xl"
                    ></textarea>
                  </div>

                  <div className="flex justify-center">
                    <ReCAPTCHA
                      sitekey={SITE_KEY}
                      onChange={handleCaptchaChange}
                      theme={typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'}
                    />
                  </div>

                  <div className="flex justify-center mt-8">
                    {/* Updated gradient colors */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 rounded-full font-bold text-black dark:text-white bg-gradient-to-r from-[#fff7ad] to-[#ffa9f9] hover:opacity-90 transition-opacity disabled:opacity-70 dark:from-[#232526] dark:to-[#414345] dark:bg-gradient-to-r"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>

                  {submitSuccess && (
                    <p className="text-green-600 dark:text-green-400 mt-4">
                      Your message has been sent successfully! I'll get back to you soon.
                    </p>
                  )}
                  {submitError && <p className="text-red-600 dark:text-red-400 mt-4">{submitError}</p>}
                </form>
              </div>
            </Animated>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ContactSection
