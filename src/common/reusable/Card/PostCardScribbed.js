import React from 'react';
import styles from './PostList.module.css';
import { GoEye } from 'react-icons/go';
import Link from 'next/link';
import { randomNumber } from '../../../../utils/randomNumber';

const PostListCardScribbed = (props) => {
  const { src, description, title, date, content, link, author, viewCount } = props;
  return (
    <Link href={`/articles/${link}`}>
      <div className={styles.container}>
        <div className={styles.main}>
          <img className={styles.image} src={src} />
          <div className={styles.content}>
            <span className={styles.heading}>{title.slice(0, 20)}</span>
            <span className={styles.author}>
              {date}| by {author ? <span>{author}</span> : ' Jordan Finneseth'}
            </span>
            <span className={styles.text}>
              {description ? description.slice(0, 60) : description}
            </span>
            <span className={styles.text}>{description}</span>
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

export default PostListCardScribbed;
