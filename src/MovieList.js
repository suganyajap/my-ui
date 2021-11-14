import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";

export function MovieList({ movies,setMovies }) {
  const history=useHistory();
  return (
    <section className="movie-list">
      {movies.map(({ name, rating, summary, poster },index) => (
        <Movie 
        name={name}
         poster={poster} 
         rating={rating} 
         summary={summary} 
         id={index}
        deleteButton={<IconButton 
          className="movie-show-button" 
          onClick={() => {
            console.log("deleting...",index);
            const deleteIdx=index;
            const remainingMovies=movies.filter((mv,idx)=>idx!==deleteIdx);
            console.log("remaining...",remainingMovies);
            setMovies(remainingMovies);
          }}
          color="error" 
          aria-label="delete movie" >
            <DeleteIcon />
          </IconButton>}
        editButton={<IconButton 
          style={{marginLeft:"auto"}}
          className="movie-show-button" 
          onClick={() => history.push("/movies/edit/:id")}
          color="primary" 
          aria-label="movie edit" >
            <EditIcon />
          </IconButton>}
        />))}
    </section>
  );
}
