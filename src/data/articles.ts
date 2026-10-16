import type { PhotoKey } from './photos';

/** Advice guides, used for the cards on the home page, FAQs page and at the end of each guide. */
export const articles: { href: string; photo: PhotoKey; tag: string; title: string; text: string }[] = [
  {
    href: '/how-to-reduce-air-conditioning-running-costs',
    photo: 'remoteControl',
    tag: 'Running costs',
    title: 'How to reduce your air conditioning running costs',
    text: 'The right temperature, clean filters and smart use of zones can take a real bite out of your power bills.',
  },
  {
    href: '/what-is-horsepower',
    photo: 'outdoorUnitBracket',
    tag: 'Buying guide',
    title: 'Horsepower vs kW: what you should compare',
    text: 'Why “horsepower” tells you almost nothing, and the one number to ask for instead.',
  },
  {
    href: '/air-conditioning-maintenance-tips',
    photo: 'technicianGauges',
    tag: 'Maintenance',
    title: 'Air conditioning maintenance tips that pay off',
    text: 'Simple jobs that keep your reverse cycle system running efficiently for years to come.',
  },
];
