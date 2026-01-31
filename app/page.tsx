"use client";

import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      title: "Deploy & Configure",
      description: "Get your AI agent up and running in 24 hours with all your favorite integrations.",
      icon: "🚀",
      color: "from-orange-400 to-pink-500",
    },
    {
      title: "Custom Skills",
      description: "Teach your agent exactly what you need—from data analysis to customer support.",
      icon: "✨",
      color: "from-violet-400 to-purple-500",
    },
    {
      title: "Connect Everything",
      description: "Slack, Discord, Telegram, email, calendars, CRMs—your agent works everywhere.",
      icon: "🔌",
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "We Handle It",
      description: "24/7 monitoring, updates, and optimization. You focus on your business.",
      icon: "🛡️",
      color: "from-emerald-400 to-teal-500",
    },
  ];

  const features = [
    { title: "Never Sleeps", desc: "24/7 availability", icon: "🌙" },
    { title: "Everywhere", desc: "All platforms", icon: "🌍" },
    { title: "Remembers", desc: "Full context", icon: "🧠" },
    { title: "Takes Action", desc: "Real tasks", icon: "⚡" },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$299",
      period: "/mo",
      description: "Perfect for getting started",
      features: ["1 AI Agent", "2 Integrations", "5 Skills", "10K msgs/mo", "Email Support"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$599",
      period: "/mo",
      description: "For growing teams",
      features: ["3 AI Agents", "Unlimited Integrations", "20 Skills", "100K msgs/mo", "Priority Support", "Analytics"],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: ["Unlimited Agents", "Everything Unlimited", "Dedicated Manager", "On-premise Option", "SLA"],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const faqs = [
    { q: "What's an AI agent?", a: "An autonomous AI that actually does things—sends emails, books meetings, processes data, talks to customers. Not just a chatbot." },
    { q: "How fast to set up?", a: "Basic setup: 24-48 hours. Custom skills: 1-2 weeks. We'll give you a clear timeline." },
    { q: "Is my data safe?", a: "Enterprise-grade encryption, SOC 2 compliant. We never train on your data. On-premise available." },
    { q: "Can I try first?", a: "Yes! 14-day free trial on Pro. Or book a demo to see it in action." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-sky-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-orange-200">
                R
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">RobertAI</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition font-medium">Services</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition font-medium">Pricing</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition font-medium">FAQ</a>
              <a href="#contact" className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-200 transition-all hover:-translate-y-0.5">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-700">Now with GPT-4o, Claude & Gemini</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              Your AI employee
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">that never sleeps</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              We build AI agents that actually work—handling support, automating tasks, 
              and integrating with everything you use. Set it up once, let it run forever.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="group bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-orange-200 hover:shadow-2xl hover:shadow-orange-300 transition-all hover:-translate-y-1">
                Start Building 
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#services" className="bg-white border-2 border-gray-200 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-gray-300 hover:bg-gray-50 transition">
                See How It Works
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { num: "150+", label: "Agents Live" },
              { num: "10M+", label: "Messages" },
              { num: "99.9%", label: "Uptime" },
              { num: "24/7", label: "Always On" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">{stat.num}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes it different */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition text-center">
                <div className="text-3xl mb-2">{f.icon}</div>
                <div className="font-semibold text-gray-900">{f.title}</div>
                <div className="text-sm text-gray-500">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How it works</h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              From setup to maintenance, we handle everything.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gradient-to-b from-white to-amber-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple pricing</h2>
            <p className="text-gray-600 text-lg">No surprises. Cancel anytime.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan, i) => (
              <div 
                key={i} 
                className={`relative rounded-3xl p-8 transition-all ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-2xl shadow-orange-200 scale-105' 
                    : 'bg-white border border-gray-200 hover:shadow-lg'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-orange-500 px-4 py-1 rounded-full text-sm font-bold shadow-md">
                    Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`text-lg font-semibold mb-1 ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className={plan.highlighted ? 'text-white/70' : 'text-gray-400'}>{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className={`flex items-center gap-2 ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                      <svg className={`w-5 h-5 shrink-0 ${plan.highlighted ? 'text-white' : 'text-emerald-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className={`block text-center py-3.5 rounded-xl font-semibold transition ${
                    plan.highlighted
                      ? 'bg-white text-orange-500 hover:bg-gray-50'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
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
      <section id="faq" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Questions?</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <span className={`text-2xl text-gray-400 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-400 via-pink-500 to-violet-500 rounded-[2rem] p-10 sm:p-16 text-center text-white shadow-2xl shadow-orange-200">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to automate?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Book a free 15-min call and we'll show you exactly what your agent could do.
            </p>
            <div className="bg-white rounded-2xl p-8 max-w-md mx-auto text-left">
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />
                <textarea 
                  placeholder="What would you automate?" 
                  rows={3}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
                />
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition"
                >
                  Book Free Call →
                </button>
              </form>
              <p className="text-gray-400 text-sm mt-4 text-center">
                No spam. Reply within 24h.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center font-bold text-white text-sm">
              R
            </div>
            <span className="font-bold text-gray-900">RobertAI</span>
          </div>
          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="mailto:hello@robertai.dev" className="hover:text-gray-900 transition">hello@robertai.dev</a>
            <a href="#" className="hover:text-gray-900 transition">Twitter</a>
            <a href="#" className="hover:text-gray-900 transition">LinkedIn</a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} RobertAI
          </p>
        </div>
      </footer>
    </div>
  );
}
