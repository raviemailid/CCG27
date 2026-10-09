import london from '@/assets/london.jpg';
import helsinki from '@/assets/helsinki.jpg';
import brussels from '@/assets/brussels.jpg';
import amsterdam from '@/assets/amsterdam.jpg';
export const cities = [
  { name: 'London', code: 'LDN', flag: '🇬🇧', image: london, points: 2840, athletes: 82, className: 'city-london' },
  { name: 'Helsinki', code: 'HEL', flag: '🇫🇮', image: helsinki, points: 2560, athletes: 79, className: 'city-helsinki' },
  { name: 'Brussels', code: 'BRU', flag: '🇧🇪', image: brussels, points: 2310, athletes: 81, className: 'city-brussels' },
  { name: 'Amsterdam', code: 'AMS', flag: '🇳🇱', image: amsterdam, points: 2180, athletes: 80, className: 'city-amsterdam' },
];
export type Athlete = { id: number; name: string; city: string; discipline: string; points: number; initials: string };
const names = ['Marcus Johnson','Sophie Williams','Daniel Clarke','Amelia Taylor','Ethan Brooks','Oliver Wilson','Aino Virtanen','Elias Korhonen','Sofia Laine','Mikko Nieminen','Emilia Salonen','Leo Mäkinen','Lucas Peeters','Emma Dubois','Noah Janssens','Mila Laurent','Arthur De Smet','Louis Martin','Daan de Vries','Lotte Bakker','Sem van Dijk','Fleur Visser','Finn Jansen','Eva Smit'];
const disciplines = ['100m Sprint','Long Jump','400m','Javelin Throw','800m','High Jump'];
export const athletes: Athlete[] = names.map((name, i) => ({ id: i + 1, name, city: (cities[Math.floor(i / 6)]?.name || 'London'), discipline: disciplines[i % 6] || '100m Sprint', points: 74 + ((i * 17) % 73), initials: name.split(' ').map(n => n[0]).slice(0,2).join('') }));
export type Team = { id: string; name: string; city: string; athleteIds: number[]; points: number; owned: boolean };
export const starterTeams: Team[] = [
 { id: 'track', name: 'Track_Stars', city: 'London', athleteIds: athletes.slice(0,10).map(a=>a.id), points: 1480, owned: false },
 { id: 'nordic', name: 'Nordic_Stride', city: 'Helsinki', athleteIds: athletes.slice(6,16).map(a=>a.id), points: 1395, owned: false },
 { id: 'lens', name: 'Lens_Runners', city: 'London', athleteIds: [1,2,3,7,8,9,13,14,19,20], points: 1320, owned: true },
 { id: 'brussels', name: 'Brussels_Bolts', city: 'Brussels', athleteIds: athletes.slice(10,20).map(a=>a.id), points: 1275, owned: false },
 { id: 'canal', name: 'Canal_Crew', city: 'Amsterdam', athleteIds: athletes.slice(14,24).map(a=>a.id), points: 1210, owned: false },
 { id: 'finish', name: 'Finish_Line', city: 'Helsinki', athleteIds: athletes.slice(4,14).map(a=>a.id), points: 1185, owned: false },
];
export const canSaveRoster = (ids: number[]) => ids.length === 10 && new Set(ids).size === 10;
export const events = [
 { id: '100m', name: "Men’s 100m Final", city: 'London', status: 'Live', time: 'On track now', discipline: 'Sprint', entrants: '8 athletes' },
 { id: 'long', name: "Women’s Long Jump", city: 'Helsinki', status: 'Upcoming', time: 'Next on track', discipline: 'Jump', entrants: '12 athletes' },
 { id: 'javelin', name: "Men’s Javelin Throw", city: 'Brussels', status: 'Upcoming', time: 'Later today', discipline: 'Throw', entrants: '10 athletes' },
 { id: '400m', name: "Women’s 400m Final", city: 'Amsterdam', status: 'Completed', time: 'Results available', discipline: 'Sprint', entrants: '8 athletes' },
];
