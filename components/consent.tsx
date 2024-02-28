// app/consent.js
"use client";
import { useEffect, useState, createContext, useContext } from "react";

const ph_project_api_key = "phc_dvLAOScCPWS1kXSnJlvSHNnfXDvarKIsSN7Q32yt20s";
const consentKey = `__consent_${ph_project_api_key}`;

type ConsentContextValue = {
  consent: string;
  updateConsent: (newConsent: string) => void;
  setConsent: (newConsent: string) => void;
};

const ConsentContext = createContext<ConsentContextValue | undefined>(
  undefined
);

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }
  return context;
};

export const ConsentProvider = ({ children }) => {
  const [consent, setConsent] = useState<string>("initiating");

  useEffect(() => {
    // Access localStorage only after the component mounts, i.e., on the client side
    const storedConsent = localStorage.getItem(consentKey);
    if (storedConsent) {
      setConsent(storedConsent);
    }
  }, []);

  const updateConsent = (newConsent) => {
    // Only update consent if the user hasn't made a decision yet
    if (["granted", "denied"].includes(consent)) {
      return;
    }
    setConsent(newConsent);
    if (typeof window !== "undefined") {
      localStorage.setItem(consentKey, newConsent);
    }
  };

  return (
    <ConsentContext.Provider value={{ consent, updateConsent, setConsent }}>
      {children}
    </ConsentContext.Provider>
  );
};
