import React, { useEffect, useState } from 'react';
import styles from './Resposive.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import Search from '../../../reusable/Search';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ResposiveNabar = (props) => {
  const { navigationListData } = props;
  const [showNav, setShowNav] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  const router = useRouter();
  const handleSearchIconClick = () => {
    setShowSearchBar(true);
  };

  const handleCloseIcon = () => {
    setShowSearchBar(false);
  };

  const handleClick = () => {
    setShowMenuIcon(false);
    setShowNav(true);
    setShowCloseIcon(true);
  };
  const handleClose = () => {
    setShowNav(false);
    if (showMenuIcon === false) {
      setShowMenuIcon(true);
      setShowCloseIcon(false);
    }
  };

  const searchHandler = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleKeyPress = (e) => {
    e.preventDefault();

    router.push(`/searchPage/${searchKeyword}`);
  };

  return (
    <>
      {showSearchBar && (
        <Search
          keyword={searchKeyword}
          handleCloseIcon={handleCloseIcon}
          searchHandler={searchHandler}
          handleKeyPress={handleKeyPress}
        />
      )}
      <div className='mainNav'>
        <div className={styles.naviagation}>
          <div className={styles.logo}>
            {showMenuIcon && <AiOutlineMenu onClick={handleClick} />}
            {showCloseIcon && <AiOutlineClose onClick={handleClose} />}
            <span>INSIDECRYPTO</span>
          </div>

          <BsSearch
            style={{ cursor: 'pointer' }}
            onClick={handleSearchIconClick}
          />
        </div>
      </div>
      {showNav && (
        <div className='mainNavigation'>
          <Link href={`/`}>
            <a
              style={{ textDecoration: 'underline', marginTop: '10px' }}
              className='mainNavigationTitle'
            >
              Home
            </a>
          </Link>
          <Link href={`/news`}>
            <a
              className='mainNavigationTitle'
              style={{ textDecoration: 'underline', marginTop: '10px' }}
            >
              {' '}
              News
            </a>
          </Link>
          {navigationListData?.map((item, index) => (
            <React.Fragment key={index}>
              {item.children.length === 0 ? (
                <Link href={`/postListPage/${item.category_id}`}>
                  <a className='mainNavigationTitle'>
                    {item.title}
                  </a>
                </Link>
              ) : (
                <>
                  <span>{item.title}</span>
                  {item.children.length > 1 &&
                    item.children.map((val, index) => (
                      <Link key={index} href={`/postListPage/${val.category_id}`}>
                        <a key={index}>{val.title}</a>
                      </Link>
                    ))}
                </>
              )}
            </React.Fragment>
          ))}
          <Link href={`/marketLivePage`}>
            <a className='mainNavigationTitle'>Live Market</a>
          </Link>
          <Link href={`/postArticle`}>
            <a
              className='mainNavigationTitle'
              style={{ textDecoration: 'underline', marginTop: '10px' }}
            >
              Post Article
            </a>
          </Link>
          <Link className='mainNavigationTitle' href={`/contactPage`}>
            <a
              className='mainNavigationTitle'
              style={{ textDecoration: 'underline', marginTop: '10px' }}
            >
              {' '}
              Contact
            </a>
          </Link>
        </div>
      )}
    </>
  );
};

export default ResposiveNabar;
