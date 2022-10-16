import React from 'react'

const FooterList = (props) => {
  return (
    <div className='container footer'>
      <div className='row'>
        <div className='col'>
          <h5
            className='text-uppercase text-muted text-muted'
            style={{ fontSize: '16px' }}
          >
            News
          </h5>
          <ul className='list-unstyled text-white' style={{ fontSize: '14px' }}>
            <li style={{ padding: '4px' }}>Bitcoin</li>
            <li style={{ padding: '4px' }}>Blockchain</li>
            <li style={{ padding: '4px' }}>Ethereum</li>
            <li style={{ padding: '4px' }}>Altcoin</li>
            <li style={{ padding: '4px' }}>Business</li>
            <li style={{ padding: '4px' }}>Policy & Regulations</li>
            <li style={{ padding: '4px' }}>NFTs</li>
            <li style={{ padding: '4px' }}>DeFi</li>
            <li style={{ padding: '4px' }}>Adoption</li>
          </ul>
        </div>
        <div className='col'>
          <h5
            className='text-uppercase text-muted'
            style={{ fontSize: '16px' }}
          >
            Features
          </h5>

          <ul className='list-unstyled text-white' style={{ fontSize: '14px' }}>
            <li style={{ padding: '4px' }}>Top 100 2020</li>
            <li style={{ padding: '4px' }}>Holder's Digest</li>
            <li style={{ padding: '4px' }}>Magazine</li>
            <li style={{ padding: '4px' }}>Analysis</li>
            <li style={{ padding: '4px' }}>Opinion</li>
            <li style={{ padding: '4px' }}>Expert Take</li>
            <li style={{ padding: '4px' }}>Top 10 cryptocurrencies</li>
            <li style={{ padding: '4px' }}>Market Analysis</li>
            <li style={{ padding: '4px' }}>Interview</li>
            <li style={{ padding: '4px' }}>Usecase</li>
            <li style={{ padding: '4px' }}>Inovation Circle</li>
          </ul>
        </div>
        <div className='col'>
          <h5
            className='text-uppercase text-muted'
            style={{ fontSize: '16px' }}
          >
            Market Tools
          </h5>

          <ul className='list-unstyled text-white' style={{ fontSize: '14px' }}>
            <li style={{ padding: '4px' }}>Explained</li>
            <li style={{ padding: '4px' }}>How to Crypto</li>
            <li style={{ padding: '4px' }}>Store</li>
            <li style={{ padding: '4px' }}>Events</li>
          </ul>
        </div>
        <div className='col'>
          <h5
            className='text-uppercase text-muted'
            style={{ fontSize: '16px' }}
          >
            CRYPTOPEDIA
          </h5>

          <ul className='list-unstyled text-white' style={{ fontSize: '14px' }}>
            <li style={{ padding: '4px' }}>Altcoin101</li>
            <li style={{ padding: '4px' }}>Def1101</li>
            <li style={{ padding: '4px' }}>NFT</li>
            <li style={{ padding: '4px' }}>DAOs</li>
          </ul>
        </div>
        <div className='col'>
          <h5
            className='text-uppercase text-muted'
            style={{ fontSize: '16px' }}
          >
            INDUSTRY
          </h5>

          <ul className='list-unstyled text-white' style={{ fontSize: '14px' }}>
            <li style={{ padding: '4px' }}>Research</li>
            <li style={{ padding: '4px' }}>DApplist</li>
            <li style={{ padding: '4px' }}>Crypto Jobs </li>
            <li style={{ padding: '4px' }}>Trading101</li>
            <li style={{ padding: '4px' }}>Bitcointcoin</li>
          </ul>
        </div>
        <div className='col'>
          <h5
            className='text-uppercase text-muted'
            style={{ fontSize: '16px' }}
          >
            ABOUT US
          </h5>

          <ul className='list-unstyled text-white' style={{ fontSize: '14px' }}>
            <li style={{ padding: '4px' }}>Franchise</li>
            <li style={{ padding: '4px' }}>Advertise</li>
            <li style={{ padding: '4px' }}>About</li>
            <li style={{ padding: '4px' }}>Widgets</li>
            <li style={{ padding: '4px' }}>Careers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterList