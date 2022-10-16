import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link'
const CarouselContainer = (props) => {
  const { postData } = props;
  return (
    <div
      className='carousel'
      style={{
        margin: '40px 5px',
        height: '500px',
        maxWidth: '680px',
        width: '96%',
      }}
    >
      <Carousel>
        {postData?.results?.map((result, index) => (
          <Carousel.Item key={index}>
            <Link href={`/article/${result?.slug}`}>
              <img
                src={
                  result.image
                    ? result.image
                    : 'https://insidecrypto.news/media/blog/1233.jpg'
                }
                alt='sldie'
                style={{
                  width: '100%',
                  height: '390px',
                  objectFit: 'cover',
                  opacity: '0.8',
                  borderRadius: '10px',
                }}
              />
            </Link>
            <Carousel.Caption>
              <h3>{result.title.slice(0, 30)}</h3>
              <p>{result.description.slice(0, 50)}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselContainer;