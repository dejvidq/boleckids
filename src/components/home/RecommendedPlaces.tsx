'use client'; // Added 'use client'

import React from 'react';
import Link from 'next/link';
import PlaceCard from '../cards/PlaceCard';
import { useScopedI18n } from '../../i18n/client'; // Adjusted path

const mockPlaces = [
  {
    name: 'Sala zabaw "Kolorowy Świat"',
    address: 'Centrum, Bolesławiec',
    time: '10:00 - 20:00',
    ageRange: '3-10 lat',
    rating: 4,
    reviewCount: 123,
    href: '/miejsca/kolorowy-swiat', // Example link
  },
  {
    name: 'Park Linowy "Adrenalina"',
    address: 'Las Miejski, Bolesławiec',
    time: '12:00 - 18:00 (sezonowo)',
    ageRange: 'od 6 lat',
    rating: 5,
    reviewCount: 98,
    href: '/miejsca/park-linowy-adrenalina',
  },
  {
    name: 'Muzeum Ceramiki',
    address: 'Stare Miasto, Bolesławiec',
    time: '09:00 - 17:00',
    ageRange: 'bez ograniczeń',
    rating: 4,
    reviewCount: 210,
    href: '/miejsca/muzeum-ceramiki',
  },
  {
    name: 'Pływalnia Miejska "AquaFun"',
    address: 'Osiedle Kwiatowe, Bolesławiec',
    time: '07:00 - 21:00',
    ageRange: 'bez ograniczeń',
    rating: 3,
    reviewCount: 75,
    href: '/miejsca/plywalnia-aquafun',
  },
    // You can add a loading card example
  { isLoading: true },
];

const RecommendedPlaces: React.FC = () => {
  const t = useScopedI18n('recommended_places'); // Called useScopedI18n

  return (
    <section className="py-6 px-2">
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-xl font-semibold text-gray-800">{t('title')}</h2> {/* Used t('title') */}
        <Link href="/miejsca" className="text-sm text-primary-purple hover:underline">
          {t('see_all')} {/* Used t('see_all') */}
        </Link>
      </div>
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {mockPlaces.map((place, index) => (
          <PlaceCard
            key={place.name || `loading-card-${index}`} // Ensure key is unique for loading cards
            name={place.name}
            address={place.address}
            time={place.time}
            ageRange={place.ageRange}
            rating={place.rating}
            reviewCount={place.reviewCount}
            isLoading={place.isLoading}
            href={place.href}
            // isFavorite can be added if mock data includes it
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendedPlaces;
