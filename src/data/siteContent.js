export const firm = {
  name: 'Marc J. Fratter Law',
  attorneyName: 'Marc J. Fratter',
  email: 'legal@marcjfratter.com',
  phone: '(469) 782-0166',
  phoneHref: 'tel:+14697820166',
  emailHref: 'mailto:legal@marcjfratter.com',
  url: 'https://marcjfratter.com/',
  logo: '/logo.png',
  brandLogo: '/images/logotipo vertical.png',
  address: {
    label: '101 E Park Blvd Suite 355, Plano, TX 75074',
    streetAddress: '101 E Park Blvd Suite 355',
    addressLocality: 'Plano',
    addressRegion: 'TX',
    postalCode: '75074',
    addressCountry: 'US',
  },
  hours: ['Monday-Saturday: 8 am - 6 pm', 'Sunday: 11 am - 4 pm'],
  location: {
    lat: 33.02979785440171,
    lng: -96.70612097483566,
  },
};

export const navigationLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const heroContent = {
  title: 'Your Legal Shield in Texas',
  titleLines: ['Your Legal', 'Shield in', 'Texas'],
  tagline: 'Tailored legal solutions for your unique case.',
  ctaLabel: 'Call for a Consultation',
  image: {
    webp: '/images/mark2-1100.webp',
    fallback: '/images/mark2.png',
    alt: 'Marc J. Fratter, Texas attorney',
    width: 1100,
    height: 1310,
  },
};

export const practiceAreas = [
  {
    title: 'Criminal Law',
    icon: '/images/handcuffs.png',
    iconAlt: '',
    services: [
      'Probation Violations',
      'DWI/DUI',
      'Drug Crimes',
      'Felonies',
      'Weapon Offenses',
      'Expunctions and Record Sealing',
      'Theft and Property Crimes',
      'Sexual Offenses',
      'Violent Crimes',
    ],
  },
  {
    title: 'Family Law',
    icon: '/images/family-icon.png',
    iconAlt: '',
    services: [
      'Divorce',
      'Child Custody and Visitation',
      'Child and Spousal Support',
      'Prenup Agreements',
      'Restraining Orders',
      'Adoption',
      'Wills, Trusts, Probate',
    ],
  },
  {
    title: 'Civil Law',
    icon: '/images/civil.png',
    iconAlt: '',
    services: [
      'Contract Disputes',
      'Car Accidents',
      'Property Disputes',
      'Sexual Abuse',
      'Mediation',
    ],
  },
];

export const aboutContent = {
  heading: 'About Me',
  image: {
    webp: '/images/mark1-about-cropped.webp',
    fallback: '/images/mark1-about-cropped.png',
    alt: 'Marc J. Fratter standing in a blue suit',
    width: 1200,
    height: 1345,
  },
  paragraphs: [
    "Marc J. Fratter is one of Texas's preeminent criminal defense lawyers, renowned for his relentless dedication to his clients. Marc is a graduate of the Texas A&M School of Law and has been practicing civil law, criminal defense, and family law in the state of Texas for over 20 years.",
    "Marc's extensive experience has enabled him to handle a wide range of legal issues and provide his clients with expert legal advice and representation. He is licensed to practice law in Texas, allowing him to assist clients throughout the state. Marc's areas of expertise include civil law, criminal defense, and family law, and he is dedicated to providing comprehensive legal services in these fields to ensure that his clients receive the best possible outcomes.",
  ],
};

export const contactContent = {
  heading: 'Free Personal Consultation',
  sections: [
    { label: 'Address', values: [firm.address.label] },
    { label: 'Contact', values: [firm.email, firm.phone] },
    { label: 'Open Hours', values: firm.hours },
  ],
};
