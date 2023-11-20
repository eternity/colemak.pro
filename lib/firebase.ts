import { getApps, initializeApp } from "firebase/app";

export function getApp() {
  return (
    getApps()[0] ??
    initializeApp({
      apiKey: "AIzaSyAsdCy9Qf8udvEN9tl16V_dRRGNOEFlVac",
      appId: "1:885172774292:web:4a29dae37709dc0de05b81",
      authDomain: "outgoing-sneaky-quill.firebaseapp.com",
      measurementId: "G-ZHKH2DEHPJ",
      messagingSenderId: "885172774292",
      projectId: "outgoing-sneaky-quill",
      storageBucket: "outgoing-sneaky-quill.appspot.com",
    })
  );
}
