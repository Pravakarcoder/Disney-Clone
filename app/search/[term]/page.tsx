import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

export const metadata: Metadata = {
  title: "Alpha",
  description: "For Educational Purposes",
};

async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  // API call to get Searched Movies
  const movies = await getSearchedMovies(termToUse);
  // API call to get Popular Movies
  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-40">
        <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>

        {/* AI Suggestion */}

        <MoviesCarousel title="Movies" movies={movies} isVertical />
        <MoviesCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
}

export default SearchPage;
