import React, { useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { Eye, EyeClosed } from 'lucide-react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';
import toast from 'react-hot-toast';
import { BackgroundImg, UserAvatar } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  // ✅ useState instead of useRef
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  // ✅ async/await version
  const handleButtonClick = async () => {
    const message = checkValidData(email, password);
    setErrorMessage(message);
    if (message) {
      return toast.error("Something went wrong!")
    };

    try {
      if (!isSignInForm) {
        // 🔹 Sign Up flow
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // update profile
        await updateProfile(user, {
          displayName: name,
          photoURL: UserAvatar
        });

        // get updated user info
        const { uid, email: userEmail, displayName, photoURL } = auth.currentUser;
        dispatch(addUser({ uid, email: userEmail, displayName, photoURL }));

        toast.success("Created Account Successfully!");

      } else {
        // 🔹 Sign In flow
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        toast.success("Login Successfully!");
      }
    } catch (error) {
      setErrorMessage(error.code + " - " + error.message);
      toast.error("Something went wrong!")
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />

      <div className="min-h-screen w-full bg-black flex items-center justify-center relative">
        <div className='bg-gradient-to-b from-transparent to-black/40 absolute inset-0 z-10 h-full w-full' />
        <div className="absolute inset-0">
          <img src={BackgroundImg} alt="background" className="w-full h-full object-cover" />
        </div>

        <div className={`relative z-20 bg-black opacity-90 p-10 max-[400px]:p-6 rounded-lg max-w-[450px] mx-2 w-full text-white ${errorMessage ? "border-red-500" : "border-transparent"} border-2`}>
          <h1 className="text-3xl font-bold mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

          {errorMessage && (
            <p className='text-center text-red-500 bg-red-100 py-3 rounded border-2 border-red-600 mb-6 font-bold'>{errorMessage}</p>
          )}

          {!isSignInForm && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="w-full mb-6 p-3 bg-[#333] rounded text-white placeholder-gray-400 focus:outline-none"
            />
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email or mobile number"
            className="w-full mb-6 p-3 bg-[#333] rounded text-white placeholder-gray-400 focus:outline-none"
          />

          <div className='relative mb-6'>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 bg-[#333] rounded text-white placeholder-gray-400 focus:outline-none"
            />
            <div
              className='absolute cursor-pointer right-4 top-4'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye size={17} /> : <EyeClosed size={17} />}
            </div>
          </div>

          <button
            onClick={handleButtonClick}
            className="w-full bg-red-600 hover:bg-red-700 transition rounded py-3 font-semibold mb-2"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <div className="flex justify-between mb-4">
            <a href="#" className="text-sm text-white hover:underline">
              Forgot password?
            </a>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-white" defaultChecked />
              Remember me
            </label>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400">
            {isSignInForm ? (
              <p onClick={toggleSignInForm} className='cursor-pointer hover:text-red-500 hover:underline group'>
                New to Netflix?{" "}
                <span className="text-white group-hover:text-red-500">Sign up now</span>
              </p>
            ) : (
              <p onClick={toggleSignInForm} className='cursor-pointer hover:text-red-500 hover:underline group'>
                Already Registered?{" "}
                <span className="text-white group-hover:text-red-500">Sign in now</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;