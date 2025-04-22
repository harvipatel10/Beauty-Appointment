import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const menHairLossTreatments = [
  { 
    name: "Scalp Detox Therapy", 
    benefits: "Removes buildup, unclogs hair follicles, and promotes hair growth.", 
    price: "₹1500 - ₹2500",
    process: [
      "Deep Cleansing of Scalp",
      "Exfoliation & Detox Mask",
      "Nourishing Serum Application",
      "Scalp Massage & Relaxation"
    ]
  },
  { 
    name: "PRP (Platelet-Rich Plasma) Therapy", 
    benefits: "Stimulates hair follicles, boosts regrowth, and thickens hair.", 
    price: "₹6000 - ₹12000",
    process: [
      "Blood Extraction & Plasma Separation",
      "Plasma Injection into Scalp",
      "Post-Treatment Care"
    ]
  },
  { 
    name: "Laser Hair Therapy", 
    benefits: "Enhances blood circulation, reduces hair thinning, and strengthens roots.", 
    price: "₹3000 - ₹5000",
    process: [
      "Scalp Preparation",
      "Laser Light Therapy Session",
      "Nourishing Serum & Moisturization"
    ]
  },
  { 
    name: "Microneedling for Hair Growth", 
    benefits: "Stimulates collagen production, improves hair thickness, and strengthens follicles.", 
    price: "₹4000 - ₹7000",
    process: [
      "Scalp Cleansing",
      "Microneedling Procedure",
      "Hydrating & Healing Serum Application"
    ]
  },
  { 
    name: "Hair Growth Mesotherapy", 
    benefits: "Injects essential nutrients into the scalp for hair regrowth.", 
    price: "₹5000 - ₹9000",
    process: [
      "Scalp Preparation",
      "Micro-Injections of Growth Serum",
      "Relaxing Head Massage"
    ]
  },
  { 
    name: "Ayurvedic Herbal Hair Treatment", 
    benefits: "Uses natural herbs to nourish scalp and strengthen hair roots.", 
    price: "₹1800 - ₹3500",
    process: [
      "Herbal Oil Massage",
      "Steam Therapy",
      "Herbal Hair Pack Application"
    ]
  },
  { 
    name: "Keratin & Protein Hair Treatment", 
    benefits: "Repairs damaged hair, prevents breakage, and improves hair texture.", 
    price: "₹2500 - ₹6000",
    process: [
      "Cleansing & Preparation",
      "Protein Treatment Application",
      "Hydration & Hair Mask"
    ]
  },
  { 
    name: "Minoxidil & Finasteride Consultation", 
    benefits: "FDA-approved medications for treating male pattern baldness.", 
    price: "₹1000 - ₹2000",
    process: [
      "Consultation with Hair Specialist",
      "Customized Treatment Plan",
      "Prescription & Guidance"
    ]
  },
  { 
    name: "Stem Cell Therapy for Hair Regrowth", 
    benefits: "Regenerates hair follicles using advanced stem cell technology.", 
    price: "₹10000 - ₹20000",
    process: [
      "Scalp Examination",
      "Stem Cell Serum Injection",
      "Follow-Up Treatment Plan"
    ]
  },
  { 
    name: "Redensyl & Procapil Treatment", 
    benefits: "Scientifically formulated to combat hair loss and promote regrowth.", 
    price: "₹3000 - ₹6000",
    process: [
      "Scalp Cleansing",
      "Redensyl & Procapil Serum Application",
      "Scalp Massage & Nourishment"
    ]
  }
];

const HairLossTreatment = () => {
  return (
    <div className="men-hairloss-container">
      <BeautyNavbar />

      {/* Hero Section */}
      <section className="men-hairloss-hero">
        <div className="men-hairloss-content">
          <h1 className="men-hairloss-title">Men's Hair Loss Treatments</h1>
          <p className="men-hairloss-description">Advanced solutions for hair regrowth and scalp health.</p>
        </div>
      </section>

      {/* Services List */}
      <div className="men-hairloss-heading">
        <h1>Our Hair Loss Treatments</h1>
      </div>
      
      <div className="men-hairloss-services">
        {menHairLossTreatments.map((service, index) => (
          <div key={index} className="men-hairloss-card">
            <h3 className="men-hairloss-name">{service.name}</h3>
            <p className="men-hairloss-benefits">{service.benefits}</p>
            <span className="men-hairloss-price">{service.price}</span>
            <div className="men-hairloss-steps">
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

export default HairLossTreatment;
