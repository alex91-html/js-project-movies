import './Card.css';
import { Link } from 'react-router'


const Card = ({ movie }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` }} aria-label={movie.title ? `Poster for ${movie.title}` : "Movie poster"}>
      <Link to={`/movies/${movie.id}`} className="card-link" aria-label={movie.title ? `View details for ${movie.title}` : "View movie details"}>
        <div className="card-overlay">
          <h2>{movie.title}</h2>
          <p> Released date: {movie.release_date} </p>
        </div>
      </Link >
    </div>
  );

}

export default Card;
