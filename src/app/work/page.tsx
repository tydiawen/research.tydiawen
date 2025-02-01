'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageItemProps {
  src: string;
  alt: string;
  text: string;
  clickedText: string; // Text to show in the modal
  onClick: () => void;
}

const ImageItem: React.FC<ImageItemProps> = ({ src, alt, onClick }) => (
  <div className="grid-item" onClick={onClick}>
    <Image
      src={src}
      alt={alt}
      layout="fill"
      style={{ objectFit: 'cover', cursor: 'pointer' }}
    />
  </div>
);

const images = [
  {  src: "/work/IMG_0738.JPG", alt: "Another Image", text: "Untitled-14.jpg",
    clickedText: "Kodak 200 120mm"},
  { src: "/work/IMG_0737.JPG", alt: "Another Image", text: "Untitled-13" ,
    clickedText: "Kodak 200 120mm"},
  { src: "/work/IMG_0739.JPG", alt: "Cave Image", text: "Untitled-16",
    clickedText: "Kodak 200 120mm"},
  { src: "/work/IMG_0736.jpg", alt: "Another Image", text: "Untitled-15",
    clickedText: "Kodak 200 120mm"},
  { src: "/work/Screenshot 2025-01-31 at 3.36.55 AM.jpeg", alt: "Another Image", text: "Looking-glass.com(Web-interactive)",
    clickedText: "Looking-glass.com reflects on the evolving role of social platforms in the recent past and its melancholic impact on this generation’s sense of belonging and identity. Made in Figma."},
  { src: "/work/grapes.jpeg", alt: "Another Image", text: "grapes.gif",
    clickedText: ""},
  { src: "/work/open studio ver.00_01_07_01.Still004.jpg", alt: "Another Image", text: "Ex-commodity(video)",
    clickedText: "Ex-commodity explores the journey of an object as it transitions from a person’s valued commodity to a state of diminished significance. Projection-mapping."},
  { src: "/work/Metal Etch.png", alt: "Another Image", text: "Metal Etch",
    clickedText: ""},
  { src: "/work/IMG_8441.png", alt: "Another Image", text: "IMG_8441.png" ,
    clickedText: ""},
  { src: "/work/PICT0086.jpg", alt: "Another Image", text: "PICT0086.jpg",
    clickedText: "Captured on a thermal paper digital camera."},
  { src: "/work/PICT0071.jpg", alt: "Another Image", text: "PICT0071.jpg" ,
    clickedText: "Captured on a thermal paper digital camera."},
  { src: "/work/PICT0062.jpg", alt: "Another Image", text: "PICT0062.jpg" ,
    clickedText: "Captured on a thermal paper digital camera."},
  { src: "/work/06.12.2022.png", alt: "Another Image", text: "06.12.2022.png" ,
    clickedText: ""},
  { src: "/work/06.12.2022 2.jpg", alt: "Another Image", text: "06.12.2022(2).jpg" ,
    clickedText: ""},
  { src: "/work/Goomheo 2.png", alt: "Another Image", text: "Goomheo(2)" ,
    clickedText: "Mock campaign image for Goomheo."},
  { src: "/work/Goomheo 1.png", alt: "Another Image", text: "Goomheo" ,
    clickedText: "Mock campaign image for Goomheo."},

];

const WorkPage = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; clickedText: string } | null>(null);

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
              clickedText={image.clickedText}
              onClick={() => setSelectedImage({ src: image.src, clickedText: image.clickedText })}
            />
            <p className="image-text">{image.text}</p>
          </div>
        ))}
      </div>

      {/* ✅ Lightbox (Full-Size Image Modal with Custom Text) */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt="Full Image"
              width={800}
              height={1200}
              style={{
                objectFit: 'contain',
                maxWidth: '90vw',
                maxHeight: '80vh',
                display: 'block',
              }}
            />
            <p className="lightbox-text">{selectedImage.clickedText}</p>
            <button className="close-button" onClick={() => setSelectedImage(null)}>✕</button>
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
          text-align: center;
          position: relative;
        }
        .lightbox-text {
          font-size: 10px;
          color: white;
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 19px;
          cursor: pointer;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default WorkPage;
