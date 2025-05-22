'use client'; // Added 'use client'

import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';
import { useScopedI18n } from '../../i18n/client'; // Adjusted path

interface EventCardProps {
  title?: string;
  location?: string;
  dateTime?: string;
  imageUrl?: string; // For future use
  isLoading?: boolean;
  href?: string; // For Link wrapper, if used
}

const EventCard: React.FC<EventCardProps> = ({
  title = 'Warsztaty plastyczne',
  location = 'Dom Kultury "Centrum"',
  dateTime = 'Sob, 26 kwi | 11:00 - 13:00',
  isLoading = false,
  href, // If the whole card should be a link
}) => {
  const t = useScopedI18n('upcoming_events'); // Called useScopedI18n for the button

  const cardContent = (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden flex items-center p-3 space-x-3 ${isLoading ? 'opacity-70' : ''}`}>
      <div className="w-24 h-24 bg-gray-200 rounded-md flex-shrink-0">
        {isLoading ? <Skeleton height={96} width={96} /> : <Skeleton height={96} width={96} /> /* Placeholder for actual image */}
      </div>
      <div className="flex-grow">
        {isLoading ? (
          <>
            <Skeleton height={20} width="70%" className="mb-1" />
            <Skeleton height={18} width="50%" className="mb-1" />
            <Skeleton height={18} width="60%" className="mb-2" />
          </>
        ) : (
          <>
            <h3 className="font-bold text-md mb-1 truncate" title={title}>{title}</h3>
            <p className="text-sm text-gray-600 mb-1 truncate" title={location}>{location}</p>
            <p className="text-sm text-gray-600 mb-2 truncate" title={dateTime}>{dateTime}</p>
          </>
        )}
      </div>
      <div className="ml-auto flex-shrink-0">
        {isLoading ? (
          <Skeleton height={34} width={90} />
        ) : (
          <button className="bg-primary-purple text-white text-sm py-2 px-3 rounded-md hover:opacity-90">
            {t('register_button')} {/* Used t('register_button') */}
          </button>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} passHref>
        <a className="block hover:shadow-lg transition-shadow rounded-lg">{cardContent}</a>
      </Link>
    );
  }

  return cardContent;
};

export default EventCard;
