import React from 'react';
import { Heart, Star } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link'; // Optional, but good to have

interface PlaceCardProps {
  name?: string;
  address?: string;
  time?: string;
  ageRange?: string;
  rating?: number;
  reviewCount?: number;
  imageUrl?: string; // For future use
  isFavorite?: boolean; // For future use
  isLoading?: boolean;
  href?: string; // For the Link
}

const PlaceCard: React.FC<PlaceCardProps> = ({
  name = 'Sala zabaw "Kolorowy Świat"',
  address = 'Centrum, Bolesławiec',
  time = '10:00 - 20:00',
  ageRange = '3-10 lat',
  rating = 4,
  reviewCount = 123,
  isLoading = false,
  isFavorite = false, // Default to not favorite
  href = "#" // Default link to "#"
}) => {
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-64 md:w-72 flex-shrink-0 relative">
        <div className="h-32 bg-gray-200">
          <Skeleton height={128} />
        </div>
        <div className="p-3">
          <Skeleton height={20} width="80%" className="mb-1" />
          <Skeleton height={15} width="60%" className="mb-1" />
          <Skeleton height={15} width="70%" className="mb-2" />
          <div className="flex items-center text-xs text-gray-600">
            <Skeleton circle height={16} width={16} count={5} inline className="mr-1"/>
            <Skeleton height={15} width={60} className="ml-1" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link href={href} passHref>
      <a className="bg-white rounded-lg shadow-md overflow-hidden w-64 md:w-72 flex-shrink-0 relative block hover:shadow-xl transition-shadow">
        <div className="h-32 bg-gray-200">
          {/* Placeholder for actual image */}
          {/* <img src={imageUrl} alt={name} className="w-full h-full object-cover" /> */}
           <Skeleton height={128} /> {/* In case no image yet, show skeleton */}
        </div>
        <Heart className={`absolute top-2 right-2 h-5 w-5 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-300 hover:text-red-400'}`} />
        <div className="p-3">
          <h3 className="font-bold text-md mb-1 truncate" title={name}>{name}</h3>
          <p className="text-xs text-gray-600 mb-1 truncate" title={address}>{address}</p>
          <p className="text-xs text-gray-600 mb-2 truncate" title={`${time} | ${ageRange}`}>{time} | {ageRange}</p>
          <div className="flex items-center text-xs text-gray-600">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
            <span className="ml-1">({reviewCount} opinie)</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PlaceCard;
