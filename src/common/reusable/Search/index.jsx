import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
const index = (props) => {
    const { handleCloseIcon, keyword, searchHandler, handleKeyPress } = props;
  return (
    <div className='mobileSearch'>
      <span>
        <BiSearch className='mobileSearchIcon' />
      </span>
      <form onSubmit={handleKeyPress} style={{width: '100%'}}>
        <input
          type='text'
          placeholder='Search'
          value={keyword}
          onChange={searchHandler}
        />
      </form>
      <span>
        <AiOutlineClose onClick={handleCloseIcon} className='mobileCloseIcon' />
      </span>
    </div>
  );
}

export default index