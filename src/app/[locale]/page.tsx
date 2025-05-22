import CategoryMenu from "@/components/home/CategoryMenu";
import RecommendedPlaces from "@/components/home/RecommendedPlaces";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import LatestReviews from "@/components/home/LatestReviews";

export default function Home() {
  return (
    // The global background #F3F4F6 is already applied from globals.css
    <main className="flex flex-col items-center w-full"> {/* Ensure main takes full width for children alignment */}
      {/* CategoryMenu is centered by its own content or by items-center on main if it's not full width itself */}
      <CategoryMenu />

      {/* RecommendedPlaces section - should span width and handle its internal padding/margins */}
      <RecommendedPlaces />

      {/* UpcomingEvents section - should span width and handle its internal padding/margins */}
      <UpcomingEvents />

      {/* LatestReviews section - should span width and handle its internal padding/margins */}
      <LatestReviews />

      {/* Placeholder for other content that might be added later */}
      <div className="mt-8 text-center p-4"> {/* Added padding for this section too */}
        <p className="text-lg text-gray-700">
          Przeglądaj kategorie lub wyszukaj interesujące Cię informacje.
        </p>
        {/* Example of using primary-purple color */}
        {/* <button className="mt-4 px-6 py-2 bg-primary-purple text-white rounded-md hover:opacity-90">
          Przykładowy Przycisk
        </button> */}
      </div>
    </main>
  );
}
