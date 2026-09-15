import { googleReviewCollection, verifiedFiveStarReviews } from './googleReviews.js';

export const firm = {
  name: 'Marc J. Fratter Law',
  attorneyName: 'Marc J. Fratter',
  email: 'legal@marcjfratter.com',
  phone: '(469) 782-0166',
  phoneHref: 'tel:+14697820166',
  emailHref: 'mailto:legal@marcjfratter.com',
  url: 'https://marcjfratter.com/',
  logo: '/images/marc-j-fratter-logo.svg',
  brandLogo: '/images/marc-j-fratter-logo.svg',
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
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=101%20E%20Park%20Blvd%20Suite%20355%2C%20Plano%2C%20TX%2075074',
};

export const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const heroContent = {
  title: 'Your Legal Shield in Texas',
  titleLines: ['Your Legal', 'Shield in Texas'],
  tagline: 'Tailored legal solutions for your unique case.',
  ctaLabel: 'Call for a Consultation',
  trustItems: [
    {
      icon: 'shield',
      title: '20+ years',
      description: 'Practicing in Texas',
    },
    {
      icon: 'texas',
      title: 'Texas licensed',
      description: 'Serving clients statewide',
    },
    {
      icon: 'scales',
      title: 'Civil, criminal & family',
      description: 'Established practice areas',
    },
  ],
  image: {
    src: '/images/marc-hero-1100.webp',
    srcSet:
      '/images/marc-hero-480.webp 480w, /images/marc-hero-720.webp 720w, /images/marc-hero-1100.webp 1100w',
    sizes:
      '(max-width: 540px) min(72vw, 15.25rem), (max-width: 767px) min(72vw, 18rem), (max-width: 1100px) 36vw, 34rem',
    alt: 'Marc J. Fratter, attorney at law.',
    width: 1100,
    height: 1711,
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
    icon: '/images/civil-icon.png',
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
    src: '/images/marc-about-1100.webp',
    srcSet:
      '/images/marc-about-600.webp 600w, /images/marc-about-720.webp 720w, /images/marc-about-1100.webp 1100w',
    sizes:
      '(max-width: 540px) min(calc(100vw - 2rem), 21rem), (max-width: 959px) min(88vw, 22rem), min(35vw, 31rem)',
    alt: 'Marc J. Fratter.',
    width: 1100,
    height: 1939,
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

export const reviewContent = {
  eyebrow: 'Client Experience',
  heading: 'Trusted counsel when it matters most.',
  emptyHeading: 'Reviews on Google',
  emptyText: 'Read what clients have shared about working with Marc.',
  emptyCtaLabel: 'Read reviews on Google',
  collection: googleReviewCollection,
  reviews: verifiedFiveStarReviews(googleReviewCollection),
};
