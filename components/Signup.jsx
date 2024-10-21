"use client";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext"; // Adjust path as needed
import { MoveLeft } from "lucide-react";
import useRedirectIfAuthenticated from "@/hooks/useRedirectIfAuthenticated"; // Adjust the path as necessary
import { motion } from "framer-motion";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const { user } = useAuth(); // Access user from context

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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="relative w-full max-w-sm mx-auto mt-20 px-5 flex flex-col gap-10"
    >
      <MoveLeft
        color="white"
        size={32}
        className="cursor-pointer absolute -top-16"
        onClick={handleClick}
      />
      <h2>Sign Up</h2>
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
        <input
          className="bg-transparent border-b-[1px] border-[#292828] outline-none text-[#EDEDED] placeholder-[#292828]"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignup}>Sign Up</button>
    </motion.div>
  );
}
