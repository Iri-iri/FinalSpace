import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <section className='search'>
      <form>
        <input
          type='number'
          min='1'
          max='40'
          className='form-control'
          placeholder='Enter the number of characters (from 1 to 40)'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
