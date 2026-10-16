/**
 * Every photo used on the site, with alt text and where it came from.
 *
 * These are free-licence stock photos (Pexels / Unsplash licences: free for
 * commercial use, no attribution required) used as placeholders. Swap in real
 * photos of your own team, vans and installs whenever you can: drop the file
 * into src/assets/photos and point the entry below at it.
 */
import type { ImageMetadata } from 'astro';

import outdoorUnitSky from '../assets/photos/outdoor-unit-sky.jpg';
import technicianOutdoorUnit from '../assets/photos/technician-outdoor-unit.jpg';
import technicianGauges from '../assets/photos/technician-gauges.jpg';
import technicianIndoor from '../assets/photos/technician-indoor.jpg';
import ceilingDiffuser from '../assets/photos/ceiling-diffuser.jpg';
import livingRoomSplit from '../assets/photos/living-room-split.jpg';
import livingRoomBright from '../assets/photos/living-room-bright.jpg';
import thermostatWoman from '../assets/photos/thermostat-woman.jpg';
import remoteControl from '../assets/photos/remote-control.jpg';
import adelaideAerial from '../assets/photos/adelaide-aerial.jpg';
import dogSofa from '../assets/photos/dog-sofa.jpg';
import outdoorUnitBrick from '../assets/photos/outdoor-unit-brick.jpg';
import outdoorUnitsPair from '../assets/photos/outdoor-units-pair.jpg';
import hisenseOutdoorUnit from '../assets/photos/hisense-outdoor-unit.jpg';
import splitDisplay from '../assets/photos/split-display.jpg';
import outdoorUnitBracket from '../assets/photos/outdoor-unit-bracket.jpg';

export type Photo = { src: ImageMetadata; alt: string; source: string; position?: string };

export const photos = {
  outdoorUnitSky: {
    src: outdoorUnitSky,
    alt: 'Outdoor air conditioning unit mounted on a white wall under a clear blue sky',
    source: 'https://www.pexels.com/photo/39318564/',
    position: '62% 50%',
  },
  technicianOutdoorUnit: {
    src: technicianOutdoorUnit,
    alt: 'Technician connecting the refrigerant lines on an outdoor air conditioning unit',
    source: 'https://www.pexels.com/photo/5463576/',
    position: '50% 40%',
  },
  technicianGauges: {
    src: technicianGauges,
    alt: 'Technician checking refrigerant pressures with a manifold gauge',
    source: 'https://www.pexels.com/photo/6471912/',
    position: '50% 70%',
  },
  technicianIndoor: {
    src: technicianIndoor,
    alt: 'Technician working on an air conditioning system indoors',
    source: 'https://www.pexels.com/photo/32588555/',
    position: '50% 35%',
  },
  ceilingDiffuser: {
    src: ceilingDiffuser,
    alt: 'Round ducted air conditioning outlet in a white ceiling',
    source: 'https://www.pexels.com/photo/36248286/',
  },
  livingRoomSplit: {
    src: livingRoomSplit,
    alt: 'Modern living room with a wall-mounted split system air conditioner above the sofa',
    source: 'https://www.pexels.com/photo/6588599/',
  },
  livingRoomBright: {
    src: livingRoomBright,
    alt: 'Bright living room with a sofa, indoor plants and a split system air conditioner',
    source: 'https://www.pexels.com/photo/6914713/',
  },
  thermostatWoman: {
    src: thermostatWoman,
    alt: 'Woman adjusting the temperature on a wall controller at home',
    source: 'https://www.pexels.com/photo/36730582/',
    position: '70% 50%',
  },
  remoteControl: {
    src: remoteControl,
    alt: 'Hand pointing a remote control at a split system air conditioner',
    source: 'https://www.pexels.com/photo/16695385/',
  },
  adelaideAerial: {
    src: adelaideAerial,
    alt: 'Aerial view of a seaside Adelaide suburb on a sunny day',
    source: 'https://www.pexels.com/photo/36875521/',
  },
  dogSofa: {
    src: dogSofa,
    alt: 'Dog relaxing on a sofa at home in Adelaide',
    source: 'https://www.pexels.com/photo/14246256/',
    position: '50% 45%',
  },
  outdoorUnitBrick: {
    src: outdoorUnitBrick,
    alt: 'Outdoor air conditioning unit against a dark brick wall',
    source: 'https://images.unsplash.com/photo-1718203862467-c33159fdc504',
  },
  outdoorUnitsPair: {
    src: outdoorUnitsPair,
    alt: 'Two outdoor air conditioning units side by side',
    source: 'https://images.unsplash.com/photo-1709432767122-d3cb5326911a',
  },
  hisenseOutdoorUnit: {
    src: hisenseOutdoorUnit,
    alt: 'Hisense outdoor air conditioning unit on a brick wall',
    source: 'https://images.unsplash.com/photo-1722131646940-b821a6cc6252',
  },
  splitDisplay: {
    src: splitDisplay,
    alt: 'Split system air conditioner showing 22 degrees on its display',
    source: 'https://images.unsplash.com/photo-1762341123870-d706f257a12e',
  },
  outdoorUnitBracket: {
    src: outdoorUnitBracket,
    alt: 'Outdoor air conditioning unit mounted on a wall bracket under an eave',
    source: 'https://images.unsplash.com/photo-1757219525975-03b5984bc6e8',
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
