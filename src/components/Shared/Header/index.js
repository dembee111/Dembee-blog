"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BurgerIcon, CloseIcon } from "../Icons";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const links = [
    { name: "Нүүр", href: "/" },
    { name: "МАНгас", href: "/mangas" },
    { name: "Бидний тухай", href: "/about" },
    { name: "Холбоо барих", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`block xl:hidden fixed top-0 left-0 w-full z-50 transition-all duration-500 
    ${
      isScrolled
        ? "backdrop-blur-xl  mask-gradient h-[15vh]  py-4"
        : "bg-transparent py-5"
    }`}
      >
        <div className="max-w-full mx-auto flex justify-between items-center px-3">
          <Link
            href="/"
            className="text-2xl text-[#1c1c1c] relative font-medium"
          >
            Dembee's{" "}
            <span className="text-sm absolute top-1 ml-0.5 text-[#1c1c1c]/70">
              /blogs
            </span>
          </Link>
          <button onClick={() => setOpen(!open)}>
            {!open ? (
              <BurgerIcon className="size-7 cursor-pointer transition-transform duration-300 hover:rotate-90" />
            ) : (
              <CloseIcon className="size-6 cursor-pointer" />
            )}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/30 z-10 cursor-pointer"
            />

            <motion.nav
              key="menu"
              initial={{
                x: "-100%",
                backgroundColor: "rgba(255,255,255,1)",
              }}
              animate={{
                x: "0",
                backgroundColor: "rgb(241,244,245)",
              }}
              exit={{
                x: "-100%",
                backgroundColor: "rgba(255,255,255,1)",
              }}
              transition={{
                duration: 1,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="fixed top-0 left-0 h-screen w-full shadow-lg z-40 flex items-center justify-center"
            >
              <div
                className="space-y-12 text-center transition-all duration-300 text-[#1c1c1c] p-[20px] text-3xl font-normal leading-[1.15em]"
                style={{
                  willChange: "transform",
                  transform:
                    "translate3d(0.002px, 0.002px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                {links.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    className={`block transition-all duration-500 ${
                      hovered !== null && hovered !== index
                        ? "blur-[2px] opacity-50"
                        : "blur-0 opacity-100"
                    }`}
                    whileHover={{
                      y: [-8, 8, -6],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
