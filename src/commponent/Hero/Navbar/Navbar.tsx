"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/assent/Image/Hero/Logo.svg";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
const Navbar = () => {
  const pathName = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Fragment>
      <div className="relative z-10">
        <div className="flex px-4 md:px-10 py-6 items-center md:justify-between">
          <div className="hidden md:flex gap-16  items-center">
            <div className="  md:hidden">
              <Link href="/">
                <div className="flex items-center cursor-pointer gap-3">
                  <Image
                    src={LogoImage}
                    width={126}
                    height={48}
                    alt="logo"
                    className="cursor-pointer"
                  />
                </div>
              </Link>

              <button onClick={toggleMenu}>
                {isMenuOpen ? (
                  <FiX size={24} color="#4BB09C" />
                ) : (
                  <FiMenu size={24} color="#4BB09C" />
                )}
              </button>
            </div>

            <Link href="/">
              <div className=" items-center cursor-pointer gap-3 hidden md:flex">
                <Image
                  src={LogoImage}
                  width={126}
                  height={48}
                  alt="logo"
                  className="cursor-pointer"
                />
              </div>
            </Link>
            <Link href="/">
              <button className="cursor-pointer">
                <span
                  style={pathName === "/" ? { color: "#6F4EFD" } : {}}
                  className={`w-20 font-extrabold text-base whitespace-nowrap 
                  ${
                    pathName === "/"
                      ? "text-[#6F4EFD] duration-300"
                      : "text-[#FFFFFF]"
                  }
                   hover:text-[#6F4EFD]  duration-300`}
                >
                  صفحه اصلی
                </span>
              </button>
            </Link>

            <Link href="/Service">
              <button className="cursor-pointer">
                <span
                  style={pathName === "/market" ? { color: "#6F4EFD" } : {}}
                  className={`w-20 font-extrabold text-base whitespace-nowrap 
                  ${
                    pathName === "/market"
                      ? "text-[#6F4EFD] duration-300"
                      : "text-[#FFFFFF]"
                  }
                   hover:text-[#6F4EFD]  duration-300`}
                >
                  فروشگاه
                </span>
              </button>
            </Link>

            <Link href="/service">
              <button className="cursor-pointer">
                <p
                  style={pathName === "/service" ? { color: "#6F4EFD" } : {}}
                  className={`w-20 font-extrabold text-base whitespace-nowrap 
                   ${
                     pathName === "/service"
                       ? "text-[#6F4EFD] duration-300"
                       : "text-[#FFFFFF]"
                   }
                    hover:text-[#6F4EFD]  duration-300`}
                >
                  خدمات
                </p>
              </button>
            </Link>

            <Link href="/blog">
              <button className="cursor-pointer">
                <p
                  style={pathName === "/blog" ? { color: "#6F4EFD" } : {}}
                  className={`w-20 font-extrabold text-base whitespace-nowrap 
                   ${
                     pathName === "/blog"
                       ? "text-[#6F4EFD] duration-300"
                       : "text-[#FFFFFF]"
                   }
                    hover:text-[#6F4EFD]  duration-300`}
                >
                  بلاگ
                </p>
              </button>
            </Link>

            <Link href="/aboutus">
              <button className="cursor-pointer">
                <p
                  style={pathName === "/aboutus" ? { color: "#6F4EFD" } : {}}
                  className={`w-20 font-extrabold text-base whitespace-nowrap 
                  ${
                    pathName === "/aboutus"
                      ? "text-[#6F4EFD] duration-300"
                      : "text-[#FFFFFF]"
                  }
                   hover:text-[#6F4EFD]  duration-300`}
                >
                  درباره ما
                </p>
              </button>
            </Link>
          </div>

          {/* دکمه ورود/ثبت‌نام */}
          <div className="hidden md:block mr-44">
            <button className="flex gap-2 bg-[#6F4EFD] rounded-md py-2 px-6 whitespace-nowrap">
              <p className="font-medium text-[#FFFFFF] text-sm">
                ورود / ثبت نام
              </p>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
