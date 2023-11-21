import { cert, getApps, initializeApp } from "firebase-admin/app";

export function getApp() {
  return (
    getApps()[0] ??
    initializeApp({
      projectId: process.env.FIREBASE_PROJECT_ID,
      serviceAccountId: process.env.FIREBASE_CLIENT_EMAIL,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      credential: cert({
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: `${process.env.FIREBASE_PRIVATE_KEY}`.replace(/\\n/g, "\n"),
        projectId: process.env.FIREBASE_PROJECT_ID,
      }),
    })
  );
}
