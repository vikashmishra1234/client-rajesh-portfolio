"use client";
import { useRouter } from "next/navigation";
import {  FaAnglesRight } from "react-icons/fa6";

const NotesHome = ({ note }: { note: any }) => {
    const router = useRouter()
    return (
      <div onClick={() => router.push(`/note/${note.id}`)} className="sm:ml-[50px] capitalize mb-[18px] flex items-center">
        <span className="mr-4 ml-2">
          <FaAnglesRight />
        </span>
        <span className="text-blue-500 cursor-pointer text-[24px]">
          {note.title + " " + note.subjectName + " " + note.subjectCode}
        </span>
      </div>
    );
  };
  export default NotesHome