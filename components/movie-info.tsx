import { API_URL } from "../app/constants";
import style from "../styles/movie-info.module.css";

export async function getMovies(id: string) {
  // console.log(`Fetching movies: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movies = await getMovies(id);
  return (
    <div className={style.container}>
      <img
        src={movies.poster_path}
        className={style.poster}
        alt={movies.title}
      />
      <div className={style.info}>
        <h1 className={movies.title}>{movies.title}</h1>
        <h3>⭐{movies.vote_average.toFixed(1)}</h3>
        <p>{movies.overview}</p>
        <a href={movies.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
