import { API_URL } from "../(home)/page";

async function getVideos(id: string) {
  console.log(`Fetching videos ${Date.now()}`);
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  const reposne = await fetch(`${API_URL}/${id}/videos`);
  const json = await reposne.json();

  return json;
}

export default async function MovieVidoes({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
