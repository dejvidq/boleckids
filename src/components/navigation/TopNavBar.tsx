'use client'; // Added 'use client'

import React from 'react';
import { Menu, Search, User } from 'lucide-react';
import { useI18n } from '../../i18n/client'; // Adjusted import path

const TopNavBar: React.FC = () => {
  const t = useI18n(); // Called useI18n

  return (
    <div className="sticky top-0 z-50 bg-primary-purple text-white p-4 flex items-center justify-between">
      {/* Left Section */}
      <div>
        <Menu className="h-6 w-6" />
      </div>

      {/* Center Section */}
      <div>
        <span className="font-bold text-xl">{t('app_title')}</span> {/* Used t('app_title') */}
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <Search className="h-6 w-6" />
        <User className="h-6 w-6" />
      </div>
    </div>
  );
};

export default TopNavBar;
