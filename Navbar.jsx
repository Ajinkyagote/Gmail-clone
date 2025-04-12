import React, { useEffect, useState } from 'react'
import { CiCircleQuestion, CiSettings } from 'react-icons/ci'
import { IoIosSearch } from 'react-icons/io'
import { PiDotsNineBold } from 'react-icons/pi'
import { RxAvatar, RxHamburgerMenu } from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import { setSearchText, setUser } from '../redux/appSlice'
import { AnimatePresence, motion } from 'framer-motion'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth/web-extension'

const Navbar = () => {
    const [input, setinput] = useState("");
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();

    const signOutHandler = () => {
        signOut(auth).then(() => {
            dispatch(setUser(null));
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        dispatch(setSearchText(input))
    }, [input])

  return (
    <div className='flex items-center justify-between mx-3 h-16'>
        <div className="flex items-center gap-10">
            <div className="flex item-center gap-2">
                <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                    <RxHamburgerMenu size={"20px"} />
                </div>
                <img className='w-8 h-10' src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="gmail" />
                <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
            </div>
        </div>
        <div className="md:block hidden w-[50%] mr-60">
            <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
                <IoIosSearch size={"24px"} className='text-gray-700' />
                <input type="text" value={input} onChange={(e) => setinput(e.target.value)} className='rounded-full w-full bg-transparent outline-none px-1' placeholder='Search Mail' />
            </div>
        </div>
        <div className='md:block hidden'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <CiCircleQuestion size={"20px"} /> 
                </div>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <CiSettings size={"20px"} /> 
                </div>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <PiDotsNineBold size={"20px"} /> 
                </div>
                <div className="cursor-pointer">
                    <RxAvatar onClick={() => setToggle(!toggle)} size={"20px"}/>
                    <AnimatePresence>
              {
                toggle && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.1 }}
                    className='absolute right-2 z-20 shadow-lg bg-white rounded-md'>
                    <p onClick={signOutHandler} className='p-2 underline'>LogOut</p>
                  </motion.div>
                )
              }
            </AnimatePresence>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar