import { LockClosedIcon } from "@heroicons/react/20/solid";
import { auth } from "../../firebaseconfig";
import {
  onAuthStateChanged,
  User as FirebaseUser,
  signInWithPopup,
  UserInfo,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";
import GoogleButton from "react-google-button";
import { useContext } from "react";
import { UserContext } from "../../App";
import { User } from "../../types/User";

function Login() {
  const provider = new GoogleAuthProvider();

  const { changeUser } = useContext(UserContext);

  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // The signed-in user info.
        const newUser: User = {
          id: 1,
          img: result.user.photoURL || "",
          name: result.user.displayName || "",
        };
        changeUser(newUser);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("Error Code: " + errorCode);
        console.log("Error Message: " + errorMessage);
        console.log("Email: " + email);
        console.log("Credential: " + credential);
      });
  };

  return (
    <div className="rounded overflow-hidden shadow-lg bg-white">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="flex justify-center ">
            <GoogleButton onClick={signInWithGoogle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
