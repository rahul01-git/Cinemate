import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm);

  useTitle(`Search Result for ${queryTerm}`)
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-800 dark:text-white">{movies.length===0 ? `No result found for ' ${queryTerm} '`: `Result for ' ${queryTerm} '`}</p>
      </section>
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
