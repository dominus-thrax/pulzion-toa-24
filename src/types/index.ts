export type UserData = {
  userId: string;
  first_name: string;
  last_name: string;
  email: string;
  mobile_number: number;
  country: string;
  college: string;
  year: string;
  otp: number;
  referral_code: string;
};

export type UserCredential = {
  token: string;
  user: UserData;
};

export type AuthContextType = {
  authState: UserCredential;
  setUserAuthInfo: (data: UserCredential) => void;
  isUserAuthenticated: () => boolean;
  events: EventType[];
  setEvents: React.Dispatch<React.SetStateAction<EventType[]>>;
};

export type LoginForm = {
  email: string;
  password: string;
};

export type RegisterForm = {
  name: string;
  email: string;
  password: string;
};

export type EventType = {
  id: number;
  price: number;
  name: string;
  tagline: string;
  description: string;
  rounds: string;
  rules: string;
  teams: string;
  notes: string;
  mode: string;
  type: string;
  logo?: string;
};
