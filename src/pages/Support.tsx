import { useState, useEffect } from 'react';

const carouselMessages = [
  {
    title: "Coming Soon: Smarter Coverage, Greater Peace of Mind",
    content: (
      <>
        <p className="mb-6 font-body-lg">Stay ahead with features designed to protect you and your family:</p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-tertiary-container shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span><strong className="text-on-surface">Dynamic Policy Updates</strong> – Your coverage details auto‑refresh directly from insurers, so you’re always up to date.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-tertiary-container shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span><strong className="text-on-surface">Personalized Analytics</strong> – Spot gaps in your coverage compared to emerging illness trends, with tailored add‑on recommendations.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-tertiary-container shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span><strong className="text-on-surface">Change Alerts</strong> – Get notified instantly when coverage reduces due to age or policy revisions.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-tertiary-container shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span><strong className="text-on-surface">Family Accounts</strong> – Manage multiple household policies in one place, with easy oversight.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-tertiary-container shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span><strong className="text-on-surface">Social Sharing</strong> – Share coverage info with close relatives for transparency and collective planning.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-tertiary-container shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span><strong className="text-on-surface">Ecosystem Integration</strong> – Connect with apps like HealthHub to sync medical history and receive smarter, more relevant recommendations.</span>
          </li>
        </ul>
        <div className="bg-primary-container text-on-primary-container p-6 rounded-xl font-label-md">
          Sign up today for our basic subscription — and be the first to unlock these powerful features as they roll out.
        </div>
      </>
    )
  },
  {
    title: "Your Privacy & Peace of Mind",
    content: (
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto py-8">
        <div className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center mb-8">
          <span className="material-symbols-outlined text-[40px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>shield_lock</span>
        </div>
        <p className="font-body-lg leading-relaxed text-on-surface-variant italic text-xl">
          "Say goodbye to premium anxiety and fine‑print frustration. Our AI‑powered app helps you understand your coverage clearly, so you’ll never worry about hidden disclaimers, unexpected rejections, or rising premiums from minor disclosures. Unlike traditional channels, we are not owned by any insurance company — your data stays in your account, fully private, and never shared. By simplifying complex contract terms and cutting through the administrative hassle, we give you peace of mind and confidence in every claim."
        </p>
      </div>
    )
  }
];

function Support() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselMessages.length);
    }, 10000); // 10 seconds per slide to allow reading
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % carouselMessages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + carouselMessages.length) % carouselMessages.length);

  return (
    <div className="max-w-container-max mx-auto w-full">
      <header className="mb-10">
        <h2 className="text-headline-lg font-headline-lg text-primary tracking-tight">Support & Announcements</h2>
        <p className="text-body-md font-body-md text-secondary mt-1">Get help, learn about upcoming features, and understand our commitment to you.</p>
      </header>

      {/* Carousel Section */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden mb-12">
        <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[120px]">campaign</span>
        </div>
        
        <div className="min-h-[450px] flex flex-col justify-between relative z-10">
          <div 
            key={currentIndex} 
            className="animate-[fadeIn_0.5s_ease-in-out]"
          >
            <h3 className="font-headline-xl text-3xl md:text-4xl text-primary mb-8 border-b border-outline-variant/30 pb-6">{carouselMessages[currentIndex].title}</h3>
            <div className="text-on-surface-variant">
              {carouselMessages[currentIndex].content}
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between pt-6 border-t border-outline-variant/30">
            <div className="flex gap-3">
              {carouselMessages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary ${idx === currentIndex ? 'w-8 bg-primary' : 'w-2.5 bg-outline-variant hover:bg-outline'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-outline-variant text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Previous message"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">arrow_back</span>
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-outline-variant text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Next message"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Support Options */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface p-6 rounded-xl border border-outline-variant text-center hover:shadow-md transition-shadow cursor-pointer">
          <span className="material-symbols-outlined text-[40px] text-primary mb-4">chat</span>
          <h4 className="font-headline-md text-on-surface mb-2">Live Chat</h4>
          <p className="text-body-md text-secondary">Chat with our support team in real-time.</p>
        </div>
        <div className="bg-surface p-6 rounded-xl border border-outline-variant text-center hover:shadow-md transition-shadow cursor-pointer">
          <span className="material-symbols-outlined text-[40px] text-primary mb-4">menu_book</span>
          <h4 className="font-headline-md text-on-surface mb-2">Knowledge Base</h4>
          <p className="text-body-md text-secondary">Browse our comprehensive guides and FAQs.</p>
        </div>
        <div className="bg-surface p-6 rounded-xl border border-outline-variant text-center hover:shadow-md transition-shadow cursor-pointer">
          <span className="material-symbols-outlined text-[40px] text-primary mb-4">mail</span>
          <h4 className="font-headline-md text-on-surface mb-2">Email Support</h4>
          <p className="text-body-md text-secondary">Send us an email for detailed inquiries.</p>
        </div>
      </section>
    </div>
  );
}

export default Support;