import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../../src/common/components/Layout/Layout';
import NFTComponent from '../../src/common/components/NFT';
import APIS from '../../src/common/constants/EndPoints';
import useGetHook from '../../src/common/customHooks/useGetHook';
const Nft = () => {
  const { data: postData } = useGetHook({
    queryKey: 'postData',
    url: APIS.posts,
    parma: 'params',
  });

  const nftUrl = 'https://economictimes.indiatimes.com/topic/nft/news';

  const [page, setPage] = useState(1)
  const { isLoading: allScribbedPostsLoading, data: allScribbedPosts } =
    useGetHook({
      queryKey: `${APIS.scrappedPost}${page}`,
      url: `${APIS.scrappedPost}?page=${page}&source=${nftUrl}`,
      parma: 'params',
    });


  return (
    <>
      <Layout>
        <Head>
          <title>Inside Crypto-NFT News</title>
          <meta property="og:title" content={" Inside Crypto-NFT News"} />
          <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
          <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
          <meta name="twitter:title" content={" Inside Crypto-NFT News"} />
          <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
          <meta property="og:type" content="article" />
          {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
          <meta property="fb:app_id" content={"1144829116095615"} />
        </Head>
        <NFTComponent
          postData={postData}
          allScribbedPosts={allScribbedPosts}
          allScribbedPostsLoading={allScribbedPostsLoading}
          page={page}
          setPage={setPage}
        />
      </Layout>
    </>
  );
};

export default Nft;
