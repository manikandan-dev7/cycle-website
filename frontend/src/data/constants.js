export const SHOP = {
  name: "Just Ride Cycles",
  tagline: "Buy • Rent • Explore",
  phone: "098947 74778",
  whatsappNumber: "918947774778",
  address: "Mutt St, Karna Kollai Agraharam, Anna Nagar, Kumbakonam 612001",
  hours: "9 AM – 9 PM · Open 7 days",
  rating: "4.9",
  reviews: "554",
  established: "2018",
  instagram: "https://www.instagram.com/justridecycles",
  facebook: "https://www.facebook.com/justridecycles",
  mapsUrl:
    "https://maps.google.com/?q=Just+Ride+Cycles,+Mutt+St,+Anna+Nagar,+Kumbakonam,+Tamil+Nadu+612001",
  mapsEmbed:
    "https://maps.google.com/maps?q=Just+Ride+Cycles,+Anna+Nagar,+Kumbakonam,+Tamil+Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed",
};

export const WA_BASE = `https://wa.me/${SHOP.whatsappNumber}`;
export const WA_GENERAL = `${WA_BASE}?text=Hi!%20I%20found%20you%20on%20your%20website.%20I%20have%20a%20question%20about%20cycles.`;
export const WA_RENTAL = `${WA_BASE}?text=Hi%2C%20I%20want%20to%20rent%20a%20cycle.%20Please%20share%20availability.`;
export const WA_EXPERT = `${WA_BASE}?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20cycle.%20Can%20you%20guide%20me%3F`;
export const PHONE_LINK = `tel:+91${SHOP.phone.replace(/\s/g, "").slice(1)}`;

export const IMAGES = {
  heroExterior:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85",
  cycleRows:
    "https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=1600&q=80",
  interiorWide:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
  interior2:
    "https://images.unsplash.com/photo-1516912482497-8b452cd44b8a?auto=format&fit=crop&w=1600&q=80",
  logo: "https://images.unsplash.com/photo-1504198266289-1659872e6590?auto=format&fit=crop&w=400&q=80",
  mtbStudio:
    "https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=1600&q=80",
  cityBike:
    "https://images.unsplash.com/photo-1518032922675-c8ac8b3e0eda?auto=format&fit=crop&w=1600&q=80",
  gearDetail:
    "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=80",
  showroomHero:
    "https://images.unsplash.com/photo-1521208918758-7c9318fbbd4d?auto=format&fit=crop&w=1600&q=80",
  kidsBike:
    "https://images.unsplash.com/photo-1696390015881-87746fa8f85f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwyfHxraWRzJTIwYmljeWNsZXxlbnwwfHx8fDE3NzYwMTAwNDJ8MA&ixlib=rb-4.1.0&q=85",
  rentalsBg:
    "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1400&q=80",
  pinkRoadBike:
    "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80",
  yellowMTB:
    "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800&q=80",
  brownBike:
    "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&q=80",
  roadBike2:
    "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80",
};

export const CYCLES = [
  {
    id: 1,
    name: "Hercules Roadeo A50",
    type: "Mountain Bike",
    badge: "Mountain",
    specs: ["21 Speed", "Alloy Frame", "V-Brakes"],
    brand: "Hercules",
    image: IMAGES.mtbStudio,
    badgeColor: "#ea580c",
  },
  {
    id: 2,
    name: "Hero Sprint Pro",
    type: "Road Bike",
    badge: "Road",
    specs: ["18 Speed", "Steel Frame", "Drop Handle"],
    brand: "Hero Cycles",
    image: IMAGES.pinkRoadBike,
    badgeColor: "#0284c7",
  },
  {
    id: 3,
    name: "Firefox Adore 700C",
    type: "Hybrid Cycle",
    badge: "Hybrid",
    specs: ["7 Speed", "Alloy Frame", "City Ready"],
    brand: "Firefox",
    image: IMAGES.cityBike,
    badgeColor: "#7c3aed",
  },
  {
    id: 4,
    name: "Mach City iBike",
    type: "City Commuter",
    badge: "City",
    specs: ["Single Speed", "Lightweight", "Urban"],
    brand: "Mach City",
    image: IMAGES.gearDetail,
    badgeColor: "#ea580c",
  },
  {
    id: 5,
    name: "BSA Ladybird Junior",
    type: "Kids Cycle",
    badge: "Kids",
    specs: ["Age 4–7", "Training Wheels", "Safe"],
    brand: "BSA",
    image: IMAGES.kidsBike,
    badgeColor: "#f59e0b",
  },
  {
    id: 6,
    name: "Hercules Ninja 21S",
    type: "Gear Cycle",
    badge: "Gear",
    specs: ["21 Speed", "Front Suspension", "Trail"],
    brand: "Hercules",
    image: IMAGES.yellowMTB,
    badgeColor: "#ea580c",
  },
];

export const CATEGORIES = [
  {
    name: "Mountain Bikes",
    desc: "Trail ready, built tough",
    image: IMAGES.mtbStudio,
    accentColor: "#ea580c",
  },
  {
    name: "Road Bikes",
    desc: "Speed and distance",
    image: IMAGES.cityBike,
    accentColor: "#0284c7",
  },
  {
    name: "Kids Cycles",
    desc: "Safe first rides, age 3–12",
    image: IMAGES.kidsBike,
    accentColor: "#f59e0b",
  },
  {
    name: "Gear Cycles",
    desc: "Multi-speed, any terrain",
    image: IMAGES.interiorWide,
    accentColor: "#7c3aed",
  },
];

export const GALLERY = [
  { src: IMAGES.heroExterior, alt: "Just Ride Cycles Exterior", tall: false },
  { src: IMAGES.interiorWide, alt: "Showroom Interior", tall: true },
  { src: IMAGES.mtbStudio, alt: "Premium Mountain Bike", tall: false },
  { src: IMAGES.interior2, alt: "Cycle Collection", tall: true },
  { src: IMAGES.cycleRows, alt: "Cycle Display", tall: false },
  { src: IMAGES.cityBike, alt: "City Commuter Bike", tall: false },
];
