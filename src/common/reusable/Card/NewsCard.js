import Link from 'next/link';
import React from 'react';
import styles from './NewsCard.module.css';


const NewsCard = (props) => {
  const { src, content,link } = props;
  return (
    <Link href={`/articles/${link}/`}>
      <div className={styles.main}>
        <img className={styles.image} src={src} />
        <div>
          <span className={styles.text}>{content.slice(0, 90)}</span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
