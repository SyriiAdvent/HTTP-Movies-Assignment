import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const form = {
  title: "",
  director: "",
  metascore: '',
  stars: [],
}

const MovieForm = ({ movies, movieWasEdited }) => {
  const { push } = useHistory();
  const { id } = useParams();
  const [initValue, setInitValue] = useState(form);

  console.log('form values', initValue)
  useEffect(() => {
    const item = movies.find( ele => `${ele.id}` === id)
    if(item) {
      console.log(`item`, item)
      setInitValue(item)
    }
  }, [movies, id])

  const handleChange = e => {
    setInitValue({
      ...initValue,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    axios
      .put(`http://localhost:5000/api/movies/${id}`, initValue)
      .then(res => {
        console.log(res)
        movieWasEdited()
      })
      .catch(err => console.log(err))
      push('/')
  }

  return (
  <div className='form-container'>
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>Movie title
        <input name='title' type='text' value={initValue.title} onChange={handleChange} />
      </label>
      <label htmlFor='director'>Director
        <input name='director' type='text' value={initValue.director} onChange={handleChange} />
      </label>
      <label htmlFor='metascore'>Metascore
        <input name='metascore' type='number' value={initValue.metascore} onChange={handleChange} />
      </label>
      <label htmlFor='stars'>Actors
        <input name='stars' value={initValue.starsInput} onChange={handleChange} />
      </label>
      <button>Send</button>
    </form>
  </div>
  );
};

export default MovieForm;
