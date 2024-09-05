import Footer from '@/components/Footer'
import Notes from '@/components/Notes'
import { getAuth, signOut } from 'firebase/auth'
import dynamic from 'next/dynamic'
import React from 'react'

const Home = dynamic(()=>import('@/components/Home'),{
  ssr: true, 
  loading: () => <p>Loading...</p>,
})
const logout = async () => {
  const auth = getAuth(); // Get the auth instance

  try {
    await signOut(auth); // Sign out the user
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error signing out: ", error);
  }
};
logout();
const page = () => {
  return (
    <main>

      <Home/>
      <Notes/>
      <Footer/>
      
    </main>
  )
}

export default page