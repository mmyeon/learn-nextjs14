import { API_URL } from "../app/constants";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
  console.log(`Fetching videos ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //   throw new Error(`Somethign broken...`);
  const reposne = await fetch(`${API_URL}/${id}/videos`);
  const json = await reposne.json();

  return json;
}

export default async function MovieVidoes({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://www.youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
