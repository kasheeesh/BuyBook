import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

const Logout = () => {
    const[authUser, setAuthUser] = useAuth();
    const handleLogout = () =>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("Logout successfully completed")
            window.location.reload()

            
        } catch (error) {
            toast.error("Error: " + error.message)
            
        }

    }
  return (
    <div>
        <button onClick={handleLogout} className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'>Logout</button>
    </div>
  )
}

export default Logout