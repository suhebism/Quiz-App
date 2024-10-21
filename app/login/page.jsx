'use client';
import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth,googleProvider  } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { MoveLeft } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import Loading from '/components/Loading';
import { motion } from 'framer-motion';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push('/');
    } else {
      setLoading(false);
    }
  }, [user, router]);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully!');
      router.push('/');
    } catch (error) {
      // console.error('Error logging in:', error);
      // alert('Error logging in: ' + error.message);
      alert('enter valid email and password');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading/>
      </div>
    );
  }

  const handleClick =()=>{
    router.push('/welcome');
  };
  
  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Logged in with Google successfully!');
      router.push('/');
    } catch (error) {
      console.error('Error with Google sign-in:', error);
      alert('Error with Google sign-in: ' + error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <motion.div 
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    className='relative w-full max-w-sm mx-auto mt-20 px-5 flex flex-col gap-10'>
      <MoveLeft color="white" size={32} className='cursor-pointer absolute -top-16' onClick={handleClick}/>
      <h2 className='text-white text-center text-2xl font-medium'>Login to Quiz App</h2>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-4'>
          <label className='text-[#EDEDED] text-lg'>Email</label>
          <input
            className='bg-transparent border-b-[1px] border-[#292828] outline-none text-[#EDEDED] placeholder-[#292828]'
            type="email"
            placeholder="name@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col gap-4'>
          <label className='text-[#EDEDED] text-lg'>Password</label>
          <input
            className='bg-transparent border-b-[1px] border-[#292828] outline-none text-[#EDEDED] placeholder-[#292828]'
            type="password"
            placeholder="your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <p className='text-[#75BC7B] text-xs font-medium'>Forgot password?</p>
      </div>
      <button 
        className='px-8 h-14 bg-[#75BC7B] rounded-full text-white text-center flex items-center justify-center'
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? 'Logging in...' : <h1 className='text-xl font-semibold text-center text-black'>Log in</h1>}
      </button>
      <div className='w-full flex items-center'>
        <div className='bg-[#292828] w-[45%] h-[1px]'></div>
        <div className='text-[#292828]'>OR</div>
        <div className='bg-[#292828] w-[45%] h-[1px]'></div>
      </div>
      <button className='px-8 h-14 bg-transparent border-[#292828] border-[1px] rounded-full text-center flex items-center justify-center'
      onClick={handleGoogleSignIn}>
        <img src="/icons/google.svg" className='w-6 left-10 absolute' alt="" />
        <h1 className='text-sm font-semibold text-center text-[#EDEDED]'>Continue with Google</h1>
      </button>
      <button className='px-8 h-14 bg-transparent border-[#292828] border-[1px] rounded-full text-[#EDEDED] text-center flex items-center justify-center'>
        <img src="/icons/whatsapp.svg" className='w-6 left-10 absolute' alt="" />
        <h1 className='text-sm font-semibold text-center text-[#EDEDED]'>Continue with WhatsApp</h1>
      </button>
    </motion.div>
  );
}
