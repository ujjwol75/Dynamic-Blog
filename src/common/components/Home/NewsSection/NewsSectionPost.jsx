import React from 'react';
import { Container } from 'react-bootstrap';
import MainCard from '../../../reusable/Card/Card';
import MainCardNews from '../../../reusable/Card/MainCardNews';
import Loader from '../../../reusable/Loader';

const NewsSectionPost = (props) => {
  const { 
    // postDataLoading,
     scribedPostCoinList } = props;
  const size = 9;
  const items = scribedPostCoinList?.results.slice(0, size);

  return (
    <Container style={{ marginTop: '20px' }}>
      {/* {postDataLoading && <Loader />} */}
      <div className='container p-0 '>
        <div className='row g-2'>
          {items?.map((item, index) => (
            <div key={index} className='col-lg-4 col-md-6'>
              <MainCardNews

                src={
                  item.preview_image
                    ? item.preview_image
                    : 'https://images.cointelegraph.com/images/1024_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy80MjEzODQ4N2E3ODViMTI3MjEzOTM3ZjhlYzkxZjllZi5qcGc=.jpg'
                }
                title={item.title}
                author={item.author}
                time={item.scraped_at}
                link={item?.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default NewsSectionPost;
