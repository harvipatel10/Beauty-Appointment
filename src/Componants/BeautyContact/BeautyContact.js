import React, { useState } from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../BeautyContact/BeautyContact.css";

const BeautyContact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    city: "",
    saloon: "",
    gender: "",
    category: "",
    subCategory: "",
   appointmentDateTime: ""
  });

  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    const now = new Date();
    const selectedDateTime = new Date(`${appointmentDate}T${selectedTime}`);

    if (appointmentDate === today && selectedDateTime < now) {
      alert("You cannot select a past time. Please choose a valid time.");
      setAppointmentTime("");
    } else {
      setAppointmentTime(selectedTime);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    if (!formData.fullName || !formData.email || !formData.contactNo || !formData.saloon || !formData.gender || !formData.category || !formData.subCategory || !appointmentDate || !appointmentTime) {
      alert("Please fill in all required fields.");
      return;
    }
  
    alert(
      `Appointment Confirmed!\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.contactNo}\nService: ${formData.subCategory}\nSalon: ${formData.saloon}\nDate: ${appointmentDate}\nTime: ${appointmentTime}`
    );
  };
  

  const today = new Date().toISOString().split("T")[0];
  const getCurrentTime = () => new Date().toTimeString().slice(0, 5);

  const cities = {
    
     "Ahmedabad": [
    "Jawed Habib Hair & Beauty Salon",
    "Enrich Salon",
    "Kapil's Salon & Academy",
    "VLCC Wellness Salon",
    "Style Icon Unisex Salon"
  ],
  "Surat": [
    "Green Trends Unisex Salon",
    "Affinity Salon",
    "Toni & Guy Hairdressing",
    "The Hair Masters",
    "Elegance Beauty Lounge"
  ],
  "Vadodara": [
    "Looks Salon",
    "Naturals Salon",
    "Blush Salon & Spa",
    "Urban Nirvana Beauty Lounge",
    "Meraki Unisex Salon"
  ],
  "Rajkot": [
    "Studio 11 Salon & Spa",
    "Lush Beauty & Hair Lounge",
    "Radiance Hair & Beauty Studio",
    "Evolve Salon & Spa",
    "Trendz Unisex Salon"
  ],
  "Bhavnagar": [
    "Silver Scissors Salon",
    "Orane Beauty Salon",
    "Exquisite Beauty Hub",
    "Style Inn Unisex Salon",
    "The Glam Studio"
  ],
  "Gandhinagar": [
    "Aura Unisex Salon",
    "Glitz & Glam Salon",
    "Hair Affair Studio",
    "Golden Glow Beauty Lounge",
    "Mirror Magic Unisex Salon"
  ],
  "Jamnagar": [
    "The Beauty Spot",
    "Diva Beauty & Hair Lounge",
    "Ritz Salon & Spa",
    "Hair Castle Studio",
    "Sparkle Beauty & Spa"
  ],
  "Anand": [
    "Grace Beauty Lounge",
    "Star Hair & Beauty Studio",
    "Luxe Unisex Salon",
    "Glow & Go Beauty Spa",
    "Trendy Cuts Unisex Salon"
  ],
  "Junagadh": [
    "Glamorous You Salon",
    "Beauty & Beyond Hair Studio",
    "Signature Salon & Spa",
    "Evolve Beauty Lounge",
    "Royal Touch Unisex Salon"
  ],
  "Mehsana": [
    "Charisma Beauty Studio",
    "Flawless Beauty & Spa",
    "Hairstyle Hub",
    "Finesse Unisex Salon",
    "Aura Glam Studio"
  ],
  "Navsari": [
    "Zenith Unisex Salon",
    "Elite Beauty Lounge",
    "Trendy Waves Salon",
    "Bloom Hair & Beauty Studio",
    "Velvet Touch Salon"
  ],
  "Gandhidham": [
    "D'Belle Beauty Lounge",
    "Hair & Flair Unisex Salon",
    "Urban Glow Spa & Salon",
    "Crown Hair Studio",
    "Charm Beauty Hub"
  ],
  "Bharuch": [
    "The Makeover Studio",
    "Glamour Touch Beauty Lounge",
    "Reflections Unisex Salon",
    "Lush & Shine Salon",
    "Glowish Beauty Spa"
  ],
  "Vapi": [
    "Prime Hair & Beauty Studio",
    "Finesse Salon & Spa",
    "Glow Perfection Salon",
    "Urbane Unisex Salon",
    "Signature Hair & Beauty Lounge"
  ],
  "Morbi": [
    "Elegance Beauty & Hair Lounge",
    "Beyond Beauty Salon",
    "Majestic Glow Studio",
    "Glamify Hair & Beauty",
    "Blossom Unisex Salon"
  ],
  "Nadiad": [
    "Royal Salon & Spa",
    "Pure Beauty Hub",
    "The Lavish Look Salon",
    "Zenith Hair & Spa",
    "Aura Hair & Beauty Lounge"
  ],
  "Patan": [
    "Dreams Unisex Salon",
    "Shine & Glow Beauty Lounge",
    "Couture Hair & Spa",
    "Refined Beauty Studio",
    "Elite Touch Unisex Salon"
  ],
  "Dahod": [
    "Golden Glow Beauty Spa",
    "Charm & Chic Salon",
    "Hairstyle Lounge",
    "Orchid Beauty & Spa",
    "Glam Hub Studio"
  ],
  "Amreli": [
    "Luxe Salon & Spa",
    "Elite Hair & Beauty Lounge",
    "The Hair Vogue Studio",
    "Euphoria Beauty Spa",
    "Gorgeous You Salon"
  ]
  };

  

  const categories = {
    Male: {
      "Hair Spa & Scalp Treatments":[
        "Hair Fall Control Spa",
        "Keratin Repair Spa",
        "Protein Nourishment Spa",
        "Oil Balancing Hair Spa",
        "Anti-Frizz & Smoothing Spa",
        "Scalp Rejuvenation Therapy",
        "Ayurvedic Hair Spa",
        "Cooling Menthol Scalp Spa"
      ],

      "Hair Coloring & Highlights":  [
 "Dual-Tone Hair Coloring",
  "Salt & Pepper Look",
  "Frosted Tips",
  "Platinum Blonde Coloring",
  "Ash Grey & Silver Hair Coloring",
  "Hair Streaking",
  "Underlayer Hair Color",
  "Pastel Hair Colors",
  "UV & Glow-in-the-Dark Hair Color",
  "Custom Hair Coloring"
],

      "Hair cut & Styling":  [
        "Classic Haircut",
        "Fade Haircut (Low, Mid, High, Skin Fade, Taper Fade)",
        "Undercut",
        "Crew Cut",
        "Buzz Cut",
        "Pompadour",
        "Quiff",
        "Side Part",
        "Textured Crop",
        "Spiky Hair",
        "Mohawk & Faux Hawk",
        "Curly Hair Styling",
        "Long Hair Layering & Trimming",
        "Beard Trimming & Styling",
        "Hair Wash & Blow-Dry Styling",
        "Man Bun & Ponytail Styling",
        "Straightening & Smoothing Treatment",
        "Texturizing & Volumizing Treatment"
      ],

      "Shaving & Beard Grooming": [ 
        "Classic Shave",
        "Beard Trim & Shape",
        "Luxury Shaving Experience"],

      "Facial Treatments":
      [
        "Classic Facial",
        "Anti-Aging Facial",
        "Brightening Facial",
        "Hydrating Facial",
        "Detox Facial",
        "Oxygen Facial",
        "Gold Facial",
        "Charcoal Facial",
        "Collagen Facial"
      ],

      "Body Scrub / Wraps & Polishing":
      [
        "Detoxifying Body Scrub",
        "Hydrating Body Wrap",
        "Brightening Body Polishing",
        "Anti-Tan Body Scrub",
        "Coffee Detox Scrub",
        "Charcoal Purifying Wrap",
        "Gold Radiance Body Polish",
        "Aloe Vera Cooling Wrap",
        "Milk & Honey Hydration Wrap",
        "Deep Cleansing Body Scrub",
        "Cooling Cucumber Wrap"
      ],
      

      "Manicure & Pedicure": 
      [
        "Classic Manicure",
        "Classic Pedicure",
        "Luxury Manicure",
        "Luxury Pedicure",
        "Detox Manicure",
        "Detox Pedicure",
        "Paraffin Wax Manicure",
        "Paraffin Wax Pedicure",
        "Charcoal Manicure",
        "Charcoal Pedicure",
        "Express Manicure",
        "Express Pedicure"
      ],

      "Waxing & Hair Removal": 
      [
        "Full Body Waxing",
        "Chest & Back Waxing",
        "Arms & Legs Waxing",
        "Underarm Waxing",
        "Facial Waxing (Eyebrows, Upper Lip, Cheeks)",
        "Bikini & Intimate Waxing"
      ],

      "Detox & Relaxation Massage Therapy":
      [
        "Aromatherapy Massage",
        "Hot Stone Therapy",
        "Deep Tissue Massage",
        "Body Scrub & Detox Wrap",
        "Herbal Steam Therapy",
        "Reflexology Foot Therapy",
        "Swedish Massage",
        "Thai Yoga Massage",
        "Shiatsu Therapy",
        "Mud Therapy",
        "Sound Healing Therapy",
        "Cryotherapy"
      ],

      "Acne Treatment": 
      [
        "Deep Cleansing Acne Facial",
        "Chemical Peel for Acne",
        "LED Light Therapy",
        "Charcoal Detox Facial",
        "Oxygen Facial for Acne",
        "Salicylic Acid Treatment",
        "Microdermabrasion for Acne Scars",
        "HydraFacial for Acne",
        "Tea Tree Oil Acne Treatment",
        "Sulfur Mask Therapy"
      ],

      "Hair Loss Treatment":
      [
        "Scalp Detox Therapy",
        "PRP (Platelet-Rich Plasma) Therapy",
        "Laser Hair Therapy",
        "Microneedling for Hair Growth",
        "Hair Growth Mesotherapy",
        "Ayurvedic Herbal Hair Treatment",
        "Keratin & Protein Hair Treatment",
        "Minoxidil & Finasteride Consultation",
        "Stem Cell Therapy for Hair Regrowth",
        "Redensyl & Procapil Treatment"
      ]

    },
    Female: {
      "Hair cut & Styling": [
    "Pixie Cut",
    "Bob Cut",
    "Lob (Long Bob)",
    "A-Line Bob",
    "Stacked Bob",
    "Blunt Bob",
    "Shaggy Bob",
    "French Bob",
    "Bixie Cut",
    "Shoulder-Length Cut",
    "Layered Medium Cut",
    "Wolf Cut",
    "Feathered Cut",
    "U-Cut",
    "V-Cut",
    "Medium Shag Cut",
    "Wispy Bangs with Medium Hair",
    "Long Layered Cut",
    "Face-Framing Layers",
    "Curtain Bangs with Long Hair",
    "Step Cut",
    "Soft U-Cut for Long Hair",
    "Swoopy Layers",
    "Waterfall Layers",
    "Butterfly Cut",
    "Choppy Layers",
    "Asymmetrical Cut",
    "Undercut",
    "Disconnected Bob",
    "Hime Cut",
    "Mullet Cut"
  ],

      "Hair Coloring & Highlights": 
      [
        { name: "Full Hair Color" },
        { name: "Root Touch-up" },
        { name: "Gray Coverage" },
        { name: "Balayage" },
        { name: "Ombre" },
        { name: "Foil Highlights" },
        { name: "Platinum Blonde" },
        { name: "Color Correction" },
        { name: "Toner & Gloss" },
        { name: "Dark to Light Transformation" },
        { name: "Pastel Hair Color" },
        { name: "Neon Hair Color" },
        { name: "Rainbow Hair" },
        { name: "Dip Dye" },
        { name: "Foilyage" },
        { name: "Money Piece" },
        { name: "Peekaboo Highlights" },
        { name: "Shadow Root" },
        { name: "Vibrant Fashion Colors" },
        { name: "Babylights" },
        { name: "Lowlights" },
        { name: "Chunky Highlights" },
        { name: "Single Process Color" }
      ],

      "Hair Spa & Treatments": 
      [
        { name: "Deep Conditioning Spa" },
        { name: "Keratin Smooth Spa" },
        { name: "Anti-Dandruff Hair Spa" },
        { name: "Hair Fall Control Spa" },
        { name: "Color Protection Hair Spa" },
        { name: "Scalp Revitalization Treatment" },
        { name: "Hot Oil Treatment" },
        { name: "Scalp Detox Treatment" },
        { name: "Nourishing Overnight Spa" },
        { name: "Protein Hair Treatment" },
        { name: "Frizz Control Treatment" }
      ],

      "Hair Smoothening & Straightening": 
      [
        "Basic Hair Smoothening",
        "Keratin Hair Smoothening",
        "Deep Conditioning Smoothening",
        "Frizz Control Smoothening",
        "Advanced Hair Smoothening",
        "Silk Infusion Smoothening",
        "Protein & Vitamin Smoothening",
        "Anti-Humidity Smoothening",
        "Premium Smoothening & Repair",
        "Express Smoothening"
      ],

      "Facials & Skin Care": 
      [
        "Hydrating Facial",
        "Anti-Aging Facial",
        "Deep Cleansing Facial",
        "Brightening Facial",
        "Acne Control Facial",
        "Detox Facial",
        "Collagen Boost Facial",
        "Oxygenating Facial",
        "Vitamin C Facial",
        "Soothing Sensitive Skin Facial",
        "Microdermabrasion Facial",
        "Laser Facial"
      ],

      "Anti-Aging & Rejuvenation":
      [
        "Anti-Aging Facial",
        "Collagen Boost Therapy",
        "Rejuvenating Peel",
        "Advanced Laser Rejuvenation",
        "Rejuvenating Micro-Needling",
        "Vitamin C Brightening",
        "Peptide Rejuvenation Therapy",
        "Hydrodermabrasion"
      ],
      

      "Makeup Services": 
      [
        "Bridal Makeup",
        "Party Makeup",
        "Everyday Makeup",
        "Airbrush Makeup",
        "Makeup for Photoshoots",
        "Editorial Makeup",
        "Natural Glam Makeup",
        "High Definition Makeup",
        "Special Effects Makeup",
        "Quick Touch-up Service",
        "Celebrity Inspired Makeup",
        "Glamorous Evening Makeup"
      ],
      

      "Body Massage & Spa": 
      [
        "Swedish Massage",
        "Deep Tissue Massage",
        "Aromatherapy Massage",
        "Hot Stone Massage",
        "Thai Massage",
        "Shiatsu Massage",
        "Body Wrap Therapy",
        "Reflexology Massage",
        "Balinese Massage",
        "Ayurvedic Abhyanga",
        "Lomi Lomi Massage",
        "Hydrotherapy",
        "Sports Massage"
      ],
      

      "Body Scrub & Polishing":
      [
        "Coffee Body Scrub",
        "Sugar Body Scrub",
        "Sea Salt Body Scrub",
        "Dead Sea Mud Scrub",
        "Aloe Vera Body Scrub",
        "Lavender Body Scrub",
        "Orange Body Scrub",
        "Rose Body Scrub",
        "Herbal Body Scrub",
        "Turmeric Body Scrub"
      ],
      

      "Body Wraps & Hydration":
       [ "Herbal Detox Wrap",
        "Mud Body Wrap",
        "Seaweed Wrap",
        "Cocoa & Coffee Wrap",
        "Hydrating Aloe Vera Wrap",
        "Gold Infusion Wrap",
        "Clay Wrap",
        "Fruit Enzyme Wrap",
        "Vitamin Boost Wrap",
        "Aromatherapy Wrap",
        "Rice Bran Wrap",
        "Chocolate Wrap"],

      "Manicure & Pedicure":
      [
        "Classic Manicure & Pedicure",
        "Gel Manicure & Pedicure",
        "Spa Manicure & Pedicure",
        "French Manicure & Pedicure",
        "Luxury Manicure & Pedicure",
        "Express Manicure & Pedicure",
        "Nail Art & Design",
        "Vegan Manicure & Pedicure",
        "Hybrid Manicure & Pedicure",
        "Japanese Manicure",
        "Paraffin Treatment"
      ],

      "Nail Art & Extensions":[
      "Basic Nail Art",
      "Custom Nail Art",
      "Acrylic Nail Extensions",
      "Gel Nail Extensions",
      "3D Nail Art",
      "French Tip Extensions",
      "Metallic Nail Art",
      "Glitter Nail Art",
      "Water Marble Nail Art",
      "Stiletto Nail Extensions",
      "Ombre Nail Art",
      "Sculptured Nail Art"
    ],

      "Waxing & Hair Removal":
       [  "Eyebrow Waxing",
        "Upper Lip Waxing",
        "Chin Waxing",
        "Full Face Waxing",
        "Underarm Waxing",
        "Bikini Waxing",
        "Brazilian Waxing",
        "Full Leg Waxing",
        "Arm Waxing",
        "Back Waxing"],

      "Threading & Eyebrow Shaping":[
       "Basic Eyebrow Threading",
  "Advanced Eyebrow Threading",
  "Eyebrow Threading with Tinting",
  "Express Eyebrow Threading",
  "Luxury Eyebrow Threading",
  "Customized Eyebrow Shaping",
  "Precision Eyebrow Threading",
  "Organic Eyebrow Threading"
],

      "Eyebrow & Eyelash Tinting":[
      "Eyebrow Tinting",
      "Eyelash Tinting",
      "Eyebrow & Eyelash Combo Tinting"
    ],

      "Detox & Slimming Therapy":
      [
        "Herbal Detox Wrap",
        "Slimming Massage Therapy",
        "Detox & Slimming Combo",
        "Infrared Detox Slimming",
        "Lymphatic Drainage Massage",
        "Cold Therapy Wrap",
        "Body Contouring Wrap",
        "Detox Foot Bath Therapy"
      ],

      "Bridal & Party Packages":
      [
        "Classic Bridal Package",
        "Deluxe Bridal Package",
        "Party Makeup Package",
        "Bridal & Party Combo Package",
        "Pre-Wedding Trial Package",
        "Premium Bridal Package",
        "Glam Bridal Package",
        "On-Location Bridal Party Package",
        "Day-of Touch-Up Package",
        "Express Party Package"
      ]
    }
  };





  return (

    <div className="beauty-contact-container">
      <BeautyNavbar /> 

      <div className="beautyappointment">
        <h1>appointment</h1>
      </div>

    <form onSubmit={handleSubmit}>
      <div>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Contact No:</label>
        <input
          type="tel"
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>City:</label>
        <select name="city" value={formData.city} onChange={handleChange} required>
          <option value="">Select City</option>
          {Object.keys(cities).map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Saloon:</label>
        <select name="saloon" value={formData.saloon} onChange={handleChange} required>
          <option value="">Select Saloon</option>
          {formData.city && cities[formData.city]?.map((saloon, index) => (
            <option key={index} value={saloon}>{saloon}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label>Category:</label>
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          {formData.gender &&
            Object.keys(categories[formData.gender]).map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
        </select>
      </div>
      <div>
        <label>Sub Category:</label>
        <select name="subCategory" value={formData.subCategory} onChange={handleChange} required>
          <option value="">Select Sub Category</option>
          {formData.gender &&
            formData.category &&
            categories[formData.gender][formData.category].map((subCategory, index) => (
              <option key={index} value={subCategory}>{subCategory}</option>
            ))}
        </select>
      </div>
      <div>
      <div>
        <label>Select Date:</label>
        <input type="date" value={appointmentDate} min={today} onChange={(e) => setAppointmentDate(e.target.value)} />
      </div>
      
      <div>
        <label>Select Time:</label>
        <input
          type="time"
          value={appointmentTime}
          onChange={handleTimeChange}
          disabled={!appointmentDate}
          min={appointmentDate === today ? getCurrentTime() : "00:00"}
        />
      </div>

      <button type="submit" className="book-button">Book Appointment</button>
    </div>
    </form>
    </div>
  );
};

export default BeautyContact;
