import { useState, useEffect, useRef } from 'react';
import StarRating from './StarRating';
import { useMovies } from './useMovies';
import useLocalStorageState from './useLocalStorageState';
import { useKey } from './useKey';

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = '6dd4b7d3';

export default function App() {
  const [query, setQuery] = useState('cars');
  const [selectedId, setSElectedId] = useState(null);

  const { movies, isLoading, error } = useMovies(query);

  // const [watched, setWatched] = useState([]);
  const [watched, setWatched] = useLocalStorageState([], 'watched');

  function handleSelectMovie(id) {
    setSElectedId((selectedId) => (id === selectedId ? null : id));
  }
  function handleCloseMovie() {
    setSElectedId(null);
  }

  function handleAddWatced(movie) {
    setWatched((watched) => [...watched, movie]);
    // localStorage.setItem('watched', JSON.stringify([...watched, movie]));
  }

  function handleDeleteWatced(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Search query={query} onChange={setQuery} />
        <NumRestult movies={movies} />
      </NavBar>
      <Main>
        {/* <Box>{isLoading ? <Loder /> : <MovieList movies={movies} />}</Box> */}
        <Box>
          {isLoading && <Loder />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage msg={error} />}
        </Box>
        <Box>
          <>
            {selectedId ? (
              <MovieDetails
                selectedId={selectedId}
                onCloseMovie={handleCloseMovie}
                onAddWatched={handleAddWatced}
                watched={watched}
              />
            ) : (
              <>
                <Summary watched={watched} />
                <WatchedMoviesList
                  watched={watched}
                  onDeleteWatched={handleDeleteWatced}
                />
              </>
            )}
          </>
        </Box>
      </Main>
    </>
  );
}

function Loder() {
  return <p className="loader">Loading...</p>;
}

function ErrorMessage({ msg }) {
  return (
    <p className="error">
      {' '}
      <span>❗</span>
      {msg}
    </p>
  );
}

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function Search({ query, onChange }) {
  const inputEl = useRef(null);

  useKey('Enter', function () {
    inputEl.current.focus();
    onChange('');
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => onChange(e.target.value)}
      ref={inputEl}
    />
  );
}

function NumRestult({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <BtnToggle open={isOpen} setOpen={setIsOpen} />
      {isOpen && children}
    </div>
  );
}

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} onSelectMovie={onSelectMovie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

function Movie({ movie, onSelectMovie }) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function Summary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState('');

  const countRef = useRef(0);

  useEffect(
    function () {
      if (userRating) countRef.current = countRef.current + 1;
    },
    [userRating]
  );

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);

  const watchedUserrating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Poster: poster,
    Year: year,
    Released: released,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      userRating,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(' ').at(0)),
      countRatingDecicions: countRef.current,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useKey('Escape, onCloseMovie');

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;
      return function () {
        document.title = 'usePopCorn';
      };
    },
    [title]
  );
  return (
    <div className="details">
      {isLoading ? (
        <Loder />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />

            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span> {imdbRating} IMDb rating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={20}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>you rated this movie {watchedUserrating} 🌟</p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring: {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMoveis
          movie={movie}
          onDeleteWatched={onDeleteWatched}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
}

function WatchedMoveis({ movie, onDeleteWatched }) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}

function BtnToggle({ open, setOpen }) {
  return (
    <button className="btn-toggle" onClick={() => setOpen((open) => !open)}>
      {open ? '–' : '+'}
    </button>
  );
}
