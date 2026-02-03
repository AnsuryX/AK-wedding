
export interface WeddingDetails {
  groomName: string;
  brideName: string;
  date: Date;
  location: string;
  locationAddress: string;
}

export interface RSVPFormData {
  name: string;
  email: string;
  attending: boolean;
  guests: number;
  message?: string;
}
