import UploadNotes from '@/components/UploadNotes'

import React from 'react'

const NotesUpload = () => {
   
  return (
    <div className='w-full  h-[calc(100vh-4rem)]'>
        {/* <h2 className='text-[33px] w-fit ml-[25px] border-b-3 border-b-[#9e9ef5]'>Share Notes</h2> */}
        <UploadNotes/>
    </div>
  )
}

export default NotesUpload