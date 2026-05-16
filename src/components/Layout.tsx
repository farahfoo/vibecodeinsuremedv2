import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar />
      <main className="flex-1 ml-64 p-margin-desktop w-full flex flex-col">
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
