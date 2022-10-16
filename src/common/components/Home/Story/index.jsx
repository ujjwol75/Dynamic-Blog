import React from 'react';
import CarouselContainer from '../Carousel/Carousel';
import NewsTab from '../NewsTab/NewsTab';

const index = (props) => {
  const { postData,
    //  postDataLoading, 
     scribedPostListData 
    } = props;
  return (
    <>
      <div className='container' style={{ height: '450px' }}>
        <div className='row mobileView'>
          <div className='col-xl-7 col-sm-12'>
            <CarouselContainer postData={postData} />
          </div>
          <div className='col-xl-5 col-sm-12'>
            <NewsTab
              postData={postData}
              // postDataLoading={postDataLoading}
              scribedPostListData={scribedPostListData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
