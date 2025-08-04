"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/helpers/utils";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-colors duration-300",
        isScrolled ? "bg-white text-slate-950" : "bg-black text-white"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-[#C5A059]">
            <>
              <Image
                alt="quran image"
                src={"/assets/images/logo.png"}
                height={100}
                width={100}
              />
            </>
          </Link>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>

          <nav
            className={cn(
              "absolute top-16 left-0 w-full md:static md:w-auto",
              isScrolled ? "text-slate-200" : "bg-black",
              isMenuOpen ? "block" : "hidden md:block"
            )}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
              {/* {["Home", "About", "Services", "Events", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className={`${
                        isScrolled ? "text-zinc-950" : "text-white"
                      } hover:text-[#C5A059] transition-colors`}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )} */}
              <li>
                <Link
                  href="/"
                  className={`${
                    isScrolled ? "text-zinc-950" : "text-white"
                  } hover:text-[#C5A059] transition-colors`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className={`${
                    isScrolled ? "text-zinc-950" : "text-white"
                  } hover:text-[#C5A059] transition-colors`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className={`${
                    isScrolled ? "text-zinc-950" : "text-white"
                  } hover:text-[#C5A059] transition-colors`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className={`${
                    isScrolled ? "text-zinc-950" : "text-white"
                  } hover:text-[#C5A059] transition-colors`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
