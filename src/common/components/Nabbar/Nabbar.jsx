import React, { useState } from 'react';
import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import styles from '../Nabbar/Nabbar.module.css';
const Nabbar = (props) => {
  return (
    <div className="container my-10">
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href='#'>News</a>
          </li>
          <li>
            <a href='#'>Markets</a>
          </li>
          <li>
            <a href='#'>Magazine</a>
          </li>
          <li>
            <a href='#'>People</a>
          </li>
          <li>
            <a href='#'>Cryptopedia</a>
          </li>
          <li>
            <a href='#'>Research</a>
          </li>
          <li>
            <a href='#'>Video</a>
          </li>
          <li>
            <a href='#'>Markets Pro</a>
          </li>
          <li>
            <a href='#'>Store</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nabbar;
