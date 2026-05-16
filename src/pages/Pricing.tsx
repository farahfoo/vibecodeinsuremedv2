import { useState, useEffect } from 'react';

const pricingMessages = [
  {
    icon: "insights",
    title: "Ready to take control of your healthcare?",
    content: "Sign up today to unlock clear insights into your policies, spot hidden exclusions, and understand your claimable coverage in minutes.",
    cta: "Upgrade your plan"
  },
  {
    icon: "corporate_fare",
    title: "Enterprise Solutions",
    content: "“Clarity for Clients. Efficiency for Companies.” Our AI‑powered platform helps users understand their policies instantly, without waiting for call centers or struggling through fine print. By clarifying coverage upfront, it reduces rejections and client unhappiness. The result is lower costs for companies, faster answers for clients, and stronger trust between insurers and their customers.",
    cta: "Contact Sales for Enterprise"
  }
];

function Pricing() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % pricingMessages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % pricingMessages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + pricingMessages.length) % pricingMessages.length);

  return (
    <div className="max-w-container-max mx-auto w-full">
      {/* Header Section */}
      <section className="text-center mb-16">
        <h2 className="font-headline-xl text-headline-xl text-primary mb-4">Professional Pricing for Peace of Mind</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Choose the plan that fits your healthcare strategy. Our simulations provide clarity in complex insurance landscapes.
        </p>
      </section>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 items-end">
        {/* Free Plan */}
        <div className="relative bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col h-full hover:shadow-lg transition-shadow">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-surface-container-high text-on-surface-variant px-4 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest border border-outline-variant whitespace-nowrap">
            Current Plan
          </div>
          <div className="mb-8 mt-2">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-2 block">Personal</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Free</h3>
            <div className="flex items-baseline gap-x-1">
              <span className="font-headline-lg text-headline-lg text-on-surface">$0</span>
              <span className="font-body-md text-body-md text-outline">/mo</span>
            </div>
          </div>
          <ul className="flex-grow space-y-4 mb-10">
            <li className="flex items-center gap-x-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
              1 Policy Upload
            </li>
            <li className="flex items-center gap-x-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
              3 Claim Simulations / mo
            </li>
            <li className="flex items-center gap-x-3 text-body-md font-body-md text-outline">
              <span className="material-symbols-outlined text-outline-variant text-sm" aria-hidden="true">cancel</span>
              Priority Support
            </li>
          </ul>
          <button 
            disabled 
            className="w-full py-3 px-4 bg-surface-container-low text-on-surface-variant rounded-xl font-label-md text-label-md cursor-default border border-outline-variant"
          >
            Your Current Plan
          </button>
        </div>

        {/* Basic Plan (Featured) */}
        <div className="relative bg-surface-container-lowest border-2 border-primary-container rounded-xl p-6 shadow-xl flex flex-col h-full transform lg:scale-105 z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary px-4 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest whitespace-nowrap">
            Most Popular
          </div>
          <div className="mb-8 mt-2">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-2 block">Personal</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Basic</h3>
            <div className="flex items-baseline gap-x-1">
              <span className="font-headline-lg text-headline-lg text-on-surface">$2.99</span>
              <span className="font-body-md text-body-md text-outline">/mo</span>
            </div>
          </div>
          <ul className="flex-grow space-y-4 mb-10">
            <li className="flex items-center gap-x-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
              5 Policy Uploads
            </li>
            <li className="flex items-center gap-x-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
              15 Claim Simulations / mo
            </li>
            <li className="flex items-center gap-x-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
              Priority Support
            </li>
          </ul>
          <button className="w-full py-4 px-4 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-primary-container transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            Select Basic Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col h-full hover:shadow-lg transition-shadow">
          <div className="mb-8 mt-2">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-2 block">Personal</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Premium</h3>
            <div className="flex items-baseline gap-x-1">
              <span className="font-headline-lg text-headline-lg text-on-surface">$3.99</span>
              <span className="font-body-md text-body-md text-outline">/mo</span>
            </div>
          </div>
          <ul className="flex-grow space-y-4 mb-10">
            <li className="flex items-center gap-x-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
              Unlimited Policy Uploads
            </li>
            <li className="flex items-center gap-x-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
              Unlimited Simulations
            </li>
            <li className="flex items-center gap-x-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
              Dedicated Health Consultant
            </li>
            <li className="flex items-center gap-x-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
              Advanced Analysis
            </li>
          </ul>
          <button className="w-full py-3 px-4 border-2 border-primary text-primary rounded-xl font-label-md text-label-md hover:bg-surface-container-low transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            Go Premium
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-surface-container-low border border-primary/30 rounded-xl p-6 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="mb-8 mt-2 relative z-10">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-2 block">Enterprise</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Corporate</h3>
            <div className="flex items-baseline gap-x-1 h-[40px] items-center">
              <span className="font-headline-md text-headline-md text-on-surface">Contact Sales</span>
            </div>
          </div>
          <ul className="flex-grow space-y-4 mb-10 relative z-10">
            <li className="flex items-center gap-x-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
              Volume Licensing
            </li>
            <li className="flex items-center gap-x-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
              Custom Integrations (API)
            </li>
            <li className="flex items-center gap-x-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
              Dedicated Account Manager
            </li>
            <li className="flex items-center gap-x-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
              White-labeling Options
            </li>
          </ul>
          <button className="relative z-10 w-full py-3 px-4 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-primary-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            Contact Sales
          </button>
        </div>
      </div>

      {/* Sign Up CTA Carousel */}
      <section className="bg-primary text-on-primary rounded-xl mb-20 text-center shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4 z-0 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div 
            key={currentIndex} 
            className="p-10 pb-6 w-full animate-[fadeIn_0.5s_ease-in-out] min-h-[300px] flex flex-col justify-center items-center"
          >
            <span className="material-symbols-outlined text-[48px] mb-4 text-tertiary-fixed-dim" aria-hidden="true">{pricingMessages[currentIndex].icon}</span>
            <h3 className="font-headline-lg text-headline-lg mb-4 max-w-3xl mx-auto">{pricingMessages[currentIndex].title}</h3>
            <p className="font-body-lg text-body-lg opacity-90 mb-8 leading-relaxed max-w-4xl mx-auto">
              {pricingMessages[currentIndex].content}
            </p>
            <button className="bg-tertiary-fixed text-on-tertiary-fixed px-8 py-4 rounded-xl font-label-md text-label-md shadow-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-tertiary-fixed focus:ring-offset-2 focus:ring-offset-primary">
              {pricingMessages[currentIndex].cta}
            </button>
          </div>

          <div className="flex items-center justify-between w-full px-10 pb-6 border-t border-white/10 pt-4">
             <div className="flex gap-3 items-center">
                {pricingMessages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white ${idx === currentIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/30 hover:bg-white/50'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Previous message"
                >
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">arrow_back</span>
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Next message"
                >
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">arrow_forward</span>
                </button>
              </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section className="bg-surface-container-low rounded-xl p-12 border border-outline-variant relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-x-2 bg-tertiary-container/10 text-tertiary-container px-3 py-1 rounded-full mb-6">
              <span className="material-symbols-outlined text-sm" aria-hidden="true">verified_user</span>
              <span className="font-label-sm text-label-sm">Enterprise-Grade Security</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Your Privacy is our Primary Commitment</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              We understand the sensitive nature of medical and insurance documents. MedClaim utilizes end-to-end AES-256 encryption for all data storage. Your policies are processed in a HIPAA-compliant environment, ensuring that your personal health information remains confidential and secure at every step of the simulation process.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-x-3">
                <span className="material-symbols-outlined text-primary mt-1" aria-hidden="true">lock</span>
                <div>
                  <h4 className="font-label-md text-label-md font-bold text-on-surface">Data Encryption</h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">256-bit SSL encryption for all data transfers.</p>
                </div>
              </div>
              <div className="flex items-start gap-x-3">
                <span className="material-symbols-outlined text-primary mt-1" aria-hidden="true">cloud_done</span>
                <div>
                  <h4 className="font-label-md text-label-md font-bold text-on-surface">Secure Storage</h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Encrypted document vaults with restricted access.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary opacity-5 rounded-2xl blur-3xl group-hover:opacity-10 transition-opacity"></div>
              <img 
                className="rounded-2xl border border-outline-variant shadow-lg relative z-20 w-full h-auto object-cover" 
                alt="A highly detailed 3D technical illustration of a secure digital vault and data nodes." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzNJYPLpbfNY3yIyAv7mcXiqfzgxOSoXtJts7J1Id6k77GuFl8aMjesmiaJHdRAP5dCvgPG4ROeiYekduQYEFwXdFfBAsCNEU_yPZL1v7J-2P1qKHk9LExVw39EK1iVfbD41_rAixlfmZfMWUOlc0seyVkB8sQjS5hHQNB3hZZCcxt9xvAJUGPxicQ5uCzxSSHpulu2DXfIK-t3jfWZtpd8dhRbx7ik66onOkBqhED-3egYpUFheTzZHJktiiu6R8eO-Xcd06qNKg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Hint */}
      <div className="mt-16 text-center border-t border-outline-variant pt-12 mb-12">
        <p className="font-body-md text-body-md text-on-surface-variant">
          Have more questions about our plans? <a className="text-primary font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded" href="#faq">View Detailed FAQ</a> or <a className="text-primary font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded" href="#contact">Contact Sales</a>
        </p>
      </div>
    </div>
  );
}

export default Pricing;