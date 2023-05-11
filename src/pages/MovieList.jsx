import { useEffect, useState } from "react";
import { Card } from "../components";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=3ba2595a6bf24ef80336747b0f2153fc"
      );
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  }, []);
  return (
    <main>
      <section className="max-7xl py-7 mx-auto">
        <div className="flex flex-wrap justify-start">
          {movies?.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
