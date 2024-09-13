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
};

export type UserCredential = {
    token: string;
    user: UserData;
};

export type AuthContextType = {
    authState: UserCredential;
    setUserAuthInfo: (data: UserCredential) => void;
    isUserAuthenticated: () => boolean;
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
