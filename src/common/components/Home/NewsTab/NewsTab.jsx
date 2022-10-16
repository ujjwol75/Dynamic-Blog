import React from 'react';
import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import styles from '../NewsTab/NewsTab.module.css';
import { GoEye } from 'react-icons/go';
import Loader from '../../../reusable/Loader';
import { randomNumber } from '../../../../../utils/randomNumber';

import Link from 'next/link';
const NewsTab = (props) => {
  const {
    postData,
    //  postDataLoading,
    scribedPostListData
  } = props;


  const size = 7;
  const items = scribedPostListData?.results.slice(0, size);
  const postDataItems = postData?.results.slice(0, size);

  return (
    <div
      style={{
        width: '100%',
        height: 'fit-content',
        margin: '40px 0 ',
        // backgroundColor: 'green',
      }}
    >
      <Tabs
        defaultActiveKey='home'
        id='uncontrolled-tab-example'
        className='mb-3 tabs '
        variant='pills'
        style={{ margin: 0, padding: 0 }}
      >
        <Tab eventKey='home' title='EDITORS CHOICE' >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexDirection: 'column',
              gap: '10px',

              
            }}
          >
            {/* {postDataLoading && <Loader />} */}
            {postDataItems?.map((item, index) => (
              <div key={index}>
                <Link
                  href={`/article/${item?.slug}`}
                  className={styles.maintext}
                >
                  <span className={styles.text}>{item.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </Tab>
        <Tab eventKey='profile' title='HOT STORIES' >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexDirection: 'column',
            }}
          >
            {/* {postDataLoading && <Loader />} */}
            {items?.map((item, index) => (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                key={index}
              >
                <Link href={`/articles/${item.slug}`} className={styles.maintext}>
                  <span className={styles.text}>{item.title.slice(0, 60)}</span>
                </Link>
                <div>
                  <span>
                    <GoEye /> {randomNumber()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default NewsTab;
