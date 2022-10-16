import Link from 'next/link';
import React from 'react';
import styles from './Press.module.css';

const PressReleaseCard = (props) => {
  const { src, content, link } = props;
  return (
    <Link href={`/article/${link}`}>
      <div className={styles.container}>
        <div className={styles.main}>
          <img className={styles.image} src={src} />
          <div>
            <span className={styles.text}>{content.substr(0, 50)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PressReleaseCard;
