import React, { useRef } from 'react';
import RelatedNews from './RelatedNews';
import styles from '../Home/NewsTab/NewsTab.module.css';
import Link from 'next/link';
import Script from 'next/script';
import { BiPause, BiPlay } from 'react-icons/bi';
import { useSpeechSynthesis } from 'react-speech-kit';
import SocialShare from './SocialShare';

const DetailPage = ({
  singlePageData,
  postData,
}) => {

  let url = "http://insidecrypto.news/"
  // if (typeof window !== "undefined") {
  //   // Client-side-only code
  //   url = window.location.href;
  // }
  const { speak, cancel, speaking } = useSpeechSynthesis();

  const element = useRef(null);

  const relatedPost = singlePageData?.related_posts;

  const handleTextToSpeech = () => {
    const stringContent = new DOMParser().parseFromString(
      element.current.innerHTML,
      'text/html'
    ).documentElement.textContent;
    speak({ text: stringContent, volume: 4 });
  };

  return (
    <>
      <div className='position-relative singlePageContent'>

        {/* MOBILE PLAY BUTTON */}
        <span
          className='position-fixed end-0 d-block d-md-none rounded bg-light'
          style={{ marginRight: "20px", zIndex: "100" }}
        >
          {speaking ? (
            <span>
              <BiPause
                title='Pause'
                style={{ fontSize: '30px' }}
                onClick={() => cancel()}
              />
              Pause
            </span>
          ) : (
            <span>
              <BiPlay
                title='Play Article Audio'
                style={{ fontSize: '30px' }}
                onClick={() => handleTextToSpeech()}
              />
              Read
            </span>
          )}
        </span>
        <div className='container my-4 '>
          {/* {singlePageLoading && <Loader/>} */}
          <div className='row'>
            <div className='col-xl-8 .col-sm-12'>
              <div>

                <article className='article-image' ref={element}>
                  <div className='d-flex justify-content-between align-items-center mb-2'>
                    <div className='author d-flex justify-content-start align-items-center'>
                      <div>
                        <img
                          src={singlePageData?.image}
                          alt='Picture of the author'
                          style={{
                            borderRadius: '50%',
                            marginRight: '5px',
                            width: '28px',
                            height: '28px',
                          }}
                        />
                      </div>
                      <div className='text-uppercase authorName'>
                        {singlePageData?.author}
                      </div>
                    </div>
                    <div
                      className='text-uppercase w-100 authorName'
                      style={{
                        color: '#000',
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <span>{singlePageData?.created}</span>
                    </div>
                  </div>
                  <h1
                    className='fw-bolder text-left'
                    style={{ fontSize: '20px' }}
                  >
                    {singlePageData?.title}
                  </h1>
                  <div
                    className='mb-16'
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '16px',
                        fontWeight: 400,
                        textAlign: 'justify',
                      }}
                    >
                      {singlePageData?.description}
                    </p>
                    {/* DESKTOP PLAY BUTTON */}
                    {singlePageData?.description ? (
                      <span
                        className='end-0 d-none d-md-block rounded bg-light'
                        style={{ marginRight: "20px", zIndex: "100" }}
                      >
                        {speaking ? (
                          <span>
                            <BiPause
                              title='Pause'
                              style={{ fontSize: '30px' }}
                              onClick={() => cancel()}
                            />
                            Pause
                          </span>
                        ) : (
                          <span>
                            <BiPlay
                              title='Play Article Audio'
                              style={{ fontSize: '30px' }}
                              onClick={() => handleTextToSpeech()}
                            />
                            Read
                          </span>
                        )}
                      </span>
                    ) : null}
                  </div>

                  <div className='position-relative'>
                    <div className='w-100'>
                      <img
                        src={singlePageData?.image}
                        alt=''
                        style={{
                          objectFit: 'cover',
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    </div>
                  </div>
                  <div className='d-flex position-relative mt-4'>
                    <div className='d-flex'>
                      <div>
                        <div
                          className='scrapeContent'
                          dangerouslySetInnerHTML={{
                            __html: singlePageData?.content,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </article>
                {/* ))} */}
              </div>
              <SocialShare
                url={url}
                title={singlePageData?.title}
                hashtag={singlePageData?.title}
                image={singlePageData?.image}
              />
              <RelatedNews relatedPost={relatedPost} />
            </div>
            <div className='col col-lg-4 editorChoiceSinglePage'>
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
                    key={`detail-page-${index}`}
                  >
                    <span className={styles.text}>
                      {item.title.slice(0, 90)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Script
            async
            defer
            crossorigin='anonymous'
            src='https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0'
            nonce='bgs68QfT'
          />
          <div>
            <div
              className='fb-comments'
              data-href='https://insidecrypto.news/'
              data-width=''
              data-numposts='5'
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
