import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const womenHaircuts = [
    {
      category: "Short Haircuts",
      styles: [
        {"name": "Pixie Cut", "benefits": "A short, chic, and edgy style for a bold look.", "price": "₹800 - ₹1500", "process": ["Consultation", "Shampoo & Conditioning", "Precision Cutting", "Styling & Finishing"]},
        {"name": "Bob Cut", "benefits": "A classic straight or angled bob for a sophisticated appearance.", "price": "₹1000 - ₹2000", "process": ["Consultation", "Shampoo & Conditioning", "Cutting & Layering", "Blow-dry & Styling"]},
        {"name": "Lob (Long Bob)", "benefits": "A longer version of the bob that frames the face beautifully.", "price": "₹1200 - ₹2200", "process": ["Consultation", "Shampoo & Conditioning", "Cutting", "Blow-dry & Styling"]},
        {"name": "A-Line Bob", "benefits": "A stylish cut that’s shorter in the back and longer in the front.", "price": "₹1300 - ₹2500", "process": ["Consultation", "Shampoo & Conditioning", "Precision Cutting", "Final Styling"]},
        {"name": "Stacked Bob", "benefits": "A voluminous bob with stacked layers in the back.", "price": "₹1300 - ₹2500", "process": ["Consultation", "Shampoo & Conditioning", "Layered Cutting", "Blow-dry & Styling"]},
        {"name": "Blunt Bob", "benefits": "A sharp, even-length bob for a sleek and modern look.", "price": "₹1200 - ₹2400", "process": ["Consultation", "Shampoo & Conditioning", "Precision Cutting", "Flat Iron Styling"]},
        {"name": "Shaggy Bob", "benefits": "A textured bob with layers for an effortless, tousled effect.", "price": "₹1300 - ₹2500", "process": ["Consultation", "Shampoo & Conditioning", "Layered Cutting", "Texturizing & Styling"]},
        {"name": "French Bob", "benefits": "A chin-length bob with soft bangs for a Parisian vibe.", "price": "₹1350 - ₹2600", "process": ["Consultation", "Shampoo & Conditioning", "Precision Cutting", "Blow-dry & Finishing"]},
        {"name": "Bixie Cut", "benefits": "A mix between a pixie and a bob, offering volume and texture.", "price": "₹1400 - ₹2700", "process": ["Consultation", "Shampoo & Conditioning", "Layered Cutting", "Texturizing & Styling"]}
      ]
    },
    {
      category: "Medium Haircuts",
      styles: [
        {"name": "Shoulder-Length Cut", "benefits": "A versatile length that can be styled in many ways.", "price": "₹1500 - ₹2500", "process": ["Consultation", "Shampoo", "Cutting & Blow-dry", "Styling"]},
        {"name": "Layered Medium Cut", "benefits": "Layers add volume and movement to medium-length hair.", "price": "₹1600 - ₹2700", "process": ["Consultation", "Shampoo", "Layered Cutting", "Blow-dry & Styling"]},
        {"name": "Wolf Cut", "benefits": "A trendy, shaggy cut with choppy layers for a rockstar look.", "price": "₹1700 - ₹2800", "process": ["Consultation", "Shampoo", "Layered Cutting", "Texturizing & Styling"]},
        {"name": "Feathered Cut", "benefits": "Soft, feather-like layers for a gentle, flowing effect.", "price": "₹1650 - ₹2750", "process": ["Consultation", "Shampoo", "Feathered Cutting", "Blow-dry & Styling"]},
        {"name": "U-Cut", "benefits": "Hair is cut in a 'U' shape for natural movement and volume.", "price": "₹1550 - ₹2650", "process": ["Consultation", "Shampoo", "U-Shaped Cutting", "Blow-dry & Styling"]},
        {"name": "V-Cut", "benefits": "The ends form a 'V' shape, creating a stylish and structured look.", "price": "₹1550 - ₹2650", "process": ["Consultation", "Shampoo", "V-Shaped Cutting", "Blow-dry & Styling"]},
        {"name": "Medium Shag Cut", "benefits": "A layered, messy look with a vintage aesthetic.", "price": "₹1700 - ₹2800", "process": ["Consultation", "Shampoo", "Layered Cutting", "Texturizing & Styling"]},
        {"name": "Wispy Bangs with Medium Hair", "benefits": "Light, airy bangs for a soft and trendy look.", "price": "₹1600 - ₹2700", "process": ["Consultation", "Shampoo", "Bangs Cutting", "Blow-dry & Styling"]}
      ]
    },
    {
      category: "Long Haircuts",
      styles: [
        {"name": "Long Layered Cut", "benefits": "Layers throughout long hair add bounce and dimension.", "price": "₹1800 - ₹3000", "process": ["Consultation", "Shampoo", "Layered Cutting", "Blow-dry & Styling"]},
        {"name": "Face-Framing Layers", "benefits": "Layers around the face highlight facial features.", "price": "₹1750 - ₹2950", "process": ["Consultation", "Shampoo", "Layered Cutting", "Blow-dry & Styling"]},
        {"name": "Curtain Bangs with Long Hair", "benefits": "A soft, middle-parted fringe that blends into layers.", "price": "₹1850 - ₹3050", "process": ["Consultation", "Shampoo", "Bangs Cutting", "Blow-dry & Styling"]},
        {"name": "Step Cut", "benefits": "Defined layers with noticeable step-like variations.", "price": "₹1900 - ₹3100", "process": ["Consultation", "Shampoo", "Step Cutting", "Blow-dry & Styling"]},
        {"name": "Soft U-Cut for Long Hair", "benefits": "A rounded U-shape at the back for natural elegance.", "price": "₹1850 - ₹3050", "process": ["Consultation", "Shampoo", "U-Shaped Cutting", "Blow-dry & Styling"]},
        {"name": "Swoopy Layers", "benefits": "Big, bouncy layers that create movement.", "price": "₹1900 - ₹3100", "process": ["Consultation", "Shampoo", "Layered Cutting", "Blow-dry & Styling"]},
        {"name": "Waterfall Layers", "benefits": "Subtle cascading layers for an effortlessly flowing look.", "price": "₹1950 - ₹3150", "process": ["Consultation", "Shampoo", "Layered Cutting", "Blow-dry & Styling"]}
    ]
    },

    {
        category: "Trendy & Experimental Haircuts",
        styles: [
          {"name": "Butterfly Cut", "benefits": "Face-framing layers that mimic butterfly wings.", "price": "₹1800 - ₹3000", "process": ["Consultation", "Shampoo", "Layered Cutting", "Blow-dry & Styling"]},
          {"name": "Choppy Layers", "benefits": "Short, disconnected layers for an edgy look.", "price": "₹1750 - ₹2950", "process": ["Consultation", "Shampoo", "Layered Cutting", "Texturizing & Styling"]},
          {"name": "Asymmetrical Cut", "benefits": "One side is longer than the other for a unique style.", "price": "₹1900 - ₹3100", "process": ["Consultation", "Shampoo", "Precision Cutting", "Styling"]},
          {"name": "Undercut", "benefits": "Shaved or closely cropped section underneath longer hair.", "price": "₹1600 - ₹2800", "process": ["Consultation", "Shampoo", "Shaving & Styling"]},
          {"name": "Disconnected Bob", "benefits": "A bob with contrasting lengths for a bold effect.", "price": "₹1850 - ₹3050", "process": ["Consultation", "Shampoo", "Precision Cutting", "Blow-dry & Styling"]},
          {"name": "Hime Cut", "benefits": "A Japanese-style haircut with blunt side locks and straight bangs.", "price": "₹2000 - ₹3200", "process": ["Consultation", "Shampoo", "Precision Cutting", "Blow-dry & Finishing"]},
          {"name": "Mullet Cut", "benefits": "A daring, short-in-the-front, long-in-the-back hairstyle.", "price": "₹1700 - ₹2900", "process": ["Consultation", "Shampoo", "Layered Cutting", "Texturizing & Styling"]}
        ]
      }
    ];
  



