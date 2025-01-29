// components/ImageGrid.tsx
import React from 'react';
import Image from 'next/image';

interface ImageItemProps {
  src: string;
  alt: string;
}

const ImageItem: React.FC<ImageItemProps> = ({ src, alt }) => (
  <div className="grid-item">
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover" />
  </div>
);

const ImageGrid = () => {
  return (
    <div className="grid-container">
      <ImageItem src="/images/0-cave.jpg" alt="Cave Image" />
      <ImageItem src="/images/ones3.jpg" alt="Another Image" />
      <ImageItem src="/images/openart-image_aJiLSyxf_1737845001780_raw.jpg" alt="Another Image" />
      <ImageItem src="/images/bcc16.jpg" alt="Another Image" />
      <ImageItem src="/images/43.1.03_Eine_Kleine_Nachtmusik_THUMB_from_Tate.jpg" alt="Another Image"/>
      <ImageItem src="/images/663c3a5a1892f9b1708193dadb21cacf.jpg" alt="Another Image"/>
      <ImageItem src="/images/79954.jpg" alt="Another Image"/>
      <ImageItem src="/images/IMG_3105 Medium.jpeg" alt="Another Image"/>
      <ImageItem src="/images/Screenshot 2024-11-10 at 9.00.05 PM Medium.jpeg" alt="Another Image"/>
      <ImageItem src="/images/screen-shot-2012-01-30-at-13-27-19.png" alt="Another Image" />
      <ImageItem src="/images/IMG_7704.jpeg" alt="Another Image"/>
      <ImageItem src="/images/8541d03c-b4e7-4782-a921-aa729df3b0af-Riverbank.jpeg" alt="Another Image" />
      <ImageItem src="/images/Un chien andalou thumb.jpeg" alt="Another Image"/>
      <ImageItem src="/images/Gozan-okuribi_Ho.jpeg" alt="Another Image"/>
      <ImageItem src="/images/IMG_4105.jpg" alt="Another Image"/>
      <ImageItem src="/images/Dunes.png" alt="Another Image" />
      <ImageItem src="/images/bluespring2.png" alt="Another Image" />
      <ImageItem src="/images/IMG_8441.png" alt="Another Image" />
      
    </div> 
  );
};

export default ImageGrid;


