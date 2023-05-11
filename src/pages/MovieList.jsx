import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({ apiPath , title}) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title)

  return (
    <main>
      <section className="max-7xl py-7 mx-auto">
        <div className="flex flex-wrap justify-start other:justify-evenly">
          {movies?.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
