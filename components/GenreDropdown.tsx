function GenreDropdown() {
  const url = "https://api.themoviedb.org/3/movie/list?language=en";

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  };

  return <div></div>;
}

export default GenreDropdown;
