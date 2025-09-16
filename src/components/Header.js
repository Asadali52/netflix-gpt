import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Power } from 'lucide-react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { AppLogo } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from "../store/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const user = useSelector((store) => store.user);
  const [showmodal, setIsShowModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignout = async () => {
    try {
      await signOut(auth)
      toast.success("Logout Successfully!")
      setIsShowModal(false);
    } catch (err) {
      console.error("Sign out failed", err);
      toast.error("Logout failed");
    };
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");

      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    // unsubscribe when component unmount
    return () => unsubscribe();
  }, [])

  return (
    <>
      <div className='fixed z-[200] pl-[3%] pr-[4%] py-2 flex justify-between items-center z-1 w-full top-0 bg-gradient-to-b from-black'>
        <img className='h-16 max-[768px]:h-10' src={AppLogo} alt='logo' />
        {user &&
          <div className='flex items-center gap-3'>
            <div onClick={() => setIsShowModal(true)} className='bg-white text-red-500 hover:bg-red-500 hover:text-white cursor-pointer h-[34px] w-[34px] shadow-orange-500 shadow-lg flex justify-center items-center rounded-md'>
              <Power size={20} />
            </div>
            <div className='flex bg-gray-300 text-black items-center gap-2 border p-1.5'>
              <img height={24} width={24} src={user.photoURL} alt='user' />
              <p className='font-bold'>{user.displayName}</p>
            </div>
          </div>
        }
      </div>

      {showmodal &&
        <div className='bg-black shadow-[0_0_10px_3px_rgba(239,68,68,0.8)] text-white z-[1000] max-w-[400px] w-full p-6 border rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <p className='text-center font-bold text-xl'>Are you sure you want to Logout ?</p>
          <div className='flex justify-center gap-6 mt-8'>
            <button className='rounded px-7 py-2 bg-gray-400 hover:bg-gray-500 font-bold cursor-pointer' onClick={() => setIsShowModal(false)}>No</button>
            <button className='rounded px-7 py-2 bg-red-500 hover:bg-red-600 font-bold cursor-pointer' onClick={handleSignout}>Yes</button>
          </div>
        </div>
      }
      {showmodal &&
        <div onClick={() => setIsShowModal(false)} className='fixed bg-black/60 h-screen w-full z-[500]' />
      }
    </>
  );
};

export default Header;