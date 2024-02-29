import { useEffect, useState, createContext, useContext } from "react";

const ph_project_api_key = "phc_dvLAOScCPWS1kXSnJlvSHNnfXDvarKIsSN7Q32yt20s";
const consentKey = `__consent_${ph_project_api_key}`;

export type Consent = "initiating" | "undecided" | "granted" | "denied";

type ConsentContextValue = {
  consent: Consent;
  updateConsent: (newConsent: Consent) => void;
  setConsent: (newConsent: Consent) => void;
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
  const [consent, setConsent] = useState<Consent>("initiating");

  useEffect(() => {
    // Access localStorage only after the component mounts, i.e., on the client side
    const storedConsent = localStorage.getItem(consentKey);
    if (storedConsent) {
      setConsent(storedConsent as Consent);
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
