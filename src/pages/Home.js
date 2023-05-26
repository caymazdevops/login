import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../firebase'
import { logout as logoutHandle } from '../stores/auth'



export default function Home() {
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const signOut = () => {
    logout();
    dispatch(logoutHandle());
  }
  return (
    <div style={{display: 'flex', justifyContent: 'center', justifyContent: 'center', marginTop: '15px'}}>
        {
          
          user ? <>
          
            <span className='fs-5'>Giriş yaptığınız mail adresi: {user.email}</span>
            <button style={{marginLeft: '15px'}} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick={signOut}>Çıkış Yap</button>
          </>
          
          : <div className="mt-5">            
            
            <Link className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none mt-2 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"' to={{pathname:"/kayit"}}>Kayıt Ol</Link>
            <Link className='text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none mt-2 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' to={{pathname:"/giris"}} style={{marginLeft: '15px'}} >Giriş Yap</Link> 
                      
          </div>
          
        }
        
    </div>
  )
}
