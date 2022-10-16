import React from 'react';
import Link from 'next/link';
const MainCardNews = (props) => {
  return (
    <>
      <section>
        <div className='container p-0'>
          <div className='row'>
            <div className='col-lg-12 mb-4'>
              <Link
                href={`/articles/${props.link}`}
                className='text-decoration-none text-dark'
              >
                <div className='card' style={{ cursor: 'pointer' }}>
                  <img
                    src={props.src}
                    alt=''
                    className='card-img-top'
                    style={{
                      width: '100%',
                      height: '230px',
                      background: 'cover',
                    }}
                  />
                  <div
                    className='card-body'
                    style={{
                      width: '100%',
                      height: '200px',
                    }}
                  >
                    <h5
                      className='card-title news-title'
                      style={{ height: '60px' }}
                    >
                      {props.title?.slice(0, 90)}..
                    </h5>
                    <div
                      className='d-flex justify-content-between'
                      style={{ paddingTop: '30px' }}
                    >
                      <p className='card-text news-title p'>
                        by {props.author ? props.author : 'John Smith'}
                      </p>
                      <span className='news-title'>{props.time}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainCardNews;
