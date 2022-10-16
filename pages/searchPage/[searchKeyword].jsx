import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../src/common/components/Layout/Layout';
import SearchList from '../../src/common/components/Search';
import APIS from '../../src/common/constants/EndPoints';
import { getApiData } from '../../src/common/helpers/AxiosInstance';

const Detail = (props) => {
  const router = useRouter();
  const { searchKeyword } = router.query;


  const relatedPost = props?.searchedData?.results?.map(
    (item) => item.related_posts
  );

  return (
    <Layout>
      <Head>
        <title> Inside Crypto-Search</title>
        <meta property="og:title" content={" Inside Crypto-Search"} />
        <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
        <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta name="twitter:title" content={" Inside Crypto-Search"} />
        <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property="fb:app_id" content={"1144829116095615"} />
      </Head>
      <SearchList
        postData={props?.posts}
        searchPageData={props?.searchedData}
        relatedPost={relatedPost}
        // searchListLoader={searchListLoader}
        searchKeyword={searchKeyword}
      />
    </Layout>
  );
};

export default Detail;

export async function getServerSideProps({ params }) {
  const searchResponse = await getApiData(`${APIS.posts}?search=${params?.searchKeyword}`)
  const postsResponse = await getApiData(APIS.posts)

  return {
    props: {
      searchedData: searchResponse?.data,
      posts: postsResponse?.data
    }
  }
}