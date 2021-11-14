//import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
//import { KeyboardBackspaceIcon } from '@mui/icons-material/KeyboardBackspace';
//import Button from '@mui/material/Button';

export function MovieDetails({ movies }) {
  //const history=useHistory();
  const { id } = useParams();
  const movie = movies[id];
  console.log(id,movie);
  const styles = { color: movie.rating < 7 ? "crimson" : "green", fontWeight: "bold", };

  return (
    <div>
      <iframe
        width="100%"
        height="800"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
     </iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="rating" style={styles}>⭐{movie.rating}</p>
        </div>
        <p className="summary">{movie.summary}</p>
       {/*<Button onClick={()=> history.goBack()} variant="outlined" startIcon={<KeyboardBackspaceIcon />}>Back</Button>*/}
      </div>
    </div>
  );
}
