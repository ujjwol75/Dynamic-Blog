import Link from 'next/link';
import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaDiscord,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaTelegram,
} from 'react-icons/fa';

const Social = () => {
  return (
    <div
      className='col social'
      style={{display: 'flex', alignItems: 'center'}}
    >
      <h3
        style={{
          color: '#798b95',
          fontSize: '12px',
          textTransform: 'uppercase',
        }}
      >
        Follow Us
      </h3>
      <div>
        <ul
          className='d-flex'
          style={{listStyle: 'none', textDecoration: 'none'}}
        >
          <a href='https://twitter.com/nugenesisou' target="_blank" rel="noopener noreferrer" style={
            {textDecoration:"none", color:"white"}}>
            <li
              style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#4a575d',
                borderRadius: '50%',
                marginRight: '4px',
                padding: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FaTwitter/>
            </li>
          </a>
          <a href='https://au.linkedin.com/company/nugenesis' target="_blank" rel="noopener noreferrer" style={
            {textDecoration:"none", color:"white"}
          }>
            <li
              style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#4a575d',
                borderRadius: '50%',
                marginRight: '4px',
                padding: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FaLinkedinIn/>
            </li>
          </a>
          <a href='https://www.facebook.com/nutechcity' target="_blank" rel="noopener noreferrer" style={
            {textDecoration:"none", color:"white"}}>
            <li
              style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#4a575d',
                borderRadius: '50%',
                marginRight: '4px',
                padding: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FaFacebookF/>
            </li>
          </a>
          <a href='https://www.youtube.com/channel/UCUcwdvfmOUB9axXVaKKW4lA' target="_blank" rel="noopener noreferrer" style={
            {textDecoration:"none", color:"white"}}>
            <li
              style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#4a575d',
                borderRadius: '50%',
                marginRight: '4px',
                padding: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FaYoutube/>
            </li>
          </a>

          <a href='https://www.instagram.com/nugenesis.ou/' target="_blank" rel="noopener noreferrer" style={
            {textDecoration:"none", color:"white"}}>
            <li
              style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#4a575d',
                borderRadius: '50%',
                marginRight: '4px',
                padding: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FaInstagram/>
            </li>
          </a>
          <a href='https://discord.com/channels/941427836865110086/945205148270100501' target="_blank" rel="noopener noreferrer" style={
            {textDecoration:"none", color:"white"}}>
            <li
              style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#4a575d',
                borderRadius: '50%',
                marginRight: '4px',
                padding: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FaDiscord/>
            </li>
          </a>
          <a href='https://www.tiktok.com/@nugenesis.ou' target="_blank" rel="noopener noreferrer" style={
            {textDecoration:"none", color:"white"}}>
            <li
              style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#4a575d',
                borderRadius: '50%',
                marginRight: '4px',
                padding: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FaTiktok/>
            </li>
          </a>
          <a href='https://t.me/cryptomediahub' target="_blank" rel="noopener noreferrer" style={
            {textDecoration:"none", color:"white"}}>
            <li
              style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#4a575d',
                borderRadius: '50%',
                marginRight: '4px',
                padding: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FaTelegram/>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Social;
