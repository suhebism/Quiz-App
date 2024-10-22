"use client";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword ,signInWithPopup} from "firebase/auth";
import {  auth, googleProvider, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // Adjust path as needed
import { MoveLeft } from "lucide-react";
import useRedirectIfAuthenticated from "@/hooks/useRedirectIfAuthenticated"; // Adjust the path as necessary
import { motion } from "framer-motion";
import Link from "next/link";
import Loading from "@/components/Loading";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const { user, loading } = useAuth(); 
  const [showPassword, setShowPassword] = useState(false);
  // useEffect(() => {
  //   if (user) {
  //     console.log('User is already logged in, redirecting to home.');
  //     router.push('/'); // Redirect to home if logged in
  //   }
  // }, [user, router]);
  useRedirectIfAuthenticated(); // Use the redirect hook

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newUser = userCredential.user;

      // Store user details in Firestore
      await setDoc(doc(db, "users", newUser.uid), {
        name,
        phoneNumber,
        email,
        testsTaken: [],
      });

      console.log("User registered successfully:", newUser);
      alert("User registered successfully!");
      router.push("/"); // Redirect to home after successful signup
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Error signing up: " + error.message);
    }
  };
  const handleClick = () => {
    router.push("/welcome");
  };

  useEffect(() => {
    if (!loading && user) {
      router.push('/'); // Redirect to home if user is authenticated
    }
  }, [user, loading, router]);

  // Render a loading spinner if loading
  if (loading) {
    return <Loading />; // Assuming you have a Loading component for the spinner
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Logged in with Google successfully!');
      router.push('/');
    } catch (error) {
      console.error('Error with Google sign-in:', error);
      alert('Error with Google sign-in: ' + error.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="relative w-full max-w-sm mx-auto mt-20 px-5 flex flex-col gap-5"
    >
      <MoveLeft
        color="white"
        size={32}
        className="cursor-pointer absolute -top-16"
        onClick={handleClick}
      />
      <h2 className="font-medium text-3xl text-white text-center">Register for free</h2>
     
      <button className='px-8 h-14 bg-transparent border-[#292828] border-[1px] rounded-full text-center flex items-center justify-center gap-2'
      onClick={handleGoogleSignIn}>
        <img src="/icons/google.svg" className='w-6 left-10 absolute' alt="" />
        <h1 className='text-sm font-semibold text-center text-[#EDEDED]'>Continue with Google</h1>
      </button>
      <button className='px-8 h-14 bg-transparent border-[#292828] border-[1px] rounded-full text-center flex items-center justify-center gap-2'
      onClick={handleGoogleSignIn}>
        <img src="/icons/facebook.svg" alt="Facebook" className='w-7 left-10 absolute'  />
        <h1 className='text-sm font-semibold text-center text-[#EDEDED]'>Continue with Facebook</h1>
      </button>
      <div className='w-full flex items-center'>
        <div className='bg-[#292828] w-[45%] h-[1px]'></div>
        <div className='text-[#292828]'>OR</div>
        <div className='bg-[#292828] w-[45%] h-[1px]'></div>
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-[#EDEDED] text-lg">Name</label>
        <input
          className="bg-transparent border-b-[1px] border-[#292828] outline-none text-[#EDEDED] placeholder-[#292828]"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-[#EDEDED] text-lg">Phone</label>
        <input
          className="bg-transparent border-b-[1px] border-[#292828] outline-none text-[#EDEDED] placeholder-[#292828]"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-[#EDEDED] text-lg">Email</label>
        <input
          className="bg-transparent border-b-[1px] border-[#292828] outline-none text-[#EDEDED] placeholder-[#292828]"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-[#EDEDED] text-lg">Password</label>
        <div className="relative w-full flex">
          <input
            className="bg-transparent border-b-[1px] border-[#292828] outline-none text-[#EDEDED] placeholder-[#292828] w-full"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p onClick={() => setShowPassword(!showPassword)} className="cursor-pointer absolute right-0 top-0 text-gray-500">{showPassword ? '🙈' : '👁️'}</p>
        </div>
      </div>
      <button className="px-8 h-14 bg-white rounded-full text-black font-medium text-center flex items-center justify-center" onClick={handleSignup}>Continue with email</button>
      <p className="text-white text-xs font-medium text-center">Already have an account? <Link href='/login' className="text-[#75BC7B]">Login</Link></p>
    </motion.div>
  );
}
