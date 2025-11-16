import { useState } from "react";

type Movie = {
  id: number;
  title: string;
};

export function FavMovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [title, setTitle] = useState("");
  const [nextId, setNextId] = useState(1);

  const addMovie = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    const newMovie: Movie = { id: nextId, title: trimmed };
    setMovies((prev) => [...prev, newMovie]); // immutably add
    setNextId((id) => id + 1);
    setTitle("");
  };

  const removeMovie = (id: number) => {
    setMovies((prev) => prev.filter((m) => m.id !== id)); // immutably remove
  };

  return (
    <div>
      <h2>Favourite Movies</h2>

      <form onSubmit={addMovie}>
        <input
          placeholder="Add movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {movies.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <span>{movie.title}</span>
              <button
                onClick={() => removeMovie(movie.id)}
                aria-label={`Delete ${movie.title}`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
