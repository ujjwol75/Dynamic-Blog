import React from 'react'
import NewsCard from '../../reusable/Card/NewsCard'

const RelatedNews = (props) => {
  const { relatedPost } = props;
 
  return (
    <div>
      <div style={{ color: '#000', fontSize: '16px' }}>
        <div
          style={{
            fontSize: '18px',
            fontWeight: 500,
            textTransform: 'uppercase',
            padding: '25px 0',
          }}
        >
          Related News
        </div>
        <div className='container p-0 '>
          <div className='row g-2'>
            {relatedPost?.flat(1)?.map((item) => (
              <div key={item.id} className='col-md-5 '>
                <NewsCard
                  src={
                    item.image
                      ? item.image
                      : 'https://images.cointelegraph.com/images/1024_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy80MjEzODQ4N2E3ODViMTI3MjEzOTM3ZjhlYzkxZjllZi5qcGc=.jpg'
                  }
                  content={(item?.content).replace(/<[^>]+>/g, '')}
                  link={item.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedNews
