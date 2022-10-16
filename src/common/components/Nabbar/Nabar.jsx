import Link from 'next/link';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useRouter } from 'next/router';

const Nabar = (props) => {
  const { navigationListData } = props;
  const [showSearch, setShowSearch] = useState(false);
  const [keyword, setKeyword] = useState('');

  const router = useRouter();

  const handleSearchClick = () => {
    setShowSearch(true);
    if (showSearch === true) {
      setShowSearch(false);
    }
  };

  const handleSearchMouseLeave = () => {
    setShowSearch(false);
  };

  const searchHandler = (event) => {
    setKeyword(event.target.value);
  };

  const searchClickHandler = (event) => {
    event.preventDefault();
    if (keyword !== '') {
      router.push(`/searchPage/${keyword}`);
    }
  };
  return (
    <div className='showNavbar'>
      <div
        className='navMainDiv'
        style={{ backgroundColor: '#04CEBC', height: '40px', display: 'flex' }}
      >
        <nav className=' container navigationBar '>
          <ul>
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            <li>
              <Link href={`/news`}>News</Link>
            </li>
            {navigationListData?.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={`/postListPage/${item.category_id}`}>
                    <a>
                      {item.title}
                      {item?.children?.length > 1 && (
                        <RiArrowDropDownLine
                          style={{ fontSize: '24px', color: 'black' }}
                        />
                      )}
                    </a>
                  </Link>
                  <ul className='dropdown'>
                    {item?.children?.map((subChildren, index) => (
                      <li key={index}>
                        <Link
                          href={`/postListPage/${subChildren?.category_id}`}
                        >
                          {subChildren?.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
            <li>
              <Link href={`/postArticle`}>Post Article</Link>
            </li>
            <li>
              <Link href={`/nFTPage`}>NFT</Link>
            </li>
            <li>
              <Link href={`/marketLivePage`}>Live Market</Link>
            </li>

            <li>
              <Link href={`/contactPage`}>Contact</Link>
            </li>
          </ul>
        </nav>
        <a href='#' onClick={handleSearchClick}>
          <BiSearch
            className='searchIcon'
            style={{ color: 'black', margin: '0 40px' }}
          />
        </a>
        {showSearch && (
          <div className='navLists'>
            <div onMouseLeave={handleSearchMouseLeave} className='searchInput'>
              <input
                type='text'
                className='searchInputField'
                value={keyword}
                onChange={searchHandler}
              />
              <button className='searchButton' onClick={searchClickHandler}>
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nabar;
