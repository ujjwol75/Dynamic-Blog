import React from 'react'

const NewsLetter = (props) => {
  const { email, handleNewsOnChange, handleNewsLetterClick } = props;
  return (
    <div className='col'>
      <h3
        className='text-uppercase newsLetterContent'
        style={{ color: '#798b95', fontSize: '12px' }}
      >
        INSIDECRYPTO NEWSlETTER
      </h3>
      <form>
        <div
          style={{
            width: '100%',
            display: 'flex',
            color: '#afbdc4',
            backgroundColor: '#253136',
            padding: '0 2px',
            borderRadius: '5px',
            justifyContent: 'space-evenly',
          }}
          className='newLetterForm'
        >
          <input
            type='email'
            placeholder='Email'
            style={{
              width: '100%',
              boxShadow: 'none',
              backgroundColor: 'transparent',
              border: 'none',
              padding: '10px',
              outline: 'none',
              color: 'white',
            }}
            value={email}
            onChange={handleNewsOnChange}
          />
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
              borderRadius: '0 5px 5px 0',
            }}
            onClick={(event) => handleNewsLetterClick(event)}
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter