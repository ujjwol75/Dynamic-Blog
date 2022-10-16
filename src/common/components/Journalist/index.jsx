import React, { useState, useRef } from 'react';
import APIS from '../../constants/EndPoints';
import { Button, Col, Row } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import StyledEditor from '../../reusable/StyledEditor';

const index = () => {
  const today = new Date();

  const [validated, setValidated] = useState(false);
  const [publishDate, setPublishDate] = useState(today);
  const [expireDate, setExpireDate] = useState(today);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const fileInput = useRef(null);

  const upload = (e) => {
    console.warn(e.target.files);
    const files = e.target.files;
    setImage(files);
  };
  const handlePostArticleForm = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const url = APIS.postArticle;
    let formData = new FormData(); //formdata object
    formData.append('email', email); //append the values with key, value pair
    if (image) {
      formData.append('image', image[0]);
    }
    formData.append('title', title);
    formData.append(
      'publish_date',
      new Date(publishDate).toISOString().slice(0, 10)
    );
    formData.append(
      'expiry_date',
      new Date(expireDate).toISOString().slice(0, 10)
    );
    formData.append('content', content);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        authorization:
          'Apikey d9f896f0f08de8c0c908909ff30f330ff8a16a7bffd2cd00995f177b54ca6f2c',
      },
    };
    axios
      .post(
        `https://insidecrypto.news/api/posts/public-post/`,
        formData,
        config
      )
      .then((response) => {
        if (response.status === 200) {
          alert('Succesfully Created');
          setTitle('');
          setEmail('');
          setContent('');
          setImage(null);
          setPublishDate(today);
          setExpireDate(today);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i;

  return (
    <>
      <div className='position-relative'>
        <div className='container my-4 '>
          <div className='row'>
            <div className='col-xl-12 .col-sm-12'>
              <Form
                noValidate
                validated={validated}
                onSubmit={handlePostArticleForm}
              >
                <Form.Group className='m-0'>
                  <Form.Group className='my-3'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      rows='3'
                      type='email'
                      placeholder='name@example.com'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                    />
                    <Form.Control.Feedback type='valid'>
                      Looks good!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type='invalid'>
                      Please provide a valid email.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className='my-3'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter title'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type='invalid'>
                      Please provide a title.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className='my-3'>
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      ref={fileInput}
                      type='file'
                      filename={image}
                      onChange={(e) => upload(e)}
                    />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group controlId='form.Date' className='my-3'>
                        <Form.Label>Published Date</Form.Label>
                        <DatePicker
                          selected={publishDate}
                          onChange={(e) => {
                            setPublishDate(e);
                          }}
                          className='form-control'
                          minDate={publishDate}
                          customInput={
                            <input type='text' id='validationCustom01' />
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId='form.Date' className='my-3'>
                        <Form.Label>Expire Date</Form.Label>
                        <DatePicker
                          selected={expireDate}
                          onChange={(e) => {
                            setExpireDate(e);
                          }}
                          className='form-control'
                          minDate={expireDate}
                          customInput={
                            <input type='text' id='validationCustom01' />
                          }
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className='my-3'>
                    <Form.Label>Content</Form.Label>
                    <StyledEditor content={content} setContent={setContent} />
                  </Form.Group>
                </Form.Group>
                <Button type='submit' style={{backgroundColor:"#00FFE2", border:'none', color:'black'}}>Submit form</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
