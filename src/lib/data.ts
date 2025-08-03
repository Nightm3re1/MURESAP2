
import type { Apartment, AmenityKey } from '@/types';
import { Wifi, Thermometer, CarFront, MessageCircle, CigaretteOff, Users, BedDouble, Percent, CalendarDays } from 'lucide-react';
import { TerraceIcon } from '@/components/icons/terrace-icon';
import { ElevatorIcon } from '@/components/icons/elevator-icon';
import type { LucideIcon } from 'lucide-react';

// Define a helper type for localized strings if not already globally available
interface LocalizedPair {
  en: string;
  ro: string;
}
// This is the effective structure for testimonials in pageSpecificTestimonials
interface TestimonialEntry {
  id: number;
  name: string;
  role: LocalizedPair;
  company: LocalizedPair; // Represents country
  content: { en: string; ro: string }; // Stays as is
  rating: number;
  avatar: string;
  durationInfo: LocalizedPair; // Made non-optional as all entries have it
}


// --- DATA BUNDLE FOR COSY APARTMENT I ---
const cosyApartmentIDataBundle = {
  details: {
    id: '1',
    slug: 'cosy-apartment-i',
    name: {
      ro: 'Cosy Apartment I',
      en: 'Cosy Apartment I',
    },
    teaser: {
      ro: 'Modern, confortabil, cu terasă și parcare privată. Perfect pentru o ședere memorabilă.',
      en: 'Modern, comfortable, with a terrace and private parking. Perfect for a memorable stay.',
    },
    description: {
      ro: `Evadează în inima Transilvaniei cu o ședere la Cosy Apartment I, în fermecătorul Târgu Mureș, unde confortul modern se îmbină armonios cu frumusețea naturii. Fie că vii în interes de serviciu, pentru o escapadă romantică sau o vacanță în familie, acest apartament cu un dormitor îți oferă tot ce ai nevoie pentru o experiență memorabilă. **În plus, ai acces rapid la Platoul Cornești, o atracție emblematică a orașului.**\n\nRefugiu cu un dormitor, living primitor, bucătărie complet echipată, balcon și terasă însorită, baie spa (duș și cadă + articole de toaletă gratuite), aer condiționat, TV cu ecran plat, prosoape și lenjerie de calitate premium și parcare privată gratuită.\n\nPuncte Forte ale Apartamentului\nSpațiu Luminat și Generos: Relaxează-te în livingul mobilat cu gust, cu fotolii confortabile, iluminat ambiental și TV cu ecran plat — locul ideal pentru a te destinde după o zi plină de explorări.\nBucătărie Complet Utilată: Dezvoltă-ți talentul culinar într-o bucătărie modernă, cu electrocasnice din inox, frigider mare, plită și espressor de cafea. Setul complet de veselă, tacâmuri și ustensile îți permite să pregătești totul, de la un mic dejun rapid la o cină rafinată.\nDormitor Odihnitor: Cufundă-te într-un pat queen-size cu lenjerie de înaltă calitate și bucură-te de spațiul generos din dulap pentru bagajele tale.\nBaie în Stil Spa: Reîmprospătează-te sub un duș modern sau relaxează-te în cadă. Prosoapele pufoase, articolele de toaletă premium și uscătorul de păr adaugă o notă de răsfăț.\n\nFacilități Incluse\nWi-Fi Ultraperformant Gratuit: Fie că urmărești seriale, participi la conferințe video sau lucrezi de la distanță, conexiunea noastră stabilă și rapidă te menține online fără efort.\nParcare Privată Gratuită: Beneficiază de locul nostru de parcare securizat, inclus în tariful șederii, pentru liniștea ta.\nTerasă Cochetă: Savurează o cafea de dimineață în aer liber sau un aperitiv la apus pe mica terasă însorită, înconjurată de verdeață.\n\nAtracții și Facilități în Apropiere\nParcuri și Spații Verzi\nParcul Amoniei: 700 m\nBulevardul Cetății (Parc): 1,4 km\nParcul Mihai Eminescu: 1,8 km\nPlatoul Cornești & Grădina Zoologică: 1,9 km\n\nShopping\nShopping City Târgu Mureș: 1,5 km\n\nRestaurante și Cafenele\nSushi Master: 100 m\nThai Kitchen: 100 m\nFresca: 800 m\nCrown Coffee: 800 m\nFast Food Pofte: 800 m\nRexo Lounge: 1 km\n\nTransport Public\nStație de autobuz: 100 m\nGara Târgu Mureș Nord: 2,5 km\n\nAeroport\nAeroportul Transilvania Târgu Mureș: 18 km`,
      en: `Escape to the heart of Transylvania with a stay at Cosy Apartment I in charming Târgu Mureş—where modern comfort meets serene outdoor living. Whether you’re here on business, a romantic getaway, or a family retreat, our one-bedroom haven offers everything you need for an unforgettable visit. **Notably, it offers quick access to Platoul Cornești, a key Târgu Mureș attraction.**\n\nOne-bedroom haven with a living room, fully equipped kitchen, balcony & terrace, bathroom (shower & tub + free toiletries), AC, flat-screen TV, free towels & linens, and complimentary private parking.\n\nApartment Highlights\nBright, Spacious Living: Unwind in the tastefully furnished living room, complete with plush seating, ambient lighting, and a flat-screen TV—perfect for catching up on your favorite shows after a day of exploring.\nFully Equipped Kitchen: Channel your inner chef in a sleek, contemporary kitchen featuring stainless steel appliances, a full-size fridge, stovetop, and coffee machine. Essential cookware, dinnerware, and utensils are thoughtfully provided so you can craft anything from a quick breakfast to a gourmet dinner.\nRestful Bedroom: Drift off on a premium queen-sized bed dressed in high-thread-count linens. Ample wardrobe space to store your favorite clothing.\nSpa-Style Bathroom: Refresh in a modern shower. Crisp towels, luxurious toiletries, and a hairdryer add those finishing touches of hotel-style pampering.\n\nComplimentary Perks\nComplimentary High-Speed Wi-Fi: Whether you’re streaming your favorite playlists, Zoom-calling loved ones, or handling last-minute work, our lightning-fast internet keeps you connected without interruption.\nFree Private Parking: Drive in and relax—our secure on-site parking space is included at no extra cost, giving you peace of mind throughout your stay.\nTerrace: Step outside to discover a cute, petite sun-dappled terrace. Sip your morning coffee al fresco or delight in a sunset aperitif surrounded by nature.\n\nWhat’s Nearby\nAttractions & Parks\nParcul Amoniei: 700 m\nParcul Bulevardul Cetății: 1.4 km\nShopping City Tg Mureș: 1.5 km\nParcul Mihai Eminescu: 1.8 km\nPlatoul Cornești & Grădina Zoologică: 1.9 km\n\nRestaurants and Cafés\nSushi Master: 100 m\nFresca: 800 m\nCrown Coffee: 800 m\nFast Food Pofte: 800 m\nRexo Lounge: 1 km\nThai Kitchen: 100 m\n\nPublic Transport\nBus station: 100 m\nGara Târgu Mureș Nord train station: 2.5 km\n\nAirport\nAeroportul Transilvania Târgu Mureș: 18 km`,
    },
    images: [
      'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFLPDvkMUgw3MvmFJTykEq9dAGahsc10BiYNXp',
      'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFK0fXieWGsEtzgdwjMhBYD293WOZJoQkLVmT8',
      'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFoXkNQHV256DpVbsJUKHmeliGq9vCaMSy74To',
    ],
    amenities: ['wifi', 'ac', 'parking', 'elevator', 'whatsappSupport', 'familyRooms', 'nonSmokerRooms', 'terraceBalcony'],
    address: 'Strada Gloriei, Târgu Mureș',
    mapPlaceholderImage: 'https://picsum.photos/seed/map-cosy-i/600/400',
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d171.52457712726613!2d24.579299876776883!3d46.53990745981693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s!5e0!3m2!1sen!2sro&hl=en&theme=dark",
    ctaText: {
      ro: 'Cosy Apartment I te așteaptă!',
      en: 'Cosy Apartment I awaits you!',
    },
    displayType: 'stack3d',
  },
  galleryImages: [
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFGf4C4PaIcwXlbkuiJj27QmdnvEy8pDfSZqrT",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFM9nBgHCgxBEGyFPY2VOZs4ca5Tq6dhmKN7in",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFoi2y33tV256DpVbsJUKHmeliGq9vCaMSy74T",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTF11rCdQvIYfwG49WDrCXoQyAmiLts763HhFUS",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFBolBZMLd13ukoCVdsWZzShTAqbRewvmtIxMP",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFhB74jnwtP0I8RxmfGQKD3VeEj7FvbBCYXd96",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFywwmktHmOEehQLxYfHl3IpuGjtk6BvKowcWP",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFy1ilbKHmOEehQLxYfHl3IpuGjtk6BvKowcWP",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTF8U5yGK2LNf9SFwgnJGai7qpjUQ2PsE8ZcCz5",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFafvhtsO5Hvxi63zgV9bUIL4Ylry2kWt8GARa",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFRs09Pto8hVY53PpfNSrangBjuGFMeH7KQAEw",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFT3ZWKgctzpG1QVfvEAY2wTqoR4a6hB9XcUOI",
  ],
  testimonials: [
    { id: 1, name: "Maria", role: { en: "Family", ro: "Familie" }, company: { en: "Romania", ro: "România" }, content: { en: "The apartment was exceptionally spacious and outfitted with every conceivable amenity. The cleanliness was impeccable, and our host was unfailingly gracious. Any extra requests were met promptly and with genuine warmth. Though situated near a busy road, we adapted swiftly and slept soundly from the second night onwards; we shall most certainly return!", ro: "Apartamentul a fost excepțional de spațios și dotat cu toate facilitățile posibile. Curățenia a fost impecabilă, iar gazda noastră a fost mereu amabilă. Orice solicitare suplimentară a fost îndeplinită prompt și cu o căldură autentică. Deși situat lângă un drum aglomerat, ne-am adaptat rapid și am dormit profund începând cu a doua noapte; cu siguranță vom reveni!" }, rating: 5, avatar: "https://placehold.co/100x100.png", dataAiHint: "profile photo", durationInfo: { en: "3 nights (January 2025)", ro: "3 nopți (Ianuarie 2025)" } },
    { id: 2, name: "Petruse", role: { en: "Family", ro: "Familie" }, company: { en: "Germany", ro: "Germania" }, content: { en: "Our hosts proved to be remarkably friendly and attentive from the moment we arrived. Every interaction felt sincere, and their warm hospitality made our stay all the more enjoyable. The atmosphere was pleasantly tranquil, and we felt perfectly at ease throughout. I would gladly return—many thanks for such a delightful experience!", ro: "Gazdele noastre s-au dovedit a fi remarcabil de prietenoase și atente încă din momentul sosirii. Fiecare interacțiune a părut sinceră, iar ospitalitatea lor caldă ne-a făcut șederea cu atât mai plăcută. Atmosfera a fost plăcut de liniștită și ne-am simțit perfect în largul nostru pe tot parcursul. M-aș întoarce cu plăcere – multe mulțumiri pentru o experiență atât de încântătoare!" }, rating: 5, avatar: "https://placehold.co/100x100.png", dataAiHint: "profile picture", durationInfo: { en: "2 nights (May 2024)", ro: "2 nopți (Mai 2024)" } },
    { id: 3, name: "Árpád", role: { en: "Couple", ro: "Cuplu" }, company: { en: "Hungary", ro: "Ungaria" }, content: { en: "We relished the expansive terrace and the fresh, modern design of the building. Parking was effortless, and the elevator provided seamless access to our floor. The bed was supremely comfortable, and ingenious extras—like the multi-plug extender—proved invaluable. The serene neighbourhood lent a genuine feeling of home, rendering our stay utterly flawless.", ro: "Ne-am bucurat de terasa spațioasă și de designul proaspăt și modern al clădirii. Parcarea a fost fără efort, iar liftul a asigurat acces facil la etajul nostru. Patul a fost extrem de confortabil, iar dotările ingenioase – precum prelungitorul cu multiple prize – s-au dovedit de neprețuit. Cartierul liniștit a conferit o senzație autentică de acasă, făcând șederea noastră absolut impecabilă." }, rating: 5, avatar: "https://placehold.co/100x100.png", dataAiHint: "user avatar", durationInfo: { en: "2 nights (July 2022)", ro: "2 nopți (Iulie 2022)" } },
    { id: 4, name: "Mary", role: { en: "Solo Traveller", ro: "Călător Solo" }, company: { en: "United Kingdom", ro: "Regatul Unit" }, content: { en: "As a solo traveller, I was met with exceptional kindness that made me feel truly cared for. The flat was both spacious and supremely comfortable, complete with every convenience I could wish for. The check-in process was seamless, and thoughtful touches throughout added a personal charm. My experience was outstanding, and I would not hesitate to stay here again.", ro: "Ca și călător solo, am fost întâmpinată cu o bunătate excepțională, care m-a făcut să mă simt cu adevărat îngrijită. Apartamentul a fost atât spațios, cât și extrem de confortabil, dotat cu toate facilitățile pe care mi le-aș fi putut dori. Procesul de check-in a fost impecabil, iar detaliile atent alese au adăugat un farmec personal. Experiența mea a fost remarcabilă și nu aș ezita să revin aici." }, rating: 5, avatar: "https://placehold.co/100x100.png", dataAiHint: "person image", durationInfo: { en: "3 nights (June 2022)", ro: "3 nopți (Iunie 2022)" } },
    { id: 5, name: "Hanna", role: { en: "Family", ro: "Familie" }, company: { en: "Ukraine", ro: "Ucraina" }, content: { en: "Our seven-night stay surpassed every expectation: the property was spotless, supremely comfortable, and comprehensively equipped. The host’s kindness and attentiveness ensured that all our needs were met without fail. Although some traffic noise was audible on our first evening, it soon became unnoticeable, and we enjoyed uninterrupted rest thereafter. Overall, an impeccable experience—we eagerly anticipate our next visit!", ro: "Șederea noastră de șapte nopți a depășit orice așteptare: proprietatea a fost impecabilă, extrem de confortabilă și complet echipată. Amabilitatea și atenția gazdei au asigurat că toate nevoile noastre au fost îndeplinite fără greș. Deși în prima seară s-a auzit ceva zgomot de trafic, acesta a devenit curând imperceptibil și ne-am bucurat de odihnă neîntreruptă ulterior. Per total, o experiență impecabilă – așteptăm cu nerăbdare următoarea vizită!" }, rating: 5, avatar: "https://placehold.co/100x100.png", dataAiHint: "guest photo", durationInfo: { en: "7 nights (February 2025)", ro: "7 nopți (Februarie 2025)" } },
  ],
  pricing: {
    priceDetails: {
      en: { pricePerNight: 40, currencySymbol: "€" },
      ro: { pricePerNight: 200, currencySymbol: "RON" },
    },
    icon: BedDouble, tierNameKey: "Pricing.nightlyRate", descriptionKey: "Pricing.nightlyDescription",
    features: [{ nameKey: "Pricing.sleepsGuests", included: true }, { nameKey: "Pricing.fullAccess", included: true }, { nameKey: "Pricing.allAmenities", included: true }, { nameKey: "Pricing.flexibleCheckInOut", included: true },],
    bookNowButtonTextKey: "Pricing.bookNow",
    discountButtonTextKey: "Pricing.checkDiscounts",
  }
};

