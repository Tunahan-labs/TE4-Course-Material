import { useState } from "react";

export function FavMovieList() {
  const [movies, setMovies] = useState<string[]>([]);
  const [movie, setMovie] = useState<string>("");

  const addMovie = () => {
    if (!movie.trim()) return;
    setMovies([...movies, movie]);
    setMovie("");
  };

  const removeMovie = (title: string) => {
    setMovies(movies.filter((m) => m !== title));
  };

  return (
    <div>
      <h2>Favorite Movies</h2>
      <input
        type="text"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />
      <button onClick={addMovie}>Add Movie</button>

      {movies.length > 0 && (
        <div className="">
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>
                {movie}{" "}
                <button onClick={() => removeMovie(movie)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
