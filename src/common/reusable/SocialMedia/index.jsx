import Link from 'next/link';
import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
  FaMailBulk,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa';
import {RiWhatsappFill} from 'react-icons/ri';

const index = () => {
  return (
    <div className='socialMediaIcon'>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          boxShadow: 'rgb(255 105 135 / 30%) 0px 3px 5px 2px',
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: '#F1F1F1',
        }}
      >
        <Link href='https://www.facebook.com/sharer/sharer.php?u=https%3A//insidecrypto.news/'>
          <span>
            <FaFacebook
              style={{
                width: '30px',
                height: '30px',
                cursor: 'pointer',
                color: '#4267B2',
              }}
            />
          </span>
        </Link>

        <Link href='https://twitter.com/intent/tweet?text=https%3A//insidecrypto.news/'>
          <span>
            <FaTwitter
              style={{
                width: '30px',
                height: '30px',
                cursor: 'pointer',
              }}
              color='#1DA1F2'
            />
          </span>
        </Link>
        <Link href='https://www.linkedin.com/shareArticle?mini=true&url=insidecrypto.news&title=&summary=&source='>
          <span>
            <FaLinkedinIn
              style={{
                width: '30px',
                height: '30px',
                cursor: 'pointer',
              }}
              color='#0e76a8'
            />
          </span>
        </Link>
        <Link href='https://pinterest.com/pin/create/button/?url=https://insidecrypto.news/&media=&description='>
          <span>
            <FaPinterest
              style={{
                width: '30px',
                height: '30px',
                cursor: 'pointer',
              }}
              color='#E60023'
            />
          </span>
        </Link>
        <Link href='mailto:info@example.com?&subject=&cc=&bcc=&body=https://insidecrypto.news/%0A'>
          <span>
            <FaMailBulk
              style={{
                width: '30px',
                height: '30px',
                cursor: 'pointer',
              }}
              color='#c71610'
            />
          </span>
        </Link>
        <Link href='https://t.me/cryptomediahub'>
          <span>
            <FaTelegram
              style={{
                width: '30px',
                height: '30px',
                cursor: 'pointer',
              }}
              color='#0088cc'
            />
          </span>
        </Link>
        <Link href='https://web.whatsapp.com/send?text= Please Visit https://insidecrypto.news/'>
          <span>
            <RiWhatsappFill
              style={{
                width: '30px',
                height: '30px',
                cursor: 'pointer',
              }}
              color='#25D366'
            />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default index;