// --- DATA BUNDLE FOR COSY APARTMENT II ---
const cosyApartmentIIDataBundle = {
  details: {
    id: '2',
    slug: 'cosy-apartment-ii',
    name: {
      ro: 'Cosy Apartment II',
      en: 'Cosy Apartment II',
    },
    teaser: {
      ro: 'Chic și confortabil, situat ultracentral, ideal pentru cupluri sau exploratori solo.',
      en: 'Chic and comfortable, centrally located, ideal for couples or solo explorers.',
    },
    description: {
      ro: `Cosy Apartment II – refugiul tău elegant cu un dormitor și aer condiționat în inima vibrantă a Târgu-Mureșului. Ideal pentru cupluri, călători solitari sau persoane în interes de afaceri, care caută confort, acces facil și un strop de farmec transilvănean. **Amplasat convenabil în apropierea Centrului Medical Nova Vita și a Top Med Medical Center, perfect pentru oaspeții care au nevoie de servicii medicale.**\n\nApartament cu un dormitor, living primitor, bucătărie complet utilată, balcon și terasă, baie spa (duș și cadă + uscător de păr și articole de toaletă gratuite), aer condiționat, TV cu ecran plat, prosoape și lenjerie de pat incluse, plus parcare privată gratuită.\n\nPuncte Forte ale Apartamentului\nLiving Luminat și Aerisit: Relaxați-vă în camera de zi însorită, mobilată cu gust și adaptată atât pentru odihnă, cât și pentru lucru.\nBucătărie Complet Utilată: Pregătiți‐vă mâncărurile preferate în bucătăria modernă, dotată cu frigider spațios, plită, espressor de cafea și toate ustensilele necesare.\nBaie în Stil Spa: Răsfățați‐vă cu un duş revigorant sau o baie în cadă, prosoape pufoase și articole de toaletă premium, plus uscător de păr pentru confort suplimentar.\nTerasă Privată: Savurați o cafea de dimineață sau un pahar de vin seara, într-un cadru liniștit, cu vedere spre cartier.\n\nFacilități Incluse\nWi-Fi Ultraperformant Gratuit: Conexiune stabilă și rapidă pentru streaming, conferințe video sau browsing fără întreruperi.\nParcare Privată Gratuită: Loc de parcare securizat la fața locului, fără costuri suplimentare.\nRecepție 24/7: Echipa noastră este disponibilă non-stop pentru orice solicitare.\n\nAtracții și Facilități în Apropiere\nParcuri și Spații Verzi\nParc Depozitelor: 600 m\nParcul Trecătorul: 650 m\nPiața Trandafirilor (Roses Square): 1,5 km\nTroița Eroilor Martiri: 2 km\nStatuia Avram Iancu: 2,6 km\n\nCentre Medicale & Útilități\nNova Vita Medical Center: 1,4 km\nTop Med Medical Center: 1,5 km\n\nRestaurante și Cafenele\nComplex Kaufland: 200 m\nPetry Urban Grill: 150 m\nCasa Petrina Pizza & Pasta To Go: 300 m\nCoyote Risto-Pub: 400 m\n\nTransport Public\nStație de autobuz: 200 m\nGara Târgu-Mureș: 500 m\n\nAeroport\nAeroportul Transilvania Târgu-Mureș: 14 km`,
      en: `Cosy Apartment II – Your stylish, air-conditioned one-bedroom retreat in vibrant Târgu Mureș. Perfect for couples, solo explorers or business travelers seeking comfort, convenience and a touch of Transylvanian charm. **Conveniently located near Nova Vita Medical Center and Top Med Medical Center, perfect for guests requiring such services.**\n\nOne-bedroom retreat with a living room, fully equipped kitchen, balcony & terrace, bathroom (shower & tub + hairdryer & free toiletries), AC, flat-screen TV, free towels & linens, and complimentary private parking.\n\nApartment Highlights\nBright & Airy Living: Relax in your sunlit bedroom and living area, thoughtfully furnished for work or leisure.\nFully Equipped Kitchen: Cook up your favorites with a full-size fridge, stovetop, coffee maker and all the cookware you need.\nSpa-Style Bathroom: Soothe tired muscles in the bathtub, freshen up with complimentary toiletries and fluffy towels, and style your hair with the provided hairdryer.\nPrivate Terrace: Sip your morning espresso or evening wine al fresco, enjoying views of the friendly neighborhood.\n\nComplimentary Perks\nComplimentary High-Speed Wi-Fi: Enjoy free high-speed WiFi.\nFree Private Parking: Private parking at no extra charge.\n24/7 Reception: Our 24/7 reception team is ready to assist.\n\nWhat’s Nearby\nAttractions & Parks\nParc Depozitelor: 600 m\nParcul Trecătorul: 650 m\nRoses Square: 1.5 km\nTroița Eroilor Martiri: 2 km\nStatue of Avram Iancu: 2.6 km\n\nMedical & Convenience\nNova Vita Medical Center: 1.4 km\nTop Med Medical Center: 1.5 km\n\nRestaurants & Cafés\nKaufland Complex: 200 m\nPetry Urban Grill: 150 m\nCasa Petrina Pizza & Pasta To Go: 300 m\nCoyote Risto-Pub: 400 m\n\nPublic Transport\nBus station: 200 m\nGara Târgu Mureș (Train Station): 500 m\n\nAirport\nTransylvania Târgu Mureș Airport: 14 km`,
    },
    images: [
      'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTF1G8oSnvIYfwG49WDrCXoQyAmiLts763HhFUS',
      'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFTKF8A5nctzpG1QVfvEAY2wTqoR4a6hB9XcUO',
      'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFHIcDowlojmLS0cW7K4ONPeRCA9Enxu2gVwFv',
    ],
    amenities: ['wifi', 'ac', 'parking', 'elevator', 'whatsappSupport', 'familyRooms', 'nonSmokerRooms', 'terraceBalcony'],
    address: 'Strada Gheorghe Doja, Târgu Mureș',
    mapPlaceholderImage: 'https://placehold.co/600x400.png',
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d540.7633543184908!2d24.54279499219609!3d46.52741030240085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s!5e0!3m2!1sen!2sro&hl=en&theme=dark",
    displayType: 'stack3d',
    ctaText: {
      ro: 'Cosy Apartment II vă așteaptă!',
      en: 'Cosy Apartment II awaits you!',
    }
  },
  galleryImages: [
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFSna2DtTU0zpJ9gqwLu6RkMKfa5O2nZX1irhF",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTF8UfaJX2LNf9SFwgnJGai7qpjUQ2PsE8ZcCz5",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFMfO8vjeCgxBEGyFPY2VOZs4ca5Tq6dhmKN7i",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTF9Q7nsQ3gp3EdR5vrYMPQbsODtjc8uwTWJ0hZ",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFwdXWX00YJK2xuPVUNGyM3Yf6CwiIp0RgTQEj",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFWhqJ6rG1qn8OJPyQTZ6WGUe9dbKEIHisXYfV",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFOF0qrgUE84k1MF2IeLZUEzmatJyYPl5W0NHf",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFlk2Qjcg8Kija57Zx68c2TSV1YPmU3LMWQAyH",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFm5cEmz9vaiTF8hDNSy4YntU0Z5EwbGgoWlkR",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFTZSto7ctzpG1QVfvEAY2wTqoR4a6hB9XcUOI",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTF9TH7cC3gp3EdR5vrYMPQbsODtjc8uwTWJ0hZ",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFjylNc7f2g1wOTneuJYRU4cfHatvEF59AbV8o"
  ],
  testimonials: [
    { id: 1, name: "Ioana", role: { en: "Family", ro: "Familie" }, company: { en: "Romania", ro: "România" }, content: { en: "The apartment was delightfully spacious and spotlessly clean, equipped with every essential for an enjoyable stay and featuring a generously proportioned, highly practical balcony. Nestled in a tranquil neighbourhood, it nonetheless offers easy access to numerous restaurants and supermarkets. I was particularly impressed by the host’s prompt assistance and warm hospitality. The seamless communication and thoughtful touches made our visit truly comfortable. We will gladly return!", ro: "Apartamentul a fost încântător de spațios și impecabil de curat, dotat cu toate cele necesare pentru o ședere plăcută și având un balcon generos și foarte practic. Situat într-un cartier liniștit, oferă totuși acces facil la numeroase restaurante și supermarketuri. Am fost deosebit de impresionată de asistența promptă și ospitalitatea caldă a gazdei. Comunicarea impecabilă și atenția la detalii ne-au făcut vizita cu adevărat confortabilă. Vom reveni cu drag!" }, rating: 5, avatar: "https://placehold.co/100x100.png", dataAiHint: "profile photo", durationInfo: { en: "3 nights (October 2024)", ro: "3 nopți (Octombrie 2024)" } },
    { id: 2, name: "Dan", role: { en: "Family", ro: "Familie" }, company: { en: "Romania", ro: "România" }, content: { en: "This generously sized apartment was impeccably clean and fully furnished, complete with modern conveniences such as an elevator and private on-site parking. Its proximity to a major shopping centre added to the convenience, while the flexible check-in process suited our schedule perfectly. Our hosts were exceptionally accommodating and attentive throughout our stay. The blend of space, comfort, and ease of access made this an ideal choice for our family getaway. We would not hesitate to book again!", ro: "Acest apartament generos ca dimensiuni a fost impecabil de curat și complet mobilat, dotat cu facilități moderne precum lift și parcare privată la proprietate. Apropierea de un centru comercial important a adăugat la comoditate, în timp ce procesul flexibil de check-in s-a potrivit perfect programului nostru. Gazdele noastre au fost excepțional de primitoare și atente pe parcursul șederii. Combinația de spațiu, confort și ușurință în acces a făcut din acesta o alegere ideală pentru escapada noastră în familie. Nu am ezita să rezervăm din nou!" }, rating: 5, avatar: "https://placehold.co/100x100.png", dataAiHint: "profile picture", durationInfo: { en: "6 nights (November 2023)", ro: "6 nopți (Noiembrie 2023)" } },
    { id: 3, name: "Moga", role: { en: "Family", ro: "Familie" }, company: { en: "Romania", ro: "România" }, content: { en: "Perfectly situated beside Kaufland and a variety of retail outlets—including KFC, Mol petrol station, and Pepco—and just a ten-minute drive from the city centre, this property offers unrivalled convenience for guests arriving by car. The monitored parking area, accessible via barrier, provided peace of mind at all hours. Inside, the flat was pleasantly spacious and well maintained, with every facility at our disposal. The host’s responsiveness and attentiveness were truly outstanding. We couldn’t have asked for a better base!", ro: "Perfect situată lângă Kaufland și o varietate de magazine – inclusiv KFC, benzinăria Mol și Pepco – și la doar zece minute de mers cu mașina de centrul orașului, această proprietate oferă o comoditate de neegalat pentru oaspeții care sosesc cu mașina. Zona de parcare monitorizată, accesibilă prin barieră, a oferit liniște sufletească la orice oră. În interior, apartamentul a fost plăcut de spațios și bine întreținut, cu toate facilitățile la dispoziția noastră. Reactivitatea și atenția gazdei au fost cu adevărat remarcabile. Nu ne-am fi putut dori o bază mai bună!" }, rating: 5, avatar: "https://placehold.co/100x100.png", dataAiHint: "user avatar", durationInfo: { en: "4 nights (December 2022)", ro: "4 nopți (Decembrie 2022)" } },
    { id: 4, name: "Domnica", role: { en: "Family", ro: "Familie" }, company: { en: "United Kingdom", ro: "Regatul Unit" }, content: { en: "This accommodation was pristine and exceptionally comfortable, thoughtfully appointed with every amenity necessary for a cosy family retreat. The private parking space added a welcome layer of convenience, and the efficient access routes made journeys to and from the airport effortless. Generous living spaces and a well-equipped kitchen enhanced our overall comfort. The host’s clear guidance and quick responses further elevated our experience. We thoroughly enjoyed our stay and would return without hesitation!", ro: "Această cazare a fost impecabilă și excepțional de confortabilă, amenajată cu grijă cu toate facilitățile necesare pentru o retragere de familie primitoare. Locul de parcare privat a adăugat un strat binevenit de comoditate, iar rutele eficiente de acces au făcut călătoriile spre și de la aeroport fără efort. Spațiile de locuit generoase și bucătăria bine echipată ne-au sporit confortul general. Ghidarea clară și răspunsurile rapide ale gazdei ne-au ridicat și mai mult experiența. Ne-am bucurat din plin de șederea noastră și ne-am întoarce fără ezitare!" }, rating: 5, avatar: "https://placehold.co/100x100.png", dataAiHint: "person image", durationInfo: { en: "3 nights (October 2023)", ro: "3 nopți (Octombrie 2023)" } },
    { id: 5, name: "Zsolt", role: { en: "Couple", ro: "Cuplu" }, company: { en: "USA", ro: "Statele Unite ale Americii" }, content: { en: "Our entire stay was flawless, from the moment we arrived until departure. The host’s warm welcome and attentive care made us feel immediately at ease. The apartment itself was tastefully furnished and meticulously maintained, ensuring our comfort throughout. Situated in a peaceful locale, it offered both relaxation and easy access to local attractions. We depart with fond memories and look forward to returning!", ro: "Întreaga noastră ședere a fost impecabilă, din momentul în care am sosit până la plecare. Primirea călduroasă și grija atentă a gazdei ne-au făcut să ne simțim imediat în largul nostru. Apartamentul în sine a fost mobilat cu gust și întreținut meticulos, asigurându-ne confortul pe tot parcursul. Situat într-o locație liniștită, a oferit atât relaxare, cât și acces facil la atracțiile locale. Plecăm cu amintiri plăcute și așteptăm cu nerăbdare să ne întoarcem!" }, rating: 5, avatar: "https://placehold.co/100x100.png", dataAiHint: "guest photo", durationInfo: { en: "6 nights (July 2022)", ro: "6 nopți (Iulie 2022)" } },
  ],
  pricing: {
    priceDetails: {
      en: { pricePerNight: 40, currencySymbol: "€" },
      ro: { pricePerNight: 200, currencySymbol: "RON" },
    },
    icon: BedDouble, tierNameKey: "Pricing.nightlyRate", descriptionKey: "Pricing.nightlyDescription",
    features: [{ nameKey: "Pricing.sleepsGuests", included: true }, { nameKey: "Pricing.fullAccess", included: true }, { nameKey: "Pricing.allAmenities", included: true }, { nameKey: "Pricing.flexibleCheckInOut", included: true },],
    bookNowButtonTextKey: "Pricing.bookNow",
    discountButtonTextKey: "Pricing.checkDiscounts",
  }
};

