import React from 'react';
import { Container } from 'react-bootstrap';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Slider from 'react-slick';
import NewsCard from '../../../reusable/Card/NewsCard';
import PressReleaseCard from '../../../reusable/Card/PressReleaseCard';
import { newsSectionSetting } from '../../../helpers/setting/setting';

const index = (props) => {
  const { postData, scribedPostListData } = props;
  return (
    <Container style={{ marginTop: '20px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '20px 0',
        }}
      >
        <h5>Inovation Circle</h5>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span
            style={{
              padding: '10px',
              border: '1px solid #F1F1F1',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <AiOutlineLeft />
          </span>
          <span
            style={{
              padding: '10px',
              border: '1px solid #F1F1F1',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <AiOutlineRight />
          </span>
        </div>
      </div>
      <div className='slider'>
        <Slider {...newsSectionSetting}>
          {scribedPostListData?.results.map((item) => (
            <NewsCard
              key={item.id}
              src={
                item.preview_image
                  ? item.preview_image
                  : 'https://images.cointelegraph.com/images/1024_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy80MjEzODQ4N2E3ODViMTI3MjEzOTM3ZjhlYzkxZjllZi5qcGc=.jpg'
              }
              content={item.title}
              link={item.slug}
            />
          ))}
        </Slider>
      </div>
      <div className='press-show' style={{ marginTop: '20px' }}>
        <div style={{ padding: '4px' }}>
          {postData?.results.map((item) => (
            <PressReleaseCard
              key={item.id}
              src={
                item.image
                  ? item.image
                  : 'https://images.cointelegraph.com/images/1024_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy80MjEzODQ4N2E3ODViMTI3MjEzOTM3ZjhlYzkxZjllZi5qcGc=.jpg'
              }
              content={item.title}
              link={item.slug}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default index;
