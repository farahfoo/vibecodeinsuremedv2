import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { DiscussionEmbed } from 'disqus-react';

function Layout() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar />
      <main className="flex-1 ml-64 p-margin-desktop w-full flex flex-col">
        <div className="flex-1">
          <Outlet />
        </div>
        <div className="mt-16 pt-8 border-t border-outline-variant max-w-container-max mx-auto w-full">
          <DiscussionEmbed
            shortname='medclaim'
            config={
                {
                    url: `https://medclaim.com${currentPath}`,
                    identifier: currentPath,
                    title: `MedClaim - ${currentPath.replace('/', '')}`,
                    language: 'en'
                }
            }
          />
        </div>
      </main>
    </div>
  );
}

export default Layout;