// --- DATA BUNDLE FOR COSY APARTMENT III ---
const cosyApartmentIIIDataBundle = {
  details: {
    id: '3',
    slug: 'cosy-apartment-iii',
    name: {
      ro: 'Cosy Apartment III',
      en: 'Cosy Apartment III',
    },
    teaser: {
      ro: 'Modern și confortabil, perfect pentru șederea dumneavoastră într-o zonă liniștită.',
      en: 'Modern and comfortable, perfect for your stay in a quiet area.',
    },
    description: {
      ro: `Cosy Apartment III este alegerea perfectă pentru cei care caută o oază de liniște, îmbinată cu rafinament contemporan. Situat într-o zonă rezidențială liniștită, dar cu acces rapid la Grădina Zoologică și alte puncte de interes, oferă echilibrul ideal între relaxare și explorare. **În plus, proximitatea față de OrtoProfil—renumitul magazin de proteze și articole medicale—îl face extrem de convenabil pentru oaspeții care au nevoie de astfel de servicii.**\n\nAcest apartament cu un dormitor dispune de living primitor, bucătărie complet echipată, balcon și terasă însorită, baie spa cu duș și cadă, articole de toaletă gratuite și mașină de spălat, aer condiționat, TV cu ecran plat, prosoape și lenjerie incluse, plus parcare privată gratuită.\n\nPuncte Forte ale Apartamentului\nSuprafață Generoasă: 62 m² de spațiu privat, proiectat cu atenție.\nConfort & Stil: Decor modern și elegant, completat de mobilier confortabil pentru o atmosferă primitoare.\nBucătărie Complet Utilată: Electrocasnice full-size, vase și ustensile indispensabile pentru prepararea oricărei mese.\nLiving Relaxant: TV cu ecran plat, canapele şi fotolii pufoase, plus spațiu amplu pentru relaxare.\nTerasă & Balcon: Savurează-ți cafeaua de dimineață pe terasa însorită sau o băutură răcoritoare pe balcon, admirând liniștea zonei rezidențiale.\n\nFacilități Incluse\nWi-Fi Gratuit de Mare Viteză: Conexiune stabilă și rapidă pe toată durata șederii.\nParcare Privată Rezervată: Loc de parcare inclus fără costuri suplimentare.\nAsistență Dedicată: Răspunsuri rapide și sfaturi locale prin WhatsApp.\n\nAtracții și Facilități în Apropiere\nParcuri și Puncte de Interes\nPlatoul Cornești & Grădina Zoologică: 4 km\nWeekend Complex (centrul recreativ): 3 km\n\nServicii Medicale & Utilități\nOrtoProfil (Proteze & Articole Medicale): 300 m\n\nRestaurante și Cafenele\nPumbee Fast Food: 500 m\nNew Chicago Restaurant: 2,2 km\nOhana Specialty Coffee: 250 m\n\nTransport Public\nStație de autobuz: 300 m\n\nAeroport\nAeroportul Transilvania Târgu Mureș: 16 km`,
      en: `Cosy Apartment III is the ideal choice for those seeking an oasis of peace combined with style. Located in a residential area, but with easy access to the Zoo and other points of interest, it offers a perfect balance between relaxation and exploration. **Notably, its close proximity to OrtoProfil, a well-known medical supply store for prosthetics, makes it exceptionally convenient for guests requiring such services.**\n\nOne-bedroom oasis with a living room, fully equipped kitchen, balcony & terrace, bathroom (shower & tub + free toiletries & washing machine), AC, flat-screen TV, free towels & linens, and complimentary private parking.\n\nApartment Highlights\nEntire Space: 62 m² of private, thoughtfully designed living\nComfort & Style: Sleek modern décor meets cozy furnishings for an inviting atmosphere\nFully Equipped Kitchen: Prepare meals easily with full-size appliances, cookware and utensils\nRelaxing Living Area: Flat-screen TV, plush seating and plenty of space to unwind\nTerrace & Balcony: Enjoy morning coffee on your sunlit terrace or evening breeze on the balcony\nView: Peaceful residential outlook\n\nComplimentary Perks\nComplimentary High-Speed Wi-Fi: High-speed internet throughout your stay\nFree Reserved Parking: Private parking spot included at no extra charge\nDedicated Support: Quick responses via WhatsApp for any questions or local tips\n\nWhat’s Nearby\nAttractions & Parks\nPlatoul Cornești & Grădina Zoologică: 4 km\nWeekend Complex: 3 km\n\nMedical & Convenience\nOrtoProfil (Prosthetics & Medical Supplies): 300m\n\nRestaurants & Cafés\nPumbee Fast Food: 500 m\nNew Chicago Restaurant: 2.2 km\nOhana Specialty Coffee: 250 m\n\nPublic Transport\nBus Station: 300 m\n\nAirport\nTransylvania Târgu Mureș Airport: 16 km`,
    },
    images: [
      'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFLS4OVeMUgw3MvmFJTykEq9dAGahsc10BiYNX',
      'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFoDeqU8V256DpVbsJUKHmeliGq9vCaMSy74To',
      'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFw64SETYJK2xuPVUNGyM3Yf6CwiIp0RgTQEjd',
    ],
    amenities: ['wifi', 'ac', 'parking', 'elevator', 'whatsappSupport', 'familyRooms', 'nonSmokerRooms', 'terraceBalcony'],
    address: 'Aleea Carpați, Târgu Mureș',
    mapPlaceholderImage: 'https://picsum.photos/seed/map-cosy-iii/600/400',
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d401.9861538285621!2d24.543770183641588!3d46.55632761910953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s!5e0!3m2!1sen!2sro&hl=en&theme=dark",
    ctaText: {
      ro: 'Bucură-te de stil și confort la Cosy Apartment III!',
      en: 'Enjoy style and comfort at Cosy Apartment III!',
    },
    displayType: 'stack3d',
  },
  galleryImages: [
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFDYHNebfhGy2d48mWYXAg0RxNrsSVUBlowFHI",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFGjy5IFaIcwXlbkuiJj27QmdnvEy8pDfSZqrT",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFJiqWdp77EuNRbVpW8o5OIla1CrQzDX9cynhK",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFPPfzEQ1jSwWVLQKqfntU4DxZoecXCiaIYubR",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTF7LAgA8U2M84DYesctCuVLhNdW1pUlPSmRq0j",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFuURcZlKnHi3L2lSsg05qDtMJUV6Qkr7bzxXP",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFh42j6XwtP0I8RxmfGQKD3VeEj7FvbBCYXd96",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFkdxIigXqbVecIpYMwBlUTKXNvW7Gd24Dxgt3",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFCCA5EDjYIzlmOf8Xo3WRd1aZDHtbKvCMiq9p",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFAwgpJCse16OthcJxKViTLG97EwDnq2dWurfP",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFYMK3vYBvB7KPCZWEAgFYmeztVaLcNpyoqjJs",
    "https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFIIiYZCbrJCX65E0hQmiOTtHwvcq498MWSjeB",
  ],
  testimonials: [
    { id: 1, name: "Maria", role: { en: "Family", ro: "Familie" }, company: { en: "Romania", ro: "România" }, content: { en: "The apartment was impeccably clean and invitingly warm, with every corner maintained to the highest standard. Our host’s attentive kindness made us feel genuinely welcomed from arrival to departure. Private parking was a significant convenience, shops were within easy walking distance, and the serene neighbourhood guaranteed restful evenings. We left with fond memories and would eagerly return!", ro: "Apartamentul a fost impecabil de curat și primitor de cald, cu fiecare colț întreținut la cel mai înalt standard. Amabilitatea atentă a gazdei noastre ne-a făcut să ne simțim cu adevărat bineveniți de la sosire până la plecare. Parcarea privată a fost o comoditate semnificativă, magazinele erau la distanță mică de mers pe jos, iar cartierul liniștit a garantat seri odihnitoare. Am plecat cu amintiri dragi și ne-am întoarce cu nerăbdare!" }, rating: 5, avatar: "https://placehold.co/100x100.png", dataAiHint: "profile photo", durationInfo: { en: "4 nights (November 2024)", ro: "4 nopți (Noiembrie 2024)" } },
    { id: 2, name: "Cami", role: { en: "Solo Traveller", ro: "Călător Solo" }, company: { en: "Romania", ro: "România" }, content: { en: "This retreat offered sublime comfort and absolute tranquility, ideal for a solo escape. The elegantly designed kitchen invited leisurely meal preparation, while the spacious bathtub provided a soothing end to each day. Attention to detail was evident throughout, creating a harmonious balance of function and style. I felt thoroughly pampered in this delightful setting.", ro: "Această retragere a oferit confort sublim și liniște absolută, ideală pentru o evadare solo. Bucătăria elegant proiectată invita la prepararea relaxată a meselor, în timp ce cada spațioasă oferea un final liniștitor fiecărei zile. Atenția la detalii a fost evidentă peste tot, creând un echilibru armonios între funcționalitate și stil. M-am simțit complet răsfățată în acest cadru încântător." }, rating: 5, avatar: "https://placehold.co/100x100.png", dataAiHint: "profile picture", durationInfo: { en: "2 nights (October 2024)", ro: "2 nopți (Octombrie 2024)" } },
    { id: 3, name: "Remus", role: { en: "Family", ro: "Familie" }, company: { en: "Germany", ro: "Germania" }, content: { en: "Our stay was utterly relaxing and supremely comfortable from the very first moment. Every aspect—from the pristine cleanliness to the thoughtfully appointed furnishings—was impeccable. The generous living spaces allowed for family time, while quiet bedrooms ensured peaceful nights. We wholeheartedly recommend this property and look forward to returning!", ro: "Șederea noastră a fost extrem de relaxantă și suprem de confortabilă încă din primul moment. Fiecare aspect – de la curățenia impecabilă la mobilierul atent ales – a fost impecabil. Spațiile de locuit generoase au permis timp în familie, în timp ce dormitoarele liniștite au asigurat nopți pașnice. Recomandăm cu căldură această proprietate și așteptăm cu nerăbdare să ne întoarcem!" }, rating: 5, avatar: "https://placehold.co/100x100.png", dataAiHint: "user avatar", durationInfo: { en: "3 nights (August 2024)", ro: "3 nopți (August 2024)" } },
    { id: 4, name: "Levente", role: { en: "Couple", ro: "Cuplu" }, company: { en: "United Kingdom", ro: "Regatul Unit" }, content: { en: "The host greeted us with genuine warmth, and the accommodation was spotlessly clean and tastefully furnished—ideal for both business and leisure travellers. We appreciated the effortless access to local conveniences: shops, the post office, bank, pharmacy, and bus stops were all just steps away. A pleasant 20–25-minute walk led us directly into the city centre. The blend of comfort and convenience made our stay truly outstanding.", ro: "Gazda ne-a întâmpinat cu o căldură autentică, iar cazarea a fost impecabil de curată și mobilată cu gust – ideală atât pentru călătorii de afaceri, cât și pentru cei de agrement. Am apreciat accesul facil la facilitățile locale: magazine, oficiul poștal, bancă, farmacie și stațiile de autobuz erau toate la câțiva pași. O plimbare plăcută de 20–25 de minute ne-a dus direct în centrul orașului. Amestecul de confort și comoditate ne-a făcut șederea cu adevărat remarcabilă." }, rating: 5, avatar: "https://placehold.co/100x100.png", dataAiHint: "person image", durationInfo: { en: "3 nights (February 2025)", ro: "3 nopți (Februarie 2025)" } },
    { id: 5, name: "Ovidiu", role: { en: "Solo Traveller", ro: "Călător Solo" }, company: { en: "Romania", ro: "România" }, content: { en: "In a single night’s stay, every detail exceeded all expectations. The sleek, well-appointed space offered both comfort and elegance, while the host’s thoughtful gestures elevated the experience further. Despite its brevity, this visit left a lasting impression, and I would return without hesitation.", ro: "Într-o singură noapte de ședere, fiecare detaliu a depășit toate așteptările. Spațiul elegant și bine amenajat a oferit atât confort, cât și eleganță, în timp ce gesturile atente ale gazdei au ridicat și mai mult experiența. În ciuda scurtei sale durate, această vizită a lăsat o impresie de durată și m-aș întoarce fără ezitare." }, rating: 5, avatar: "https://placehold.co/100x100.png", dataAiHint: "guest photo", durationInfo: { en: "1 night (January 2025)", ro: "1 noapte (Ianuarie 2025)" } },
  ],
  pricing: {
    priceDetails: {
      en: { pricePerNight: 40, currencySymbol: "€" },
      ro: { pricePerNight: 200, currencySymbol: "RON" },
    },
    icon: BedDouble, tierNameKey: "Pricing.nightlyRate", descriptionKey: "Pricing.nightlyDescription",
    features: [{ nameKey: "Pricing.sleepsGuests", included: true }, { nameKey: "Pricing.fullAccess", included: true }, { nameKey: "Pricing.allAmenities", included: true }, { nameKey: "Pricing.flexibleCheckInOut", included: true },],
    bookNowButtonTextKey: "Pricing.bookNow",
    discountButtonTextKey: "Pricing.checkDiscounts",
  }
};


