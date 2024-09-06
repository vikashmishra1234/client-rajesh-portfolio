"use client"
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import AuthPage from './auth/Auth';
import { firebaseNotesUpload } from './utils/FirebaseAuth';

interface FormData {
  title: string;
  subjectName: string;
  subjectCode: string;
  studentYear: string;
  branch: string;
  file: File | null;
}

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    subjectName: '',
    subjectCode: '',
    studentYear: '',
    branch: '',
    file: null,
  });
  const [isLogin,setLogin] = useState<any>(null);
  const [change,setChange] = useState(true);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {  
      if (user) {
        
        console.log("user is logined", user);
        setLogin(true)
      } else {
        console.log("user is not logined")
        setLogin(false)
      }
    });

    return () => unsubscribe();
    // signOut(auth)
    // .then(() => {
    //   console.log("User signed out successfully.");
    //   // Perform any additional actions after logout, like redirecting the user.
    // })
    // .catch((error) => {
    //   console.error("Error signing out: ", error);
    // });
  }, [change]);
  
 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        file: files ? files[0] : null,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    firebaseNotesUpload(formData);
  };
  if(isLogin==null){
    return <h3>Loading...</h3>
  }
else if(isLogin){

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="subjectName"
        placeholder="Subject Name"
        value={formData.subjectName}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="subjectCode"
        placeholder="Subject Code"
        value={formData.subjectCode}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="studentYear"
        placeholder="Student Year"
        value={formData.studentYear}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="branch"
        placeholder="Branch"
        value={formData.branch}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="file"
        name="file"
        accept="application/pdf"
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  )
}
else{
  return <AuthPage change={change} setChange={setChange}/>
}
};

export default FormComponent;
