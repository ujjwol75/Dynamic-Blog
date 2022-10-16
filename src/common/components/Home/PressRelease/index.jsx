import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import CarouselCard from '../../../reusable/Card/CarouselCard';
import {pressReleaseSetting} from '../../../helpers/setting/setting';
import Loader from '../../../reusable/Loader'
 const index = (props) => {
   
   const { postData,
    //  postDataLoading,
     scribedPostListData } = props;
   return (
     <div>
       <Container className='press'>
         {/* {postDataLoading && <Loader />} */}
         <h5 style={{ color: '#465964', marginTop: '20px' }}>Press Releases</h5>
         <div style={{ padding: '4px', border: '2px solid #AFBDC4' }}>
           <Slider {...pressReleaseSetting}>
             {postData?.results.map((item) => (
               <CarouselCard
                 key={item.id}
                 src={
                   item.image
                     ? item.image
                     : 'https://images.cointelegraph.com/images/1024_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy80MjEzODQ4N2E3ODViMTI3MjEzOTM3ZjhlYzkxZjllZi5qcGc=.jpg'
                 }
                 content={item.title.slice(0, 60)}
                 link={item.slug}
               />
             ))}
           </Slider>
         </div>
       </Container>
       {/* <Container className='press-show'>
         <h5 style={{ color: '#465964' }}>Press Releases</h5>
         <div style={{ padding: '4px' }}>
           {postDataLoading && <Loader />}
           {postData?.results?.map((item) => (
             <PressReleaseCard
               key={item.id}
               src={
                 item.image
                   ? item.image
                   : 'https://images.cointelegraph.com/images/1024_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy80MjEzODQ4N2E3ODViMTI3MjEzOTM3ZjhlYzkxZjllZi5qcGc=.jpg'
               }
               content={item.description}
               link={item.id}
             />
           ))}
         </div>
       </Container> */}
     </div>
   );
 };
export default index;
