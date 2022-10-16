import React, { useRef } from 'react';
import styles from '../Home/NewsTab/NewsTab.module.css';
import { BiPause, BiPlay } from 'react-icons/bi';
import { useSpeechSynthesis } from 'react-speech-kit';
import Link from 'next/link';
import Script from 'next/script';
import SocialShare from './SocialShare';

const ScrappedDetails = ({
  singlePageScrappedData,
  postData
}) => {
  let url = 'http://insidecrypto.news/';
  if (typeof window !== 'undefined') {
    // Client-side-only code
    url = window.location.href;
  }
  const style = {
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  };

  const element = useRef(null);

  const { speak, cancel, speaking } = useSpeechSynthesis();

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
          <div className='row'>
            <div className='col-xl-8 .col-sm-12'>
              <div>
                <article className='article-image' ref={element}>
                  <div className='d-flex justify-content-between align-items-center mb-2'>
                    <div className='author d-flex justify-content-start align-items-center'>
                      <div>
                        <img
                          src={singlePageScrappedData?.preview_image}
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
                        {singlePageScrappedData?.author}
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
                      <span>{singlePageScrappedData?.scraped_at}</span>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <h1
                      className='fw-bolder text-left'
                      style={{ fontSize: '20px' }}
                    >
                      {singlePageScrappedData?.title}
                    </h1>

                    {/* DESKTOP PLAY BUTTON */}
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
                  </div>

                  <div className='d-flex position-relative mt-4'>
                    <div className='d-flex'>
                      <div>
                        <div
                          className='scrapeContent'
                          dangerouslySetInnerHTML={{
                            __html: singlePageScrappedData?.content,
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
                title={singlePageScrappedData?.title}
                hashtag={singlePageScrappedData?.title}
                image={singlePageScrappedData?.preview_image}
              />
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
                    key={index}
                    href={`/article/${item.slug}`}
                    className={styles.maintext}
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

export default ScrappedDetails;
