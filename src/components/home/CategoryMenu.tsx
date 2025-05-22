'use client'; // Added 'use client'

import React from 'react';
import Link from 'next/link';
import { MapPin, CalendarDays, Building, Stethoscope } from 'lucide-react';
import { useScopedI18n } from '../../i18n/client'; // Adjusted import path

const CategoryMenu: React.FC = () => {
  const t = useScopedI18n('categories'); // Called useScopedI18n

  // Define categories inside the component so 't' is in scope
  const categories = [
    { name: t('places'), href: '/miejsca', icon: MapPin, key: 'places' },
    { name: t('events'), href: '/wydarzenia', icon: CalendarDays, key: 'events' },
    { name: t('institutions'), href: '/placowki', icon: Building, key: 'institutions' },
    { name: t('doctors'), href: '/lekarze', icon: Stethoscope, key: 'doctors' },
  ];

  return (
    <div className="py-4 px-2"> {/* Relying on page background, added padding */}
      <div className="flex space-x-3 overflow-x-auto pb-2 md:justify-center md:space-x-6">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Link
              key={category.key} // Use a unique key like 'places' instead of translated name
              href={category.href}
              className="flex flex-col items-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow min-w-[80px] md:min-w-[100px]"
            >
              <IconComponent className="h-8 w-8 text-primary-purple mb-1" />
              <span className="text-sm text-gray-700">{category.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
