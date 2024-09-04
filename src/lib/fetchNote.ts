import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";


interface FormData {
    title: string;
    subjectName: string;
    subjectCode: string;
    studentYear: string;
    branch: string;
    file: File | null;
    fileURL: string;
  }

export const fetchNote =async(id:string):Promise<FormData|null>=> {
    if (!id) {
        return null;
      }
    
      try {
        const docRef = doc(db, 'files', id as string);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          const data = docSnap.data() as FormData;
          return data;
        } else {
          console.error('No such document!');
          return null;
        }
      } catch (error) {
        console.error('Error fetching document:', error);
        return null;
      }
}

export const fetchNotesHome=async()=>{
    try {
        const querySnapshot = await getDocs(collection(db, "files"));
        const data: any = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        return data;
      } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
      }
}