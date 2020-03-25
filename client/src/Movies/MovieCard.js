import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

const MovieCard = props => {
  const [detailedCard, setDetailedCard] = useState(false)
  const { title, director, metascore, stars, id } = props.movie;
  const match = useRouteMatch(`/movies/:id`)
  const history = useHistory()

  const detailCardHandler = () => {
    const card = `/movies/${id}`
    if(card === history.location.pathname) {
      setDetailedCard(true)
    } else {
      setDetailedCard(false)
    }
  }

  // console.log(history)

  useEffect(() => {
    detailCardHandler()
  }, [])


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
      {detailedCard ? <button className="edit-button" onClick={() => history.push(`/update-movie/${id}`)}>Edit</button> : null}
    </div>
  );
};

export default MovieCard;
