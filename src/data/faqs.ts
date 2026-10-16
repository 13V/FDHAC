/**
 * Frequently asked questions. Answers are plain text (also used for Google's FAQ structured data).
 * `link` adds a "read more" link under the answer.
 */
export type Faq = { q: string; a: string; link?: { href: string; label: string } };

export const faqs: Faq[] = [
  {
    q: 'Do I need to pay a deposit?',
    a: 'No. We don’t take deposits. Once the job is finished your invoice is emailed or posted to you, and there are no extra or hidden costs.',
  },
  {
    q: 'Are the prices on your website the real prices?',
    a: 'Yes. Our price list shows fully installed prices for each package. Every home is a little different, so prices are confirmed at a free site inspection before you go ahead.',
    link: { href: '/price-list', label: 'See the price list' },
  },
  {
    q: 'Which brands do you install?',
    a: 'We supply and install Samsung, Fujitsu and Hisense. They are leading air conditioning brands, known for great prices and outstanding reliability, which is why we recommend them.',
  },
  {
    q: 'How do you work out what size system I need?',
    a: 'We do a heat load calculation for your home and design the zones around how you use it. Living areas usually account for about two-thirds of a home’s heat load, so zoning lets us use a smaller unit than you would need to heat or cool the whole house at once. That saves you money up front and on running costs.',
    link: { href: '/ducted-reverse-cycle-air-conditioners', label: 'How ducted systems work' },
  },
  {
    q: 'Why do you quote in kW and not horsepower?',
    a: 'Horsepower doesn’t tell you how much heating or cooling a unit delivers. The only valid measure is its kW output. Two units sold as “1 horsepower” can put out 2.0 kW or 2.7 kW, so always compare kW.',
    link: { href: '/what-is-horsepower', label: 'Read: what is horsepower?' },
  },
  {
    q: 'Can you replace my old ducted system and keep the ducting?',
    a: 'Yes. Our replacement price covers removing your old unit and supplying and installing a new Samsung high-efficiency inverter: a new indoor fan unit, outdoor unit, refrigeration pipes, control wiring, wall controller and the duct transition to suit the new fan coil. The new unit connects to your existing ducting. Replacing zones or flexible ducting isn’t included.',
    link: { href: '/air-conditioning-adelaide/ducted-air-conditioning-replacement-units', label: 'Replacement prices' },
  },
  {
    q: 'What happens on installation day?',
    a: 'Our tradesmen arrive at 8am and put dust sheets down. They remove your old system, install and connect the new one, then commission and test it. Before they go they show you how to use the new controller, tidy up and take away all the rubbish.',
  },
  {
    q: 'Are your installers licensed and insured?',
    a: 'Yes. Our installers are qualified, licensed, insured and experienced, and every installation is done to the highest standard using quality materials.',
  },
  {
    q: 'What temperature should I set my air conditioner to?',
    a: 'Set it to 24–26°C in summer and 19–21°C in winter. Each degree cooler in summer, or warmer in winter, adds roughly 10% to your running costs.',
    link: { href: '/how-to-reduce-air-conditioning-running-costs', label: 'More ways to cut running costs' },
  },
];
