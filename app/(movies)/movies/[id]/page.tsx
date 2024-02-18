import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVidoes from "../../../../components/moview-videos";
import { Suspense } from "react";

interface ParamsProps {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: ParamsProps) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default function MovieDetail({ params: { id } }: ParamsProps) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVidoes id={id} />
      </Suspense>
    </div>
  );
}
