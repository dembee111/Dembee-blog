"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BurgerIcon } from "../Icons";
import Link from "next/link";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* LEFT FIXED MINI SIDEBAR */}
      <div className="fixed top-0 left-0 bottom-0 w-[110px] h-screen z-30">
        <div className="flex flex-col justify-between items-center bg-[#f1f4f5] h-full w-full border-r border-gray-300">
          <div className="mt-6">
            <h1 className="text-3xl font-light">3D</h1>
          </div>
          <div className="-rotate-90">
            <h1 className="text-2xl text-nowrap">Dembee / blog</h1>
          </div>
          <div className="mb-8">
            <button onClick={() => setOpen(!open)}>
              <BurgerIcon className="size-7 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      {/* ANIMATED OVERLAY & DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKGROUND OVERLAY */}
            <motion.div
              initial={{ width: 0, backgroundColor: "#f1f4f5" }}
              animate={{
                width: "100%",
                backgroundColor: "#f1f4f5",
              }}
              exit={{ width: 0, backgroundColor: "#f1f4f5" }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-20 cursor-pointer"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="fixed top-0 left-[110px] h-screen w-[calc(100vw-110px)] bg-[#f1f4f5] shadow-lg z-30 flex items-center justify-center"
            >
              {/* CENTERED MENU */}
              <motion.ul
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center space-y-12 text-4xl font-light"
              >
                <li className="hover:text-orange-600 transition-colors">
                  <Link href="/">Нүүр хуудас</Link>
                </li>
                <li className="hover:text-orange-600 transition-colors">
                  <Link href="/about">Бидний тухай</Link>
                </li>
                <li className="hover:text-orange-600 transition-colors">
                  <Link href="/contact">Холбоо барих</Link>
                </li>
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
