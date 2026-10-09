export type AboutUs = {
  companyname: string;
  aboutheading: string;
  aboutdescription: string;
  yearsofexperience: number;
  location: string;
  factory: { url: string; alternativeText: string };
  service: { title: string; description: string }[];
  point: { point: string }[];
};

export const about: AboutUs = {
  companyname: "P Square Enterprises",
  aboutheading: "About P Square Enterprises",
  aboutdescription:
    "P Square Enterprises is a trusted manufacturer of cotton knitted hand gloves and supplier of PPE products and cotton waste solutions for industries.",
  yearsofexperience: 7,
  location:
    "60, Mahalakshmi nagar, Cauvery nagar east, Mathakottai road, Thanjavur - 613005, TamilNadu, India.",
  factory: {
    url: "/uploads/home_about_98311813b7.jpg",
    alternativeText: "P Square Enterprises factory",
  },
  service: [
    { title: "gloves", description: "Cotton Knitted Gloves Manufacturing" },
    { title: "PPE", description: "PPE Product Supply" },
    { title: "cotton waste", description: "Cotton Waste Supply" },
  ],
  point: [
    { point: "Quality focused manufacturing" },
    { point: "Bulk supply capability" },
    { point: "Reliable delivery timelines" },
  ],
};
