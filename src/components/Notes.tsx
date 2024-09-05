import { fetchNotesHome } from "@/lib/fetchNote";
import React from "react";

import NotesHome from "./clientComponents/NotesHome";

const Notes = async() => {
  const notes:any = await fetchNotesHome();
 
  return (
    <section>
      <h2 className="w-fit border-b-2 border-[#5757f7] text-[26px] md:text-[35px] ml-[12px] mb-[19px] mt-[10px]">
       Handwritten Notes
      </h2>
      {notes!=null&&notes.map((note: any) => (
        <NotesHome key={note.id} note={note} />
      ))}
    </section>
  );
};

export default Notes;
