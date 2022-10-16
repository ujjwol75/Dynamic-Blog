import React from 'react';
import styles from '../Home/NewsTab/NewsTab.module.css';
import LayoutCard from '../../reusable/LayoutCard';
import Link from 'next/link';
import NewsPagination from '../Pagination/NewsPagination';

const index = (props) => {
  const { postData, allScribbedPosts, setPage, page } = props;

  return (
    <>
      <div className='position-relative'>
        <div className='container my-4 '>
          {/* {postListLoading && <Loader />} */}
          <div className='row'>
            <div className='col-xl-8 .col-sm-12'>
              <LayoutCard>
                <h2>News</h2>
                {/* <div style={{ padding: '4px' }} className='row'>
                  {allScribbedPosts?.results?.map((item) => (
                    <div className='col-6' key={item.id}>
                      <PostListCardScribbed
                        src={
                          item.preview_image
                            ? item.preview_image
                            : 'https://images.cointelegraph.com/images/1024_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy80MjEzODQ4N2E3ODViMTI3MjEzOTM3ZjhlYzkxZjllZi5qcGc=.jpg'
                        }
                        description={item.description}
                        title={item.title}
                        date={item.scraped_at}
                        content={item.content}
                        link={item?.slug}
                        author={item.author}
                        viewCount={item?.views_count}
                      />
                    </div>
                  ))}
                </div> */}
                <NewsPagination
                  allScribbedPosts={allScribbedPosts}
                  setPage={setPage}
                  page={page}
                />
              </LayoutCard>
            </div>
            <div className='col col-lg-4 editorChoiceSinglePage'>
              <LayoutCard>
                <span>EDITOR’S CHOICE</span>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    gap: '10px',
                    paddingTop: '20px',
                  }}
                >
                  {postData?.results?.map((item, index) => (
                    <Link
                      href={`/article/${item.slug}`}
                      className={styles.maintext}
                      key={index}
                    >
                      <div>
                        <span className={styles.text}>
                          {item.title.slice(0, 90)}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </LayoutCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

