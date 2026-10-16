/**
 * Business details used across the whole site.
 * Change something here and it updates everywhere (header, footer, contact
 * page, structured data for Google).
 */
export const site = {
  name: 'Factory Direct Home Air Conditioning',
  shortName: 'Factory Direct Home Air',
  url: 'https://www.factorydirecthomeair.com.au',
  description:
    'Family-owned Adelaide air conditioning company. Ducted reverse cycle systems from Samsung, Fujitsu and Hisense, fully installed at factory-direct prices.',
  phone: {
    display: '0432 014 892',
    href: 'tel:+61432014892',
    e164: '+61432014892',
  },
  email: 'sab@fdha.com.au',
  facebook: 'https://www.facebook.com/FactoryDirectHomeAirConditioning',
  region: 'Adelaide, South Australia',
  years: 'over 20 years',
  brands: ['Samsung', 'Fujitsu', 'Hisense'],

  /*
   * Optional details. Leave as an empty string to hide them.
   * As soon as they are filled in they appear in the footer and in the
   * structured data Google reads.
   */
  abn: '',
  arcAuthorisation: '', // ARCtick refrigerant handling authorisation number, e.g. 'AU12345'
  address: '', // e.g. '12 Example Road, Wingfield SA 5013'
  hours: '', // e.g. 'Mon–Fri 8am–5pm'

  /*
   * How the quote form is delivered.
   *  'mailto'   – opens the customer's email app with the request filled in (works anywhere, no setup)
   *  'endpoint' – POST to a form service such as Formspree or Web3Forms; set `endpoint` below.
   *               `hiddenFields` are sent with every request (e.g. Web3Forms needs { access_key: '…' }).
   * If 'endpoint' is chosen but no endpoint is set, the form falls back to 'mailto'.
   */
  quoteForm: {
    provider: 'mailto' as 'mailto' | 'endpoint',
    endpoint: '',
    hiddenFields: {} as Record<string, string>,
  },
};

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: 'Ducted', href: '/ducted-reverse-cycle-air-conditioners' },
  { label: 'Replacements', href: '/air-conditioning-adelaide/ducted-air-conditioning-replacement-units' },
  { label: 'Heating', href: '/heating-your-home' },
  { label: 'Prices', href: '/price-list' },
  { label: 'Advice', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: 'Air conditioning',
    items: [
      { label: 'All services', href: '/home-air-conditioning-adelaide' },
      { label: 'Ducted reverse cycle', href: '/ducted-reverse-cycle-air-conditioners' },
      { label: 'Replacement units', href: '/air-conditioning-adelaide/ducted-air-conditioning-replacement-units' },
      { label: 'Heating your home', href: '/heating-your-home' },
      { label: 'Price list', href: '/price-list' },
    ],
  },
  {
    heading: 'Advice',
    items: [
      { label: 'FAQs', href: '/faqs' },
      { label: 'Reduce running costs', href: '/how-to-reduce-air-conditioning-running-costs' },
      { label: 'What is horsepower?', href: '/what-is-horsepower' },
      { label: 'Maintenance tips', href: '/air-conditioning-maintenance-tips' },
    ],
  },
];
