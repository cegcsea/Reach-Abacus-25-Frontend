import React from "react";
import "./Gallery.css";
import image1 from "./about_assets/1.jpg";
import image2 from "./about_assets/2.jpg";
import image3 from "./about_assets/3.jpg";
import image4 from "./about_assets/4.jpg";
import image5 from "./about_assets/5.jpg";
import image6 from "./about_assets/6.JPG";
import image7 from "./about_assets/7.JPG";
import image8 from "./about_assets/8.JPG"; 
import image9 from "./about_assets/9.JPG";
import image10 from "./about_assets/10.JPG";
import image11 from "./about_assets/11.jpg"; 

const photos = [
  {
    id: 1,
    url: image1,
  },
  {
    id: 2,
    url: image2,
  },
  {
    id: 3,
    url: image3,
  },
  {
    id: 4,
    url: image4,
  },
  {
    id: 5,
    url: image5,
  },
  {
    id: 6,
    url: image6,
  },
  {
    id: 7,
    url: image7,
  },
  {
    id: 8,
    url: image8,
  },
  {
    id: 9,
    url: image9,
  },
  {
    id: 10,
    url: image10,
  },
  // {
  //   id: 11,
  //   url: image11,
  // },
  // Backup Image
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-heading">
        Get Ready for
        <span> Moments </span> Like These..
      </h2>

      <div className="gallery-track-container">
        <div className="gallery-track">
          {/* Double list for seamless loop */}
          {[...photos, ...photos].map((photo, index) => (
            <div className="gallery-card" key={index}>
              <img
                src={photo.url}
                alt="Image"
                className="gallery-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;