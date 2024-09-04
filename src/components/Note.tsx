import React from 'react';

interface NoteProps {
  note: FormData | null;
  // id:string
}

interface FormData {
  title: string;
  subjectName: string;
  subjectCode: string;
  studentYear: string;
  branch: string;
  file: File | null;
  fileURL: string;
}


const Note: React.FC<NoteProps|any> = ({ note }) => {
  return (
    <div className="h-[100vh]">
      {note?.fileURL ? (
        <div className="h-full">
          <div className="bg-slate-500 text-center">
            <a href={note.fileURL} download={note.title || 'download.pdf'}>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">
                Download PDF
              </button>
            </a>
          </div>
          <iframe
            src={`https://docs.google.com/viewer?url=${encodeURIComponent(note.fileURL)}&embedded=true`}
            className="w-full h-full border-0"
            title="PDF Viewer"
          />
        </div>
      ) : (
        <p>Loading or no file available...</p>
      )}
    </div>
  );
};



export default Note;
