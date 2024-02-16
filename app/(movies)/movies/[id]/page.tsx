import { Metadata } from "next";
import MovieInfo from "../../../components/movie-info";
import MovieVidoes from "../../../components/moview-videos";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Movie Detail",
};

export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
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
