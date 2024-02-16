import { Metadata } from "next";
import { API_URL } from "../../../(home)/page";

export const metadata: Metadata = {
  title: "Movie Detail",
};

async function getMovie(id: string) {
  console.log(`Fetching movies ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const reponse = await fetch(`${API_URL}/${id}`);
  const json = await reponse.json();

  return json;
}

async function getVideos(id: string) {
  console.log(`Fetching videos ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const reposne = await fetch(`${API_URL}/${id}/videos`);
  const json = await reposne.json();

  return json;
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log(`Start fetching`);
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log(`End fetching`);
  return <h1>{movie.title}</h1>;
}
