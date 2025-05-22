'use client'; // Added 'use client'

import React from 'react';
import Link from 'next/link';
import EventCard from '../cards/EventCard';
import { useScopedI18n } from '../../i18n/client'; // Adjusted path

const mockEvents = [
  {
    title: 'Warsztaty plastyczne "Kolorowe Kredki"',
    location: 'Dom Kultury "Tęcza"',
    dateTime: 'Sob, 10 Maj | 10:00 - 12:00',
    // href: '/wydarzenia/warsztaty-plastyczne-kolorowe-kredki' // Example link
  },
  {
    title: 'Spektakl dla dzieci "Przygody Misia Uszatka"',
    location: 'Teatr Lalek "Bajka"',
    dateTime: 'Ndz, 11 Maj | 16:00',
    // href: '/wydarzenia/spektakl-przygody-misia-uszatka'
  },
  {
    title: 'Rodzinny Piknik Naukowy',
    location: 'Park Miejski Centralny',
    dateTime: 'Sob, 17 Maj | 12:00 - 17:00',
    isLoading: true, // Example of a loading card
  },
];

const UpcomingEvents: React.FC = () => {
  const t = useScopedI18n('upcoming_events'); // Called useScopedI18n

  return (
    <section className="py-6 px-2 w-full max-w-4xl mx-auto"> {/* Added max-width and mx-auto for better centering on larger screens */}
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-xl font-semibold text-gray-800">{t('title')}</h2> {/* Used t('title') */}
        <Link href="/wydarzenia" className="text-sm text-primary-purple hover:underline">
          {t('see_all')} {/* Used t('see_all') */}
        </Link>
      </div>
      <div className="space-y-4">
        {mockEvents.map((event, index) => (
          <EventCard
            key={event.title || `loading-event-${index}`}
            title={event.title}
            location={event.location}
            dateTime={event.dateTime}
            isLoading={event.isLoading}
            // href={event.href} // Pass href if cards should link individually
          />
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
