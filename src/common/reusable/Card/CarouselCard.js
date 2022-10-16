import Link from 'next/link';
import React from 'react'
import styles from './CarouselCard.module.css'
const CarouselCard = (props) => {
    const { src, content, link } = props;
  return (
    <Link href={`/article/${link}`}>
      <div className={styles.main}>
        <img className={styles.image} src={src} />
        <div>
          <span className={styles.text}>{content.slice(0, 50)}</span>
        </div>
      </div>
    </Link>
  );
}

export default CarouselCard