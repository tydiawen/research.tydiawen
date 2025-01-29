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
      objectFit="cover"
    />
  </div>
);

const ImageGrid = () => {
  return (
    <div className="grid-container">
      <ImageItem src="/images/0-cave.jpg" alt="Cave Image" />
      <ImageItem src="/images/79954.jpg" alt="Another Image" />
      <ImageItem src="/images/bcc16.jpg" alt="Another Image" />
      <ImageItem src="/images/ones3.jpg" alt="Another Image" />
      <ImageItem src="/images/IMG_3105.jpg" alt="Another Image" />
      <ImageItem src="/images/IMG_4105.jpg" alt="Another Image" />
      <ImageItem src="/images/Un chien andalou thumb.jpeg" alt="Another Image" />
      <ImageItem src="/images/IMG_7704.jpeg" alt="Another Image" />
      <ImageItem src="/images/Dunes.png" alt="Another Image" />
      <ImageItem src="/images/Gozan-okuribi_Ho.jpeg" alt="Another Image" />
    </div>
  );
};

export default ImageGrid;
