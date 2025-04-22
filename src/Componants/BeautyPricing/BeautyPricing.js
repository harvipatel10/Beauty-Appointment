import React, { useState } from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../BeautyPricing/BeautyPricing.css";
import spaBackground from "../../assets/sp11.jpg";

const pricingData = {
  men: [
    { category: "Hair Spa & Scalp Treatments", services: [

        { name: "Hair Fall Control Spa", price: "₹2,000 - ₹3,000" },
        { name: "Keratin Repair Spa", price: "₹2,500 - ₹4,000" },
        { name: "Protein Nourishment Spa", price: "₹1,800 - ₹2,500" },
        { name: "Oil Balancing Hair Spa", price: "₹1,500 - ₹2,200" },
        { name: "Anti-Frizz & Smoothing Spa", price: "₹2,500 - ₹3,500" },
        { name: "Scalp Rejuvenation Therapy", price: "₹2,000 - ₹2,800" },
        { name: "Ayurvedic Hair Spa", price: "₹2,200 - ₹3,200" },
        { name: "Cooling Menthol Scalp Spa", price: "₹1,500 - ₹2,000" },
      ] 
    },

    { category: "Hair Coloring & Highlights", services: [

      { name: "Dual-Tone Hair Coloring", price: "₹3500 - ₹7000" },
      { name: "Salt & Pepper Look", price: "₹2000 - ₹4500" },
      { name: "Frosted Tips", price: "₹1800 - ₹4000" },
      { name: "Platinum Blonde Coloring", price: "₹1,500 - ₹2,200" },
      { name: "Ash Grey & Silver Hair Coloring", price: "₹4500 - ₹9000" },
      { name: "Hair Streaking", price: "₹2000 - ₹5000" },
      { name: "Underlayer Hair Color", price: "₹3500 - ₹7500" },
      { name: "Pastel Hair Colors", price: "₹5000 - ₹9500" },
      { name: "UV & Glow-in-the-Dark Hair Color", price: "₹6000 - ₹12000" },
      { name: "Custom Hair Coloring", price: "₹5000+ (Varies by customization)" },
    ] 
  },

  { category: "Hair Cut & Styling", services: [

    { name: "Classic Haircut", price: "₹500 - ₹800" },
    { name: "Fade Haircut (Low, Mid, High, Skin Fade, Taper Fade)", price: "₹700 - ₹1200" },
    { name: "Undercut", price: "₹800 - ₹1500" },
    { name: "Crew Cut", price: "₹500 - ₹1000" },
     { name: "Buzz Cut", price: "₹400 - ₹900" },
      { name: "Pompadour", price: "₹1000 - ₹2000" },
      { name: "Quiff", price: "₹1000 - ₹1800" },
      { name: "Side Part", price: "₹800 - ₹1500" },
      { name: "Textured Crop", price: "₹900 - ₹1600" },
      { name: "Spiky Hair", price: "₹900 - ₹1700" },
      { name: "Mohawk & Faux Hawk", price: "₹1200 - ₹2500" },
      { name: "Curly Hair Styling", price: "₹1000 - ₹2000" },
      { name: "Long Hair Layering & Trimming", price: "₹1200 - ₹2500" },
      { name: "Beard Trimming & Styling", price: "₹600 - ₹1200" },
      { name: "Hair Wash & Blow-Dry Styling", price: "₹400 - ₹1000" },
      { name: "Man Bun & Ponytail Styling", price: "₹800 - ₹2000" },
      { name: "Straightening & Smoothing Treatment", price: "₹3000 - ₹7000" },
      { name: "Texturizing & Volumizing Treatment", price: "₹2500 - ₹6000" },
  ] 
},

{ category: "Shaving & Beard Grooming", services: [

  { name: "Classic Shave", price: "₹250 - ₹350" },
  { name: "Beard Trim & Shape", price: "₹210 - ₹300" },
  { name: "Luxury Shaving Experience", price: "₹375 - ₹500" },
] 
},

{ category: "Facial Treatments", services: [

  { name: "Classic Facial", price: "₹500 - ₹700" },
  { name: "Anti-Aging Facial", price: "₹950 - ₹1200" },
  { name: "Brightening Facial", price: "₹850 - ₹1100" },
  { name: "Hydrating Facial", price: "₹750 - ₹1000" },
  { name: "Detox Facial", price: "₹900 - ₹1150" },
   { name: "Oxygen Facial", price: "₹1050 - ₹1250" },
    { name: "Gold Facial", price: "₹1200 - ₹1500" },
    { name: "Charcoal Facial", price: "₹₹800 - ₹1050" },
    { name: "Collagen Facial", price: "₹1300 - ₹1600" },
   
] 
},

{ category: "Body Scrub / Wraps & Polishing", services: [

  { name: "Detoxifying Body Scrub", price: "₹1,500 - ₹2,000" },
  { name: "Hydrating Body Wrap", price: "₹2,000 - ₹2,800" },
  { name: "Brightening Body Polishing", price: "₹1,800 - ₹2,500" },
  { name: "Anti-Tan Body Scrub", price: "₹1,600 - ₹2,200" },
  { name: "Coffee Detox Scrub", price: "₹1,700 - ₹2,400" },
  { name: "Charcoal Purifying Wrap", price: "₹2,200 - ₹3,000" },
   { name: "Gold Radiance Body Polish", price: "₹2,500 - ₹3,500" },
    { name: "Aloe Vera Cooling Wrap", price: "₹1,800 - ₹2,300" },
    { name: "Milk & Honey Hydration Wrap", price: "₹2,000 - ₹2,900" },
    { name: "Deep Cleansing Body Scrub", price: "₹1,500 - ₹2,200" },
     { name: "Cooling Cucumber Wrap", price: "₹1,800 - ₹2,500" },
] 
},

{ category: "Manicure & Pedicure", services: [

  { name: "Classic Manicure", price: "₹400 - ₹600" },
  { name: "Classic Pedicure", price: "₹500 - ₹700" },
   { name: "Luxury Manicure", price: "₹700 - ₹1000" },
    { name: "Luxury Pedicure", price: "₹900 - ₹1200" },
      { name: "Detox Manicure", price: "₹850 - ₹1100" },
      { name: "Detox Pedicure", price: "₹1000 - ₹1300" },
       { name: "Paraffin Wax Manicure", price: "₹950 - ₹1200" },
        { name: "Paraffin Wax Pedicure", price: "₹1200 - ₹1500" },
        { name: "Charcoal Manicure", price: "₹850 - ₹1100" },
        { name: "Charcoal Pedicure", price: "₹1000 - ₹1300" },
         { name: "Express Manicure", price: "₹300 - ₹500" },
          { name: "Express Pedicure", price: "₹400 - ₹600" },
] 
},

{ category: "Waxing & Hair Removal", services: [

  { name: "Full Body Waxing", price: "₹2500 - ₹3500" },
  { name: "Chest & Back Waxing", price: "₹1200 - ₹1800" },
   { name: "Arms & Legs Waxing", price: "₹1000 - ₹1600" },
    { name: "Underarm Waxing", price: "₹400 - ₹700" },
    { name: "Facial Waxing (Eyebrows, Upper Lip, Cheeks)", price: "₹300 - ₹600" },
    { name: "Bikini & Intimate Waxing (For personal grooming)", price: "₹1500 - ₹2200" },
]
},

{ category: "Detox & Relaxation Massage Therapy", services: [

  { name: "Aromatherapy Massage", price: "₹1500 - ₹2500" },
  { name: "Hot Stone Therapy", price: "₹1800 - ₹2800" },
   { name: "Deep Tissue Massage", price: "₹2000 - ₹3000" },
    { name: "Body Scrub & Detox Wrap", price: "₹2200 - ₹3200" },
    { name: "Herbal Steam Therapy", price: "₹1200 - ₹1800" },
    { name: "Reflexology Foot Therapy", price: "₹1000 - ₹1500" },
     { name: "Swedish Massage", price: "₹1800 - ₹2800" },
      { name: "Thai Yoga Massage", price: "₹2000 - ₹3200" },
      { name: "Shiatsu Therapy", price: "₹2200 - ₹3500" },
      { name: "Mud Therapy", price: "₹2500 - ₹3700" },
       { name: "Sound Healing Therapy", price: "₹1800 - ₹2600" },
        { name: "Cryotherapy", price: "₹2000 - ₹3000" },
] 
},
    { category: "Acne Treatment", services: [

        { name: "Deep Cleansing Acne Facial", price: "₹1000 - ₹1500" },
        { name: "Chemical Peel for Acne", price: "₹1800 - ₹2500" },
        { name: "LED Light Therapy", price: "₹2000 - ₹3000" },
        { name: "Charcoal Detox Facial", price: "₹1200 - ₹1800" },
        { name: "Oxygen Facial for Acne", price: "₹2200 - ₹3200" },
        { name: "Salicylic Acid Treatment", price: "₹1500 - ₹2200" },
        { name: "Microdermabrasion for Acne Scars", price: "₹2500 - ₹3500" },
        { name: "HydraFacial for Acne", price: "₹3000 - ₹4000" },
        { name: "Tea Tree Oil Acne Treatment", price: "₹1200 - ₹1600" },
        { name: "Sulfur Mask Therapy", price: "₹1300 - ₹1800" },
      ] 
    },


    { category: "Hair Loss Treatment", services: [
        { name: "Scalp Detox Therapy", price: "₹1500 - ₹2500" },
        { name: "PRP (Platelet-Rich Plasma) Therapy", price: "₹6000 - ₹12000" },
        { name: "Laser Hair Therapy", price: "₹3000 - ₹5000" },
        { name: "Microneedling for Hair Growth", price: "₹4000 - ₹7000" },
        { name: "Hair Growth Mesotherapy", price: "₹5000 - ₹9000" },
        { name: "Ayurvedic Herbal Hair Treatment", price: "₹1800 - ₹3500" },
        { name: "Keratin & Protein Hair Treatment", price: "₹2500 - ₹6000" },
        { name: "Minoxidil & Finasteride Consultation", price: "₹1000 - ₹2000" },
        { name: "Stem Cell Therapy for Hair Regrowth", price: "₹10000 - ₹20000" },
        { name: "Redensyl & Procapil Treatment", price: "₹3000 - ₹6000" },
      ] 
    }
  ],


    women: [
      {
        category: "Hair Cut & Styling (Short Hair)",
        services: [
          { name: "Pixie Cut", price: "₹800 - ₹1500" },
          { name: "Bob Cut", price: "₹1000 - ₹2000" },
          { name: "Lob (Long Bob)", price: "₹1200 - ₹2200" },
          { name: "A-Line Bob", price: "₹1300 - ₹2500" },
          { name: "Stacked Bob", price: "₹1300 - ₹2500" },
          { name: "Blunt Bob", price: "₹1200 - ₹2400" },
          { name: "Shaggy Bob", price: "₹1300 - ₹2500" },
          { name: "French Bob", price: "₹1350 - ₹2600" },
          { name: "Bixie Cut", price: "₹1400 - ₹2700" },
        ],
      },
      {
        category: "Hair Cut & Styling (Medium Hair) ",
        services: [
          { name: "Shoulder-Length Cut", price: "₹1500 - ₹2500" },
          { name: "Layered Medium Cut", price: "₹1600 - ₹2700" },
          { name: "Wolf Cut", price: "₹1700 - ₹2800" },
          { name: "Feathered Cut", price: "₹1650 - ₹2750" },
          { name: "U-Cut", price: "₹1550 - ₹2650" },
          { name: "V-Cut", price: "₹1550 - ₹2650" },
          { name: "Medium Shag Cut", price: "₹1700 - ₹2800" },
          { name: "Wispy Bangs with Medium Hair", price: "₹1600 - ₹2700" },
        ],
      },
      {
        category: "Hair Cut & Styling (Long Hair)",
        services: [
          { name: "Long Layered Cut", price: "₹1800 - ₹3000" },
          { name: "Face-Framing Layers", price: "₹1750 - ₹2950" },
          { name: "Curtain Bangs with Long Hair", price: "₹1850 - ₹3050" },
          { name: "Step Cut", price: "₹1900 - ₹3100" },
          { name: "Soft U-Cut for Long Hair", price: "₹1850 - ₹3050" },
          { name: "Swoopy Layers", price: "₹1900 - ₹3100" },
          { name: "Waterfall Layers", price: "₹1950 - ₹3150" },
        ],
      },
      {
        category: "Trendy & Experimental Haircuts",
        services: [
          { name: "Butterfly Cut", price: "₹1800 - ₹3000" },
          { name: "Choppy Layers", price: "₹1750 - ₹2950" },
          { name: "Asymmetrical Cut", price: "₹1900 - ₹3100" },
          { name: "Undercut", price: "₹1600 - ₹2800" },
          { name: "Disconnected Bob", price: "₹1850 - ₹3050" },
          { name: "Hime Cut", price: "₹2000 - ₹3200" },
          { name: "Mullet Cut", price: "₹1700 - ₹2900" },
        ],
      },


      { category: "Hair Coloring & Highlights", services: [
        { name: "Full Hair Color", price: "₹2500 - ₹5000" },
        { name: "Root Touch-up", price: "₹1200 - ₹2500" },
        { name: "Gray Coverage", price: "₹2000 - ₹4500" },
        { name: "Balayage", price: "₹4000 - ₹8000" },
        { name: "Ombre", price: "₹3500 - ₹7000" },
        { name: "Foil Highlights", price: "₹3000 - ₹6000" },
        { name: "Platinum Blonde", price: "₹5000 - ₹10000" },
        { name: "Color Correction", price: "₹5000 - ₹12000" },
        { name: "Toner & Gloss", price: "₹2000 - ₹4500" },
        { name: "Dark to Light Transformation", price: "₹7000 - ₹15000" },
        { name: "Pastel Hair Color", price: "₹5000 - ₹9000" },
        { name: "Neon Hair Color", price: "₹5500 - ₹9500" },
        { name: "Rainbow Hair", price: "₹6000 - ₹10000" },
        { name: "Dip Dye", price: "₹3500 - ₹6500" },
        { name: "Foilyage", price: "₹4500 - ₹8500" },
        { name: "Money Piece", price: "₹3500 - ₹7000" },
        { name: "Peekaboo Highlights", price: "₹4000 - ₹7500" },
        { name: "Shadow Root", price: "₹3800 - ₹7200" },
        { name: "Vibrant Fashion Colors", price: "₹4500 - ₹9000" },
        { name: "Babylights", price: "₹4500 - ₹8500" },
        { name: "Lowlights", price: "₹3500 - ₹6500" },
        { name: "Chunky Highlights", price: "₹4000 - ₹7500" },
        { name: "Single Process Color", price: "₹1800 - ₹4000" },
      ] 
    },


    { category: "Hair Spa & Treatments", services: [
      { name: "Deep Conditioning Spa", price: "₹2500 - ₹5000" },
      { name: "Keratin Smooth Spa", price: "₹4000 - ₹8000" },
      { name: "Anti-Dandruff Hair Spa", price: "₹2000 - ₹4500" },
      { name: "Hair Fall Control Spa", price: "₹3000 - ₹6000" },
      { name: "Color Protection Hair Spa", price: "₹3500 - ₹7000" },
      { name: "Scalp Revitalization Treatment", price: "₹3200 - ₹6000" },
      { name: "Hot Oil Treatment", price: "₹2000 - ₹4000" },
      { name: "Scalp Detox Treatment", price: "₹2800 - ₹5000" },
      { name: "Nourishing Overnight Spa", price: "₹3500 - ₹6500" },
      { name: "Protein Hair Treatment", price: "₹2800 - ₹5000" },
      { name: "Frizz Control Treatment", price: "₹3000 - ₹5500" }
    ]
  },


  { category: "Hair Smoothening & Straightening", services: [
    { name: "Basic Hair Smoothening", price: "₹3500 - ₹6000" },
  { name: "Keratin Hair Smoothening", price: "₹4500 - ₹7500" },
  { name: "Deep Conditioning Smoothening", price: "₹4000 - ₹7000" },
  { name: "Frizz Control Smoothening", price: "₹3800 - ₹6500" },
  { name: "Advanced Hair Smoothening", price: "₹5000 - ₹8500" },
  { name: "Silk Infusion Smoothening", price: "₹4800 - ₹8000" },
  { name: "Protein & Vitamin Smoothening", price: "₹4200 - ₹7000" },
  { name: "Anti-Humidity Smoothening", price: "₹4000 - ₹6800" },
  { name: "Premium Smoothening & Repair", price: "₹5200 - ₹9000" },
  { name: "Express Smoothening", price: "₹3000 - ₹5000" }
  ] 
},


{ category: "Facials & Skin Care", services: [
  { name: "Hydrating Facial", price: "₹2500 - ₹4000" },
  { name: "Anti-Aging Facial", price: "₹3500 - ₹6000" },
  { name: "Deep Cleansing Facial", price: "₹3000 - ₹5000" },
  { name: "Brightening Facial", price: "₹3200 - ₹5500" },
  { name: "Acne Control Facial", price: "₹2800 - ₹5000" },
  { name: "Detox Facial", price: "₹3000 - ₹5200" },
  { name: "Collagen Boost Facial", price: "₹3600 - ₹6000" },
  { name: "Oxygenating Facial", price: "₹3200 - ₹5500" },
  { name: "Vitamin C Facial", price: "₹3000 - ₹5000" },
  { name: "Soothing Sensitive Skin Facial", price: "₹2800 - ₹4500" },
  { name: "Microdermabrasion Facial", price: "₹3500 - ₹6000" },
  { name: "Laser Facial", price: "₹5000 - ₹9000" }
] 
},

{ category: "Anti-Aging & Rejuvenation", services: [
  { name: "Anti-Aging Facial", price: "₹3500 - ₹6000" },
  { name: "Collagen Boost Therapy", price: "₹4000 - ₹7000" },
  { name: "Rejuvenating Peel", price: "₹3000 - ₹5500" },
  { name: "Advanced Laser Rejuvenation", price: "₹5000 - ₹9000" },
  { name: "Rejuvenating Micro-Needling", price: "₹4500 - ₹8000" },
  { name: "Vitamin C Brightening", price: "₹3000 - ₹5500" },
  { name: "Peptide Rejuvenation Therapy", price: "₹3800 - ₹6500" },
  { name: "Hydrodermabrasion", price: "₹4000 - ₹7000" }
] 
},


{ category: "Makeup Services", services: [
  { name: "Bridal Makeup", price: "₹5000 - ₹15000" },
  { name: "Party Makeup", price: "₹3000 - ₹7000" },
  { name: "Everyday Makeup", price: "₹2000 - ₹5000" },
  { name: "Airbrush Makeup", price: "₹4000 - ₹8000" },
  { name: "Makeup for Photoshoots", price: "₹4500 - ₹9000" },
  { name: "Editorial Makeup", price: "₹6000 - ₹12000" },
  { name: "Natural Glam Makeup", price: "₹3500 - ₹7000" },
  { name: "High Definition Makeup", price: "₹5000 - ₹10000" },
  { name: "Special Effects Makeup", price: "₹7000 - ₹15000" },
  { name: "Quick Touch-up Service", price: "₹1500 - ₹3000" },
  { name: "Celebrity Inspired Makeup", price: "₹5500 - ₹11000" },
  { name: "Glamorous Evening Makeup", price: "₹4000 - ₹9000" }
] 
},


{ category: "Body Massage & Spa", services: [
  { name: "Swedish Massage", price: "₹2500 - ₹4000" },
  { name: "Deep Tissue Massage", price: "₹3000 - ₹5000" },
  { name: "Aromatherapy Massage", price: "₹2800 - ₹4500" },
  { name: "Hot Stone Massage", price: "₹3500 - ₹6000" },
  { name: "Thai Massage", price: "₹3000 - ₹5500" },
  { name: "Shiatsu Massage", price: "₹2800 - ₹5000" },
  { name: "Body Wrap Therapy", price: "₹3200 - ₹5500" },
  { name: "Reflexology Massage", price: "₹2500 - ₹4500" },
  { name: "Balinese Massage", price: "₹3000 - ₹5500" },
  { name: "Ayurvedic Abhyanga", price: "₹2800 - ₹5000" },
  { name: "Lomi Lomi Massage", price: "₹3500 - ₹6000" },
  { name: "Hydrotherapy", price: "₹3000 - ₹5500" },
  { name: "Sports Massage", price: "₹3200 - ₹6000" }
] 
},


{ category: "Body Scrub & Polishing", services: [
  { name: "Coffee Body Scrub", price: "₹2200 - ₹4000" },
  { name: "Sugar Body Scrub", price: "₹2000 - ₹3500" },
  { name: "Sea Salt Body Scrub", price: "₹2500 - ₹4500" },
  { name: "Dead Sea Mud Scrub", price: "₹3000 - ₹5000" },
  { name: "Aloe Vera Body Scrub", price: "₹2300 - ₹4000" },
  { name: "Lavender Body Scrub", price: "₹2400 - ₹4200" },
  { name: "Orange Body Scrub", price: "₹2100 - ₹3800" },
  { name: "Rose Body Scrub", price: "₹2500 - ₹4500" },
  { name: "Herbal Body Scrub", price: "₹2200 - ₹4000" },
  { name: "Turmeric Body Scrub", price: "₹2500 - ₹4500" }
] 
},


{ category: "Body Wraps & Hydration", services: [
  { name: "Herbal Detox Wrap", price: "₹3000 - ₹5000" },
  { name: "Mud Body Wrap", price: "₹3500 - ₹6000" },
  { name: "Seaweed Wrap", price: "₹3200 - ₹5500" },
  { name: "Cocoa & Coffee Wrap", price: "₹2800 - ₹4500" },
  { name: "Hydrating Aloe Vera Wrap", price: "₹2500 - ₹4000" },
  { name: "Gold Infusion Wrap", price: "₹5000 - ₹8000" },
  { name: "Clay Wrap", price: "₹2800 - ₹5000" },
  { name: "Fruit Enzyme Wrap", price: "₹2600 - ₹4800" },
  { name: "Vitamin Boost Wrap", price: "₹3000 - ₹5500" },
  { name: "Aromatherapy Wrap", price: "₹3200 - ₹5400" },
  { name: "Rice Bran Wrap", price: "₹2700 - ₹4600" },
  { name: "Chocolate Wrap", price: "₹3500 - ₹5800" }
] 
},



{ category: "Manicure & Pedicure", services: [
  { name: "Classic Manicure & Pedicure", price: "₹1500 - ₹3000" },
  { name: "Gel Manicure & Pedicure", price: "₹2500 - ₹5000" },
  { name: "Spa Manicure & Pedicure", price: "₹3000 - ₹6000" },
  { name: "French Manicure & Pedicure", price: "₹2000 - ₹4000" },
  { name: "Luxury Manicure & Pedicure", price: "₹4000 - ₹8000" },
  { name: "Express Manicure & Pedicure", price: "₹1200 - ₹2500" },
  { name: "Nail Art & Design", price: "₹2000 - ₹6000" },
  { name: "Vegan Manicure & Pedicure", price: "₹1800 - ₹3500" },
  { name: "Hybrid Manicure & Pedicure", price: "₹2800 - ₹5000" },
  { name: "Japanese Manicure", price: "₹2200 - ₹4000" },
  { name: "Paraffin Treatment", price: "₹2500 - ₹4500" }
] 
},



{ category: "Nail Art & Extensions", services: [
  { name: "Basic Nail Art", price: "₹1000 - ₹2500" },
  { name: "Custom Nail Art", price: "₹2000 - ₹4000" },
  { name: "Acrylic Nail Extensions", price: "₹3000 - ₹6000" },
  { name: "Gel Nail Extensions", price: "₹3500 - ₹6500" },
  { name: "3D Nail Art", price: "₹4000 - ₹8000" },
  { name: "French Tip Extensions", price: "₹3200 - ₹6000" },
  { name: "Metallic Nail Art", price: "₹2500 - ₹5000" },
  { name: "Glitter Nail Art", price: "₹2000 - ₹4500" },
  { name: "Water Marble Nail Art", price: "₹3000 - ₹6000" },
  { name: "Stiletto Nail Extensions", price: "₹3500 - ₹7000" },
  { name: "Ombre Nail Art", price: "₹2500 - ₹5000" },
  { name: "Sculptured Nail Art", price: "₹4000 - ₹8500" }
] 
},


{ category: "Waxing & Hair Removal", services: [
  { name: "Eyebrow Waxing", price: "₹500 - ₹1000" },
  { name: "Upper Lip Waxing", price: "₹400 - ₹800" },
  { name: "Chin Waxing", price: "₹500 - ₹1000" },
  { name: "Full Face Waxing", price: "₹1500 - ₹3000" },
  { name: "Underarm Waxing", price: "₹800 - ₹1500" },
  { name: "Bikini Waxing", price: "₹1500 - ₹3000" },
  { name: "Brazilian Waxing", price: "₹2500 - ₹5000" },
  { name: "Full Leg Waxing", price: "₹2000 - ₹4000" },
  { name: "Arm Waxing", price: "₹1200 - ₹2500" },
  { name: "Back Waxing", price: "₹1800 - ₹3500" }
] 
},


{ category: "Threading & Eyebrow Shaping", services: [
  { name: "Basic Eyebrow Threading", price: "₹300 - ₹600" },
  { name: "Advanced Eyebrow Threading", price: "₹600 - ₹1000" },
  { name: "Eyebrow Threading with Tinting", price: "₹800 - ₹1200" },
  { name: "Express Eyebrow Threading", price: "₹250 - ₹500" },
  { name: "Luxury Eyebrow Threading", price: "₹1000 - ₹1500" },
  { name: "Customized Eyebrow Shaping", price: "₹900 - ₹1300" },
  { name: "Precision Eyebrow Threading", price: "₹750 - ₹1100" },
  { name: "Organic Eyebrow Threading", price: "₹650 - ₹1000" }
] 
},


{ category: "Eyebrow & Eyelash Tinting", services: [
  { name: "Eyebrow Tinting", price: "₹800 - ₹1500" },
  { name: "Eyelash Tinting", price: "₹800 - ₹1500" },
  { name: "Eyebrow & Eyelash Combo Tinting", price: "₹1500 - ₹2500" }
] 
},


{ category: "Detox & Slimming Therapy", services: [
  { name: "Herbal Detox Wrap", price: "₹3000 - ₹5000" },
  { name: "Slimming Massage Therapy", price: "₹3500 - ₹6000" },
  { name: "Detox & Slimming Combo", price: "₹6000 - ₹9000" },
  { name: "Infrared Detox Slimming", price: "₹5000 - ₹8000" },
  { name: "Lymphatic Drainage Massage", price: "₹3200 - ₹5500" },
  { name: "Cold Therapy Wrap", price: "₹3000 - ₹5000" },
  { name: "Body Contouring Wrap", price: "₹3500 - ₹6000" },
  { name: "Detox Foot Bath Therapy", price: "₹1500 - ₹3000" }
] 
},



{ category: "Bridal & Party Packages", services: [
  { name: "Classic Bridal Package", price: "₹15,000 - ₹25,000" },
  { name: "Deluxe Bridal Package", price: "₹25,000 - ₹40,000" },
  { name: "Party Makeup Package", price: "₹8,000 - ₹15,000" },
  { name: "Bridal & Party Combo Package", price: "₹30,000 - ₹50,000" },
  { name: "Pre-Wedding Trial Package", price: "₹5,000 - ₹10,000" },
  { name: "Premium Bridal Package", price: "₹40,000 - ₹60,000" },
  { name: "Glam Bridal Package", price: "₹30,000 - ₹50,000" },
  { name: "On-Location Bridal Party Package", price: "₹35,000 - ₹55,000" },
  { name: "Day-of Touch-Up Package", price: "₹3,000 - ₹6,000" },
  { name: "Express Party Package", price: "₹4,000 - ₹8,000" }
] 
},


    ],
  };
  
  
  
  const BeautySpaPricing = () => {
    const [selectedCategory, setSelectedCategory] = useState("men");
  
    return (
      <div className="beautyspa-pricing-container">
        <BeautyNavbar />
  
        <section className="beautyspa-pricing-hero" style={{ backgroundImage: `url(${spaBackground})` }}>
          <div className="beautyspa-pricing-content">
            <h1 className="beautyspa-pricing-title">Beauty & Spa Pricing</h1>
            <p className="beautyspa-pricing-description">
              Discover our exclusive beauty and spa treatments with transparent pricing.
            </p>
          </div>
        </section>
  
        <div className="beautyspa-pricing-toggle">
          <button 
            className={`beautyspa-pricing-btn ${selectedCategory === "men" ? "active" : ""}`} 
            onClick={() => setSelectedCategory("men")}
          >
            Men's Services
          </button>
          <button 
            className={`beautyspa-pricing-btn ${selectedCategory === "women" ? "active" : ""}`} 
            onClick={() => setSelectedCategory("women")}
          >
            Women's Services
          </button>
        </div>
  
        <div className="beautyspa-pricing-list">
          {pricingData[selectedCategory].map((category, index) => (
            <div key={index} className="beautyspa-pricing-category">
              <h2>{category.category}</h2>
              <ul>
                {category.services.map((service, idx) => (
                  <li key={idx} className="beautyspa-pricing-item">
                    <span>{service.name}</span>
                    <span className="beautyspa-pricing-price">{service.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BeautySpaPricing;