import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { Eye, EyeClosed } from 'lucide-react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // sign up form 
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/174349653?v=4"
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            navigate("/browse")
          }).catch((error) => {
            setErrorMessage(error.message);
          });

          console.log("🚀 ~ handleButtonClick ~ user:", user);
          navigate("/browse");

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

    } else {
      // sign in form 
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("🚀 ~ handleButtonClick ~ user:", user)
          navigate("/browse");

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }

  };


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }


  return (
    <div>
      <Header />

      <div className="min-h-screen w-full bg-black flex items-center justify-center relative">

        <div className='bg-gradient-to-b from-transparent to-black/40 absolute inset-0 z-10 h-full w-full' />

        <div className="absolute inset-0">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/PK-en-20250908-TRIFECTA-perspective_51c2f7b0-0af1-4189-bc89-3e9b30c172d8_small.jpg"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className={`relative z-20 bg-black opacity-90 p-10 max-[400px]:p-6 rounded-lg max-w-[450px] mx-2 w-full text-white ${errorMessage ? "border-red-500" : "border-transparent"} border-2`}>
          <h1 className="text-3xl font-bold mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

          {!isSignInForm &&
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full mb-6 p-3 bg-[#333] rounded text-white placeholder-gray-400 focus:outline-none"
            />
          }

          <input
            ref={email}
            type="email"
            placeholder="Email or mobile number"
            className="w-full mb-6 p-3 bg-[#333] rounded text-white placeholder-gray-400 focus:outline-none"
          />

          <div className='relative mb-6'>
            <input
              ref={password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 bg-[#333] rounded text-white placeholder-gray-400 focus:outline-none"
            />
            <div className='absolute cursor-pointer right-4 top-4' onClick={() => setIsShowPassword(!showPassword)}>
              {showPassword ? <Eye size={17} /> : <EyeClosed size={17} />}
            </div>
          </div>

          {errorMessage &&
            <p className='text-center text-red-500 mb-6 font-bold'>{errorMessage}</p>
          }

          <button onClick={handleButtonClick} className="w-full bg-red-600 hover:bg-red-700 transition rounded py-3 font-semibold mb-2">
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
                <span className="text-white group-hover:text-red-500">
                  Sign up now
                </span>
              </p>
            ) : (
              <p onClick={toggleSignInForm} className='cursor-pointer hover:text-red-500 hover:underline group'>
                Already Registered? {" "}
                <span className="text-white group-hover:text-red-500">
                  Sign in now
                </span>
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login;