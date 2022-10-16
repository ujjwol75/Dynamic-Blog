import React from 'react';
import RelatedNews from './RelatedNews';
import styles from '../Home/NewsTab/NewsTab.module.css';
import { Container } from 'react-bootstrap';
import PostListCard from '../../reusable/Card/PostListCard';
import Loader from '../../reusable/Loader';
import LayoutCard from '../../reusable/LayoutCard';
import Link from 'next/link';
import { useRouter } from 'next/router';
import APIS from '../../constants/EndPoints';
import useGetHook from '../../customHooks/useGetHook';

const PostListPage = () => {
  const router = useRouter();
  const { postid } = router.query;

  const { isLoading, data: navigationListData } = useGetHook({
    queryKey: 'navigationListData',
    url: APIS.navigation,
  });

  const { data: postData } = useGetHook({
    queryKey: 'postData',
    url: APIS.posts,
    parma: 'params',
  });

  const {
    isLoading: singlePageLoader,
    data: singlePageData,
    isError,
  } = useGetHook({
    queryKey: `singlePageData${postid}`,
    url: `${APIS.posts}?categories=${postid}`,
  });

  const relatedPost = singlePageData?.results?.map(
    (item) => item.related_posts
  );

  return (
    <>
      <div className='position-relative'>
        <div className='container my-4 '>
          {singlePageLoader && <Loader />}
          <div className='row'>
            <div className='col-xl-8 .col-sm-12'>
              <LayoutCard>
                <Container>
                  {navigationListData?.map((item) => (
                    <h2 key={item.id}>{item.title}</h2>
                  ))}

                  <div style={{ padding: '4px' }}>
                    {singlePageData?.results?.map((item) => (
                      <PostListCard
                        key={item.id}
                        src={
                          item.image
                            ? item.image
                            : 'https://images.cointelegraph.com/images/1024_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy80MjEzODQ4N2E3ODViMTI3MjEzOTM3ZjhlYzkxZjllZi5qcGc=.jpg'
                        }
                        description={item.description}
                        title={item.title}
                        date={item.scraped_at}
                        content={item.content}
                        link={item.slug}
                        author={item.author}
                        viewCount={item.views_count}
                      />
                    ))}
                  </div>
                </Container>
              </LayoutCard>
              <LayoutCard>
                <RelatedNews relatedPost={relatedPost} />
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
                      key={index}
                      href={`/article/${item?.slug}`}
                      className={styles.maintext}
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

export default PostListPage;
