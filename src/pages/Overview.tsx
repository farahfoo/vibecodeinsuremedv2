import { useNavigate } from 'react-router-dom';

function Overview() {
  const navigate = useNavigate();

  return (
    <div className="max-w-container-max mx-auto w-full">
      {/* Top Bar / Header */}
      <header className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary">Dashboard</h2>
          <p className="font-body-md text-body-md text-secondary mt-1">Welcome back, Sarah. Here is your coverage overview.</p>
        </div>
        <button 
          onClick={() => navigate('/simulator')}
          className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md text-label-md flex items-center gap-2 hover:bg-primary-container hover:text-on-primary-container transition-all shadow-sm"
          aria-label="Start New Claim Simulation"
        >
          <span className="material-symbols-outlined" aria-hidden="true">bolt</span>
          Start New Claim Simulation
        </button>
      </header>

      {/* Promotional Banner */}
      <div className="relative rounded-2xl mb-12 overflow-hidden bg-primary shadow-lg flex flex-col md:flex-row items-stretch">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-tertiary-fixed-dim/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 z-0 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full md:w-3/4 h-full bg-gradient-to-r from-primary via-primary/95 to-transparent z-10 pointer-events-none hidden md:block"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary via-primary/80 to-transparent z-10 pointer-events-none md:hidden"></div>
        
        {/* Text Content */}
        <div className="relative z-20 flex-1 p-8 md:p-12 text-on-primary flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-6 border border-white/20 backdrop-blur-md self-start">
            <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">verified_user</span>
            <span className="text-label-sm font-bold tracking-wider uppercase text-white">Coverage Intelligence</span>
          </div>
          <h3 className="font-headline-xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
            Be sure of your coverage.
          </h3>
          <p className="font-body-lg text-lg opacity-90 max-w-xl mb-8 leading-relaxed text-primary-fixed">
            Uncover hidden disclaimers and fine print, and know exactly which parts of your policy you can claim — and how much.
          </p>
          <button 
            onClick={() => navigate('/policies')}
            className="self-start bg-white text-primary px-6 py-3.5 rounded-xl font-label-md font-bold hover:bg-surface-container-lowest transition-all shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
          >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">manage_search</span>
            Analyze My Policies
          </button>
        </div>

        {/* Image / Graphic */}
        <div className="absolute md:relative inset-0 md:inset-auto z-0 md:z-10 w-full md:w-1/2 lg:w-5/12 h-full md:min-h-[360px] shrink-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr2JD-9-84k7gegAnPV2XD5PdTHZ2F9BQSZpF6yYKwmrHntNJuLMUs1pURE2yNZb6k2IF8PGxiYxFmXb1a1gtFgY1kqm-gjKD789OCoWF3n-7ww01i7W5m_7OGbpj0NQTsufwRCLAY2sJrrj4N6PSIa2xqmURCTD_c7w9X42H6-8qcNOmm35rqTCjjnQUsd1etf8Gji3ExHcu7JXmHhjH5IkuP3AtRQB7o_l1cfzxfUqhE_YzTZB3b1JrzASJh8d-vZbwC3xVyY8s" 
            alt="Medical professional reviewing policy on a tablet" 
            className="w-full h-full object-cover object-center md:rounded-r-2xl opacity-40 md:opacity-100"
          />
        </div>
      </div>

      {/* Bento Grid Section */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* Active Policies Section */}
        <div className="col-span-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline-md text-headline-md text-on-surface">My Active Policies</h3>
            <button 
              onClick={() => navigate('/policies')}
              className="text-primary font-label-md text-label-md hover:underline"
              aria-label="View All Policies"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Policy Card 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl card-shadow flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">medical_services</span>
                </div>
                <span className="bg-tertiary-fixed-dim/20 text-on-tertiary-fixed-variant px-3 py-1 rounded-full font-label-sm text-label-sm">Active</span>
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-primary">Health Elite Plus</h4>
                <p className="font-label-md text-label-md text-secondary">BlueShield Medical Group</p>
              </div>
              <div className="mt-2 pt-4 border-t border-outline-variant/30">
                <div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant">
                  <span>Coverage Limit</span>
                  <span className="font-bold text-on-surface">$2,500,000</span>
                </div>
              </div>
            </div>

            {/* Policy Card 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl card-shadow flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-surface-variant rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">dentistry</span>
                </div>
                <span className="bg-tertiary-fixed-dim/20 text-on-tertiary-fixed-variant px-3 py-1 rounded-full font-label-sm text-label-sm">Active</span>
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-primary">Dental Care Pro</h4>
                <p className="font-label-md text-label-md text-secondary">Evergreen Dental</p>
              </div>
              <div className="mt-2 pt-4 border-t border-outline-variant/30">
                <div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant">
                  <span>Coverage Limit</span>
                  <span className="font-bold text-on-surface">$5,000 / yr</span>
                </div>
              </div>
            </div>

            {/* Policy Card 3 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl card-shadow flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">favorite</span>
                </div>
                <span className="bg-tertiary-fixed-dim/20 text-on-tertiary-fixed-variant px-3 py-1 rounded-full font-label-sm text-label-sm">Active</span>
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-primary">Term Life Guard</h4>
                <p className="font-label-md text-label-md text-secondary">Reliant Assurance</p>
              </div>
              <div className="mt-2 pt-4 border-t border-outline-variant/30">
                <div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant">
                  <span>Policy Term</span>
                  <span className="font-bold text-on-surface">20 Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity & Quick Actions */}
        <div className="col-span-12 lg:col-span-8 mt-unit">
          <div className="bg-surface-container-lowest p-8 rounded-xl card-shadow h-full">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Recent Claim Simulations</h3>
            <div className="space-y-0">
              <div className="flex items-center justify-between py-4 border-b border-outline-variant/20 hover:bg-surface-container-low px-4 -mx-4 rounded-lg transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary" tabIndex={0} role="button">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">history</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">Emergency Room Visit</p>
                    <p className="text-label-sm font-label-sm text-on-surface-variant">BlueShield Medical &middot; 2 hours ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-label-md text-label-md text-on-tertiary-fixed-variant">85% Covered</p>
                  <p className="text-label-sm font-label-sm text-on-surface-variant">Est. Out-of-pocket: $120</p>
                </div>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-outline-variant/20 hover:bg-surface-container-low px-4 -mx-4 rounded-lg transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary" tabIndex={0} role="button">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">history</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">Dental Cleaning & X-Ray</p>
                    <p className="text-label-sm font-label-sm text-on-surface-variant">Evergreen Dental &middot; Yesterday</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-label-md text-label-md text-on-tertiary-fixed-variant">100% Covered</p>
                  <p className="text-label-sm font-label-sm text-on-surface-variant">Est. Out-of-pocket: $0</p>
                </div>
              </div>

              <div className="flex items-center justify-between py-4 hover:bg-surface-container-low px-4 -mx-4 rounded-lg transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary" tabIndex={0} role="button">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">history</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">Specialist Consultation</p>
                    <p className="text-label-sm font-label-sm text-on-surface-variant">City Orthopedics &middot; Oct 24, 2023</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-label-md text-label-md text-error">Pending Review</p>
                  <p className="text-label-sm font-label-sm text-on-surface-variant">Awaiting details</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Summary / Stats Card */}
        <div className="col-span-12 lg:col-span-4 mt-unit flex flex-col gap-gutter">
          <div className="bg-primary-container p-8 rounded-xl text-on-primary-container relative overflow-hidden shadow-sm">
            <h3 className="font-label-md text-label-md mb-2 opacity-80">Year-to-date Savings</h3>
            <p className="font-headline-lg text-headline-lg text-on-primary-container">$12,450.00</p>
            <p className="font-label-sm text-label-sm mt-4 text-primary-fixed">Your MedClaim Pro plan has saved you 22% more than last year.</p>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-fixed/10 rounded-full" aria-hidden="true"></div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl card-shadow">
            <h3 className="font-label-md text-label-md text-on-surface mb-4">Coverage Health</h3>
            <div className="w-full bg-surface-container rounded-full h-2 mb-2" role="progressbar" aria-valuenow={92} aria-valuemin={0} aria-valuemax={100}>
              <div className="bg-on-tertiary-container h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
            <p className="font-label-sm text-label-sm text-on-surface-variant">You are optimally covered for your demographic. <a href="#details" className="text-primary font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded">Details</a></p>
          </div>
          
          <div className="rounded-xl overflow-hidden relative h-48 card-shadow">
            <div className="w-full h-full bg-primary flex items-center justify-center">
                {/* Fallback pattern if image is not ready */}
                <div className="grid grid-cols-6 gap-2 opacity-10">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded bg-white"></div>
                    ))}
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
              <p className="text-on-primary font-label-md text-label-md">Need expert advice? Connect with a health consultant today.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
