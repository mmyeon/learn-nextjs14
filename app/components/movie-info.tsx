import { API_URL } from "../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const reponse = await fetch(`${API_URL}/${id}`);
  const json = await reponse.json();

  return json;
}
export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