const WomenHaircuts = () => {
  return (
    <div className=".women-haircutstyling-container">
      <BeautyNavbar />
      <section className="women-haircutstyling-hero ">
        <div className="women-haircutstyling-content">
        <h1 className="women-haircutstyling-title ">Women's Haircut & Styling</h1>
        <p className="women-haircutstyling-description">Choose from a variety of trendy and classic haircuts tailored to enhance your beauty.</p>
      </div>
      </section>

      
      {/* Services List */}
      <div className="women-haircuts-heading">
        <h1>Our Women's Haircut & Styling Treatments</h1>
      </div>


      <div className="women-haircutstyling-services">
        {womenHaircuts.map((category, index) => (
          <div key={index} className="women-haircuts-category">
            <h2 className="category-title">{category.category}</h2>
              {category.styles.map((style, i) => (
                <div key={i} className="women-haircutstyling-card">
                  <h3 className="women-haircutstyling-name">{style.name}</h3>
                  <p className="women-haircutstyling-benefits">{style.benefits}</p>
                  <span className="women-haircutstyling-price">{style.price}</span>
                  <div className="women-haircutstyling-steps">
                    <h4>Process:</h4>
                    <ul>
                      {style.process.map((step, j) => (
                        <li key={j}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
        ))}
      </div>
    </div>
        
  );
};

export default WomenHaircuts;
