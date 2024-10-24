'use client';
import React, { useEffect } from 'react';
import WelcomeSlider from '@/components/WelcomeSlider';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext'; 
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider,provider, } from '@/lib/firebase'; // Adjust the path as needed

const Page = () => {
  const { user, loading } = useAuth(); 
  const router = useRouter();

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


  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // You can access user info here
      const user = result.user;
      console.log('User info:', user);
      router.push('/home'); // Redirect to home or wherever after login
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      className="bg-[#75BC7B] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-screen w-full max-w-sm mx-auto flex flex-col items-center gap-5"
    >
      <div className="h-1/2 flex items-center">
        <WelcomeSlider />
      </div>

      <div className="h-1/2 bg-[#161515] w-full rounded-t-3xl py-10 flex flex-col gap-10 items-center">
        <h1 className="text-lg text-white font-bold text-center">Welcome, Future IAS</h1>
        <div className="flex gap-6">
          <Link href="/login" className="h-12 w-32 flex items-center justify-center rounded-full font-medium bg-[#75BC7B]">Login</Link>
          <Link href="/signup" className="h-12 w-32 flex items-center justify-center rounded-full font-medium bg-white">Signup</Link>
        </div>
        <div className="flex flex-col items-center gap-5">
          <p className="text-white">or via social media</p>
          <div className="flex items-center gap-8">
            <button onClick={handleGoogleSignIn}>
              <img src="/icons/google.svg" alt="Google" />
            </button>
            <button onClick={handleFacebookLogin} href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebook.svg" alt="Facebook" />
            </button>
            <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/whatsapp.svg" alt="WhatsApp" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
