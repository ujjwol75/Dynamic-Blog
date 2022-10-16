import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from '../src/common/components/Home';
import APIS from '../src/common/constants/EndPoints';
import useGetHook from '../src/common/customHooks/useGetHook';
import { getApiData } from '../src/common/helpers/AxiosInstance';
import Layout from '../src/common/components/Layout/Layout';
import Head from 'next/head';

export default function Home(props) {
  //get 99 bitcoin list
  const { data: scribedPostListData } =
    useGetHook({
      queryKey: 'scrappedPostData',
      url: APIS.scrappedPostFilter,
    });

  return (
    <div>
      <Layout>
        <Head>
          <title>Inside Crypto - Home</title>
          <meta property="og:title" content={"Inside Crypto"} />
          <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
          <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
          <meta name="twitter:title" content={"Inside Crypto"} />
          <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
          <meta property="og:type" content="article" />
          <meta property="fb:app_id" content={"1144829116095615"} />
        </Head>
        <HomeComponent
          postData={props?.posts}
          navigationListData={props?.navigation}
          scribedPostListData={scribedPostListData}
          scribedPostCoinList={props?.scribedPostCoins}
          scribedPostCoinBitCoinList={props?.scribedPostCoinBitCoins}
          bannerImageData={props?.bannerImage}
        />
      </Layout>
    </div>
  );
}


export async function getServerSideProps({ params }) {
  const navitaionResponse = await getApiData(APIS.navigation)
  const scribedPostsResponse = await getApiData(APIS.scrappedPostFilter)
  const scribedPostCoinsResponse = await getApiData(APIS.scrappedPostCoinFilter)
  const scribedPostCoinBitCoinResponse = await getApiData(APIS.scrappedPostBitcoinFilter)
  const postsResponse = await getApiData(APIS.posts)
  const bannerImageResponse = await getApiData(APIS.bannerImage)

  return {
    props: {
      navigation: navitaionResponse?.data,
      scribedPosts: scribedPostsResponse?.data,
      scribedPostCoins: scribedPostCoinsResponse?.data,
      scribedPostCoinBitCoins: scribedPostCoinBitCoinResponse?.data,
      posts: postsResponse?.data,
      bannerImage: bannerImageResponse?.data,
    }
  }
}