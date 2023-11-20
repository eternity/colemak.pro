"use client";

import { getApp } from "@/lib/firebase";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { useEffect } from "react";

export function AppCheck() {
  useEffect(() => {
    initializeAppCheck(getApp(), {
      provider: new ReCaptchaV3Provider("6LffKBUpAAAAAKzg1na-Cf4cE9lFgptdrVGCuRCr"),
      isTokenAutoRefreshEnabled: true,
    });
  }, []);

  return null;
}
