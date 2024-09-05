"use server"
import { addDoc, auth, collection, db, getDownloadURL, ref, storage, uploadBytes } from "@/lib/firebase";
import {  signInWithEmailAndPassword } from "firebase/auth";



export const firebaseAuthentication = async (email:string,password:string): Promise<boolean> => {
//   const { email, password, isSignUp } = credentials;


    try {
      // Log in the user with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      console.log("Logged In with:", userCredential.user);
      return true;
    } catch (error) {
      console.error("Login Error:", error);
      
      return false
    }
  }
type formData={
    file:string | any;
    title:string;
    subjectName:string;
    subjectCode:string;
    studentYear:string;
    branch:string;
}
export const firebaseNotesUpload = async(formData:formData)=>{
    try {
        let fileURL = '';
        if (formData.file) {
          const fileRef = ref(storage, `files/${formData.file.name}`);
          await uploadBytes(fileRef, formData.file);
          fileURL = await getDownloadURL(fileRef);
        }
  
        const docRef = collection(db, 'files');
        const document = {
          title: formData.title,
          subjectName: formData.subjectName,
          subjectCode: formData.subjectCode,
          studentYear: formData.studentYear,
          branch: formData.branch,
          fileURL,
        };
  
        await addDoc(docRef, document);
  
        alert('Form data and file submitted successfully!');
     
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit form data and file.');
      }
}
