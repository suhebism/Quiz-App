'use client';
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext'; // Adjust path as needed
import useRedirectIfAuthenticated from "@/hooks/useRedirectIfAuthenticated"; // Adjust the path as necessary

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;

      // Store user details in Firestore
      await setDoc(doc(db, 'users', newUser.uid), {
        name,
        phoneNumber,
        email,
        testsTaken: []
      });

      console.log('User registered successfully:', newUser);
      alert('User registered successfully!');
      router.push('/'); // Redirect to home after successful signup
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
