"use client";

import api from "@/api/api";
import { UserCredential, AuthContextType, EventType } from "../types/index";
import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";

const AuthContext = createContext<AuthContextType | null>(null);
const { Provider } = AuthContext;

const useAuth = (): AuthContextType => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return auth;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [events, setEvents] = useState<EventType[]>([]);

  const fetchAllEvents = async () => {
    try {
      const response = await api.get("/events");
      const data = response.data;
      if (data.events.length > 0) {
        setEvents(data.events);
      }
    } catch (err: any) {
      console.log("Error: ", err);
    }
  };
  useEffect(() => {
    fetchAllEvents();
  }, []);

  const [authState, setAuthState] = useState<UserCredential>({
    token: "",
    user: {
      userId: "",
      first_name: "",
      last_name: "",
      email: "",
      mobile_number: 0,
      country: "",
      college: "",
      year: "",
      otp: 0,
      referral_code: "",
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setAuthState({ token: token || "", user});
  }, []);

  const setUserAuthInfo = (data: UserCredential) => {
    const userData = {
      token: data.token || authState.token,
      user: data.user || authState.user,
    };

    localStorage.setItem("token", userData.token);
    localStorage.setItem("user", JSON.stringify(userData.user));

    setAuthState(userData);
  };

  const isUserAuthenticated = () => {
    return !!authState.token;
  };


  return (
    <Provider
      value={{
        authState,
        setUserAuthInfo,
        isUserAuthenticated,
        events,
        setEvents,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthProvider, useAuth };