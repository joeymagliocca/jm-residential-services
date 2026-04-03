import { Helmet } from "react-helmet-async";

const BASE_URL = "https://joeymagliocca.github.io/jm-residential-services";
const BUSINESS_NAME = "JM Residential Services";
const DEFAULT_IMAGE = `${BASE_URL}/images/landscaping.png`;

export default function SEO({ title, description, path = "/", image }) {
  const fullTitle = title
    ? `${title} | ${BUSINESS_NAME}`
    : `Landscaping & Power Washing in Loudoun County, VA | ${BUSINESS_NAME}`;

  const fullDescription =
    description ||
    "Professional landscaping, power washing, driveway sealing & gutter cleaning in Ashburn, Leesburg & Loudoun County, VA. Free estimates. Call (571) 578-1218.";

  const url = `${BASE_URL}/#${path}`;
  const img = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}
