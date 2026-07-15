"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2, MessageSquare } from "lucide-react";

interface FormState {
  fullName: string;
  email: string;
  projectType: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleFocus = (fieldName: string) => setFocusedField(fieldName);
  const handleBlur = () => setFocusedField(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;
    if (isSubmitting) return; // Prevent duplicate submissions

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          subject: formData.projectType,
          message: formData.message
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ fullName: "", email: "", projectType: "", message: "" });

        // Keep success message visible for 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setErrorMsg(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Fetch failed:", error);
      setErrorMsg("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLabelFloating = (field: keyof FormState) => {
    return focusedField === field || formData[field] !== "";
  };

  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email Inquiry",
      content: "devixot@gmail.com",
      href: "mailto:devixot@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Direct Phone",
      content: "+92 3424119598",
      href: "tel:+923424119598",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "HQ Coordinates",
      content: "Faisalabad, Pakistan",
      href: "https://maps.google.com/?q=Faisalabad,Pakistan",
    },
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-[-10%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1 rounded-full border border-primary/25 bg-primary/5 text-xs text-primary font-bold tracking-widest uppercase mb-4"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl xs:text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 sm:mb-6 max-w-xl leading-tight"
          >
            Start Your Project Journey
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">

          {/* Info Column (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-between gap-6 sm:gap-8"
          >
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-wide">
                Connect With Our Specialists
              </h3>
              <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed">
                Whether you have an established software specification sheet or just an early-stage concept, we are here to support your engineering requirements.
              </p>
            </div>

            {/* Contacts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4">
              {contactItems.map(({ icon, label, content, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "HQ Coordinates" ? "_blank" : undefined}
                  rel={label === "HQ Coordinates" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:border-primary/20 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase font-mono tracking-widest text-slate-400">{label}</div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-primary transition-colors break-words leading-snug">
                      {content}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3 text-xs text-slate-400 font-mono tracking-wider select-none">
              <MessageSquare className="w-4 h-4 text-primary animate-pulse" />
              <span>Devixo SLA Response Time: &lt; 24h</span>
            </div>
          </motion.div>

          {/* Interactive Form Column (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-lg shadow-primary/5 overflow-hidden">

              {/* Success Overlay — original style */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 z-20 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="text-emerald-500 mb-4"
                    >
                      <CheckCircle2 className="w-16 h-16" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Dispatched!</h4>
                    <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                      Thank you for contacting Devixo Solutions. Our software consultants will analyze your message and reply within one business day.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                {/* Full Name + Email — side by side on sm+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onFocus={() => handleFocus("fullName")}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-5 py-4 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-primary/45 focus:ring-1 focus:ring-primary/45 transition-all duration-300 font-sans"
                      id="fullNameInput"
                    />
                    <label
                      htmlFor="fullNameInput"
                      className={`absolute left-4 sm:left-5 pointer-events-none transition-all duration-300 ${
                        isLabelFloating("fullName")
                          ? "top-0 -translate-y-1/2 text-[10px] font-bold text-primary px-2 bg-white tracking-widest uppercase"
                          : "top-1/2 -translate-y-1/2 text-sm text-slate-400"
                      }`}
                    >
                      Full Name
                    </label>
                  </div>

                  {/* Email Address */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onFocus={() => handleFocus("email")}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-5 py-4 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-primary/45 focus:ring-1 focus:ring-primary/45 transition-all duration-300 font-sans"
                      id="emailInput"
                    />
                    <label
                      htmlFor="emailInput"
                      className={`absolute left-4 sm:left-5 pointer-events-none transition-all duration-300 ${
                        isLabelFloating("email")
                          ? "top-0 -translate-y-1/2 text-[10px] font-bold text-primary px-2 bg-white tracking-widest uppercase"
                          : "top-1/2 -translate-y-1/2 text-sm text-slate-400"
                      }`}
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                {/* Project Selection */}
                <div className="relative">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onFocus={() => handleFocus("projectType")}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-5 py-4 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-primary/45 focus:ring-1 focus:ring-primary/45 transition-all duration-300 font-sans appearance-none cursor-pointer"
                    id="projectTypeSelect"
                  >
                    <option value="" disabled className="bg-white">Select Project Scope</option>
                    <option value="Custom Software Dev" className="bg-white">Custom Software Dev</option>
                    <option value="AI & LLM Integrations" className="bg-white">AI &amp; LLM Integrations</option>
                    <option value="Cloud Architecture" className="bg-white">Cloud Architecture</option>
                    <option value="Product UI/UX Design" className="bg-white">Product UI/UX Design</option>
                    <option value="Mobile App Development" className="bg-white">Mobile App Development</option>
                    <option value="E-commerce Solution" className="bg-white">E-commerce Solution</option>
                    <option value="Other" className="bg-white">Other</option>
                  </select>
                  <label
                    htmlFor="projectTypeSelect"
                    className={`absolute left-4 sm:left-5 pointer-events-none transition-all duration-300 ${
                      isLabelFloating("projectType")
                        ? "top-0 -translate-y-1/2 text-[10px] font-bold text-primary px-2 bg-white tracking-widest uppercase"
                        : "top-1/2 -translate-y-1/2 text-sm text-slate-400"
                    }`}
                  >
                    Project Type
                  </label>
                  <div className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs font-mono">
                    ▼
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-5 py-4 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-primary/45 focus:ring-1 focus:ring-primary/45 transition-all duration-300 font-sans resize-none"
                    id="messageInput"
                  />
                  <label
                    htmlFor="messageInput"
                    className={`absolute left-4 sm:left-5 pointer-events-none transition-all duration-300 ${
                      isLabelFloating("message")
                        ? "top-0 -translate-y-1/2 text-[10px] font-bold text-primary px-2 bg-white tracking-widest uppercase"
                        : "top-[20px] -translate-y-1/2 text-sm text-slate-400"
                    }`}
                  >
                    Brief Message
                  </label>
                </div>

                {/* Error Message */}
                {errorMsg && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-rose-500 text-sm text-center font-medium bg-rose-50 py-3 px-4 rounded-xl border border-rose-100"
                  >
                    {errorMsg}
                  </motion.p>
                )}

                {/* Submit button — original "Allocating Node" animation */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-primary to-accent shadow-md shadow-primary/10 cursor-pointer overflow-hidden transition-all duration-300 hover:opacity-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      Allocating Node <Loader2 className="w-4 h-4 animate-spin text-white" />
                    </>
                  ) : (
                    <>
                      Send Inquiry <Send className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
