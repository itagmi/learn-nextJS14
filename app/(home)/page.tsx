import Movie from "../../components/movie";
import style from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  //await new Promise((resolve) => setTimeout(resolve, 1000)); // 5초 동안 느리게 하는 트릭.
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}



export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          id={movie.id}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
