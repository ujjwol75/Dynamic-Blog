import React from 'react';
import LayoutCard from '../../../reusable/LayoutCard';
const index = (props) => {
  const { bannerImageData } = props;
  return (
    <LayoutCard>
      {bannerImageData?.results?.map((item) => (
        <div
          key={index}
          style={{ width: '100%', height: 'auto', backgroundColor: 'green' }}
        >
          <img
            src={item.image}
            alt='banner-image'
            style={{
              width: '100%',
              maxHeight: '400px',
              height: '100%',
              objectFit: 'fill',
            }}
          />
        </div>
      ))}
    </LayoutCard>
  );
};

export default index;
