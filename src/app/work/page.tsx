'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const projects = [
    {
images: [
  { src: "/work/IMG_0738.JPG", alt: "Untitled-14.jpg", text: "Agnes<br /> <br />"},
  { src: "/work/IMG_0737.JPG", alt: "Untitled-13", text: "location, lighting by Tiya", italic: true},
  { src: "/work/IMG_0739.JPG", alt: "Untitled-16", text: ""},
  { src: "/work/IMG_0736.jpg", alt: "Untitled-15", text: ""},
]
},
{

images: [
  { src: "/work/Screenshot 2025-02-05 at 10.16.06 PM.jpeg", alt: "Untitled-16", text: "Looking-glass.com<br /> <br /> "},
  { src: "/work/openart-image_0pGy64LY_1737845242317_raw.jpg", alt: "Untitled-14.jpg", text: ""},
  { src: "/work/Screenshot 2025-02-05 at 10.24.59 PM.jpeg", alt: "Untitled-13", text: "reflecting on the evolving role of social platforms in the recent past and its melancholic impact on this generation’s sense of belonging and identity.", italic: true},
]
},
{
images: [
  { src: "/work/open studio ver.00_01_07_01.Still004.jpg", alt: "Untitled-14.jpg", text: "Ex-commodity<br /> <br /> "},
  { src: "/work/IMG_0894 2.jpg", alt: "Untitled-16", text: "explores the journey of an object as it transitions from a person’s valued commodity to a state of diminished significance. projection-mapping.", italic: true},
    ]
    },
    {
images: [
  { src: "/work/PICT0086.jpg", alt: "Untitled-14.jpg", text: "Bailey, Hastings"},
  { src: "/work/PICT0077.jpg", alt: "Untitled-13", text: ""},
  { src: "/work/PICT0062.jpg", alt: "Untitled-16", text: ""},
        ]
        },
        {
            images: [
  { src: "/work/Screenshot 2025-02-06 at 1.47.03 AM.jpeg", alt: "Untitled-14.jpg", text: "Sense of One's Self <br /> <br />"},
  { src: "/work/Screenshot 2025-02-06 at 1.48.07 AM.jpeg", alt: "Untitled-13", text: "found images, metal lithograph", italic: true},
               ]
             },
    ];

const WorkPage = () => {
    const [selectedImage, setSelectedImage] = useState<{ src: string } | null>(null);
  
    return (
      <div className="work-container">
        {projects.map((project, projectIndex) => (
          <div key={projectIndex} className="project-container">
            <div className="images-container">
              {project.images.map((image, index) => (
                <div key={index} className="image-wrapper" onClick={() => setSelectedImage({ src: image.src })}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              ))}
            </div>
            <div className="description-container">
              {project.images.map((image, index) => (
                <p key={index} className={`description-text ${image.italic ? 'italic' : ''}`} dangerouslySetInnerHTML={{ __html: image.text }} />
              ))}
            </div>
          </div>
        ))}
      {/* Lightbox (Full-Size Image Modal with Custom Text) */}
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
            <button className="close-button" onClick={() => setSelectedImage(null)}>✕</button>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .work-container {
          display: flex;
          flex-direction: column;
          gap: 45px;
          padding-left: 13px;
          padding-right: 13px;
          width: 100%;
        }

        .project-container {
          display: flex;
          flex-direction: row;
          padding-bottom: 45px;
          border-bottom: 1px solid rgb(209, 209, 209); /* Border separator between projects */
          position: relative;
        }

        .images-container {
          display: flex;
          gap: 13px;
          flex-wrap: nowrap; /* Allow the images to wrap on smaller screens */
          width: 100%;
        }

        .image-wrapper {
          position: relative;
          width: 17%; /* 4 images per row */
          padding-bottom: 17%; /* Maintain a square aspect ratio */
          border: 1px solid rgb(209, 209, 209); /* White border around images */
          overflow: hidden;
        }

        .description-container {
          position: absolute;
          right: 0px;
          bottom: 38px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          max-width: 25%;
          text-align: right;
        }

        .description-text {
          font-size: 13px;
          color: white;
          line-height: 1.3
        }
        .description-text.italic {
          font-style: italic; /* Apply italics */
        }

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
          max-height: 80vh;
          text-align: center;
          position: relative;
        }

        .lightbox-text {
          font-size: 13px;
          color: white;
          margin-top: 15px;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: white;
        }

        /* Responsive styles for smaller screens (iPhone screens) */
        @media (max-width: 768px) {
        .work-container {
          display: flex;
          flex-direction: column;
          gap: 27px;
          padding: 7px;
          width: 100%;
        }
        .project-container {
          display: flex;
          flex-direction: row;
          padding-bottom: 67px;
      }
          .image-wrapper {
            width: 24%; /* Keep 4 images per row, but resize for smaller screens */
            padding-bottom: 24%; /* Maintain the square aspect ratio */
          }
          .images-container {
            gap: 5px; /* Reduce the gap between images on smaller screens */
          }
          .description-container {
            bottom: 3px;
            right: 0px;
            text-align: right; /* Center text */
            max-width: 70%;
         
          }

        .description-text {
          font-size: 8px;
          color: white;
          line-height: 1.2
        }
        }
      `}</style>
    </div>
  );
};

export default WorkPage;
