import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import MainCardPagination from '../../reusable/Card/MainCardPagination';

const PaginationComponent = (props) => {
  const { scribedPostListData } = props;
  const totalPageCount = 3;

  const [next, setNext] = useState(totalPageCount);
  const handleMoreImage = () => {
    setNext(next + totalPageCount);
  };
  return (
    <div className='container p-0 '>
      <div className='row g-2'>
        {scribedPostListData?.results?.slice(0, next)?.map((item, index) => (
          <div key={index} className='col-md-4 '>
            <MainCardPagination
              key={item.id}
              src={
                item.preview_image
                  ? item.preview_image
                  : 'https://images.cointelegraph.com/images/1024_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy80MjEzODQ4N2E3ODViMTI3MjEzOTM3ZjhlYzkxZjllZi5qcGc=.jpg'
              }
              title={item.title}
              author={item.author}
              time={item.scraped_at}
              link={item?.id}
            />
          </div>
        ))}
        {next < scribedPostListData?.results?.length && (
          <div style={{ width: '300px', margin: 'auto' }}>
            <Button className='mt-4' onClick={handleMoreImage} style={{backgroundColor:'#00FFE2', borderColor:'#00FFE2'}}>
              Load more
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaginationComponent;
