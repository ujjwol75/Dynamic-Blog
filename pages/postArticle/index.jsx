import Head from 'next/head';
import React from 'react';
import Journalist from '../../src/common/components/Journalist';
import Layout from '../../src/common/components/Layout/Layout';

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Inside Crypto - Post Article</title>
          <meta property="og:title" content={" Inside Crypto - Post Article"} />
          <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
          <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
          <meta name="twitter:title" content={" Inside Crypto - Post Article"} />
          <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
          <meta property="og:type" content="article" />
          {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
          <meta property="fb:app_id" content={"1144829116095615"} />
        </Head>
        <Journalist />
      </Layout>
    </>
  );
};

export default Index;
