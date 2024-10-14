'use client'
import React,{useState, useEffect} from "react";
import Avatar from '@mui/material/Avatar';
import { BellDot,BookMarked,Medal,LibraryBig,HandHelping,Share,Blocks,LogOut, X } from "lucide-react";
import { motion, AnimatePresence  } from "framer-motion"
import UserAvatar from '../components/UserAvatar';
import Link from "next/link";

const Nav = () => {
    const [toggle, setToggle] = useState(false);
    const [avatar, setAvatar] = useState(null);

    const handleImageChange = (croppedImage) => {
      setAvatar(croppedImage); // Store the cropped image in the parent state
    };
    

    useEffect(() => {
      if (toggle){
        document.body.style.overflow='hidden';
      }
      else{
        document.body.style.overflow='auto';
      }
      return () => {
        document.body.style.overflow='auto';
      };
    }, [toggle]);
  return (
    <>
    <div className="w-full flex justify-between items-center pt-5 px-3">
      <div className="flex items-center gap-3">
        <Avatar onClick={()=>(setToggle(true))} alt="Suheb Ahmed" src={avatar} />
        <h1 className="text-white font-base text-lg">Hello, <span className="font-extrabold">Suheb!</span></h1>
      </div>
      <BellDot color="white" size="24px"/>
    </div>
    <AnimatePresence>
    {toggle && (
        <motion.div 
        initial={{ x: -500}}
        animate={{ x: 0 }}
        exit={{ x: -500 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="fixed w-full max-w-sm mx-auto px-5 h-screen bg-[#161515] bg-opacity-10 flex flex-col items-center backdrop-blur-lg z-10 top-0">
            <X className="text-white fixed top-2 right-5 cursor-pointer" onClick={()=>(setToggle(false))}/>
            <UserAvatar/>
            <div className="flex flex-col ga-10 w-full items-start px-3  gap-4">
              <Link href='/subjects' className="text-white font-semibold text-lg flex gap-2">
              <BookMarked />
              <h1>Subjects</h1>
              </Link>
              <Link href='/topics' className="text-white font-semibold text-lg flex gap-2">
              <Medal />
              <h1>Player VS Player</h1>
              </Link>
              <Link href='/topics' className="text-white font-semibold text-lg flex gap-2">
              <LibraryBig />
              <h1>Chapters</h1>
              </Link>
              <Link href='/topics' className="text-white font-semibold text-lg flex gap-2">
              <HandHelping />
              <h1>Help</h1>
              </Link>
              <Link href='/topics' className="text-white font-semibold text-lg flex gap-2">
              <Share />
              <h1>Share</h1>
              </Link>
              <Link href='/topics' className="text-white font-semibold text-lg flex gap-2">
              <Blocks />
              <h1>Package</h1>
              </Link>
              <Link href='/topics' className="text-white font-semibold text-lg flex gap-2">
              <LogOut />
              <h1>Logout</h1>
              </Link>
            </div>
        </motion.div>
    )}
    </AnimatePresence>
    
    </>
  );
};

export default Nav;
