"use client";

import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      title: "Agent Setup",
      description: "We deploy and configure your custom AI agent with your preferred platforms and integrations.",
      icon: "🚀",
    },
    {
      title: "Custom Skills",
      description: "Build specialized capabilities tailored to your workflows—from data analysis to customer support.",
      icon: "🧠",
    },
    {
      title: "Integration",
      description: "Connect your agent to Slack, Discord, Telegram, email, calendars, CRMs, and more.",
      icon: "🔗",
    },
    {
      title: "Ongoing Support",
      description: "24/7 monitoring, updates, and optimization to keep your agent performing at its best.",
      icon: "🛡️",
    },
  ];

  const features = [
    {
      title: "24/7 Availability",
      description: "Your AI agent never sleeps. Handle requests, answer questions, and execute tasks around the clock.",
      icon: "⏰",
    },
    {
      title: "Multi-Platform",
      description: "One agent, everywhere. Deploy across Telegram, Discord, Slack, web, SMS, and custom apps.",
      icon: "📱",
    },
    {
      title: "Custom Skills",
      description: "From web scraping to API integrations to file processing—your agent does exactly what you need.",
      icon: "⚡",
    },
    {
      title: "Memory & Context",
      description: "Agents remember conversations, learn preferences, and maintain context across sessions.",
      icon: "💾",
    },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$299",
      period: "/mo",
      description: "Perfect for individuals and small teams getting started with AI agents.",
      features: [
        "1 AI Agent",
        "2 Platform Integrations",
        "5 Custom Skills",
        "10K messages/month",
        "Email Support",
        "Basic Analytics",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$599",
      period: "/mo",
      description: "For growing businesses that need more power and flexibility.",
      features: [
        "3 AI Agents",
        "Unlimited Integrations",
        "20 Custom Skills",
        "100K messages/month",
        "Priority Support",
        "Advanced Analytics",
        "Custom Training",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For organizations with complex needs and high-volume requirements.",
      features: [
        "Unlimited Agents",
        "Unlimited Everything",
        "Dedicated Account Manager",
        "Custom Model Fine-tuning",
        "On-premise Options",
        "SLA Guarantee",
        "White-label Available",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: "What exactly is an AI agent?",
      answer: "An AI agent is an autonomous AI assistant that can execute tasks, access tools, remember context, and work across multiple platforms. Unlike basic chatbots, agents can take actions—browse the web, send emails, manage calendars, process files, and integrate with your existing tools.",
    },
    {
      question: "How long does it take to set up an agent?",
      answer: "Most basic setups are completed within 24-48 hours. Custom skill development and complex integrations typically take 1-2 weeks depending on scope. We'll provide a clear timeline during your onboarding call.",
    },
    {
      question: "What platforms can my agent work on?",
      answer: "We support Telegram, Discord, Slack, Microsoft Teams, WhatsApp, SMS, email, and custom web interfaces. Your agent can work on multiple platforms simultaneously with consistent memory and context.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade encryption, SOC 2 compliant infrastructure, and never train on your data. You can also opt for on-premise deployment with our Enterprise plan.",
    },
    {
      question: "Can I try before committing?",
      answer: "Yes! Our Pro plan includes a 14-day free trial. You can also book a demo call to see exactly how an agent would work for your specific use case.",
    },
    {
      question: "What happens if I need help?",
      answer: "Starter plans include email support with 24-hour response times. Pro and Enterprise plans get priority support with dedicated Slack channels and direct access to our engineering team.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-sm">
                RA
              </div>
              <span className="text-xl font-bold">RobertAI</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-300 hover:text-white transition">Services</a>
              <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition">FAQ</a>
              <a href="#contact" className="bg-gradient-to-r from-violet-600 to-cyan-600 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-slate-300">Now with GPT-4, Claude, and custom models</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            AI Agents That Actually
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"> Work For You</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10">
            We build, deploy, and manage custom AI agents that automate your workflows, 
            handle customer support, and integrate with all your tools—so you can focus on what matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-gradient-to-r from-violet-600 to-cyan-600 px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-violet-500/25">
              Start Building Your Agent →
            </a>
            <a href="#features" className="bg-slate-800 border border-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-700 transition">
              See How It Works
            </a>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">150+</div>
              <div className="text-slate-400">Agents Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10M+</div>
              <div className="text-slate-400">Messages Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-slate-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-slate-400">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From initial setup to ongoing optimization, we handle everything so your AI agent delivers real results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-violet-500/50 transition group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-400 transition">{service.title}</h3>
                <p className="text-slate-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built Different</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              These aren't basic chatbots. Our agents are autonomous assistants that actually get things done.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-5 p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl">
                <div className="text-4xl shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              No hidden fees. No surprises. Just powerful AI agents at a price that makes sense.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, i) => (
              <div 
                key={i} 
                className={`relative rounded-2xl p-8 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-b from-violet-600/20 to-cyan-600/20 border-2 border-violet-500' 
                    : 'bg-slate-800/50 border border-slate-700'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-cyan-600 px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                  <p className="text-slate-400 mt-2 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-300">
                      <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className={`block text-center py-3 rounded-xl font-semibold transition ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-violet-600 to-cyan-600 hover:opacity-90'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400 text-lg">
              Everything you need to know about our AI agents.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-800/80 transition"
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-slate-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-violet-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Put AI to Work?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Book a free consultation and we'll show you exactly how an AI agent can transform your workflows.
          </p>
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 max-w-xl mx-auto">
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500 transition"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500 transition"
                />
              </div>
              <input 
                type="text" 
                placeholder="Company (optional)" 
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500 transition"
              />
              <textarea 
                placeholder="Tell us about your use case..." 
                rows={4}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500 transition resize-none"
              />
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition"
              >
                Book Free Consultation
              </button>
            </form>
            <p className="text-slate-500 text-sm mt-4">
              No spam. We'll reach out within 24 hours.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-slate-400">
            <a href="mailto:hello@robertai.dev" className="hover:text-white transition">hello@robertai.dev</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">Twitter</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">Discord</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-md flex items-center justify-center font-bold text-xs">
              RA
            </div>
            <span className="font-semibold">RobertAI</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} RobertAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
