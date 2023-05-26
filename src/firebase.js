import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAtYgHGyOxGs4P0roWlXesgczl5ajsF5Ps",
  authDomain: "auth-4fc5f.firebaseapp.com",
  projectId: "auth-4fc5f",
  storageBucket: "auth-4fc5f.appspot.com",
  messagingSenderId: "286407969317",
  appId: "1:286407969317:web:d8ec10892b8ce3fc6ccdcc",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const register = (email, password) => {
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      // Signed in
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });
};

export const logout = () => {
  signOut(auth).then(() => {
    console.log("Başarıyla çıkış yaptınız!!");
  }).catch(err => {
    console.log(err)
  })
}
