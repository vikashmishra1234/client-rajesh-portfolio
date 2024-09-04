import Notes from '@/components/Notes'
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
      <Notes/>
      
    </main>
  )
}

export default page