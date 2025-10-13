"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BurgerIcon, CloseIcon } from "../Icons";
import Link from "next/link";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const links = [
    { name: "Нүүр", href: "/" },
    { name: "МАНгас", href: "/mangas" },
    { name: "Бидний тухай", href: "/about" },
    { name: "Холбоо барих", href: "/contact" },
  ];

  return (
    <>
      {/* LEFT FIXED MINI SIDEBAR */}
      <div className="hidden xl:block fixed top-0 left-0 bottom-0 w-[110px] h-screen z-50">
        <div className="flex flex-col justify-between items-center bg-[#f1f4f5]  h-full w-full border-r border-[#1c1c1c33] ">
          <div className="mt-6">
            <Link href="/">
              <h1 className="text-3xl font-light">3D</h1>
            </Link>
          </div>
          <div className="-rotate-90 relative">
            <h1 className="text-2xl whitespace-nowrap">
              Dembee{" "}
              <span className="text-[18px] absolute top-0 text-[#1c1c1ccc] ml-0.5">
                /blog
              </span>
            </h1>
          </div>
          <div className="mb-8">
            <button onClick={() => setOpen(!open)}>
              {!open ? (
                <BurgerIcon className="size-7 cursor-pointer" />
              ) : (
                <CloseIcon className="size-6 cursor-pointer" />
              )}
            </button>
          </div>
        </div>
      </div>
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
                x: "110px",
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
              className="fixed top-0 left-0 h-screen w-[calc(100vw-110px)] shadow-lg z-40 flex items-center justify-center"
            >
              <div
                className="space-y-12 text-center transition-all duration-300 text-[#1c1c1c] p-[20px] text-[40px] font-normal leading-[1.15em]"
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

export default Sidebar;
