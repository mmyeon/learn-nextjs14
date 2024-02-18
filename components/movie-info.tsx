import { API_URL } from "../app/constants";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  console.log(`Fetching movies ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const reponse = await fetch(`${API_URL}/${id}`);
  const json = await reponse.json();

  return json;
}
export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movie.poster_path} />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3> ⭐ {movie.vote_average.toFixed(2)}</h3>
        <p className={styles.info}>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
