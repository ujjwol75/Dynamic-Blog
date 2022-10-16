import React from 'react';
import Story from '../Home/Story';
import PressRelease from '../Home/PressRelease';
import NewsSection from '../Home/NewsSection';
import MarketNews from '../Home/MarketNews';
import AdvertiseCard from '../Home/AdvertiseCard';
import InovationCircle from '../Home/InovationCircle';
import NewsSectionPost from './NewsSection/NewsSectionPost';
import NewsSectionPostBitcoin from './NewsSection/NewsSectionPostBitcoin';
import PaginationComponent from '../Pagination/Pagination';
import BlogPagination from '../Pagination/BlogPagination';
import LayoutCard from '../../reusable/LayoutCard';
const HomeComponent = (props) => {
  const {
    postData,
    navigationListData,
    // postDataLoading,
    scribedPostListData,
    scribedPostCoinList,
    scribedPostCoinBitCoinList,
    bannerImageData,
  } = props;

  return (
    <>
      <LayoutCard>
        <Story
          postData={postData}
          // postDataLoading={postDataLoading}
          scribedPostListData={scribedPostListData}
        />
        <PressRelease
          scribedPostListData={scribedPostListData}
          postData={postData}
          // postDataLoading={postDataLoading}
        />
      </LayoutCard>
      <LayoutCard>
        <NewsSection
          scribedPostListData={scribedPostListData}
          postData={postData}
          // postDataLoading={postDataLoading}
        />
        <BlogPagination postData={postData} />
      </LayoutCard>
      <LayoutCard>
        <MarketNews
          scribedPostCoinBitCoinList={scribedPostCoinBitCoinList}
          postData={postData}
          // postDataLoading={postDataLoading}
        />
      </LayoutCard>
      <LayoutCard>
        <NewsSectionPost
          scribedPostCoinList={scribedPostCoinList}
          // postDataLoading={postDataLoading}
        />
        <PaginationComponent scribedPostListData={scribedPostListData} />
      </LayoutCard>
      <AdvertiseCard bannerImageData={bannerImageData} />
      <LayoutCard>
        <NewsSectionPostBitcoin
          scribedPostCoinBitCoinList={scribedPostCoinBitCoinList}
        />
        <PaginationComponent scribedPostListData={scribedPostListData} />
      </LayoutCard>
      <LayoutCard>
        <InovationCircle
          postData={postData}
          scribedPostListData={scribedPostListData}
        />
      </LayoutCard>
      <LayoutCard>
        <NewsSectionPostBitcoin
          scribedPostCoinBitCoinList={scribedPostCoinBitCoinList}
        />
        <PaginationComponent scribedPostListData={scribedPostListData} />
      </LayoutCard>
    </>
  );
};

export default HomeComponent;
