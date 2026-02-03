
import React from 'react';
import { Heart, Calendar, MapPin, Clock, Music } from 'lucide-react';

export const WEDDING_DETAILS = {
  groomName: "Abdirahman Abdishakur",
  brideName: "Khatra Muhumad Dahir",
  date: new Date("2026-02-10T14:00:00"),
  location: "City Park Estate",
  locationAddress: "Parklands, Nairobi",
  themeColor: "#8d6e63",
  accentColor: "#d4af37",
  whatsappNumber: "+254726511193", // Updated number
  displayNumber: "+254 726 511193"
};

export const SECTIONS = [
  { id: 'hero', label: 'Welcome' },
  { id: 'blessing', label: 'Blessing' },
  { id: 'details', label: 'Details' },
  { id: 'rsvp', label: 'RSVP' }
];

export const ICONS = {
  Heart: <Heart className="w-6 h-6" />,
  Calendar: <Calendar className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
  Music: <Music className="w-6 h-6" />
};
