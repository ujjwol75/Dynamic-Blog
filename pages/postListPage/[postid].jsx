import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import PostList from '../../src/common/components/DetailPage/PostList';
import Layout from '../../src/common/components/Layout/Layout';
import APIS from '../../src/common/constants/EndPoints';
import useGetHook from '../../src/common/customHooks/useGetHook';

const Detail = () => {
  const router = useRouter();
  const { postid } = router.query;

  const { isLoading, data: navigationListData } = useGetHook({
    queryKey: 'navigationListData',
    url: APIS.navigation,
  });

  const { data: postData } = useGetHook({
    queryKey: 'postData',
    url: APIS.posts,
    parma: 'params',
  });

  const {
    isLoading: singlePageLoader,
    data: singlePageData,
    isError,
  } = useGetHook({
    queryKey: `singlePageData${postid}`,
    url: `${APIS.posts}?categories=${postid}`,
  });

  const relatedPost = singlePageData?.results?.map(
    (item) => item.related_posts
  );

  return (
    <Layout>
      <Head>
        <title>Inside Crypto-Research</title>
        <meta property="og:title" content={"Inside Crypto-Research"} />
        <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
        <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta name="twitter:title" content={"Inside Crypto-Research"} />
        <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property="fb:app_id" content={"1144829116095615"} />
      </Head>
      <PostList
        postData={postData}
        singlePageLoader={singlePageLoader}
        singlePageData={singlePageData}
        relatedPost={relatedPost}
        navigationListData={navigationListData}
      />
    </Layout>
  );
};

export default Detail;
