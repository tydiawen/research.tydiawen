import React from 'react';
import Image from 'next/image';

interface ImageItemProps {
  src: string;
  alt: string;
  text: string;
}

const ImageItem: React.FC<ImageItemProps> = ({ src, alt }) => (
  <div className="grid-item">
    {/* Removed objectFit prop, using style for object-fit */}
    <Image src={src} alt={alt} layout="fill" style={{ objectFit: 'cover' }} />
  </div>
);

const images = [
  { src: "/images/0-cave.jpg", alt: "", text: "0-cave.jpg" },
  { src: "/images/ones3.jpg", alt: "", text: "Arjan de Nooy 99:1" },
  { src: "/images/openart-image_aJiLSyxf_1737845001780_raw.jpg", alt: "", text: "openart-image_aJiLSyxf_1737845001780_raw.jpg" },
  { src: "/images/bcc16.jpg", alt: "", text: "Love&Pop" },
  { src: "/images/43.1.03_Eine_Kleine_Nachtmusik_THUMB_from_Tate.jpg", alt: "", text: "Dorothea Tanning" },
  { src: "/images/663c3a5a1892f9b1708193dadb21cacf.jpg", alt: "", text: "Laurie Simmons" },
  { src: "/images/79954.jpg", alt: "", text: "Corinne Day" },
  { src: "/images/Holly Andres.jpeg", alt: "", text: "Holly Andres" },
  { src: "/images/Screenshot 2024-11-10 at 9.00.05 PM Medium.jpeg", alt: "", text: "Paul Sermon" },
  { src: "/images/screen-shot-2012-01-30-at-13-27-19.png", alt: "", text: "Gondry on Dead Leaves and the Dirty Ground" },
  { src: "/images/IMG_7704.jpeg", alt: "", text: "IMG_7704.jpeg" },
  { src: "/images/8541d03c-b4e7-4782-a921-aa729df3b0af-Riverbank.jpeg", alt: "", text: "Riverbank.jpeg" },
  { src: "/images/Un chien andalou thumb.jpeg", alt: "", text: "Un Chien Andalou" },
  { src: "/images/Gozan-okuribi_Ho.jpeg", alt: "", text: "Gozan-okuribi_Ho.jpeg" },
  { src: "/images/IMG_4105.jpg", alt: "", text: "IMG_4105.jpg" },
  { src: "/images/Dunes.png", alt: "", text: "Dunes" },
  { src: "/images/bluespring2.png", alt: "", text: "Blue Spring" },
  { src: "/images/textREVEAL.jpeg", alt: "", text: "textREVEAL.jpeg" }
];

const ImageGrid = () => {
  return (
    <div>
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

export default ImageGrid;
