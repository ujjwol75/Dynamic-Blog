import axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Layout from '../../src/common/components/Layout/Layout';
import MarketLivePage from '../../src/common/components/MarketLivePage';

const Index = () => {
  const [limit, setLimit] = useState(10);

  const [marketListData, setMarketListData] = useState();
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${limit}&tsym=USD`;

  const getMarketListData = async () => {
    await axios
      .get(url, {
        headers: {
          authorization:
            'Apikey d9f896f0f08de8c0c908909ff30f330ff8a16a7bffd2cd00995f177b54ca6f2c',
        },
      })
      .then((response) => {
        const data = response.data;
        setMarketListData(data);
      });
  };

  useEffect(() => {
    getMarketListData();
  }, [limit]);

  return (
    <Layout>
      <Head>
        <title>Inside Crypto-Live Market</title>
        <meta property="og:title" content={" Inside Crypt-Live Market"} />
        <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
        <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta name="twitter:title" content={" Inside Crypt-Live Market"} />
        <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property="fb:app_id" content={"1144829116095615"} />
      </Head>
      <MarketLivePage setLimit={setLimit} marketListData={marketListData} />
    </Layout>
  );
};

export default Index;
