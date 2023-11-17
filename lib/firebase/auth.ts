import { firebase } from "@/lib/firebase/app";
import { getAuth } from "firebase/auth";

export const auth = getAuth(firebase);
