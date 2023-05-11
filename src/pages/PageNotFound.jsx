import { Link } from "react-router-dom";
import pageNotFoundImage from "../assets/images/pagenotfound.png";
import { Button } from "../components";
export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 dark:text-white my-10 font-bold">
            404, OOPS !
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={pageNotFoundImage}
              alt="404 page not found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back To Cinemate</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
