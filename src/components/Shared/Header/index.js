"use client";

import { useEffect, useState } from "react";
import { BurgerIcon } from "@/components/Shared/Icons";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
    ${
      isScrolled
        ? "backdrop-blur-xl  mask-gradient h-[15vh]  py-4"
        : "bg-transparent py-5"
    }`}
    >
      <div className="max-w-full mx-auto flex justify-between items-center px-8">
        <Link href="/" className="text-2xl text-[#1c1c1c] relative font-medium">
          Dembee's{" "}
          <span className="text-sm absolute top-1 ml-0.5 text-[#1c1c1c]/70">
            /blogs
          </span>
        </Link>
        <BurgerIcon className="size-7 cursor-pointer transition-transform duration-300 hover:rotate-90" />
      </div>
    </header>
  );
};

export default Header;
