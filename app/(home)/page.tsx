import Link from "next/link";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  //await new Promise((resolve) => setTimeout(resolve, 1000)); // 5초 동안 느리게 하는 트릭.
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movies.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
