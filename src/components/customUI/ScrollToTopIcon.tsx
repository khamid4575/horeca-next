"use client";

import { useState, useEffect } from "react";

const ScrollToTopIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > window.innerHeight - 50); // Adjust the condition as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {isVisible && (
        <div
          className="fixed lg:bottom-10 bottom-5 flex justify-center items-center lg:right-10 right-5 lg:p-1.5 p-1 bg-gray-200 text-white rounded-full cursor-pointer"
          onClick={handleClick}
        >
          <i className='bx bx-chevron-up text-5xl text-gray-500'></i>
        </div>
      )}
    </div>
  );
};

export default ScrollToTopIcon;


// import React, { useState, useEffect } from "react";

// const ScrollToTopIcon = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isAboveFooter, setIsAboveFooter] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const documentHeight = document.body.offsetHeight;
//       const footerHeight = document.querySelector('footer').offsetHeight;
//       // const footerHeight = 150;

//       setIsVisible(scrollTop > windowHeight - 50);
//       setIsAboveFooter(scrollTop + windowHeight < documentHeight - footerHeight);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleClick = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div>
//       {isVisible && (
//         <div
//           className={`fixed ${
//             isAboveFooter ? 'bottom-20' : 'bottom-52'
//           } flex justify-center items-center right-10 p-2 bg-gray-300 text-white rounded-full cursor-pointer transition-all duration-1000`}
//           onClick={handleClick}
//         >
//           <i class='bx bx-chevron-up text-5xl text-gray-500'></i>
//         </div>
//       )}
//     </div>
//   );
// };

  // return (
  //   <div>
  //     {isVisible && (
  //       <div
  //         className="fixed bottom-10 flex justify-center items-center right-10 p-2 bg-gray-300 text-white rounded-full cursor-pointer"
  //         onClick={handleClick}
  //       >
  //         <i class='bx bx-chevron-up text-5xl text-gray-500'></i>
  //       </div>
  //     )}
  //   </div>
  // );
// };

// export default ScrollToTopIcon;
