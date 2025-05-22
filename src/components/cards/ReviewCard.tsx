import React from 'react';
import { Star, UserCircle2 } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';

interface ReviewCardProps {
  reviewerName?: string;
  rating?: number; // 0-5
  placeName?: string;
  reviewContent?: string;
  isLoading?: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  reviewerName = 'Anna K.',
  rating = 5,
  placeName = 'Przedszkole "Radosne Nutki"',
  reviewContent = 'Bardzo przyjazne miejsce dla dzieci, świetna opieka i mnóstwo zabawy. Moje dziecko uwielbia tam chodzić!',
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center mb-2">
          <Skeleton circle height={40} width={40} className="mr-3" />
          <div>
            <Skeleton height={18} width={100} className="mb-1" />
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} height={16} width={16} className="text-gray-300 mr-0.5" />
              ))}
            </div>
          </div>
        </div>
        <Skeleton height={16} width={150} className="mb-1" />
        <Skeleton height={14} count={3} />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center mb-2">
        <UserCircle2 className="h-10 w-10 text-gray-400 mr-3 flex-shrink-0" />
        <div>
          <p className="font-semibold text-gray-800">{reviewerName}</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 font-medium mb-1">{placeName}</p>
      <p className="text-sm text-gray-700 leading-relaxed">{reviewContent}</p>
    </div>
  );
};

export default ReviewCard;
