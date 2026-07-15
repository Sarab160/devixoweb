"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "Custom Software", href: "#services" },
    { label: "AI & LLM Systems", href: "#services" },
    { label: "Cloud Architecture", href: "#services" },
    { label: "Web & Mobile Apps", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Our Portfolio", href: "#projects" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  Contact: [
    { label: "devixot@gmail.com", href: "mailto:devixot@gmail.com" },
    { label: "+92 3424119598", href: "tel:+923424119598" },
    { label: "Faisalabad, Pakistan", href: "https://maps.google.com/?q=Faisalabad,Pakistan" },
    { label: "Start a Project", href: "#contact" },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devixo-solutions-92568840a",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/devixosolutions?igsh=Y295bnE3MWtxMGVn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://whatsapp.com/channel/0029VbCpATn9cDDinhg4Fu1z",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 0C5.394 0 0 5.393 0 12.03c0 2.128.556 4.195 1.614 6.02L.032 24l6.105-1.6c1.764.962 3.753 1.472 5.894 1.472 6.637 0 12.03-5.393 12.03-12.03S18.667 0 12.031 0zm0 21.846c-1.785 0-3.535-.478-5.068-1.385l-.364-.216-3.766.987.997-3.67-.238-.378C2.656 15.539 2.158 13.82 2.158 12.03 2.158 6.586 6.587 2.158 12.031 2.158s9.873 4.428 9.873 9.872-4.43 9.873-9.873 9.873c-.001 0-.001.002-.001-.057zm5.419-7.397c-.297-.149-1.758-.868-2.031-.967-.271-.1-.471-.149-.667.149-.199.298-.77 1.04-.942 1.258-.172.217-.344.242-.641.093-.298-.15-1.254-.463-2.39-1.476-.883-.79-1.48-1.765-1.651-2.062-.172-.298-.018-.46.13-.608.134-.135.297-.348.446-.52.151-.173.2-.298.298-.496.1-.198.05-.371-.025-.52-.075-.15-.668-1.613-.914-2.207-.241-.579-.485-.5-.668-.51h-.572c-.198 0-.52.074-.792.371-.272.298-1.04.1017-1.04 2.478 0 1.462.99 2.875 1.13 3.064.139.188 2.083 3.181 5.045 4.46.705.304 1.254.485 1.684.621.706.223 1.349.192 1.854.116.568-.085 1.758-.718 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.271-.198-.569-.348z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (!href.startsWith("#")) return;
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Top Gradient Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Background Accents */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Image
                  src="/logo.png"
                  alt="Devixo Solutions Logo"
                  width={56}
                  height={56}
                  className="object-contain w-14 h-14"
                />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Devixo <span className="text-primary">Solutions</span>
              </span>
            </motion.div>

            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-xs">
              Engineering high-performance digital solutions with a focus on security, scalability, and modern user experiences.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-primary/30 hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-105"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([groupTitle, links], groupIdx) => (
            <motion.div
              key={groupTitle}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
            >
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-5">
                {groupTitle}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-sm text-slate-400 hover:text-white font-light transition-colors duration-200 cursor-pointer text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white font-light transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-light">
            &copy; {new Date().getFullYear()} Devixo Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors duration-200">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
