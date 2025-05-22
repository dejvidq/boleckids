'use client'; // Added 'use client'

import React from 'react';
import Link from 'next/link';
import ReviewCard from '../cards/ReviewCard';
import { useScopedI18n } from '../../i18n/client'; // Adjusted path

const mockReviews = [
  {
    reviewerName: 'Marek P.',
    rating: 4,
    placeName: 'Sala zabaw "Fikołki"',
    reviewContent: 'Świetne miejsce na urodziny dla dziecka. Dużo atrakcji, miła obsługa. Trochę głośno w weekendy, ale to norma.',
  },
  {
    reviewerName: 'Katarzyna W.',
    rating: 5,
    placeName: 'Żłobek "Maluszkowo"',
    reviewContent: 'Jesteśmy bardzo zadowoleni z opieki. Panie są cudowne, dziecko chętnie zostaje. Polecam z całego serca.',
  },
  {
    isLoading: true, // Example of a loading card
  },
];

const LatestReviews: React.FC = () => {
  const t = useScopedI18n('latest_reviews'); // Called useScopedI18n

  return (
    <section className="py-6 px-2 w-full max-w-4xl mx-auto"> {/* Consistent with UpcomingEvents for centering */}
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-xl font-semibold text-gray-800">{t('title')}</h2> {/* Used t('title') */}
        <Link href="/opinie" className="text-sm text-primary-purple hover:underline">
          {t('see_all')} {/* Used t('see_all') */}
        </Link>
      </div>
      <div className="space-y-4">
        {mockReviews.map((review, index) => (
          <ReviewCard
            key={review.reviewerName || `loading-review-${index}`}
            reviewerName={review.reviewerName}
            rating={review.rating}
            placeName={review.placeName}
            reviewContent={review.reviewContent}
            isLoading={review.isLoading}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestReviews;
