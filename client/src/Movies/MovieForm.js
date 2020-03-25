import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const form = {
  title: "",
  director: "",
  metascore: '',
  stars: [],
  starsInput: '',
}

const MovieForm = () => {
  const { push } = useHistory();
  const { id } = useParams();
  const [initValue, setInitValue] = useState(form);

  return (
  <div className='form-container'>
    <form>
      <label htmlfor='title'>Movie title
        <input name='title' value={form.title} />
      </label>
      <label htmlfor='director'>Director
        <input name='director' value={form.director} />
      </label>
      <label htmlfor='metascore'>Metascore
        <input name='metascore' value={form.metascore} />
      </label>
      <label htmlfor='stars'>Actors
        <input name='stars' value={form.starsInput} />
      </label>
    </form>
  </div>
  );
};

export default MovieForm;
