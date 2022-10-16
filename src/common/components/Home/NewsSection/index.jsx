import React from 'react';
import { Container } from 'react-bootstrap';
import MainCard from '../../../reusable/Card/Card';
import Loader from '../../../reusable/Loader';

const index = (props) => {
  const { postData,
    //  postDataLoading 
    } = props;

  const size = 9;
  const items = postData?.results.slice(0, size);

  return (
    <Container style={{ marginTop: '20px' }}>
      {/* {postDataLoading && <Loader />} */}
      <div className='container p-0 '>
        <div className='row g-2'>
          {items?.map((item) => (
            <div key={item.id} className='col-lg-4 col-md-6'>
              <MainCard
                src={
                  item.image
                    ? item.image
                    : 'https://images.cointelegraph.com/images/1024_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy80MjEzODQ4N2E3ODViMTI3MjEzOTM3ZjhlYzkxZjllZi5qcGc=.jpg'
                }
                title={item.title}
                author={item.author}
                time={item.created}
                link={item?.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default index;
