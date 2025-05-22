'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Map, Bookmark, User, LayoutGrid } from 'lucide-react';
import { useScopedI18n } from '../../i18n/client'; // Adjusted import path

const BottomNavBar: React.FC = () => {
  const pathname = usePathname();
  const tNav = useScopedI18n('navigation'); // Called useScopedI18n

  // Define navItems inside the component so 'tNav' is in scope
  const navItems = [
    { name: 'Home', href: '/', icon: Home, label: tNav('home') },
    { name: 'Mapa', href: '/mapa', icon: Map, label: tNav('map') },
    { name: 'Zapisane', href: '/zapisane', icon: Bookmark, label: tNav('saved') },
    { name: 'Profil', href: '/profil', icon: User, label: tNav('profile') },
    { name: 'Więcej', href: '/more', icon: LayoutGrid, label: tNav('more') },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-[0_-2px_5px_-1px_rgba(0,0,0,0.07)]">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const IconComponent = item.icon;
          return (
            <Link
              key={item.name} // Using 'name' as key is fine as it's unique (Home, Mapa, etc.)
              href={item.href}
              className={`flex flex-col items-center justify-center transition-colors w-full pt-1 pb-1 ${
                isActive ? 'text-primary-purple' : 'text-gray-500 hover:text-primary-purple'
              }`}
            >
              <IconComponent className="h-6 w-6 mb-0.5" />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavBar;
