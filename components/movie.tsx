"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface MovieProps {
  id: number;
  poster_path: string;
  title: string;
}

export default function Movie({ title, poster_path, id }: MovieProps) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
