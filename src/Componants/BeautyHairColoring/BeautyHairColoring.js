import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const hairColoringOptions = [
    {
      name: "Full Hair Color",
      benefits: "Complete hair transformation with even coloring.",
      price: "₹2500 - ₹5000",
      process: [
        "Consultation to choose the right color.",
        "Hair preparation and sectioning.",
        "Color application from roots to ends.",
        "Processing time for color absorption.",
        "Rinsing, conditioning, and styling."
      ]
    },
    {
      name: "Root Touch-up",
      benefits: "Covers new hair growth for a seamless blend.",
      price: "₹1200 - ₹2500",
      process: [
        "Matching existing hair color.",
        "Applying dye to the roots.",
        "Allowing time for the color to develop.",
        "Rinsing and conditioning.",
        "Blow-dry and styling."
      ]
    },
    {
      name: "Gray Coverage",
      benefits: "Effectively hides gray strands for a youthful look.",
      price: "₹2000 - ₹4500",
      process: [
        "Selection of gray coverage shade.",
        "Applying color to gray areas.",
        "Processing and monitoring.",
        "Rinsing and applying post-color treatment.",
        "Final styling."
      ]
    },
    {
      name: "Balayage",
      benefits: "Hand-painted highlights for a soft, natural look.",
      price: "₹4000 - ₹8000",
      process: [
        "Consultation for color selection.",
        "Hand-painting color onto hair sections.",
        "Processing for natural blending.",
        "Rinsing and applying toner if needed.",
        "Blow-dry and styling."
      ]
    },
    {
      name: "Ombre",
      benefits: "Gradual color transition from dark to light.",
      price: "₹3500 - ₹7000",
      process: [
        "Determining light and dark transition.",
        "Applying lightener to lower sections.",
        "Blending mid-lengths to create gradient effect.",
        "Processing and toning if necessary.",
        "Final wash and styling."
      ]
    },
    {
      name: "Foil Highlights",
      benefits: "Adds contrast and dimension with foiled sections.",
      price: "₹3000 - ₹6000",
      process: [
        "Sectioning the hair.",
        "Placing foils with color in selected strands.",
        "Allowing color to develop.",
        "Removing foils and rinsing.",
        "Toning and conditioning before styling."
      ]
    },
    {
      name: "Platinum Blonde",
      benefits: "Ultra-light, platinum blonde finish.",
      price: "₹5000 - ₹10000",
      process: [
        "Pre-lightening the hair with bleach.",
        "Processing until the desired lightness is achieved.",
        "Applying toner for platinum shade.",
        "Deep conditioning to maintain hair health.",
        "Styling to enhance the final look."
      ]
    },
    {
      name: "Color Correction",
      benefits: "Fixes uneven, brassy, or unwanted tones.",
      price: "₹5000 - ₹12000",
      process: [
        "Consultation to assess color issues.",
        "Stripping or neutralizing unwanted tones.",
        "Applying corrective color.",
        "Deep conditioning treatment.",
        "Final styling for a refreshed look."
      ]
    },
    {
      name: "Toner & Gloss",
      benefits: "Enhances shine and neutralizes unwanted hues.",
      price: "₹2000 - ₹4500",
      process: [
        "Shampooing and towel-drying hair.",
        "Applying toner or gloss evenly.",
        "Processing time for color adjustment.",
        "Rinsing and conditioning.",
        "Blow-drying for a glossy finish."
      ]
    },
    {
      name: "Dark to Light Transformation",
      benefits: "Gradually lightens hair for a healthy blonde look.",
      price: "₹7000 - ₹15000",
      process: [
        "Evaluating hair condition and color history.",
        "Multiple lightening sessions as needed.",
        "Applying toner to achieve the desired shade.",
        "Deep conditioning treatments between sessions.",
        "Final styling for a polished look."
      ]
    },
    {
        name: "Pastel Hair Color",
        benefits: "Soft, dreamy shades like pink, lavender, and mint.",
        price: "₹5000 - ₹9000",
        process: [
          "Pre-lightening the hair for color vibrancy.",
          "Applying pastel hair dye evenly.",
          "Processing time for proper absorption.",
          "Rinsing with color-safe shampoo.",
          "Deep conditioning and styling."
        ]
      },
      {
        name: "Neon Hair Color",
        benefits: "Bright, vivid colors for a striking look.",
        price: "₹5500 - ₹9500",
        process: [
          "Bleaching hair to a light base.",
          "Applying neon hair dye for vibrancy.",
          "Allowing time for color absorption.",
          "Rinsing and applying color-locking treatment.",
          "Final styling for a bold effect."
        ]
      },
      {
        name: "Rainbow Hair",
        benefits: "Multi-colored hues for a bold, artistic style.",
        price: "₹6000 - ₹10000",
        process: [
          "Pre-lightening hair for color accuracy.",
          "Sectioning hair for multiple colors.",
          "Applying each shade precisely.",
          "Processing and rinsing with cold water.",
          "Deep conditioning to maintain color health."
        ]
      },
      {
        name: "Dip Dye",
        benefits: "Bright, contrasting tips for a playful effect.",
        price: "₹3500 - ₹6500",
        process: [
          "Choosing a contrasting or vibrant color.",
          "Dipping the ends into the dye.",
          "Blending to create a gradient effect.",
          "Processing and rinsing carefully.",
          "Final blow-dry and styling."
        ]
      },
      {
        name: "Foilyage",
        benefits: "Balayage with foils for more vibrant highlights.",
        price: "₹4500 - ₹8500",
        process: [
          "Applying hand-painted highlights.",
          "Wrapping sections in foils for intensity.",
          "Processing for optimal lift and tone.",
          "Rinsing, toning, and conditioning.",
          "Final styling for a seamless blend."
        ]
      },
      {
        name: "Money Piece",
        benefits: "Face-framing highlights for a bold yet natural contrast.",
        price: "₹3500 - ₹7000",
        process: [
          "Sectioning face-framing hair strands.",
          "Applying lightener or color to selected areas.",
          "Processing to achieve desired brightness.",
          "Rinsing, toning, and conditioning.",
          "Blow-dry and styling for the final look."
        ]
      },
      {
        name: "Peekaboo Highlights",
        benefits: "Hidden pops of color beneath layers of hair.",
        price: "₹4000 - ₹7500",
        process: [
          "Selecting hidden hair sections for coloring.",
          "Applying vibrant or subtle color.",
          "Processing to enhance vibrancy.",
          "Rinsing with cool water.",
          "Styling to showcase hidden highlights."
        ]
      },
      {
        name: "Shadow Root",
        benefits: "Soft-rooted look for a seamless grow-out.",
        price: "₹3800 - ₹7200",
        process: [
          "Choosing a root shade to blend seamlessly.",
          "Applying color to the root area.",
          "Blending downwards for a natural effect.",
          "Processing and rinsing with color-safe shampoo.",
          "Final blow-dry and styling."
        ]
      },
      {
        name: "Vibrant Fashion Colors",
        benefits: "Bold reds, blues, purples, and greens.",
        price: "₹4500 - ₹9000",
        process: [
          "Pre-lightening hair if necessary.",
          "Applying chosen vibrant color.",
          "Processing to achieve maximum intensity.",
          "Rinsing with color-safe shampoo.",
          "Styling to enhance the bold look."
        ]
      },
      {
        name: "Babylights",
        benefits: "Ultra-fine highlights for a sun-kissed effect.",
        price: "₹4500 - ₹8500",
        process: [
          "Sectioning hair for ultra-fine highlights.",
          "Applying lightener in thin strands.",
          "Processing to achieve a soft effect.",
          "Rinsing, toning, and conditioning.",
          "Final styling for a natural finish."
        ]
      },
      {
        name: "Lowlights",
        benefits: "Darker strands for added dimension and depth.",
        price: "₹3500 - ₹6500",
        process: [
          "Choosing a darker shade for contrast.",
          "Applying color to specific hair strands.",
          "Processing for balanced depth.",
          "Rinsing with a gentle shampoo.",
          "Blow-drying and styling."
        ]
      },
      {
        name: "Chunky Highlights",
        benefits: "Bold, thick highlights for a statement look.",
        price: "₹4000 - ₹7500",
        process: [
          "Sectioning hair for thick highlight placement.",
          "Applying color to selected sections.",
          "Processing for a bold effect.",
          "Rinsing and applying toner if necessary.",
          "Final styling for a striking appearance."
        ]
      },
      {
        name: "Single Process Color",
        benefits: "One-step coloring for a natural or bold effect.",
        price: "₹1800 - ₹4000",
        process: [
          "Selecting the desired color shade.",
          "Applying color evenly from roots to ends.",
          "Processing for optimal color absorption.",
          "Rinsing and conditioning.",
          "Blow-dry and styling."
        ]
      }
  ];
  
const BeautyHairColoring = () => {
  return (
    <div className="women-haircoloring-container">
      <BeautyNavbar />
      <section className="women-haircoloring-hero">
        <div className="women-haircoloring-content">
          <h1 className="women-haircoloring-title">Women's Hair Coloring</h1>
          <p className="women-haircoloring-description">
            Choose from a range of trendy and classic hair coloring treatments tailored to enhance your beauty.
          </p>
        </div>
      </section>

      <div className="women-haircoloring-heading">
        <h1>Our Women's Hair Coloring Treatments</h1>
      </div>

 
      <div className="women-haircoloring-services">
        {hairColoringOptions.map((service, index) => (
          <div key={index} className="women-haircoloring-card">
            <h3 className="women-haircoloring-name">{service.name}</h3>
            <p className="women-haircoloring-benefits">{service.benefits}</p>
            <span className="women-haircoloring-price">{service.price}</span>
            <div className="women-haircoloring-steps">
              <h4>Process:</h4>
              <ul>
                {service.process.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BeautyHairColoring;