// --- RECONSTRUCTED EXPORTS ---
export const apartments: Apartment[] = [
  cosyApartmentIDataBundle.details,
  cosyApartmentIIDataBundle.details,
  cosyApartmentIIIDataBundle.details,
];

export const apartmentGalleryImages: Record<string, string[]> = {
  [cosyApartmentIDataBundle.details.slug]: cosyApartmentIDataBundle.galleryImages,
  [cosyApartmentIIDataBundle.details.slug]: cosyApartmentIIDataBundle.galleryImages,
  [cosyApartmentIIIDataBundle.details.slug]: cosyApartmentIIIDataBundle.galleryImages,
};

export const pageSpecificTestimonials: Record<string, TestimonialEntry[]> = {
  [cosyApartmentIDataBundle.details.slug]: cosyApartmentIDataBundle.testimonials,
  [cosyApartmentIIDataBundle.details.slug]: cosyApartmentIIDataBundle.testimonials,
  [cosyApartmentIIIDataBundle.details.slug]: cosyApartmentIIIDataBundle.testimonials,
};

export interface ApartmentPricingData {
  icon: LucideIcon;
  tierNameKey: string;
  priceDetails: {
    en: { pricePerNight: number; currencySymbol: string };
    ro: { pricePerNight: number; currencySymbol: string };
  };
  descriptionKey: string;
  features: { nameKey: string; included: boolean }[];
  bookNowButtonTextKey: string;
  discountButtonTextKey: string;
}

