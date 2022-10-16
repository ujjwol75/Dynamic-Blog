import React from 'react';
import styles from './PostList.module.css';
import { GoEye } from 'react-icons/go';
import Link from 'next/link';
import { randomNumber } from '../../../../utils/randomNumber';
const PostListCard = (props) => {
  const { src, description, title, date, content, link, author, viewCount } = props;
  return (
    <Link href={`/article/${link}`}>
      <div className={styles.container}>
        <div className={styles.main}>
          <img className={styles.image} src={src} />
          <div className={styles.content}>
            <span className={styles.heading}>{title.slice(0, 20)}</span>
            <span className={styles.author}>
              {date} | by {author ? <span>{author}</span> : ' Jordan Finneseth'}
            </span>
            <span className={styles.text}>
              {description ? description.slice(0, 60) : description}
            </span>
            {/* <span className={styles.text}>{description}</span> */}
            <span className={styles.icons}>
              <GoEye />
              <span>
                {viewCount}
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostListCard;
const ProductCard = (props) => {
  const { src, description, title, date, content, link } = props;
  return (
    <Link href={`/article/${link}`}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <img className={styles.image} src={src} />
          </div>
          <div className='col'>
            <span className={styles.heading}>{title}</span>
            <span className={styles.author}>{date}| by Jordan Finneseth</span>
            <span className={styles.text}>{description.slice(0, 120)}</span>
            <span className={styles.icons}>
              <GoEye /> {randomNumber()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
