import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const routers = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Contacts", path: "/contacts" },
    { id: 3, name: "About", path: "/about" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Services", path: "/services" },
  ];

  return (
    <nav className="bg-purple-400">
      <div
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="md:hidden">
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-black" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-black" />
          )}
        </span>
      </div>

      <ul className={`md:flex absolute md:static duration-500 bg-purple-500 p-6 ${open ? 'top-6' : '-top-48' }`}>
        {routers.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
