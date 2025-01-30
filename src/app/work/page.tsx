'use client';

import React from 'react';
import Image from 'next/image';

interface ImageItemProps {
  src: string;
  alt: string;
  text: string;
}

const ImageItem: React.FC<ImageItemProps> = ({ src, alt }) => (
  <div className="grid-item">
    <Image src={src} alt={alt} layout="fill" objectFit="cover" />
  </div>
);
const images = [
  { src: "/work/Untitled-16.jpg", alt: "Cave Image", text: "Untitled-16" },
  { src: "/work/Untitled-13.jpg", alt: "Another Image", text: "Untitled-13" },
  { src: "/work/Untitled-15.jpg", alt: "Another Image", text: "Untitled-15" },
  { src: "/work/Untitled-14.jpg", alt: "Another Image", text: "Untitled-14.jpg" },
  { src: "/images/43.1.03_Eine_Kleine_Nachtmusik_THUMB_from_Tate.jpg", alt: "Another Image", text: "Image 4" },
  { src: "/images/663c3a5a1892f9b1708193dadb21cacf.jpg", alt: "Another Image", text: "Image 5" },
  { src: "/images/79954.jpg", alt: "Another Image", text: "Image 6" },
  { src: "/images/IMG_3105 Medium.jpeg", alt: "Another Image", text: "Image 7" },
  { src: "/images/Screenshot 2024-11-10 at 9.00.05 PM Medium.jpeg", alt: "Another Image", text: "Image 8" },
  { src: "/images/screen-shot-2012-01-30-at-13-27-19.png", alt: "Another Image", text: "Image 9" },
  { src: "/images/IMG_7704.jpeg", alt: "Another Image", text: "Image 10" },
  { src: "/images/8541d03c-b4e7-4782-a921-aa729df3b0af-Riverbank.jpeg", alt: "Another Image", text: "Image 11" },
  { src: "/images/Un chien andalou thumb.jpeg", alt: "Another Image", text: "Image 12" },
];

const WorkPage = () => {
  return (
    <div>

    {/* Image Grid */}

      {/* ✅ Image Grid */}
      <div className="grid-container">
        {images.map((image, index) => (
          <div key={index} className="grid-item-container">
            <ImageItem src={image.src} alt={image.alt} text={image.text} />
            <p className="image-text">{image.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
