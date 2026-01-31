"use client";

import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const problems = [
    {
      problem: "You're answering the same questions over and over",
      solution: "Your AI handles customer questions 24/7, even while you sleep",
      icon: "💬",
    },
    {
      problem: "You forget to follow up with leads",
      solution: "Your AI remembers everything and follows up automatically",
      icon: "🧠",
    },
    {
      problem: "You're drowning in emails and messages",
      solution: "Your AI reads, sorts, and responds to routine stuff for you",
      icon: "📧",
    },
    {
      problem: "You can't be everywhere at once",
      solution: "Your AI works on WhatsApp, email, your website—all at the same time",
      icon: "🌍",
    },
  ];

  const howItWorks = [
    { step: "1", title: "Tell us what you need", desc: "A quick call to understand your business" },
    { step: "2", title: "We build your AI", desc: "Custom-made for how you work" },
    { step: "3", title: "It starts working", desc: "Connects to your apps and goes live" },
    { step: "4", title: "You relax", desc: "While your AI handles the busy work" },
  ];

  const pricing = [
    {
      name: "Do It Yourself",
      price: "Free",
      period: "",
      description: "For technical people who want full control",
      features: [
        "Download the code yourself",
        "Set up your own server",
        "Configure everything manually",
        "Community support only",
        "Requires coding knowledge",
      ],
      cta: "Get the Code",
      highlighted: false,
      scary: true,
    },
    {
      name: "Done For You",
      price: "$149",
      period: "one-time",
      description: "We set everything up. You just use it.",
      features: [
        "✓ We install everything for you",
        "✓ No coding needed, ever",
        "✓ Works on your phone & computer",
        "✓ Runs 24/7 in the cloud",
        "✓ 10 useful skills included",
        "✓ Help when you're stuck",
      ],
      cta: "Get Started →",
      highlighted: true,
      scary: false,
    },
    {
      name: "VIP Setup",
      price: "$299",
      period: "one-time",
      description: "Everything, plus we customize it for your business",
      features: [
        "✓ Everything in Done For You",
        "✓ 25 skills pre-installed",
        "✓ Custom automation for YOUR workflow",
        "✓ We connect all your apps",
        "✓ 60 days priority support",
        "✓ 1-on-1 training call",
      ],
      cta: "Go VIP →",
      highlighted: false,
      scary: false,
    },
  ];

  const faqs = [
    { 
      q: "Wait, what even is an AI assistant?", 
      a: "Think of it like a super-smart helper that lives in your phone and computer. You can text it like a friend, and it actually does things for you—sends emails, schedules meetings, answers customer questions, looks things up. It's like having a personal assistant who never sleeps and never forgets." 
    },
    { 
      q: "I'm not technical at all. Can I still use this?", 
      a: "That's exactly who we built this for! You don't need to know anything about coding or computers. We handle all the technical stuff. You just talk to your AI like you'd talk to a person." 
    },
    { 
      q: "What can it actually do for me?", 
      a: "Answer customer questions, schedule appointments, send follow-up emails, manage your calendar, create social media posts, research things online, organize your files... basically anything you'd ask an assistant to do. And we customize it for your specific needs." 
    },
    { 
      q: "Is my information safe?", 
      a: "Yes! Your AI is private—only you can access it. We use the same security that banks use. Your data is never shared with anyone." 
    },
    { 
      q: "What if I get stuck or need help?", 
      a: "We're here! The Done For You plan includes support when you need it. VIP customers get priority help within hours, plus a personal training call to make sure you're comfortable." 
    },
    { 
      q: "How fast until it's ready?", 
      a: "Usually 24-48 hours. We'll email you when everything's set up with simple instructions to start using it right away." 
    },
  ];

  const testimonials = [
    { text: "I was scared of all this AI stuff but they made it so easy. Now I can't imagine running my business without it.", name: "Sarah M.", role: "Small Business Owner" },
    { text: "My AI answers customer questions at 3am while I'm sleeping. Game changer.", name: "Mike R.", role: "Online Store Owner" },
    { text: "Finally, tech that doesn't make me feel stupid. It just works.", name: "Lisa K.", role: "Real Estate Agent" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-orange-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-xl">
                🤖
              </div>
              <span className="text-xl font-bold text-gray-900">RobertAI</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#how" className="text-gray-600 hover:text-gray-900 transition">How it works</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition">Questions</a>
              <a href="#contact" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-200 transition-all">
                Get Your AI
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2 mb-6">
            <span className="text-sm">🎉</span>
            <span className="text-sm font-medium text-orange-800">No coding required. Seriously.</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your own AI assistant
            <br />
            <span className="text-orange-500">that actually works for you</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Imagine having a helper who answers your customers, manages your inbox, 
            and remembers everything—<strong>24 hours a day, 7 days a week.</strong>
            <br /><br />
            We set it all up. You just use it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-orange-200 hover:shadow-xl transition-all hover:-translate-y-0.5">
              See Pricing →
            </a>
            <a href="#how" className="bg-white border-2 border-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:border-orange-300 transition">
              How does it work?
            </a>
          </div>

          <p className="mt-6 text-gray-400 text-sm">
            ⭐ Trusted by 150+ business owners who aren't "tech people"
          </p>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Sound familiar?</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">These are the problems our customers had before getting their AI assistant</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-gray-500 mb-2 line-through decoration-red-300">{item.problem}</p>
                <p className="text-gray-900 font-semibold">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How it works</h2>
          <p className="text-gray-500 text-center mb-12">It's simpler than you think</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-6 bg-orange-500">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white">
                <p className="mb-4 text-white/90">"{t.text}"</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-white/70 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simple pricing</h2>
          <p className="text-gray-500 text-center mb-12">One-time payment. No monthly fees. No surprises.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <div 
                key={i} 
                className={`relative rounded-3xl p-8 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-2xl shadow-orange-200 scale-105 z-10' 
                    : plan.scary 
                      ? 'bg-gray-100 border-2 border-dashed border-gray-300'
                      : 'bg-white border-2 border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
                    ⭐ Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`font-semibold mb-1 ${plan.highlighted ? 'text-white/90' : plan.scary ? 'text-gray-500' : 'text-gray-600'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${plan.scary ? 'text-gray-400' : ''}`}>{plan.price}</span>
                    {plan.period && <span className={plan.highlighted ? 'text-white/70' : 'text-gray-400'}>/{plan.period}</span>}
                  </div>
                  <p className={`mt-2 text-sm ${plan.highlighted ? 'text-white/80' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>
                </div>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className={`text-sm ${
                      plan.highlighted ? 'text-white/90' : 
                      plan.scary ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={plan.scary ? "#" : "#contact"} 
                  className={`block text-center py-3 rounded-xl font-semibold transition ${
                    plan.highlighted
                      ? 'bg-white text-orange-500 hover:bg-orange-50'
                      : plan.scary
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-400 text-sm mt-8">
            💳 Secure payment via Stripe. 30-day money-back guarantee.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Questions? We've got answers</h2>
          <p className="text-gray-500 text-center mb-10">No stupid questions here—we've heard them all!</p>
          
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-orange-50 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-orange-100 transition"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <span className={`text-2xl text-orange-400 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
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
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-10 text-center text-white shadow-2xl shadow-orange-200">
            <h2 className="text-3xl font-bold mb-4">Ready to meet your AI assistant?</h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto">
              Fill out this quick form and we'll reach out within 24 hours to get you started.
            </p>
            <div className="bg-white rounded-2xl p-6 text-left max-w-md mx-auto">
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400">
                  <option value="">Which plan interests you?</option>
                  <option value="149">Done For You - $149</option>
                  <option value="299">VIP Setup - $299</option>
                  <option value="unsure">Not sure yet</option>
                </select>
                <textarea 
                  placeholder="What would you love your AI to help with? (optional)" 
                  rows={3}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                />
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition"
                >
                  Get Started →
                </button>
              </form>
              <p className="text-gray-400 text-xs mt-4 text-center">
                No spam, ever. We'll reply within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            <span className="font-bold text-gray-900">RobertAI</span>
          </div>
          <p className="text-gray-400 text-sm">
            Made with ❤️ for people who aren't "tech people"
          </p>
          <a href="mailto:hello@robertai.dev" className="text-gray-500 hover:text-gray-900 transition text-sm">
            hello@robertai.dev
          </a>
        </div>
      </footer>
    </div>
  );
}
