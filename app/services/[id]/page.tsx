"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Database as DbIcon, 
  Terminal, 
  ArrowRight 
} from "lucide-react";

interface ServiceDetail {
  title: string;
  category: string;
  tagline: string;
  overview: string;
  benefits: string[];
  features: { title: string; desc: string }[];
  technologies: string[];
  outcomes: string[];
}

const detailsData: Record<string, ServiceDetail> = {
  pos: {
    title: "POS & Business Management Systems",
    category: "POS Systems",
    tagline: "Custom Point-of-Sale software built specifically for physical retail and food hospitality workflows.",
    overview: "Generic POS systems force your business to fit their features. We build custom point-of-sale systems that adapt to your actual operations. From taking table orders and printing receipts to tracking kitchen display systems and inventory status, we deliver a unified platform designed for speed and reliability.",
    benefits: [
      "Works 100% offline and syncs transaction logs to the cloud when connected.",
      "Eliminates menu mistakes and ordering delays with real-time kitchen screens.",
      "Track cashier shifts, split bills, and generate automatic daily accounting summaries."
    ],
    features: [
      { title: "Table-side Order Management", desc: "Easily manage active tables, queue orders, edit items, and apply dynamic discount structures." },
      { title: "Kitchen Display System (KDS)", desc: "Waiters submit orders to kitchen screens instantly, reducing paper trail and service speed." },
      { title: "Automated Inventory Sync", desc: "Deducts stock automatically as dishes/items are ordered, warning you of low stock levels." },
      { title: "Multi-payment Checkout", desc: "Seamless split-billing support with integrated local credit card terminals and cash calculations." }
    ],
    technologies: ["React", "Electron", "PostgreSQL", "Node.js", "WebSockets"],
    outcomes: ["60% reduction in order processing errors", "42% faster table turnover", "Full offline operational resilience"]
  },
  web: {
    title: "Website Development & Web Portals",
    category: "Web Development",
    tagline: "High-performance websites and bespoke client portals designed to drive customer action.",
    overview: "Your website is your business's front door. We build lightning-fast, visually polished web applications and corporate websites optimized for SEO, speed, and user experience. Whether you need a simple booking system, an online storefront, or an internal administrative portal, we deliver secure codebases built on modern tech stacks.",
    benefits: [
      "Clean layouts matching your branding, optimized for Google search rankings.",
      "Fully responsive grids that render beautifully on mobile phones, tablets, and desktops.",
      "Secure user login systems, Stripe integration, and clean back-office administration dashboards."
    ],
    features: [
      { title: "E-Commerce Platforms", desc: "Custom checkout systems with product catalogs, shopping carts, and dynamic pricing rules." },
      { title: "Client Booking Portals", desc: "Calendar synchronization systems letting customers schedule calls or book services directly." },
      { title: "Custom Dashboard Portals", desc: "Administrative back-offices to track user registrations, manage orders, and edit copy." },
      { title: "SEO & Speed Optimization", desc: "Static-site generation and optimized assets for near-instant load speeds." }
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Vercel"],
    outcomes: ["Page loads under 1.8 seconds", "Improved search engine visibility", "Secure and reliable transactional interfaces"]
  },
  mobile: {
    title: "Mobile App Development",
    category: "Mobile Apps",
    tagline: "Custom iOS and Android applications to keep your clients engaged on the go.",
    overview: "Reach your users directly in their pockets. We engineer high-performance mobile apps for food ordering, client messaging, delivery tracking, and loyalty programs. We build native-feeling apps that load fast, run smoothly, and connect cleanly to your existing backend systems.",
    benefits: [
      "Universal codebase for iOS and Android, cutting dev timelines and budgets in half.",
      "Push notification setups to announce special offers, order statuses, or direct messages.",
      "Secure offline caching, allowing core features to work without a mobile network connection."
    ],
    features: [
      { title: "Real-time Order Tracking", desc: "Integrated maps showing live delivery coordinates and automated status alerts." },
      { title: "Push Notification Channels", desc: "Deliver high-engagement messages directly to customer home screens." },
      { title: "Device Feature Access", desc: "Proper integration with cameras, biometric locks, and local file storage." },
      { title: "In-app Billing & Cards", desc: "Safe customer profile setups saving card tokens securely via PCI-compliant gateways." }
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Node.js", "Firebase"],
    outcomes: ["Single codebase deployment for iOS/Android", "Seamless offline sync features", "4.8+ App Store user experience benchmarks"]
  },
  ml: {
    title: "Data Science & Machine Learning",
    category: "AI & ML",
    tagline: "Turn historical company numbers into forecasting metrics and automatic business actions.",
    overview: "Data is useless unless you learn from it. We design custom machine learning pipelines that process your business history to forecast customer demand, set optimal product pricing, analyze support feedback sentiment, and detect suspicious transactions before they cost you money.",
    benefits: [
      "Make inventory procurement choices based on demand forecasting instead of guesswork.",
      "Automated classification systems sorting customer tickets and feedback quickly.",
      "Optimized price calculators adjusting to seasonal patterns and local inventory limits."
    ],
    features: [
      { title: "Predictive Demand Forecasts", desc: "Analyze historical sales to predict future resource and inventory requirements." },
      { title: "Customer Behavior Models", desc: "Identify top purchasers and predict customer churn risks before they happen." },
      { title: "Fraud Detection Triggers", desc: "Identify anomalies in payment transactions and user access paths automatically." },
      { title: "Dynamic Costing Algorithms", desc: "Custom logic calculating the ideal pricing parameters in real time." }
    ],
    technologies: ["Python", "scikit-learn", "Pandas", "FastAPI", "Docker"],
    outcomes: ["Up to 28% decrease in raw overstock levels", "94% forecast accuracy benchmarks", "Automated customer classification flows"]
  },
  ai: {
    title: "AI Agents & Generative AI Solutions",
    category: "AI Systems",
    tagline: "Automate company procedures and user interactions with custom large language models.",
    overview: "Deploy intelligent virtual assistants that work 24/7. We build custom generative AI systems and agentic workflows integrated with OpenAI, Claude, and your own internal database. From smart website support agents to automated document processing, we help you scale operations without increasing headcount.",
    benefits: [
      "Handle up to 80% of customer support questions instantly and autonomously.",
      "Read, classify, and extract clean text from scanned PDF invoices or records in seconds.",
      "Empower your staff with search tools that look up files and policy rules in plain English."
    ],
    features: [
      { title: "Smart Chatbot Widgets", desc: "Support bots trained on your PDFs, answering customers in standard natural phrasing." },
      { title: "Document Processing Hubs", desc: "Automatically extract names, totals, and line items from incoming invoices." },
      { title: "Vector Search Archives", desc: "Secure internal semantic search index reading company records in milliseconds." },
      { title: "Automated Ticket Routers", desc: "Sort incoming requests by urgency and suggest draft answers for staff review." }
    ],
    technologies: ["OpenAI API", "LangChain", "Python", "Pinecone", "FastAPI"],
    outcomes: ["80% ticket deflection rates on launch", "Document reading times cut by 90%", "24/7 client response readiness"]
  },
  cloud: {
    title: "Cloud Infrastructure & DevOps Solutions",
    category: "Cloud Engineering",
    tagline: "High-performance, secure, and auto-scaling cloud clusters keeping your site online 24/7.",
    overview: "We migrate and orchestrate containerized web environments on AWS and Google Cloud. We deploy secure database setups, automated backups, and load-balanced networks that scale up automatically during high traffic hours and scale down to save you money during quiet hours.",
    benefits: [
      "99.99% system availability with automated failovers and server status monitors.",
      "Infrastructure defined completely as code (Terraform) for simple configuration replication.",
      "Safe, continuous delivery pipelines deploying new edits with zero application downtime."
    ],
    features: [
      { title: "Container Orchestration", desc: "Deploy cluster nodes (Kubernetes) ensuring quick scaling and container isolations." },
      { title: "Automated CI/CD Pipelines", desc: "Source control checks that compile, test, and release code updates automatically." },
      { title: "Cost Minimization Configs", desc: "Auto-scaling rules that power down dev servers or scale back clusters overnight." },
      { title: "Server Health Monitoring", desc: "Live visual status trackers alerting developers of errors before users notice." }
    ],
    technologies: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
    outcomes: ["Uptime averages exceeding 99.97%", "Hosting bills reduced by 40%", "Zero-downtime deployments achieved"]
  },
  analytics: {
    title: "Data Analytics & Business Intelligence",
    category: "Data & Metrics",
    tagline: "Visualize operational metrics, revenue data, and staff performance in real-time.",
    overview: "Stop reading raw database tables. We build business intelligence dashboards that render complex company data into clear, simple charts and graphs. Monitor your live sales metrics, customer acquisition rates, and worker performance from a single secure login.",
    benefits: [
      "Interactive graphs and custom filters to inspect stats by date, branch, or product.",
      "Automated PDF report generation emailed to management daily, weekly, or monthly.",
      "Identify sales spikes, top-performing teams, and underutilized inventory instantly."
    ],
    features: [
      { title: "Interactive Chart Hubs", desc: "Beautiful trendlines, bar charts, and pie charts reflecting live business health." },
      { title: "Automated KPI Alerts", desc: "Get notifications when sales reach milestones or when inventory hits low limits." },
      { title: "Report Export Tools", desc: "Download clean CSV grids or PDF layouts with a single click." },
      { title: "Multi-branch Consolidation", desc: "Consolidate statistics from multiple store coordinates into one central dashboard." }
    ],
    technologies: ["React", "Recharts", "Node.js", "PostgreSQL", "Tailwind CSS"],
    outcomes: ["Closer alignment on key business goals", "Hours saved on manual accounting sheets", "Live visibility across multiple stores"]
  },
  database: {
    title: "Database Design & Performance Management",
    category: "Database Engineering",
    tagline: "Proper data architecture built for absolute speed, safety, and scale.",
    overview: "A slow database is a slow app. We design relational and NoSQL database layers structured for performance. Whether you are setting up new database tables, migration pipelines, or optimizing index queues to speed up slow database queries, we build systems that handle complex queries in milliseconds.",
    benefits: [
      "Speed up website page loading by optimizing database query response times.",
      "Safeguard database contents with automated snapshots, backups, and transaction logs.",
      "Scale database capacity with replication models and read-heavy sub-servers."
    ],
    features: [
      { title: "Relational Schema Planning", desc: "Clean database structuring (PostgreSQL, MySQL) preventing duplicate fields." },
      { title: "Database Performance Tuning", desc: "Add database index keys and rephrase database queries to drop speed times." },
      { title: "Secure Migration Flows", desc: "Move live databases to new cloud servers without losing tables or corrupting records." },
      { title: "High Availability Clusters", desc: "Deploy failover databases that take over instantly if a server crashes." }
    ],
    technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma"],
    outcomes: ["Database query speeds dropped below 10ms", "Fully automated backup scripts", "Safe zero-loss database migrations"]
  },
  api: {
    title: "API Integration & Automation",
    category: "Integration",
    tagline: "Sync payment gateways, invoice tools, shipping networks, and CRMs automatically.",
    overview: "Connect your digital platforms to work as one. We construct middleware adapters and automation scripts that sync user information, process payments (Stripe/PayPal), post deliveries (FedEx/UPS), and update customer profiles (Salesforce/HubSpot) automatically — saving hours of copy-pasting.",
    benefits: [
      "Complete elimination of manual data entry errors between separated tools.",
      "Automatic real-time notifications via email or Slack when milestones are reached.",
      "Construct reliable webhooks that trigger workflows the moment a payment succeeds."
    ],
    features: [
      { title: "Payment Integration", desc: "Safe credit card checkouts and subscriptions utilizing Stripe API tokens." },
      { title: "Courier & Delivery Sync", desc: "Connect store checkouts to shipping providers to auto-calculate postage rates." },
      { title: "CRM & Marketing Links", desc: "Add leads to your mailing lists and sales tracking platforms instantly." },
      { title: "Automated Slack Alerts", desc: "Send status reports to your developer team's communications channels." }
    ],
    technologies: ["Node.js", "FastAPI", "Stripe API", "Webhooks", "Axios"],
    outcomes: ["100% automated data sync", "Zero errors in billing transfers", "Hours of administrative tasks eliminated daily"]
  }
};

export default function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const id = resolvedParams.id;
  const data = detailsData[id];

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      
      {/* Detail Header bar */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="relative flex items-center group">
            <Image
              src="/logo.png"
              alt="Devixo Logo"
              width={44}
              height={44}
              className="object-contain w-11 h-11"
              priority
            />
          </Link>
          <Link 
            href="/#services" 
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-primary transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
        </div>
      </header>

      {/* Main page layout */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-16 w-full relative z-10">
        
        {/* Glow indicators */}
        <div className="absolute top-[10%] left-[-10%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

        {/* Back Link */}
        <div className="mb-6">
          <Link 
            href="/#services" 
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Services Hub
          </Link>
        </div>

        {/* Category tag */}
        <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs text-primary font-bold tracking-widest uppercase mb-4">
          {data.category}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
          {data.title}
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-slate-500 font-light leading-relaxed mb-10 border-l-4 border-primary pl-4">
          {data.tagline}
        </p>

        {/* Two-Column Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12 items-start">
          
          {/* Left Column (2/3 width on large screens): Details */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" /> Service Overview
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                {data.overview}
              </p>
            </section>

            {/* Core Features */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" /> Key Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {data.features.map((feature, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50">
                    <h3 className="text-sm font-bold text-slate-800 mb-1.5">{feature.title}</h3>
                    <p className="text-xs text-slate-500 leading-normal font-light">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* What you get / Benefits */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> Value &amp; Benefits
              </h2>
              <ul className="space-y-3">
                {data.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed font-light">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* Right Column (1/3 width): Metadata Panel */}
          <div className="space-y-6 lg:sticky lg:top-24">
            
            {/* Tech Stack Panel */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-xs uppercase tracking-widest font-mono text-slate-400 mb-4 font-bold">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {data.technologies.map(t => (
                  <span key={t} className="text-[10px] font-mono tracking-wide text-primary bg-primary/5 px-2.5 py-1 rounded border border-primary/10 font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Deliverable Outcomes */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-xs uppercase tracking-widest font-mono text-slate-400 mb-4 font-bold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> Target Outcomes
              </h3>
              <ul className="space-y-3">
                {data.outcomes.map((o, idx) => (
                  <li key={idx} className="text-xs text-slate-700 font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {o}
                  </li>
                ))}
              </ul>
            </div>

            {/* Start project button */}
            <Link 
              href="/#contact"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-primary to-accent shadow-md shadow-primary/15 hover:opacity-95 active:scale-95 transition-all duration-300"
            >
              Start Consultation <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

        </div>

      </main>

      {/* Detail Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 mt-auto border-t border-slate-800 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center shadow">
              <Image src="/logo.png" alt="Devixo Solutions Logo" width={44} height={44} className="object-contain w-11 h-11" />
            </div>
            <span className="text-white font-bold tracking-tight">Devixo Solutions</span>
          </div>
          <p className="font-light">&copy; {new Date().getFullYear()} Devixo Solutions. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
