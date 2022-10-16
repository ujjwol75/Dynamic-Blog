import React, {useEffect, useState} from 'react';
import styles from '../Header/Header.module.css';
import {IoIosArrowDropdown} from 'react-icons/io';
import axios from 'axios';
import Link from "next/link";

const Header = () => {
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
    <>
      <header>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href='/'>
              <img src={'/lgmain.png'} className={styles.logoImage}></img>
            </Link>
          </div>
          <div className={styles.main}>
            <IoIosArrowDropdown className={styles.svg}/>
            <div className={styles.currency}>
              <span className={styles.text}>BTC</span>
              <span className={styles.price}>
                {headerData?.RAW?.BTC?.USD?.PRICE}
              </span>
              {headerData?.RAW?.BTC?.USD?.CHANGEDAY >= 0 ? (
                <span className={styles.perc}>
                  {parseFloat(headerData?.RAW?.BTC?.USD?.CHANGEDAY).toFixed(2)}
                </span>
              ) : (
                <span className={styles.percentage}>
                  {parseFloat(headerData?.RAW?.BTC?.USD?.CHANGEDAY).toFixed(2)}
                </span>
              )}
            </div>
            <div className={styles.boder}></div>
            <div className={styles.currency}>
              <span className={styles.text}>ETH</span>
              <span className={styles.price}>
                {headerData?.RAW?.ETH?.USD?.PRICE}
              </span>
              {headerData?.RAW?.ETH?.USD?.CHANGEDAY >= 0 ? (
                <span className={styles.perc}>
                  {parseFloat(headerData?.RAW?.ETH?.USD?.CHANGEDAY).toFixed(2)}
                </span>
              ) : (
                <span className={styles.percentage}>
                  {parseFloat(headerData?.RAW?.ETH?.USD?.CHANGEDAY).toFixed(2)}
                </span>
              )}
            </div>
            <div className={styles.boder}></div>
            <div className={styles.currency}>
              <span className={styles.text}>BNB</span>
              <span className={styles.price}>
                {headerData?.RAW?.BNB?.USD?.PRICE}
              </span>
              {headerData?.RAW?.BNB?.USD?.CHANGEDAY >= 0 ? (
                <span className={styles.perc}>
                  {parseFloat(headerData?.RAW?.BNB?.USD?.CHANGEDAY).toFixed(2)}
                </span>
              ) : (
                <span className={styles.percentage}>
                  {parseFloat(headerData?.RAW?.BNB?.USD?.CHANGEDAY).toFixed(2)}
                </span>
              )}
            </div>
            <div className={styles.boder}></div>
            {}
            <div className={styles.currency}>
              <span className={styles.text}>SOL</span>
              <span className={styles.price}>
                {headerData?.RAW?.SOL?.USD?.PRICE}
              </span>
              {headerData?.RAW?.SOL?.USD?.CHANGEDAY >= 0 ? (
                <span className={styles.perc}>
                  {parseFloat(headerData?.RAW?.SOL?.USD?.CHANGEDAY).toFixed(2)}
                </span>
              ) : (
                <span className={styles.percentage}>
                  {parseFloat(headerData?.RAW?.SOL?.USD?.CHANGEDAY).toFixed(2)}
                </span>
              )}
            </div>
            <div className={styles.boder}></div>
            <div className={styles.currency}>
              <span className={styles.text}>XRP</span>
              <span className={styles.price}>
                {headerData?.RAW?.XRP?.USD?.PRICE}
              </span>
              {headerData?.RAW?.XRP?.USD?.CHANGEDAY >= 0 ? (
                <span className={styles.perc}>
                  {parseFloat(headerData?.RAW?.XRP?.USD?.CHANGEDAY).toFixed(2)}
                </span>
              ) : (
                <span className={styles.percentage}>
                  {parseFloat(headerData?.RAW?.XRP?.USD?.CHANGEDAY).toFixed(2)}
                </span>
              )}
            </div>
            <div className={styles.boder}></div>
            <div className={styles.currency}>
              <span className={styles.text}>DOGE</span>
              <span className={styles.price}>
                {headerData?.RAW?.DOGE?.USD?.PRICE}
              </span>
              {headerData?.RAW?.DOGE?.USD?.CHANGEDAY >= 0 ? (
                <span className={styles.perc}>
                  {parseFloat(headerData?.RAW?.DOGE?.USD?.CHANGEDAY).toFixed(2)}
                </span>
              ) : (
                <span className={styles.percentage}>
                  {parseFloat(headerData?.RAW?.DOGE?.USD?.CHANGEDAY).toFixed(2)}
                </span>
              )}
            </div>
            <div className={styles.boder}></div>
            {nuCoinData?.results?.map((item, index) => (
              <div key={index} className={styles.currency}>
                <span className={styles.text}>{item?.name}</span>
                <span className={styles.price}>{item?.price_rate}</span>
                {parseFloat(item?.price_change) >= 0 ?
                  <span className={styles.perc}>{parseFloat(item?.price_change).toFixed(2)}</span>
                  :
                  <span className={styles.percentage}>{parseFloat(item?.price_change).toFixed(2)}</span>
                }
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
