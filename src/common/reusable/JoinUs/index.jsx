import Link from 'next/link';
import React from 'react';

const index = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        color: '#afbdc4',
        padding: '0 2px',
        borderRadius: '5px',
        justifyContent: 'center',
        maxWidth: '100%',
      }}
    >
      <input
        type='text'
        disabled={true}
        className='joinusButton'
        placeholder='Are you a journalist or an editor?'
        style={{
          boxShadow: 'none',
          border: 'none',
          padding: '15px',
          outline: 'none',
          borderRadius: '50px 0 0 50px',
          backgroundColor: '#1A1B1D',
          fontSize: '18px',
          width: '40%',
        }}
      />
      <Link href='/postArticle'>
        <button
          href='#'
          style={{
            backgroundColor: '#00FFE2',
            boxSizing: 'border-box',
            color: '#1a1b1d',
            textAlign: 'center',
            textDecoration: 'none',
            transition: '.25s ease-out',
            padding: '4px',
            minWidth: '110px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: ' 0 50px 50px 0 ',
          }}
          // onClick={() => <Link href='/journalist'></Link>}
        >
          Join Us
        </button>
      </Link>
    </div>
  );
};

export default index;
