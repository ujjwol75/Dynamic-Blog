import React from 'react';
import styles from '../Home/NewsTab/NewsTab.module.css';
import { Container } from 'react-bootstrap';
import PostListCard from '../../reusable/Card/PostListCard';
import Loader from '../../reusable/Loader';
import RelatedNews from '../DetailPage/RelatedNews';
import Link from 'next/link';
import LayoutCard from '../../reusable/LayoutCard';
const SearchList = (props) => {
  const {
    postData,
    searchPageData,
    relatedPost,
    searchKeyword,
  } = props;

  return (
    <>
      <div className='position-relative'>
        <div className='container my-4 '>
          <h3>
            Search results on <strong>{searchKeyword}</strong>
          </h3>

          <div className='row'>
            <div className='col-xl-8 .col-sm-12'>
              <LayoutCard>
                {searchPageData?.results?.length === 0 ? (
                  <h3>No result found!</h3>
                ) : (
                  <div>
                    <Container>
                      <div style={{ padding: '4px' }}>
                        {searchPageData?.results?.map((item) => (
                          <PostListCard
                            key={item.id}
                            src={
                              item.image
                                ? item.image
                                : 'https://images.cointelegraph.com/images/1024_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy80MjEzODQ4N2E3ODViMTI3MjEzOTM3ZjhlYzkxZjllZi5qcGc=.jpg'
                            }
                            description={item.description}
                            title={item.title}
                            date={item.created}
                            content={item.content}
                            link={item.slug}
                          />
                        ))}
                      </div>
                    </Container>
                  </div>
                )}
              </LayoutCard>
              <LayoutCard>
                <RelatedNews relatedPost={relatedPost} />
              </LayoutCard>
            </div>
            <div className='col col-lg-4 editorChoiceSinglePage'>
              <LayoutCard>
                <h3>EDITOR’S CHOICE</h3>
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
                      <span className={styles.text}>
                        {item.title.slice(0, 90)}
                      </span>
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

export default SearchList;
