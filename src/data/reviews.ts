/** Customer reviews, reproduced word for word. `pull` is a verbatim excerpt used as the headline. */
export type Review = { name: string; pull: string; context: string; text: string };

export const reviews: Review[] = [
  {
    name: 'Maryke',
    pull: 'If you want top service and a very fair price.',
    context: 'Fujitsu ducted · 7 outlets · 4 zones',
    text: 'Brian gave a great quote. Was on time and did a thorough quote based on my needs. The installation was top notch. Took a little longer than anticipated but everything was left clean and tidy. Had a Fujitsu reverse cycle system installed with 7 outlets and 4 zones. Brian worked out the zones brilliantly. System is quiet and efficient. I would recommend them for sure. If you want top service and a very fair price.',
  },
  {
    name: 'Rick Schultz',
    pull: 'Thank you for turning a horrible experience into a positive one.',
    context: 'Ducted install · 100+ year old home',
    text: 'After another company failed to finish our ducted install on our 100+ year old home, leaving just the vents installed, Brian came out and quoted us. His Team are fantastic, he was quick to come out, quote us and install. Highly recommend them and thank you for turning a horrible experience into a positive one.',
  },
  {
    name: 'Barry Blundell',
    pull: 'Price was competitive and did an inspection on the same day.',
    context: 'Ducted install · quoted Monday, installed Thursday',
    text: 'A very good company. Called them on Monday they send me a quote. Price was competitive and did an inspection on the same day, by Thursday our new ducted air condition was installed. The installers came in on time and was friendly. Would highly recommend this company.',
  },
  {
    name: 'Sally & Neville Clarke',
    pull: 'Fantastic customer service.',
    context: 'Ducted replacement',
    text: 'We are writing to congratulate you and your installation team on their fantastic customer service. Having one old air-conditioner removed and a replacement air-conditioning system installed can be a massive ‘upheaval’. However, your installation team showed the utmost respect to us and our property and there was minimal mess mainly due to the conscientiousness of your guys’ work ethic. We particularly appreciated the plastic box under where the ceiling holes were being cut in! Even at the end, in the rain, they cleaned and removed all the rubbish, packaging, boxes etc. The autumn weather has only enabled us to try the air-conditioner just a little while but it is works beautifully and you can be assured we will recommend you to friends and family for their air-conditioning needs.',
  },
];
