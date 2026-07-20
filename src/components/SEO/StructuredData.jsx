import { firm, practiceAreas } from '../../data/siteContent';

const StructuredData = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: firm.name,
    founder: {
      '@type': 'Person',
      name: firm.attorneyName,
    },
    url: firm.url,
    logo: firm.logo,
    email: firm.email,
    telephone: firm.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: firm.address.streetAddress,
      addressLocality: firm.address.addressLocality,
      addressRegion: firm.address.addressRegion,
      postalCode: firm.address.postalCode,
      addressCountry: firm.address.addressCountry,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Texas',
    },
    knowsAbout: practiceAreas.map((area) => area.title),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default StructuredData;
