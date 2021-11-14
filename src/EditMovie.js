import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';

export function EditMovie({ movies, setMovies }) {
  const { id } = useParams();
  //const history = useHistory();
  const movie = movies[id];
  console.log(id,movie);
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const editMovie = () => {
    
    const updatedMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    }; //shorthand
    //setMovies([...movies, updatedMovie]);
    //edit the updatedmovie in the movielist(copy)
    const copyMovieList = [...movies];
    copyMovieList[id]=updatedMovie;
    setMovies(copyMovieList);
   // history.push("/movies");
  };
  return (

    <div className="add-movie-form">
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="standard" />

      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        label="poster"
        variant="standard" />

      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        label="rating"
        variant="standard" />

      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        label="summary"
        variant="standard" />
      <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        label="trailer"
        variant="standard" />

      <Button onClick={editMovie} variant="outlined">SaveMovie</Button>
    </div>
  );
}
