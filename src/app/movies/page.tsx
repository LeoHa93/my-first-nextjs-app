export const metaData = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // return fetch(URL).then((response) => response.json());
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("FETCHING!!");
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function MoviePage() {
  const movies = await getMovies();
  return (
    <div>
      <h2>MOVIES</h2>
      <p>{JSON.stringify(movies)}</p>
    </div>
  );
}
