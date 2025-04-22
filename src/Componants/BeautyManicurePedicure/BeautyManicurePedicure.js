import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const manicurePedicureServices = [
  {
    name: "Classic Manicure & Pedicure",
    benefits: "Essential nail care to keep your hands and feet neat and well-groomed.",
    price: "₹1500 - ₹3000",
    process: [
      "Cleanse and soak hands and feet",
      "Trim, file, and shape nails",
      "Cuticle care and gentle exfoliation",
      "Massage to improve circulation",
      "Application of base coat, nail polish, and top coat"
    ]
  },
  {
    name: "Gel Manicure & Pedicure",
    benefits: "Long-lasting, chip-resistant gel polish for a flawless finish.",
    price: "₹2500 - ₹5000",
    process: [
      "Preparation of nails with a base coat",
      "Application of gel polish",
      "Curing under UV/LED light",
      "Application of top coat for extra shine",
      "Final clean-up for a smooth finish"
    ]
  },
  {
    name: "Spa Manicure & Pedicure",
    benefits: "A luxurious treatment that includes exfoliation, hydrating masks, and massage.",
    price: "₹3000 - ₹6000",
    process: [
      "Warm water soak with essential oils",
      "Exfoliation and gentle scrub for hands and feet",
      "Cuticle treatment and nail shaping",
      "Intensive hand and foot massage",
      "Application of nourishing masks and finishing polish"
    ]
  },
  {
    name: "French Manicure & Pedicure",
    benefits: "Elegant and classic style with crisp white tips and natural nails.",
    price: "₹2000 - ₹4000",
    process: [
      "Soak and cleanse nails",
      "Trim and shape nails",
      "Application of base coat and white tip polish",
      "Buffing for a smooth, natural finish",
      "Sealing with a top coat for longevity"
    ]
  },
  {
    name: "Luxury Manicure & Pedicure",
    benefits: "Premium treatment featuring extended massage, advanced nail care, and optional nail art.",
    price: "₹4000 - ₹8000",
    process: [
      "Detailed nail and skin assessment",
      "Deep cleansing and exfoliation",
      "Extended massage with premium oils",
      "Application of advanced nail treatments and nail art options",
      "Finishing with a protective top coat"
    ]
  },
  {
    name: "Express Manicure & Pedicure",
    benefits: "Quick and efficient nail care for busy schedules.",
    price: "₹1200 - ₹2500",
    process: [
      "Quick soak and trim",
      "Basic nail shaping and cuticle care",
      "Brief massage",
      "Polish application for a fresh look",
      "Efficient finishing touches"
    ]
  },
  {
    name: "Nail Art & Design",
    benefits: "Creative designs to enhance your look, perfect for special occasions.",
    price: "₹2000 - ₹6000",
    process: [
      "Initial consultation and design selection",
      "Nail preparation and base coating",
      "Application of chosen nail art design",
      "Detailing and finishing touches",
      "Sealing with a clear top coat"
    ]
  },
  {
    name: "Vegan Manicure & Pedicure",
    benefits: "Eco-friendly nail care using vegan and cruelty-free products.",
    price: "₹1800 - ₹3500",
    process: [
      "Soak and cleanse with vegan products",
      "Nail shaping and cuticle care",
      "Application of vegan polish",
      "Nourishing vegan oil massage",
      "Finishing with eco-friendly top coat"
    ]
  },
  {
    name: "Hybrid Manicure & Pedicure",
    benefits: "Combines the benefits of gel and regular polish for a durable yet natural finish.",
    price: "₹2800 - ₹5000",
    process: [
      "Nail cleaning and shaping",
      "Application of a hybrid base coat",
      "Mix of gel and traditional polish",
      "Curing under LED light for gel components",
      "Application of finishing top coat"
    ]
  },
  {
    name: "Japanese Manicure",
    benefits: "A gentle, natural manicure focusing on nail health and minimalism.",
    price: "₹2200 - ₹4000",
    process: [
      "Gentle nail cleaning and buffing",
      "Nourishing treatments using natural oils",
      "Minimalistic nail polish application",
      "Hand massage for improved circulation",
      "Finishing with a clear protective layer"
    ]
  },
  {
    name: "Paraffin Treatment",
    benefits: "Deeply hydrates and softens hands and feet with warm paraffin wax.",
    price: "₹2500 - ₹4500",
    process: [
      "Nail and skin preparation",
      "Application of paraffin wax in a warm bath",
      "Allowing wax to penetrate and moisturize",
      "Removal of excess wax",
      "Finishing with light massage and moisturizer"
    ]
  }
];

const WomenManicurePedicure = () => {
  return (
    <div className="women-BeautyManicurePedicure-container">
      <BeautyNavbar />
      <section className="women-BeautyManicurePedicure-hero"> 
        <div className="women-BeautyManicurePedicure-content">
          <h1 className="women-BeautyManicurePedicure-title">       
            Women's Manicure & Pedicure Services
          </h1>
          <p className="women-BeautyManicurePedicure-description">
            Enhance your nail care routine with our specialized manicure and pedicure services designed to pamper your hands and feet with expert care.
          </p>
        </div>
      </section>

      <div className="women-BeautyManicurePedicure-heading">
        <h1>Our Manicure & Pedicure Services</h1>
      </div>

      <div className="women-BeautyManicurePedicure-services">
        {manicurePedicureServices.map((service, index) => (
          <div key={index} className="women-BeautyManicurePedicure-card">
            <h3 className="women-BeautyManicurePedicure-name">{service.name}</h3>
            <p className="women-BeautyManicurePedicure-benefits">{service.benefits}</p>
            <span className="women-BeautyManicurePedicure-price">{service.price}</span>
            <div className="women-BeautyManicurePedicure-steps">
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

export default WomenManicurePedicure;
