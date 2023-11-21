import { getApps, initializeApp } from "firebase/app";

export function getApp() {
  return (
    getApps()[0] ??
    initializeApp({
      apiKey: "AIzaSyAJiRr1Ez3tPN3X_7o8MajXkA7dFT1nv1w",
      appId: "1:630419308507:web:7734d5a84e7d4a464ef1fe",
      authDomain: "piquant-interesting-rate.firebaseapp.com",
      measurementId: "G-9HR8RJYWE5",
      messagingSenderId: "630419308507",
      projectId: "piquant-interesting-rate",
      storageBucket: "piquant-interesting-rate.appspot.com",
    })
  );
}
