import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Power } from 'lucide-react';

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => { 
      navigate("/error")
    });
  }

  return (
    <div className='absolute z-50 px-[4%] py-2 flex justify-between items-center z-1 w-full top-0 bg-gradient-to-b from-black/80'>
      <img className='h-20 max-[900px]:h-16' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
      {user &&
        <div className='flex items-center gap-3'>
          <div onClick={handleSignout} className='bg-white text-red-500 hover:bg-red-500 hover:text-white cursor-pointer h-[40px] w-[40px] shadow-orange-500 shadow-lg flex justify-center items-center rounded-md'>
            <Power size={24} />
          </div>
          <div className='flex hover:bg-gray-300 hover:text-black text-white items-center gap-2 border p-2'>
            <img height={30} width={30} src={user.photoURL} alt='user' />
            <p className='font-bold'>{user.displayName}</p>
          </div>
        </div>
      }
    </div>
  );
};

export default Header;