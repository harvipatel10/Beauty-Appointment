import React, { useState } from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../BeautyGallery/BeautyGallery.css";
import spaBackground from "../../assets/sp9.webp";
import Ambience from "../../assets/sp1.jpg";
import Relaxation from "../../assets/sp2.jpg";
import premium from "../../assets/sp3.jpeg";
import Therapeutic from "../../assets/sp4.jpeg";
import Modern from "../../assets/sp5.jpg";
import Relaxing from "../../assets/sp6.jpg";

const galleryItems = [
  {
    id: 1,
    title: "Spa Ambience",
    image: Ambience, // Use the imported image directly
    description: "Experience the serene and luxurious ambience of our spa."
  },
  {
    id: 2,
    title: "Relaxation Zone",
    image: Relaxation,
    description: "Our relaxation zone offers ultimate comfort and tranquility."
  },
  {
    id: 3,
    title: "Beauty Treatment",
    image: premium,
    description: "Indulge in premium beauty treatments designed to rejuvenate you."
  },
  {
    id: 4,
    title: "Therapeutic Massage",
    image: Therapeutic,
    description: "Enjoy a therapeutic massage that revitalizes body and mind."
  },
  {
    id: 5,
    title: "Modern Salon",
    image: Modern,
    description: "Our salon offers modern styling in a chic environment."
  },
  {
    id: 6,
    title: "Relaxing Pool",
    image: Relaxing,
    description: "Take a dip in our relaxing pool designed for pure rejuvenation."
  }
];

const Modal = ({ selectedItem, onClose }) => {
  if (!selectedItem) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="beautymodal-close" onClick={onClose}>×</button>
        <img 
          src={selectedItem.image} 
          alt={selectedItem.title} 
          className="modal-image" 
        />
        <h2>{selectedItem.title}</h2>
        <p>{selectedItem.description}</p>
      </div>
    </div>
  );
};

const BeautySpaGallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="beauty-spa-gallery-container">
      <BeautyNavbar />
      
      <section 
        className="beauty-spa-gallery-hero" 
        style={{ backgroundImage: `url(${spaBackground})` }}
      >
        <div className="beauty-spa-gallery-content">
          <h1 className="beauty-spa-gallery-title">Beauty & Spa Gallery</h1>
          <p className="beauty-spa-gallery-description">
            Explore our curated gallery showcasing our luxurious beauty and spa experiences.
          </p>
        </div>
      </section>
      
      <div className="beauty-spa-gallery-grid">
        {galleryItems.map((item) => (
          <div 
            key={item.id} 
            className="beauty-spa-gallery-item"
            onClick={() => setSelectedItem(item)}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="beauty-spa-gallery-image" 
            />
            <div className="beauty-spa-gallery-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <Modal 
        selectedItem={selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </div>
  );
};

export default BeautySpaGallery;
