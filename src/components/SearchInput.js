import React from 'react';

const searchInput = (props) => {
  return (
    <div>
      <input
        placeholder={props.placeholder}
        type='text'
        // onChange={props.changed}
        // value={props.value}
        // className={isError}
        // {...props}
      />
    </div>
  )
};

export default searchInput;