import  { useEffect, useState } from "react";
import logo from '../assets/Airbnbll-removebg-preview.png'
function SpalshScreen() {
  const [showSplash, setshowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshowSplash(false);
    }, 2000);
  }, []);

  return (
    <>
        {showSplash && (
          <style>
            {`
      body{
        overflow:hidden;
      }
      `}
          </style>
        )}

        {showSplash && (
          <main className="bg-black  flex items-center justify-center min-h-screen w-[100vw] fixed top-0 z-10">
           <div>
           <img src={logo} alt="" className="h-64 absolute left-[450px] bottom-[300px] animate-bounce" />
            <p className="text-9xl font-bolder animate-bounce text-center  "> 
            <span className="text-red-400">Welcome to Airbnb</span>
            <span className="loading loading-ring loading-lg"></span>  </p>
           </div>
          </main>
        )}
    </>
  );
}

export default SpalshScreen;

