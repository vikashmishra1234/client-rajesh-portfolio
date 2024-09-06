import Education from '@/components/Education'
import ProfessionalExperience from '@/components/Experience'
import Footer from '@/components/Footer'
import Notes from '@/components/Notes'
import { getAuth, signOut } from 'firebase/auth'
import dynamic from 'next/dynamic'
import React from 'react'

const Home = dynamic(()=>import('@/components/Home'),{
  ssr: true, 
  loading: () => <p>Loading...</p>,
})

const page = () => {
  return (
    <main>

      <Home/>
      <Education/>
      <ProfessionalExperience/>
      <Notes/>
      <Footer/>
    </main>
  )
}

export default page