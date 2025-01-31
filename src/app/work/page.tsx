'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageItemProps {
  src: string;
  alt: string;
  text: string;
  onClick: () => void;
}

const ImageItem: React.FC<ImageItemProps> = ({ src, alt, onClick }) => (
  <div className="grid-item" onClick={onClick}>
    <Image src={src} alt={alt} layout="fill" style={{ objectFit: 'cover', cursor: 'pointer' }} />
  </div>
);

const images = [
  { src: "/work/Untitled-16.jpg", alt: "Cave Image", text: "Untitled-16" },
  { src: "/work/Untitled-13.jpg", alt: "Another Image", text: "Untitled-13" },
  { src: "/work/Untitled-15.jpg", alt: "Another Image", text: "Untitled-15" },
  { src: "/work/Untitled-14.jpg", alt: "Another Image", text: "Untitled-14.jpg" },
  { src: "/work/Screenshot 2025-01-31 at 3.36.55 AM.jpeg", alt: "Another Image", text: "Looking-glass.com(Web-interactive)" },
  { src: "/work/grapes.jpeg", alt: "Another Image", text: "grapes.gif" },
  { src: "/work/open studio ver.00_01_07_01.Still004.jpg", alt: "Another Image", text: "Ex-commodity(video)" },
  { src: "/work/Metal Etch.png", alt: "Another Image", text: "Metal Etch" },
  { src: "/work/IMG_8441.png", alt: "Another Image", text: "IMG_8441.png" },
  { src: "/work/PICT0086.jpg", alt: "Another Image", text: "PICT0086.jpg" },
  { src: "/work/PICT0071.jpg", alt: "Another Image", text: "PICT0071.jpg" },
  { src: "/work/PICT0062.jpg", alt: "Another Image", text: "PICT0062.jpg" },
  { src: "/work/06.12.2022.png", alt: "Another Image", text: "06.12.2022.png" },

];

const WorkPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      {/* ✅ Image Grid */}
      <div className="grid-container">
        {images.map((image, index) => (
          <div key={index} className="grid-item-container">
            <ImageItem
              src={image.src}
              alt={image.alt}
              text={image.text}
              onClick={() => setSelectedImage(image.src)}
            />
            <p className="image-text">{image.text}</p>
          </div>
        ))}
      </div>

      {/* ✅ Lightbox (Full-Size Image Modal) */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <Image
              src={selectedImage}
              alt="Full Image"
              width={800}
              height={1200} // Taller default height for portrait images
              style={{ objectFit: 'contain', maxWidth: '90vw', maxHeight: '90vh' }}
            />
          </div>
        </div>
      )}

      {/* ✅ Styles */}
      <style jsx>{`
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .lightbox-content {
          max-width: 90vw;
          max-height: 90vh;
          overflow: hidden;
        }
        .lightbox img {
          display: block;
          max-width: 100%;
          max-height: 100%;
        }
      `}</style>
    </div>
  );
};

export default WorkPage;
