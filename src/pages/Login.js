import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../stores/auth";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Başarıyla Giriş Yaptınız!!")        
        dispatch(login(user))
                
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>  
      
         <div>
        <h3 className="text-center text-blue-600 text-2xl">Lütfen Bilgilerinizi Giriniz</h3>
          <div className="grid gap-6 mb-6 md:grid-cols-2"/>
        <div>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="first_name" className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="Email Gİriniz" required/>
        </div>
        <div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 mt-2 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="Şifre Giriniz" required/>
        </div>
    
        <button onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-red-800 focus:ring-4 focus:outline-none mt-2 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-red-800">Giriş Yap</button>
      </div>
    </div>
    
  )
};
