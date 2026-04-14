import { motion } from 'motion/react';
import { Check, HelpCircle, Zap, Shield, Globe, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: "Startup",
    price: { monthly: 499, yearly: 399 },
    description: "Perfect for early-stage companies looking to scale their digital infrastructure.",
    features: [
      "Up to 5 Core Projects",
      "Standard AI Integration",
      "Cloud Security Essentials",
      "Email Support",
      "Basic Analytics Dashboard",
      "Community Access"
    ],
    icon: <Zap className="w-6 h-6" />,
    popular: false
  },
  {
    name: "Business",
    price: { monthly: 1299, yearly: 999 },
    description: "Advanced features and priority support for growing enterprises.",
    features: [
      "Unlimited Projects",
      "Advanced AI Models",
      "Enterprise Security Suite",
      "24/7 Priority Support",
      "Custom Analytics & Reporting",
      "Dedicated Account Manager",
      "API Access"
    ],
    icon: <Shield className="w-6 h-6" />,
    popular: true
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", yearly: "Custom" },
    description: "Bespoke solutions for global organizations with complex requirements.",
    features: [
      "Custom Infrastructure",
      "Private AI Training",
      "Military-Grade Security",
      "White-Glove Support",
      "Global Node Deployment",
      "SLA Guarantees",
      "On-premise Options"
    ],
    icon: <Globe className="w-6 h-6" />,
    popular: false
  }
];

const faqs = [
  { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle." },
  { q: "Is there a free trial?", a: "We offer a 14-day free trial for our Startup and Business plans so you can experience the full power of Ainovex Technologies." },
  { q: "What kind of support do you offer?", a: "All plans include support. Business and Enterprise plans feature priority 24/7 support with dedicated response times." },
  { q: "Do you offer custom integrations?", a: "Absolutely. Our Enterprise plan is designed specifically for custom requirements and deep integrations." }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-navy-950 mb-6"
          >
            Simple, <span className="text-accent">Transparent</span> Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto mb-10"
          >
            Choose the plan that fits your business needs. Scale up as you grow with our flexible options.
          </motion.p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${!isYearly ? 'text-navy-950' : 'text-slate-400'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-16 h-8 bg-navy-100 rounded-full p-1 relative transition-colors"
            >
              <motion.div 
                animate={{ x: isYearly ? 32 : 0 }}
                className="w-6 h-6 bg-accent rounded-full shadow-sm"
              />
            </button>
            <span className={`text-sm font-bold ${isYearly ? 'text-navy-950' : 'text-slate-400'}`}>
              Yearly <span className="text-accent text-xs ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-10 rounded-[2.5rem] border ${plan.popular ? 'bg-navy-950 text-white border-navy-900 shadow-2xl scale-105 z-10' : 'bg-white text-navy-950 border-slate-100 shadow-xl'}`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-navy-950 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${plan.popular ? 'bg-accent/10 text-accent' : 'bg-navy-50 text-navy-950'}`}>
                {plan.icon}
              </div>

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-8 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-5xl font-bold">
                  {typeof plan.price.monthly === 'number' ? `$${isYearly ? plan.price.yearly : plan.price.monthly}` : plan.price.monthly}
                </span>
                {typeof plan.price.monthly === 'number' && (
                  <span className={`text-sm ml-2 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>/month</span>
                )}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold mb-10 transition-all ${plan.popular ? 'bg-accent text-navy-950 hover:bg-accent-hover' : 'bg-navy-950 text-white hover:bg-navy-800'}`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>

              <div className="space-y-4">
                <p className={`text-xs font-bold uppercase tracking-widest ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                  What's Included:
                </p>
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-accent' : 'text-accent'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto mb-32">
          <h2 className="text-3xl font-display font-bold text-navy-950 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm"
              >
                <div className="flex gap-4">
                  <HelpCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-navy-950 mb-2">{faq.q}</h4>
                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent rounded-[3rem] p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-950 mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-navy-900/70 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of companies already using Ainovex Technologies to power their digital future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-navy-950 text-white px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-navy-950 px-10 py-5 rounded-2xl font-bold transition-all">
              View All Features
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
