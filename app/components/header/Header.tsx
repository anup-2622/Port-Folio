"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
export default function Header() {
  const menuItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Project",
      href: "/project",
    },
    {
      name: "Contact",
      href: "/contact",
    },{
      name:"Blog",
      href:"/blog"
    }
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full p-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex  items-center space-x-2">
          <span className="font-bold text-2xl text-red-700">
          &lt; 
            <span className="font-bold text-[#DDD0C8]">Anup</span>
          &#47;&gt;
          </span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8 ">
            {menuItems.map((item) => (
              <li key={item.name} className=" hover:bg-gray-400">
                <Link
                  href={item.href}
                  className="text-xl font-mono font-semibold  rounded-md text-white "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          {/* <button
            type="button"
            className="rounded-md px-3 py-2 text-sm font-bold "
          >
            Login
          </button> */}
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 text-white cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="phone_view divide-y-2 divide-gray-50 rounded-lg  shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                  <span className="font-bold text-2xl text-red-700">
          &lt; 
            <span className="font-bold text-[#DDD0C8]">Anup</span>
          &#47;&gt;
          </span>
                  
                  </div>
                  <div className="-mr-2">
                    <b
                      // type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-400 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6 text-white" aria-hidden="true"  />
                    </b>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-white">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                {/* <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Button text
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
