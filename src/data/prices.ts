/**
 * Price list. All prices are "fully installed from" and subject to a site inspection.
 * Edit the numbers here and every price on the site updates.
 */
export type Brand = 'samsung' | 'fujitsu';

export const brandLabels: Record<Brand, string> = {
  samsung: 'Samsung',
  fujitsu: 'Fujitsu',
};

export type Package = {
  id: number;
  kw: number;
  outlets: number;
  zones: number;
  suits: string;
  prices: Record<Brand, number>;
};

/** New ducted inverter systems, supplied and installed. */
export const packages: Package[] = [
  { id: 1, kw: 7, outlets: 4, zones: 2, suits: 'A family area and two bedrooms', prices: { samsung: 7490, fujitsu: 7890 } },
  { id: 2, kw: 10, outlets: 6, zones: 4, suits: 'A large house with four bedrooms', prices: { samsung: 8990, fujitsu: 9490 } },
  { id: 3, kw: 12, outlets: 7, zones: 5, suits: 'A large house', prices: { samsung: 10190, fujitsu: 10790 } },
  { id: 4, kw: 14, outlets: 9, zones: 5, suits: 'A house with four or five bedrooms', prices: { samsung: 11850, fujitsu: 12650 } },
  { id: 5, kw: 16, outlets: 9, zones: 7, suits: 'A house with four or five bedrooms', prices: { samsung: 12950, fujitsu: 13650 } },
];

/** Changeover of an existing ducted system to a new Samsung high-efficiency inverter. */
export const replacements: { kw: number; price: number }[] = [
  { kw: 7, price: 6200 },
  { kw: 8.5, price: 6740 },
  { kw: 10, price: 7070 },
  { kw: 12, price: 7730 },
  { kw: 14, price: 8360 },
  { kw: 15.5, price: 9430 },
];

export const priceNote = 'Fully installed prices. All prices are subject to a site inspection.';

export const formatPrice = (n: number) => '$' + n.toLocaleString('en-AU');

export const lowestPackagePrice = Math.min(...packages.flatMap((p) => Object.values(p.prices)));
export const lowestReplacementPrice = Math.min(...replacements.map((r) => r.price));
