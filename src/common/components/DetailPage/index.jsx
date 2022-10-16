import React from 'react'
import DetailPage from './DetailPage'

const index = ({
  singlePageData,
  postData,
}) => {
  
  return (
    <>
      <DetailPage
        singlePageData={singlePageData}
        postData={postData}
      />
    </>
  );
}

export default index