export const apartmentPricingData: Record<string, ApartmentPricingData> = {
  [cosyApartmentIDataBundle.details.slug]: cosyApartmentIDataBundle.pricing,
  [cosyApartmentIIDataBundle.details.slug]: cosyApartmentIIDataBundle.pricing,
  [cosyApartmentIIIDataBundle.details.slug]: cosyApartmentIIIDataBundle.pricing,
};

// --- GLOBAL DATA ---
export const amenityDetails: Record<AmenityKey, { icon: React.ElementType, labelKey: string }> = {
  wifi: { icon: Wifi, labelKey: 'ApartmentDetailPage.amenities.wifi' },
  ac: { icon: Thermometer, labelKey: 'ApartmentDetailPage.amenities.ac' },
  parking: { icon: CarFront, labelKey: 'ApartmentDetailPage.amenities.parking' },
  whatsappSupport: { icon: MessageCircle, labelKey: 'ApartmentDetailPage.amenities.whatsappSupport' },
  familyRooms: { icon: Users, labelKey: 'ApartmentDetailPage.amenities.familyRooms' },
  nonSmokerRooms: { icon: CigaretteOff, labelKey: 'ApartmentDetailPage.amenities.nonSmokerRooms' },
  terraceBalcony: { icon: TerraceIcon, labelKey: 'ApartmentDetailPage.amenities.terraceBalcony' },
  elevator: { icon: ElevatorIcon, labelKey: 'ApartmentDetailPage.amenities.elevator' },
};

