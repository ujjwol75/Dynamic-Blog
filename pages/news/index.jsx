import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../../src/common/components/Layout/Layout';
import News from '../../src/common/components/News';
import APIS from '../../src/common/constants/EndPoints';
import useGetHook from '../../src/common/customHooks/useGetHook';
import { getApiData } from '../../src/common/helpers/AxiosInstance';

const Index = (props) => {

  const {
    //  allScribbedPosts
    postData
  } = props

  // const { isLoading: postListLoading, data: postData } = useGetHook({
  //   queryKey: 'postData',
  //   url: APIS.posts,
  //   parma: 'params',
  // });

  const [page, setPage] = useState(1);

  const { data: allScribbedPosts } = useGetHook({
    queryKey: `filterDataWithPagination${page}`,
    url: `${APIS.scrappedPost}?page=${page}`,
    parma: 'params',
  });

  return (
    <>
      <Layout>
        <Head>
          <title>Inside Crypto-News</title>
          <meta property="og:title" content={" Inside Crypto-News"} />
          <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
          <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
          <meta name="twitter:title" content={" Inside Crypto-News"} />
          <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
          <meta property="og:type" content="article" />
          {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
          <meta property="fb:app_id" content={"1144829116095615"} />
        </Head>
        <News
          postData={postData}
          allScribbedPosts={allScribbedPosts}
          setPage={setPage}
          page={page}
        />
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allScribbedPostResponse = await getApiData(APIS.scrappedPost)
  const postDataResponse = await getApiData(APIS.posts)

  return {
    props: {
      allScribbedPosts: allScribbedPostResponse?.data,
      postData: postDataResponse?.data
    }
  }
}
