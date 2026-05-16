import { useState } from 'react';

interface PolicyResult {
  scenarioName: string;
  cost: number;
  bestPolicy: {
    name: string;
    reimbursement: number;
    rate: string;
    oop: number;
    deductibleStatus: string;
    clause: string;
    documentLink: string;
  };
  alternatives: Array<{
    name: string;
    reimbursement: number;
    rate: string;
    oop: number;
    clause: string;
    documentLink: string;
  }>;
}

function ClaimSimulator() {
  const [condition, setCondition] = useState('');
  const [treatment, setTreatment] = useState('');
  const [cost, setCost] = useState('');
  const [facility, setFacility] = useState('network');
  const [simulationResult, setSimulationResult] = useState<PolicyResult | null>(null);
  const [errors, setErrors] = useState<{condition?: string; treatment?: string; cost?: string}>({});
  const [isClaimed, setIsClaimed] = useState(false);

  const handleSimulate = () => {
    const newErrors: {condition?: string; treatment?: string; cost?: string} = {};
    if (!condition) newErrors.condition = "Illness or Condition is required.";
    if (!treatment) newErrors.treatment = "Primary Treatment is required.";
    if (!cost) newErrors.cost = "Estimated Total Cost is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setIsClaimed(false);

    const totalCost = parseFloat(cost);
    let result: PolicyResult;

    if (treatment === 'surgery' || condition.toLowerCase().includes('heart')) {
      result = {
        scenarioName: "Inpatient Surgery & Rehabilitation",
        cost: totalCost,
        bestPolicy: {
          name: "Health Elite Plus",
          reimbursement: totalCost * 0.9,
          rate: "90%",
          oop: totalCost * 0.1,
          deductibleStatus: "Met ($0 Remaining)",
          clause: "Section 4.2: Major Surgical Intervention",
          documentLink: "#"
        },
        alternatives: [
          { name: "Standard Medical Plus", reimbursement: totalCost * 0.75, rate: "75%", oop: totalCost * 0.25, clause: "Standard Hospitalization Benefit", documentLink: "#" }
        ]
      };
    } else if (treatment === 'dental' || condition.toLowerCase().includes('tooth') || condition.toLowerCase().includes('teeth')) {
      result = {
        scenarioName: "Dental Procedure",
        cost: totalCost,
        bestPolicy: {
          name: "Dental Care Pro",
          reimbursement: totalCost * 0.8,
          rate: "80%",
          oop: totalCost * 0.2,
          deductibleStatus: "Partially Met",
          clause: "Schedule B: Major Dental Works",
          documentLink: "#"
        },
        alternatives: []
      };
    } else {
      result = {
        scenarioName: "General Medical Care",
        cost: totalCost,
        bestPolicy: {
          name: "Health Elite Plus",
          reimbursement: totalCost * 0.8,
          rate: "80%",
          oop: totalCost * 0.2,
          deductibleStatus: "Partially Met",
          clause: "Section 2.1: Outpatient Consultations",
          documentLink: "#"
        },
        alternatives: [
          { name: "Basic Health Essential", reimbursement: totalCost * 0.6, rate: "60%", oop: totalCost * 0.4, clause: "Basic Outpatient Clause (Partial)", documentLink: "#" }
        ]
      };
    }
    
    setSimulationResult(result);
  };

  return (
    <div className="max-w-container-max mx-auto w-full">
      <header className="mb-10">
        <h2 className="font-headline-lg text-headline-lg text-on-background mb-2">Claim Simulator</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">Estimate your out-of-pocket expenses and verify policy coverage before you commit to medical treatments.</p>
      </header>

      {!simulationResult ? (
        <div className="grid grid-cols-12 gap-gutter">
          <section className="col-span-12 lg:col-span-7 bg-surface-container-lowest border border-outline-variant rounded-xl p-8 card-shadow">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary bg-primary-fixed p-2 rounded-lg" aria-hidden="true">analytics</span>
              <h3 className="font-headline-md text-headline-md text-primary">Simulation Details</h3>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSimulate(); }}>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="condition">Illness or Condition <span className="text-error">*</span></label>
                <div className="relative">
                  <input 
                    id="condition" 
                    type="text" 
                    value={condition}
                    onChange={(e) => {
                      setCondition(e.target.value);
                      if (errors.condition) setErrors({...errors, condition: undefined});
                    }}
                    className={`w-full h-12 px-4 rounded-lg border outline-none transition-all font-body-md text-body-md bg-transparent ${errors.condition ? 'border-error focus:ring-1 focus:ring-error' : 'border-outline focus:border-primary focus:ring-1 focus:ring-primary'}`} 
                    placeholder="e.g., Knee Injury"
                    aria-required="true"
                    aria-invalid={!!errors.condition}
                    aria-describedby={errors.condition ? "condition-error" : undefined}
                  />
                  <span className={`absolute right-4 top-3 material-symbols-outlined ${errors.condition ? 'text-error' : 'text-outline'}`} aria-hidden="true">search</span>
                </div>
                {errors.condition && <p id="condition-error" className="text-label-sm text-error flex items-center gap-1 mt-1"><span className="material-symbols-outlined text-[14px]">error</span>{errors.condition}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="treatment">Primary Treatment <span className="text-error">*</span></label>
                  <select 
                    id="treatment" 
                    value={treatment}
                    onChange={(e) => {
                      setTreatment(e.target.value);
                      if (errors.treatment) setErrors({...errors, treatment: undefined});
                    }}
                    className={`w-full h-12 px-4 rounded-lg border outline-none transition-all font-body-md text-body-md bg-transparent ${errors.treatment ? 'border-error focus:ring-1 focus:ring-error' : 'border-outline focus:border-primary focus:ring-1 focus:ring-primary'}`}
                    aria-required="true"
                    aria-invalid={!!errors.treatment}
                    aria-describedby={errors.treatment ? "treatment-error" : undefined}
                  >
                    <option value="">Select Treatment</option>
                    <option value="surgery">Surgery (In-patient)</option>
                    <option value="therapy">Physical Therapy</option>
                    <option value="consultation">Specialist Consultation</option>
                    <option value="diagnostic">Diagnostic Imaging (MRI/CT)</option>
                    <option value="dental">Dental Procedure</option>
                  </select>
                  {errors.treatment && <p id="treatment-error" className="text-label-sm text-error flex items-center gap-1 mt-1"><span className="material-symbols-outlined text-[14px]">error</span>{errors.treatment}</p>}
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="date">Estimated Date</label>
                  <input 
                    id="date" 
                    type="date" 
                    className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-body-md bg-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="cost">Estimated Total Cost <span className="text-error">*</span></label>
                <div className="relative">
                  <span className={`absolute left-4 top-3 font-body-md text-body-md ${errors.cost ? 'text-error' : 'text-outline'}`} aria-hidden="true">$</span>
                  <input 
                    id="cost" 
                    type="number" 
                    value={cost}
                    onChange={(e) => {
                      setCost(e.target.value);
                      if (errors.cost) setErrors({...errors, cost: undefined});
                    }}
                    className={`w-full h-12 pl-8 pr-4 rounded-lg border outline-none transition-all font-body-md text-body-md bg-transparent ${errors.cost ? 'border-error focus:ring-1 focus:ring-error' : 'border-outline focus:border-primary focus:ring-1 focus:ring-primary'}`} 
                    placeholder="0.00"
                    aria-required="true"
                    aria-invalid={!!errors.cost}
                    aria-describedby={errors.cost ? "cost-error" : undefined}
                  />
                </div>
                {errors.cost && <p id="cost-error" className="text-label-sm text-error flex items-center gap-1 mt-1"><span className="material-symbols-outlined text-[14px]">error</span>{errors.cost}</p>}
              </div>

              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="facility">Medical Facility</label>
                <select 
                  id="facility" 
                  value={facility}
                  onChange={(e) => setFacility(e.target.value)}
                  className="w-full h-12 px-4 rounded-lg border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-body-md bg-transparent"
                >
                  <option value="network">In-Network Premium Hospital</option>
                  <option value="out">Out-of-Network Facility</option>
                  <option value="daycare">Daycare Surgery Center</option>
                </select>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full h-14 bg-primary text-on-primary font-headline-md text-headline-md rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <span>Analyze Coverage</span>
                  <span className="material-symbols-outlined" aria-hidden="true">bolt</span>
                </button>
              </div>
            </form>
          </section>

          <aside className="col-span-12 lg:col-span-5 space-y-gutter">
            <div className="bg-surface-container-high border border-outline-variant rounded-xl p-6 card-shadow">
              <h4 className="font-label-md text-label-md text-primary mb-4 uppercase tracking-wider">Policy Snapshot</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-outline-variant pb-2">
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Annual Deductible</p>
                    <p className="font-headline-md text-headline-md text-on-surface">$2,500.00</p>
                  </div>
                  <div className="text-right">
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Remaining</p>
                    <p className="font-body-md text-body-md text-secondary">$1,140.00</p>
                  </div>
                </div>
                <div className="w-full bg-outline-variant h-2 rounded-full overflow-hidden" role="progressbar" aria-valuenow={54} aria-valuemin={0} aria-valuemax={100}>
                  <div className="bg-primary h-full w-[54%]"></div>
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">You have reached 54% of your annual deductible.</p>
              </div>
            </div>
            
            <div className="bg-primary-container text-on-primary-container border border-primary rounded-xl overflow-hidden card-shadow flex flex-col">
              <div className="h-32 w-full relative">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJdLbcFU1lzN7OvIYLR3f9qQjG_tCT5hnhPruHxaYL7kFdAeCE_0ZlVtISCytjo39OqCXb1SfIHBQjBHvgqGmJQum1Riy6opRmla37gAqV6HKZmO7tg9cBX2dlZBlD84Z8sB1Er38_Lx8YnHFKTTVS-F2IYu8eG_n_Gwm0dKYaZptNpRlg2zl9Gg3BtnSeCpsX28387EXE2g5ZUk2YI2rCbCv7Fj7lPn4k9MI-2qjlh9u6uefE2iRSKSmFIn_Z0XDcGLfmEWsFtFQ" 
                  alt="Health Consultant" 
                  className="w-full h-full object-cover object-top opacity-80 mix-blend-luminosity" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container to-transparent"></div>
              </div>
              <div className="p-6 pt-0 relative z-10">
                <div className="flex items-center gap-4 mb-4 -mt-8">
                  <div className="bg-surface-container-lowest w-14 h-14 rounded-full flex items-center justify-center shadow-md border border-outline-variant shrink-0">
                    <span className="material-symbols-outlined text-primary text-[28px]" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
                  </div>
                  <div className="pt-8">
                    <h4 className="font-label-md text-label-md font-bold">Health Consultant</h4>
                    <p className="font-label-sm text-label-sm opacity-80">Available 24/7</p>
                  </div>
                </div>
                <p className="font-body-md text-body-md mb-6">Need help interpreting these costs? Speak with a health consultant to understand your policy better.</p>
                <button className="w-full bg-surface-container-lowest text-primary font-label-md text-label-md py-3 rounded-lg hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary shadow-sm flex justify-center items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">forum</span>
                  Contact Health Consultant
                </button>
              </div>
            </div>
          </aside>
        </div>
      ) : (
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 card-shadow">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-outline-variant pb-4 gap-4">
            <div>
              <p className="text-label-sm font-label-sm text-primary uppercase tracking-wider mb-1">Simulation Result</p>
              <h3 className="font-headline-lg text-headline-lg text-on-background">{simulationResult.scenarioName}</h3>
              <p className="text-body-md text-on-surface-variant mt-1">Total Estimated Cost: ${simulationResult.cost.toLocaleString()}</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <button 
                onClick={() => setIsClaimed(true)}
                disabled={isClaimed}
                className={`px-4 py-2 rounded-lg font-label-md transition-colors flex items-center justify-center gap-2 flex-1 md:flex-none ${isClaimed ? 'bg-tertiary text-on-tertiary cursor-default' : 'bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'}`}
              >
                {isClaimed ? (
                  <>
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    Claimed
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">task_alt</span>
                    Mark as Claimed
                  </>
                )}
              </button>
              <button 
                onClick={() => setSimulationResult(null)}
                className="px-4 py-2 border border-outline rounded-lg font-label-md text-primary hover:bg-surface-container-low transition-colors flex-1 md:flex-none text-center"
              >
                Start New Simulation
              </button>
            </div>
          </div>

          <h4 className="font-headline-md mb-4 text-on-surface">Recommended Policy to Claim</h4>
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant mb-6 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <h5 className="font-bold text-headline-md text-primary">{simulationResult.bestPolicy.name}</h5>
                </div>
                <p className="text-label-md text-secondary">Best match for this treatment</p>
                <div className="mt-3">
                  <p className="text-label-sm font-label-sm text-secondary italic">Clause: {simulationResult.bestPolicy.clause}</p>
                  <a href={simulationResult.bestPolicy.documentLink} className="text-label-sm font-label-sm text-primary hover:underline flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-[14px]">description</span>View Full Document
                  </a>
                </div>
              </div>
              <div className="text-right">
                <p className="text-label-sm text-on-surface-variant uppercase tracking-wider">Estimated Out-of-pocket</p>
                <p className="font-headline-lg text-on-background font-bold">${simulationResult.bestPolicy.oop.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-outline-variant/30">
              <div>
                <p className="text-label-sm text-on-surface-variant">Coverage Rate</p>
                <p className="font-bold text-on-surface">{simulationResult.bestPolicy.rate}</p>
              </div>
              <div>
                <p className="text-label-sm text-on-surface-variant">Est. Reimbursement</p>
                <p className="font-bold text-tertiary-container">${simulationResult.bestPolicy.reimbursement.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
              </div>
              <div>
                <p className="text-label-sm text-on-surface-variant">Deductible Status</p>
                <p className="font-bold text-on-surface">{simulationResult.bestPolicy.deductibleStatus}</p>
              </div>
            </div>
          </div>

          {simulationResult.alternatives.length > 0 && (
            <>
              <h4 className="font-label-md text-on-surface mb-3 uppercase tracking-widest text-outline">Alternative Options</h4>
              <div className="space-y-3">
                {simulationResult.alternatives.map((alt, index) => (
                  <div key={index} className="flex flex-col p-4 border border-outline-variant rounded-lg bg-surface hover:bg-surface-container-low transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-on-surface">{alt.name}</p>
                        <p className="text-label-sm text-on-surface-variant mt-1">Coverage Rate: {alt.rate}</p>
                        <div className="mt-2">
                          <p className="text-label-sm font-label-sm text-secondary italic">Clause: {alt.clause}</p>
                          <a href={alt.documentLink} className="text-label-sm font-label-sm text-primary hover:underline flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[14px]">description</span>View Full Document
                          </a>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-label-sm text-on-surface-variant">Est. Out-of-pocket</p>
                        <p className="font-bold text-on-surface">${alt.oop.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default ClaimSimulator;
