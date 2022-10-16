import Head from 'next/head';
import React from 'react';
import DetailPage from '../../src/common/components/DetailPage';
import Layout from '../../src/common/components/Layout/Layout';
import APIS from '../../src/common/constants/EndPoints';
import { getApiData } from '../../src/common/helpers/AxiosInstance';

const Detail = (props) => {


  return (
    <>
      <Layout>
        <Head>
          <title>{props?.singlePost?.title}</title>
          <meta property="og:title" content={props?.singlePost?.title} />
          <meta property="og:description" content={props?.singlePost?.description} />
          <meta property="og:image" content={props?.singlePost?.image} />
          <meta name="twitter:title" content={props?.singlePost?.title} />
          <meta name="twitter:description" content={props?.singlePost?.description} />
          <meta property="og:type" content="article" />
          {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
          <meta property="fb:app_id" content={"1144829116095615"} />
        </Head>
        <DetailPage
          singlePageData={props?.singlePost}
          postData={props?.posts}
        />
      </Layout>
    </>
  );
};



export default Detail;


export async function getServerSideProps({ params }) {
  const singlePostResponse = await getApiData(`${APIS.posts}${params.blogId}/`)
  const postsResponse = await getApiData(APIS.posts)

  return {
    props: {
      singlePost: singlePostResponse?.data,
      posts: postsResponse?.data
    }
  }
}