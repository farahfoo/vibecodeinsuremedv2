import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

function Sidebar() {
  const navItems = [
    { to: '/overview', icon: 'dashboard', label: 'Overview' },
    { to: '/policies', icon: 'security', label: 'My Policies' },
    { to: '/simulator', icon: 'analytics', label: 'Claim Simulator' },
    { to: '/documents', icon: 'upload_file', label: 'Documents' },
    { to: '/pricing', icon: 'payments', label: 'Pricing' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant shadow-sm flex flex-col p-unit gap-2 z-50">
      <div className="px-4 py-6 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
          </div>
          <div>
            <h1 className="text-headline-md font-headline-md font-bold text-primary">MedClaim</h1>
            <p className="text-label-sm text-on-surface-variant font-label-sm">Expertise & Clarity</p>
          </div>
        </div>
        <div className="mt-6 px-3 py-2 bg-surface-container rounded-lg border border-outline-variant flex items-center justify-between shadow-sm">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-outline font-bold leading-none mb-1">Your Plan</span>
            <span className="text-label-md font-bold text-primary">Free</span>
          </div>
          <div className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(57,211,106,0.4)]"></div>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1 px-2" aria-label="Main Navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              clsx(
                "flex items-center gap-3 px-4 py-3 rounded-lg font-label-md text-label-md transition-all duration-200",
                isActive
                  ? "bg-primary-container text-on-primary-container font-bold"
                  : "text-on-surface-variant hover:bg-surface-container"
              )
            }
          >
            {({ isActive }) => (
              <>
                <span 
                  className="material-symbols-outlined" 
                  style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
        <NavLink 
          to="/support" 
          className={({ isActive }) =>
            clsx(
              "flex items-center gap-3 px-4 py-3 rounded-lg font-label-md text-label-md transition-all duration-200",
              isActive
                ? "bg-primary-container text-on-primary-container font-bold"
                : "text-on-surface-variant hover:bg-surface-container"
            )
          }
        >
          {({ isActive }) => (
            <>
              <span 
                className="material-symbols-outlined" 
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                aria-hidden="true"
              >
                contact_support
              </span>
              <span>Support</span>
            </>
          )}
        </NavLink>
      </nav>

      <div className="mt-auto px-4 py-4 space-y-1 border-t border-outline-variant">
        <a href="#settings" className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container rounded-lg font-label-md text-label-md">
          <span className="material-symbols-outlined" aria-hidden="true">settings</span>
          <span>Settings</span>
        </a>
        <a href="#signout" className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container rounded-lg font-label-md text-label-md">
          <span className="material-symbols-outlined" aria-hidden="true">logout</span>
          <span>Sign Out</span>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
