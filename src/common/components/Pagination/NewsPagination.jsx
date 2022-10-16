import React, { useState } from 'react';
import APIS from '../../constants/EndPoints';
import useGetHook from '../../customHooks/useGetHook';
import PostListCardScribbed from '../../reusable/Card/PostCardScribbed';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const NewsPagination = (props) => {
  const { allScribbedPosts, setPage, page } = props

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrevious = () => {
    setPage(page - 1);
  };

  return (
    <div className='container p-0 '>
      <div className='row g-2'>
        {allScribbedPosts?.results?.map((item, index) => (
          <div key={index} className='col-md-6 '>
            <PostListCardScribbed
              key={item.id}
              src={
                item.preview_image
                  ? item.preview_image
                  : 'https://images.cointelegraph.com/images/1024_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy80MjEzODQ4N2E3ODViMTI3MjEzOTM3ZjhlYzkxZjllZi5qcGc=.jpg'
              }
              description={item.description}
              title={item.title}
              date={item.scraped_at}
              content={item.content}
              link={item.slug}
              author={item.author}
              viewCount={item?.views_count}
            />
          </div>
        ))}
        {/* {next < scribedPostCoinBitCoinList?.results?.length && ( */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            // backgroundColor: 'green',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              padding: '10px 15px',
              border: '1px solid #F1F1F1',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              backgroundColor: '#00FFE2',
              borderRadius: '5px',
            }}
            onClick={handlePrevious}
          >
            <AiOutlineLeft style={{ color: 'black' }} />
          </span>
          <span
            style={{
              padding: '10px 15px',
              border: '1px solid #F1F1F1',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              backgroundColor: '#00FFE2',
              borderRadius: '5px',
            }}
            onClick={handleNext}
          >
            <AiOutlineRight style={{ color: 'black' }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsPagination;
