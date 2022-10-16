import React from 'react';
import styles from '../Home/NewsTab/NewsTab.module.css';
import { Container } from 'react-bootstrap';
import Loader from '../../reusable/Loader';
import LayoutCard from '../../reusable/LayoutCard';
import Link from 'next/link';
import NewsPagination from '../Pagination/NewsPagination';

const index = (props) => {
  const { allScribbedPostsLoading, allScribbedPosts, postData, page, setPage } = props;
  return (
    <>
      <div className='position-relative'>
        <div className='container my-4 '>
          {allScribbedPostsLoading && <Loader />}
          <div className='row'>
            <div className='col-xl-8 .col-sm-12'>
              <LayoutCard>
                <Container>
                  <h2>NFT</h2>
                  {/* <div style={{ padding: '4px' }}>
                    {allScribbedPosts?.results?.map((item) => (
                      <PostListCardScribbed
                        key={item.id}
                        src={
                          item.preview_image
                            ? item.preview_image
                            : 'https://images.cointelegraph.com/images/1024_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy80MjEzODQ4N2E3ODViMTI3MjEzOTM3ZjhlYzkxZjllZi5qcGc=.jpg'
                        }
                        description={item.description}
                        title={item.title}
                        date={item.created_at}
                        content={item.content}
                        link={item.slug}
                        author={item.author}
                      />
                    ))}
                  </div> */}
                  <NewsPagination
                    allScribbedPosts={allScribbedPosts}
                    page={page}
                    setPage={setPage}
                  />
                </Container>
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
                      href={`/article/${item?.slug}`}
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
