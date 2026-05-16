

function MyPolicies() {
  return (
    <div className="max-w-container-max mx-auto w-full">
      <header className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-1">My Policies</h2>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-tertiary-fixed text-on-tertiary-fixed">
              3 Active Policies
            </span>
            <span className="text-outline text-label-sm">&bull; Last updated 2 hours ago</span>
          </div>
        </div>
        <button 
          className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant px-4 py-2 rounded-lg text-primary font-label-md hover:bg-surface-container-low transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Upload New Policy"
        >
          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">cloud_upload</span>
          Upload New Policy
        </button>
      </header>

      {/* Coverage Overview */}
      <div className="mb-10">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Coverage at a Glance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-surface p-4 rounded-xl border border-outline-variant shadow-sm flex flex-col gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">healing</span>
            </div>
            <p className="font-label-md text-on-surface">Surgery & Hospitalization</p>
            <div className="mt-auto pt-2">
              <p className="text-[10px] uppercase tracking-wider text-outline font-bold mb-1">Supported By</p>
              <p className="text-label-sm text-primary">Health Elite Plus</p>
            </div>
          </div>
          <div className="bg-surface p-4 rounded-xl border border-outline-variant shadow-sm flex flex-col gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">medication</span>
            </div>
            <p className="font-label-md text-on-surface">Outpatient & Pharmacy</p>
            <div className="mt-auto pt-2">
              <p className="text-[10px] uppercase tracking-wider text-outline font-bold mb-1">Supported By</p>
              <p className="text-label-sm text-primary">Health Elite Plus</p>
            </div>
          </div>
          <div className="bg-surface p-4 rounded-xl border border-outline-variant shadow-sm flex flex-col gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">dentistry</span>
            </div>
            <p className="font-label-md text-on-surface">Dental Care</p>
            <div className="mt-auto pt-2">
              <p className="text-[10px] uppercase tracking-wider text-outline font-bold mb-1">Supported By</p>
              <p className="text-label-sm text-primary">Dental Care Pro</p>
            </div>
          </div>
          <div className="bg-surface p-4 rounded-xl border border-outline-variant shadow-sm flex flex-col gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">family_history</span>
            </div>
            <p className="font-label-md text-on-surface">Life & Critical Illness</p>
            <div className="mt-auto pt-2">
              <p className="text-[10px] uppercase tracking-wider text-outline font-bold mb-1">Supported By</p>
              <p className="text-label-sm text-primary">Term Life Guard</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Card 1: Health Elite Plus */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 shadow-sm flex flex-col gap-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">medical_services</span>
              </div>
              <div>
                <h3 className="font-headline-md text-[20px] text-on-surface">Health Elite Plus</h3>
                <p className="text-label-md text-outline">MedClaim Global Assurance</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-tertiary-container/10 text-on-tertiary-fixed-variant rounded-full text-label-sm font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-fixed-variant" aria-hidden="true"></span>
              Active
            </span>
          </div>
          
          <div className="grid grid-cols-3 gap-4 py-4 border-y border-outline-variant/30">
            <div>
              <p className="text-[10px] text-outline uppercase font-bold tracking-widest mb-1">Deductible</p>
              <p className="font-label-md text-on-surface">$1,200 / $2,500</p>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-2" role="progressbar" aria-valuenow={48} aria-valuemin={0} aria-valuemax={100}>
                <div className="bg-primary h-full rounded-full" style={{ width: '48%' }}></div>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-outline uppercase font-bold tracking-widest mb-1">Coverage Limit</p>
              <p className="font-label-md text-on-surface">$2.5M</p>
              <p className="text-[10px] text-tertiary-fixed-variant mt-2">Unlimited Hospital</p>
            </div>
            <div>
              <p className="text-[10px] text-outline uppercase font-bold tracking-widest mb-1">Next Renewal</p>
              <p className="font-label-md text-on-surface">Oct 12, 2024</p>
              <p className="text-[10px] text-error mt-2">Action required</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-label-sm font-bold text-on-surface-variant uppercase tracking-widest mb-4">Coverage Breakdown</h4>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-label-md">
                  <span className="text-on-surface-variant">Inpatient Surgery</span>
                  <span className="text-primary font-bold">100% Covered</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                  <div className="bg-tertiary-fixed-dim h-full rounded-full w-full"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-label-md">
                  <span className="text-on-surface-variant">Outpatient Care</span>
                  <span className="text-primary font-bold">80% Covered</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                  <div className="bg-primary h-full rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-label-md">
                  <span className="text-on-surface-variant">Pharmacy (Tier 1 & 2)</span>
                  <span className="text-primary font-bold">90% Covered</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                  <div className="bg-primary h-full rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 mt-2">
            <button className="flex-1 bg-primary text-on-primary py-2.5 rounded-lg font-label-md hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">View Document</button>
            <button className="px-4 py-2.5 border border-outline-variant rounded-lg text-primary hover:bg-surface-container-low transition-all focus:outline-none focus:ring-2 focus:ring-primary" aria-label="More Options">
              <span className="material-symbols-outlined" aria-hidden="true">more_horiz</span>
            </button>
          </div>
        </div>

        {/* Card 2: Dental Care Pro */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 shadow-sm flex flex-col gap-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">dentistry</span>
              </div>
              <div>
                <h3 className="font-headline-md text-[20px] text-on-surface">Dental Care Pro</h3>
                <p className="text-label-md text-outline">SmileGuard Insurance Co.</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-tertiary-container/10 text-on-tertiary-fixed-variant rounded-full text-label-sm font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-fixed-variant" aria-hidden="true"></span>
              Active
            </span>
          </div>
          
          <div className="grid grid-cols-3 gap-4 py-4 border-y border-outline-variant/30">
            <div>
              <p className="text-[10px] text-outline uppercase font-bold tracking-widest mb-1">Deductible</p>
              <p className="font-label-md text-on-surface">$50 / $100</p>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-2" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                <div className="bg-primary h-full rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-outline uppercase font-bold tracking-widest mb-1">Coverage Limit</p>
              <p className="font-label-md text-on-surface">$3,500/yr</p>
              <p className="text-[10px] text-tertiary-fixed-variant mt-2">$2,100 remaining</p>
            </div>
            <div>
              <p className="text-[10px] text-outline uppercase font-bold tracking-widest mb-1">Next Renewal</p>
              <p className="font-label-md text-on-surface">Jan 01, 2025</p>
              <p className="text-[10px] text-outline mt-2">Auto-renewal ON</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-label-sm font-bold text-on-surface-variant uppercase tracking-widest mb-4">Coverage Breakdown</h4>
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-label-md p-2 bg-surface rounded-lg">
                <span className="text-on-surface-variant">Preventative (Cleanings)</span>
                <span className="text-tertiary font-bold">100%</span>
              </li>
              <li className="flex justify-between items-center text-label-md p-2 bg-surface rounded-lg">
                <span className="text-on-surface-variant">Basic (Fillings, X-rays)</span>
                <span className="text-primary font-bold">80%</span>
              </li>
              <li className="flex justify-between items-center text-label-md p-2 bg-surface rounded-lg">
                <span className="text-on-surface-variant">Major (Crowns, Bridges)</span>
                <span className="text-primary font-bold">50%</span>
              </li>
              <li className="flex justify-between items-center text-label-md p-2 bg-surface rounded-lg">
                <span className="text-on-surface-variant">Orthodontics</span>
                <span className="text-primary font-bold">$2,000 Lifetime</span>
              </li>
            </ul>
          </div>
          
          <div className="flex gap-3 mt-auto">
            <button className="flex-1 bg-primary text-on-primary py-2.5 rounded-lg font-label-md hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">View Document</button>
            <button className="px-4 py-2.5 border border-outline-variant rounded-lg text-primary hover:bg-surface-container-low transition-all focus:outline-none focus:ring-2 focus:ring-primary" aria-label="More Options">
              <span className="material-symbols-outlined" aria-hidden="true">more_horiz</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPolicies;