export const getCountryFlagEmoji = (countryName: string): string => {
  // This function expects the English country name
  switch (countryName.toLowerCase()) {
    case 'romania': return '🇷🇴';
    case 'germany': return '🇩🇪';
    case 'hungary': return '🇭🇺';
    case 'united kingdom': return '🇬🇧';
    case 'ukraine': return '🇺🇦';
    case 'usa': return '🇺🇸'; // Changed from US_FLAG_MARKER to direct emoji
    default: return '🌍';
  }
};

export interface DiscountOffer {
  id: string;
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
  highlight?: boolean; // Optional highlight
}

export const discountOffers: DiscountOffer[] = [
  {
    id: 'stay7pay6',
    icon: CalendarDays,
    titleKey: 'offers.stay7pay6.title',
    descriptionKey: 'offers.stay7pay6.description',
  },
  {
    id: 'stay14pay12',
    icon: CalendarDays,
    titleKey: 'offers.stay14pay12.title',
    descriptionKey: 'offers.stay14pay12.description',
  },
  {
    id: 'stay21pay18',
    icon: CalendarDays,
    titleKey: 'offers.stay21pay18.title',
    descriptionKey: 'offers.stay21pay18.description',
  },
  {
    id: 'stay1month25off',
    icon: Percent,
    titleKey: 'offers.stay1month25off.title',
    descriptionKey: 'offers.stay1month25off.description',
    highlight: true,
  },
];

