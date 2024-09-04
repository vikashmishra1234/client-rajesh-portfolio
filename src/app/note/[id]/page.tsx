
import Note from '@/components/Note';
import { fetchNote } from '@/lib/fetchNote';
import React from 'react';

interface FormData {
  title: string;
  subjectName: string;
  subjectCode: string;
  studentYear: string;
  branch: string;
  file: File | null;
  fileURL: string;
}

const NoteDetail = async({ params }: { params: { id: string } }) => {
  const { id } = params; 
  const note:any = await fetchNote(id);
  return (
    <div>
      {
       note?<Note note={note}/>:""
      }
    </div>
  );
};

export default NoteDetail;
