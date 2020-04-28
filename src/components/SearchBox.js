import React from 'react';

console.log('SearchBox');
const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        aria-label='Search Robots'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search roborts'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
