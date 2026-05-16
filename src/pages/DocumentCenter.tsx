

function DocumentCenter() {
  return (
    <div className="max-w-container-max mx-auto w-full">
      <header className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-headline-lg font-headline-lg text-primary tracking-tight">Policy Management</h2>
          <p className="text-body-md font-body-md text-secondary mt-1">Upload and manage your digital insurance archives securely.</p>
        </div>
      </header>

      <section className="mb-12">
        <div className="bg-surface-container-lowest border-2 border-dashed border-primary-container/30 rounded-xl p-12 text-center drag-zone-gradient shadow-sm flex flex-col items-center justify-center group hover:border-primary transition-all cursor-pointer focus-within:ring-2 focus-within:ring-primary" tabIndex={0} role="button" aria-label="Upload document area">
          <div className="w-20 h-20 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-[48px] text-primary" style={{ fontVariationSettings: "'wght' 300" }} aria-hidden="true">cloud_upload</span>
          </div>
          <h3 className="text-headline-md font-headline-md text-primary mb-2">Secure Document Upload</h3>
          <p className="text-body-md font-body-md text-secondary max-w-md mx-auto mb-8">
            Drag and drop your insurance policy PDF or scan (JPG, PNG) here to begin the verification process. Files are encrypted during transit.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-opacity-90 transition-all shadow-md flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              <span className="material-symbols-outlined" aria-hidden="true">file_open</span>
              Browse Files
            </button>
            <div className="flex items-center text-label-sm font-label-sm text-outline-variant px-4 border border-outline-variant rounded-lg" aria-hidden="true">
              Max size: 25MB
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-6">
          <h3 className="text-headline-md font-headline-md text-primary">Recent Documents</h3>
          <div className="flex gap-2">
            <button className="text-primary font-label-md text-label-md px-4 py-2 hover:bg-primary-container/10 rounded-lg transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">filter_list</span>
              Filter
            </button>
            <button className="text-primary font-label-md text-label-md px-4 py-2 hover:bg-primary-container/10 rounded-lg transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">sort</span>
              Sort
            </button>
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse" role="table" aria-label="Recent documents">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                <th className="px-6 py-4 font-label-md text-label-md text-secondary" scope="col">Document Name</th>
                <th className="px-6 py-4 font-label-md text-label-md text-secondary" scope="col">Policy Number</th>
                <th className="px-6 py-4 font-label-md text-label-md text-secondary" scope="col">Date Uploaded</th>
                <th className="px-6 py-4 font-label-md text-label-md text-secondary" scope="col">Utilization</th>
                <th className="px-6 py-4 font-label-md text-label-md text-secondary text-right" scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">picture_as_pdf</span>
                    <span className="font-label-md text-label-md text-on-surface">Comprehensive_Health_2024.pdf</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-body-md font-body-md text-secondary">POL-8829-XJ</td>
                <td className="px-6 py-5 text-body-md font-body-md text-secondary">Oct 24, 2023</td>
                <td className="px-6 py-5">
                  <span className="font-label-md text-on-surface">3 claims this year</span>
                  <p className="text-label-sm text-secondary">$1,200 claimed</p>
                </td>
                <td className="px-6 py-5 text-right">
                  <div className="flex justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-primary-container/10 rounded-lg text-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary" aria-label="View Document">
                      <span className="material-symbols-outlined" aria-hidden="true">visibility</span>
                    </button>
                    <button className="p-2 hover:bg-error/10 rounded-lg text-error transition-all focus:outline-none focus:ring-2 focus:ring-error" aria-label="Delete Document">
                      <span className="material-symbols-outlined" aria-hidden="true">delete</span>
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">image</span>
                    <span className="font-label-md text-label-md text-on-surface">Dental_Provider_Schedule.jpg</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-body-md font-body-md text-secondary">DEN-1102-AQ</td>
                <td className="px-6 py-5 text-body-md font-body-md text-secondary">Oct 26, 2023</td>
                <td className="px-6 py-5">
                  <span className="font-label-md text-on-surface">1 claim this year</span>
                  <p className="text-label-sm text-secondary">$150 claimed</p>
                </td>
                <td className="px-6 py-5 text-right">
                  <div className="flex justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-primary-container/10 rounded-lg text-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary" aria-label="View Document">
                      <span className="material-symbols-outlined" aria-hidden="true">visibility</span>
                    </button>
                    <button className="p-2 hover:bg-error/10 rounded-lg text-error transition-all focus:outline-none focus:ring-2 focus:ring-error" aria-label="Delete Document">
                      <span className="material-symbols-outlined" aria-hidden="true">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          
          <div className="bg-surface-container px-6 py-4 border-t border-outline-variant flex justify-between items-center">
            <span className="text-label-md font-label-md text-secondary">Showing 2 of 2 documents</span>
            <div className="flex gap-2">
              <button className="p-1 hover:bg-surface-container-highest rounded transition-all text-secondary disabled:opacity-30 focus:outline-none focus:ring-2 focus:ring-primary" disabled aria-label="Previous page">
                <span className="material-symbols-outlined" aria-hidden="true">chevron_left</span>
              </button>
              <button className="p-1 hover:bg-surface-container-highest rounded transition-all text-secondary disabled:opacity-30 focus:outline-none focus:ring-2 focus:ring-primary" disabled aria-label="Next page">
                <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="bg-primary text-on-primary rounded-xl p-8 flex justify-between items-center shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="text-headline-md font-headline-md mb-2">Need help with your upload?</h4>
            <p className="text-body-md font-body-md text-on-primary-container max-w-md">Our document verification experts are available 24/7 to assist with policy digitization or verification issues.</p>
            <button className="mt-6 bg-tertiary-fixed text-on-tertiary-fixed px-6 py-3 rounded-lg font-label-md text-label-md hover:bg-opacity-90 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-tertiary-fixed focus:ring-offset-2 focus:ring-offset-primary">
              <span className="material-symbols-outlined" aria-hidden="true">contact_support</span>
              Talk to Support
            </button>
          </div>
          <div className="hidden lg:block relative z-10 mr-10" aria-hidden="true">
            <span className="material-symbols-outlined text-[120px] opacity-20">contract_edit</span>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-container rounded-full opacity-20" aria-hidden="true"></div>
        </div>
      </section>
    </div>
  );
}

export default DocumentCenter;
