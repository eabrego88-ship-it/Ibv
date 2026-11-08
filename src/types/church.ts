export interface Ministry {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  badgeColor: string;
  description: string;
  schedule?: string;
  targetAudience: string;
  highlights: string[];
  quote?: string;
}

export interface ChurchService {
  day: string;
  time: string;
  title: string;
  category: 'Dominical' | 'Discipulado' | 'Jóvenes' | 'Comunitario';
  description: string;
  location: string;
  transportAvailable: boolean;
}

export interface PrayerRequest {
  id: string;
  name: string;
  phone?: string;
  category: string;
  request: string;
  date: string;
  isPrivate: boolean;
}

export interface RouteStop {
  id: string;
  name: string;
  zone: string;
  pickupTimeSunday: string;
  pickupTimeFriday: string;
  contactPerson: string;
}
