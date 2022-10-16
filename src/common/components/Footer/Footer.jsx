import React, { useState } from 'react';
import APIS from '../../constants/EndPoints';
import usePostHook from '../../customHooks/usePostHook';
import Copyright from './Copyright';
import FooterMain from './FooterMain';
import NewsLetter from './NewsLetter';
import Social from './Social';
import { toast } from 'react-toastify';
const Footer = () => {
  //News letter email states
  const [email, setEmail] = useState('');
  // ENROLLING STUDENT TO ACADEMIC GROUP
  const {
    mutate: createMutate,
    isPostError: errorMessage,
    isPostSuccess: successMessage,
    postData: postData,
  } = usePostHook({
    queryKey: 'suscribeToNewsLetter',
  });

  const handleNewsLetterClick = async (event) => {
    event.preventDefault();

    const url = APIS.newsLetter;
    const formData = {
      email: email,
    };
    try {
      await createMutate({ url, formData });
      if (errorMessage === false) {
        toast.success('Thanks for subscription!');
      } else if (email === '') {
        toast.error('Please enter email address!');
      } else {
        toast.error('Email address is already exists!');
      }
    } catch (e) {
      console.log(e);
    }
  };

  //handle email input on change
  const handleNewsOnChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <FooterMain />
      <div>
        <div style={{ backgroundColor: '#1a1b1d', padding: '8px' }}>
          <div className='container' style={{ marginTop: '24px' }}>
            <div className='row' style={{ width: '80%', margin: 'auto' }}>
              <Social />
              <NewsLetter
                email={email}
                handleNewsOnChange={handleNewsOnChange}
                handleNewsLetterClick={handleNewsLetterClick}
              />
            </div>
          </div>
          <Copyright />
        </div>
      </div>
    </>
  );
};

export default Footer;
