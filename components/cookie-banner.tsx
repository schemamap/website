// app/banner.js
"use client";
import { useEffect, useState } from "react";
import { useConsent } from "./consent";
import {
  Box,
  Button,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export function Banner() {
  const [showBanner, setShowBanner] = useState(false);
  const { consent, updateConsent, setConsent } = useConsent();
  const bg = useColorModeValue("whiteAlpha.700", "rgba(29, 32, 37, 0.7)");

  useEffect(() => {
    if (consent === "granted" || consent === "denied") {
      setShowBanner(false);
      return;
    }

    if (consent === "undecided") {
      setShowBanner(true);
      return;
    }

    // Once loaded and consent is 'initiating',
    // set consent to 'undecided'
    if (consent === "initiating") {
      setConsent("undecided");
    }
  }, [consent, setConsent]);

  if (!showBanner) return null;

  const acceptCookies = () => {
    updateConsent("granted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    updateConsent("denied");
    setShowBanner(false);
  };

  return (
    <Stack
      width={"100%"}
      position="fixed"
      zIndex={"sticky"}
      fontSize={{ base: "md", lg: "xl" }}
      bottom={0}
      py={4}
      px={{ base: 4, lg: 8 }}
      spacing={{ base: 2, lg: 4 }}
      transitionProperty="common"
      transitionDuration="normal"
      bg={bg}
      borderTopWidth={"1px"}
      backdropFilter={"blur(10px)"}
      direction={{ base: "column", lg: "row" }}
    >
      <Text>
        We use tracking cookies to understand how you use the product and help
        us improve it. Please accept cookies to help us improve.
      </Text>
      <Button variant={"primary"} onClick={acceptCookies}>
        Accept cookies
      </Button>
      <span> </span>
      <Button variant={"secondary"} onClick={declineCookies}>
        Decline cookies
      </Button>
    </Stack>
  );
}
