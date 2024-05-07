"use client";
import { useEffect, useState } from "react";

// export const metadata = {
//   title: "Home",
// };

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMoves] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );

    const json = await response.json();
    setMoves(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
}
