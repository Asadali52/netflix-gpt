import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />

      <div className="min-h-screen w-full bg-black flex items-center justify-center relative">

        <div className="absolute inset-0">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/PK-en-20250908-TRIFECTA-perspective_51c2f7b0-0af1-4189-bc89-3e9b30c172d8_small.jpg"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 bg-black opacity-90 p-10 max-[400px]:p-6 rounded-lg max-w-[400px] text-white">
          <h1 className="text-3xl font-bold mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

          {!isSignInForm &&
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-4 p-3 bg-[#333] rounded text-white placeholder-gray-400 focus:outline-none"
            />
          }

          <input
            type="email"
            placeholder="Email or mobile number"
            className="w-full mb-4 p-3 bg-[#333] rounded text-white placeholder-gray-400 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-3 bg-[#333] rounded text-white placeholder-gray-400 focus:outline-none"
          />

          <button className="w-full bg-red-600 hover:bg-red-700 transition rounded py-3 font-semibold mb-2">
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