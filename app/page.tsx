"use client";

import { motion } from "framer-motion";

export default function Home() {
  const headerText = `Naturally Boost`;
  const mainStyles = `
      h-screen
      flex 
      flex-col 
      justify-center 
      items-center 
      flex-1 h-full 
      bg-forest-img 
      bg-cover 
      text-white
    `;
  const headerTextStyles = `
    text-3xl 
    text-orange-500
    uppercase
    md:text-6xl
    lg:text-7xl
    underline
    tracking-widest
    
  `;
  const headerWrapperStyles = `
    relative
    text-wrap
    text-center
    break-words
    my-4
    decoration-orange-500
    font-sans
    italic
  `;
  const subHeaderTextStyles = `
    mt-3
    text-1xl
    tracking-widest
    md:text-2xl
    
  `;
  const buttonStyles = `
    px-4
    py-2
    bg-orange-500
    rounded-full
    text-xl
    md:text-2xl
  `;
  return (
    <main className={mainStyles}>
      <div className={headerWrapperStyles}>
        <motion.h2
          className={headerTextStyles}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 4,
          }}
        >
          {headerText}
        </motion.h2>
        <motion.p
          className={subHeaderTextStyles}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 4,
          }}
        >
          {"Daily Dose of Original Designs"}
        </motion.p>
      </div>
      <motion.a
        href="#"
        type="button"
        className={buttonStyles}
        initial={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
      >
        {`Start Shopping`}
      </motion.a>
    </main>
  );
}
