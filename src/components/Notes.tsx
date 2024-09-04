"use client";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const router = useRouter();
  
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "files"));
      const data: any = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(data);
      setNotes(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Note = ({ note }: { note: any }) => {
    return (
      <div onClick={() => router.push(`/note/${note.id}`)} className="capitalize mb-[18px] flex items-center">
        <span className="mr-4 ml-2">
          <FaAnglesRight />
        </span>
        <span className="text-blue-500 cursor-pointer text-[24px]">
          {note.title + " " + note.subjectName + " " + note.subjectCode}
        </span>
      </div>
    );
  };

  return (
    <section>
      <h2 className="w-fit border-b-2 border-[#5757f7] text-[26px] ml-[12px] mb-[19px] mt-[10px]">
        Notes
      </h2>
      {notes.map((note: any) => (
        <Note key={note.id} note={note} />
      ))}
    </section>
  );
};

export default Notes;
