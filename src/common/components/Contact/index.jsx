import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import { Container } from 'react-bootstrap';
import LayoutCard from '../../reusable/LayoutCard';
import { GoLocation, GoGlobe } from 'react-icons/go';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';

const index = (props) => {
  const { handleContactFormSubmit, navigationListData } = props;
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    const data = {
      full_name: fullName,
      email: email,
      phone_number: phoneNumber,
      message: message,
    };
    handleContactFormSubmit(data);
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
  };

  return (
    <>
      <div className='position-relative'>
        <div className='container my-4 '>
          <div className='row'>
            <div className='col-xl-8 .col-sm-12'>
              <LayoutCard>
                <Container>
                  <div style={{ maxWidth: '600px', margin: 'auto' }}>
                    <div className='contactUsMain'>
                      <h2 className='text-left' style={{ paddingLeft: '20px' }}>
                        Get in Touch
                      </h2>
                      <form onSubmit={handleForm}>
                        <div className='contact-form'>
                          <input
                            type='text'
                            placeholder='Full Name'
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                          />
                        </div>
                        <div className='contact-form'>
                          <input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className='contact-form'>
                          <input
                            type='phone'
                            placeholder=' Phone Number'
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                          />
                        </div>
                        <div className='contact-form'>
                          <textarea
                            id='w3review'
                            name='w3review'
                            rows='4'
                            cols='50'
                            placeholder='Message...'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                          ></textarea>
                        </div>
                        <div className='contact-form-btn'>
                          <button className='btn btn-primary' type='submit' style={{backgroundColor:'#00FFE2', borderColor:'#00FFE2'}}>
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Container>
              </LayoutCard>
            </div>
            <div className='col col-lg-4 .col-sm-12'>
              <LayoutCard>
                <h3>Contact us</h3>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                  }}
                >
                  <div className='mainInfoContact'>
                    <span>
                      <GoLocation style={{ width: '20px', height: '20px' }} />
                    </span>
                    <div className='contactDetils'>
                      <span>Address</span>
                      <a href='' target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:'black'}}>
                        632 Forest Rd Bexley, Sydney, NSW, Australia 2216 – HQ{' '}
                      </a>
                    </div>
                  </div>
                  <div className='mainInfoContact'>
                    <span>
                      <AiOutlinePhone
                        style={{ width: '20px', height: '20px' }}
                      />
                    </span>
                    <div className='contactDetils'>
                      <span>Phone</span>
                      <span>+61 434 315 315</span>
                    </div>
                  </div>
                  <div className='mainInfoContact'>
                    <span>
                      <AiOutlineMail
                        style={{ width: '20px', height: '20px' }}
                      />
                    </span>
                    <div className='contactDetils'>
                      <span>Email</span>
                      <a href='mailto:admin@insidecrypto.news' target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:'black'}}>admin@insidecrypto.news</a>
                    </div>
                  </div>
                  <div className='mainInfoContact'>
                    <span>
                      <GoGlobe style={{ width: '20px', height: '20px' }} />
                    </span>
                    <div className='contactDetils'>
                      <span>Websites:</span>
                      <a href='https://nugenesisou.com/' target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:'black'}}>NuGenesis</a>
                      <a href='https://nucoin.com.au/' target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:'black'}}>NuCoin </a>
                      <a href='https://www.ledgerx.exchange/' target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:'black'}}>
                        LedgerX Dex
                      </a>
                      <a href='https://explorer.nucoin.com.au/' target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:'black'}}>
                        NUCoin Explorer
                      </a>
                      <a href='https://nftcity.exchange/' target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:'black'}}>NFT City</a>
                    </div>
                  </div>
                </div>
              </LayoutCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
