export type Link = { url: string; text: string; isExternal: boolean };

export type FooterData = {
  companyname: string;
  companydescription: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  googlereviewurl: Link;
  googlemap: Link;
};

export const footer: FooterData = {
  companyname: "P Square Enterprises",
  companydescription:
    "We are a leading manufacturer of cotton knitted hand gloves and industrial safety products, committed to quality, durability, and timely delivery across India.",
  location:
    "60, Mahalakshmi nagar, Cauvery nagar east, Mathakottai road, Thanjavur-613005,TamilNadu,India.",
  phone: "+91 9840912665",
  email: "write2psquare@gmail.com",
  website: "www.psquareenterprises.co.in",
  googlereviewurl: {
    url: "https://g.page/r/CWXAkl39Kah4EAE/review",
    text: "Review",
    isExternal: true,
  },
  googlemap: {
    url: "https://www.google.com/maps/place/P+square+enterprises/@10.7548104,79.129364,751m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3baab933e1f44b11:0x78a829fd5d92c065!8m2!3d10.7548104!4d79.129364!16s%2Fg%2F11h6f_bgy9?hl=en&entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D",
    text: "Google Map",
    isExternal: true,
  },
};
