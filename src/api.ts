import { LoginInput, RegisterInput, User } from "./type";
import axios from "axios";
import { app } from "./firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  getIdToken,
  sendPasswordResetEmail,
} from "firebase/auth";

const DIPLOMA_API_URL = "http://localhost:8080";
const ML_NLP = "http://172.104.34.197/nlp-web-demo/tts";
const auth = getAuth(app);

export function getUser(): User | null {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);

  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded = decodeJwt(token);

    const userInfo: User = {
      uid: decoded["user_id"],
      email: decoded["email"],
      token: token,
      userType: "",
      studentId: decoded["studentId"],
      userName: decoded["name"],
      tokenExpiration: decoded["exp"] || 0,
    };

    localStorage.setItem("user", JSON.stringify(userInfo));

    return userInfo;
  } catch (error) {
    console.debug(error);
    return null;
  }
}

// user login and register

export async function registerUser({
  userName,
  email,
  password,
  studentId,
}: RegisterInput): Promise<any> {
  try {
    const response = await axios.post(
      `${DIPLOMA_API_URL}/createUser`,
      {
        email: email,
        password: password,
        userName: userName,
        customClaims: { studentId: studentId },
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error(error);
    return error.response.data;
  }
}

export async function login({ email, password }: LoginInput) {
  console.log(email);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("user: ", userCredential);
    const userToken = await getIdToken(userCredential.user);
    console.log("userToken: ", userToken);
    return userToken;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        return "error";
      }
      return error.response?.data?.message || "error";
    }
    return "error";
  }
}

export function decodeJwt(token: string) {
  const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
  const decodedPayload = decodeURIComponent(escape(atob(base64)));
  return JSON.parse(decodedPayload);
}
