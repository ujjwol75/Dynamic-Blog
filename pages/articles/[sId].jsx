import Head from 'next/head';
import React from 'react';
import ScrappedDetails from '../../src/common/components/DetailPage/ScrappedDetails';
import Layout from '../../src/common/components/Layout/Layout';
import APIS from '../../src/common/constants/EndPoints';
import { getApiData } from '../../src/common/helpers/AxiosInstance';

const Detail = (props) => {

  return (
    <>
      <Layout>
        <Head>
          <title>{props?.pageScrapped?.title}</title>
          <meta property="og:title" content={props?.pageScrapped?.title} />
          <meta property="og:image" content={props?.pageScrapped?.preview_image} />
          <meta property="og:description" content={props?.pageScrapped?.description} />
          <meta name="twitter:title" content={props?.pageScrapped?.title} />
          <meta name="twitter:description" content={props?.pageScrapped?.description} />
          <meta property="og:type" content="article" />
          {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
          <meta property="fb:app_id" content={"1144829116095615"} />
        </Head>
        <ScrappedDetails
          singlePageScrappedData={props?.pageScrapped}
          postData={props?.posts}
        />
      </Layout>
    </>
  );
};

export default Detail;

export async function getServerSideProps({ params }) {
  const pageScrappedResponse = await getApiData(`${APIS.scrappedPost}${params?.sId}`)
  const postsResponse = await getApiData(APIS.posts)

  return {
    props: {
      pageScrapped: pageScrappedResponse?.data,
      posts: postsResponse?.data
    }
  }
}
