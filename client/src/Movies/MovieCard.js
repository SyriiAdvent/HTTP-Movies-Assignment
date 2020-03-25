import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import MovieList from './MovieList';

const MovieCard = props => {
  const { id, title, director, metascore, stars } = props.movie;
  const history = useHistory();
  const [editMode, setEditMode] = useState(false)
  const [editMovie, setEditMovie] = useState({
    ...props.movie
  })

  const handleChanges = e => {
    setEditMovie({
      ...editMovie,
      [e.target.name]: e.target.value
    })
  }

  const updatedMovie = e => {
    e.preventDefault()
    axios
      .put(`http://localhost:5000/api/movies/${id}`, editMovie)
      .then(res => {
        setEditMode(false)
        console.log(res.data)
        props.getMovieList()
        history.push('/')
      })
      .catch(err => console.log(err.response));
  }

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      <div className='edit-button' onClick={() => setEditMode(true)}>Edit</div>

      {editMode ?
      <form onSubmit={updatedMovie}>
        <input name="title" value={editMovie.title} onChange={handleChanges} />
        <button>Submit</button>
      </form> : null}

    </div>
  );
};

export default MovieCard;
