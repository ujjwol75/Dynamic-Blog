import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { BsChevronDown } from 'react-icons/bs';
import axios from 'axios';


const index = () => {
  const [headerData, setHeaderData] = useState()
  const [nuCoinData, setNuCoinData] = useState()

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,BNB,SOL,XRP,DOGE&tsyms=USD`;

  const getHeaderData = async () => {
    await axios.get(url)
      .then((response) => {
        const data = response.data;
        setHeaderData(data)
      })
  }

  useEffect(() => {
    getHeaderData();
  }, []);

  //For Nu-coin
  const nuCoinUrl = `https://insidecrypto.news/api/nu-coin/`;

  const getNuCoinData = async () => {
    await axios.get(nuCoinUrl)
      .then((response) => {
        const data = response.data;
        setNuCoinData(data)
      })
  }

  useEffect(() => {
    getNuCoinData();
  }, []);

  return (
    <Container className='mobileNab'>
      <div className='d-flex justify-content-start'>
        <div
          className='d-flex justify-content-between'
          style={{ marginRight: '10px' }}
        >
          <span>$</span>
          <span className=''>
            <BsChevronDown />
          </span>
        </div>
        <div
          className='d-flex justify-content-start mobileNavScroll'
          style={{
            width: '600px',
            overflow: 'scroll',
            height: 'auto',
            overflowY: 'hidden',
            fontSize: '13px',
          }}
        >
          <div style={{ margin: '0 10px', borderRight: '1px solid #E9E9E9' }}>
            <span className='mx-1 font-weight-light'>BTC</span>
            {headerData?.RAW?.BTC?.USD?.PRICE >= 0 ?
              <span className='text-success mx-2'>{parseFloat(headerData?.RAW?.BTC?.USD?.PRICE).toFixed(2)}</span>
              :
              <span className='text-danger mx-2'>{parseFloat(headerData?.RAW?.BTC?.USD?.PRICE).toFixed(2)}</span>
            }
          </div>

          <div style={{ margin: '0 10px', borderRight: '1px solid #E9E9E9' }}>
            <span className='mx-1'>ETH</span>
            {headerData?.RAW?.ETH?.USD?.PRICE >= 0 ?
              <span className='text-success mx-2'>{parseFloat(headerData?.RAW?.ETH?.USD?.PRICE).toFixed(2)}</span>
              :
              <span className='text-danger mx-2'>{parseFloat(headerData?.RAW?.ETH?.USD?.PRICE).toFixed(2)}</span>
            }
          </div>
          <div style={{ margin: '0 10px', borderRight: '1px solid #E9E9E9' }}>
            <span className='mx-1'>BNB</span>
            {headerData?.RAW?.BNB?.USD?.PRICE >= 0 ?
              <span className='text-success mx-2'>{parseFloat(headerData?.RAW?.BNB?.USD?.PRICE).toFixed(2)}</span>
              :
              <span className='text-danger mx-2'>{parseFloat(headerData?.RAW?.BNB?.USD?.PRICE).toFixed(2)}</span>
            }
          </div>
          <div style={{ margin: '0 10px', borderRight: '1px solid #E9E9E9' }}>
            <span className='mx-1'>XRP</span>
            {headerData?.RAW?.XRP?.USD?.PRICE >= 0 ?
              <span className='text-success mx-2'>{parseFloat(headerData?.RAW?.XRP?.USD?.PRICE).toFixed(2)}</span>
              :
              <span className='text-danger mx-2'>{parseFloat(headerData?.RAW?.XRP?.USD?.PRICE).toFixed(2)}</span>
            }
          </div>
          <div style={{ margin: '0 10px', borderRight: '1px solid #E9E9E9' }}>
            <span className='mx-1'>SOL</span>
            {headerData?.RAW?.SOL?.USD?.PRICE >= 0 ?
              <span className='text-success mx-2'>{parseFloat(headerData?.RAW?.SOL?.USD?.PRICE).toFixed(2)}</span>
              :
              <span className='text-danger mx-2'>{parseFloat(headerData?.RAW?.SOL?.USD?.PRICE).toFixed(2)}</span>
            }
          </div>
          <div style={{ margin: '0 10px', borderRight: '1px solid #E9E9E9' }}>
            <span className='mx-1'>DOGE</span>
            {headerData?.RAW?.ETH?.DOGE?.PRICE >= 0 ?
              <span className='text-success mx-2'>{parseFloat(headerData?.RAW?.DOGE?.USD?.PRICE).toFixed(2)}</span>
              :
              <span className='text-danger mx-2'>{parseFloat(headerData?.RAW?.DOGE?.USD?.PRICE).toFixed(2)}</span>
            }
          </div>
          {nuCoinData?.results?.map((item, index) => (
            <div key={index} style={{ margin: '0 10px', borderRight: '1px solid #E9E9E9' }}>
              <span className='mx-1'>{item?.name}</span>
              {parseFloat(item?.price_change) >= 0 ?
                <span className='text-success mx-2'>{parseFloat(item?.price_rate).toFixed(2)}</span>
                :
                <span className='text-danger mx-2'>{parseFloat(item?.price_rate).toFixed(2)}</span>
              }
            </div>
          ))}

        </div>
      </div>
    </Container>
  );
}

export default index