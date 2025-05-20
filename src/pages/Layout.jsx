import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function Layout() {
  const [asideOpen, setAsideOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <main className="min-h-screen w-full bg-gray-100 text-gray-700 relative">
      <Header
        onToggleSidebar={() => setAsideOpen(!asideOpen)}
        profileOpen={profileOpen}
        setProfileOpen={setProfileOpen}
      />
      <div className="flex">
        {asideOpen && <Sidebar />}
        {/* Main content */}
        <div className="w-full p-4">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
