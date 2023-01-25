import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const rootElementClassList = document.documentElement.classList;
  const isDark = rootElementClassList.contains("dark") ? true : false;
  const [dark, setDark] = useState(isDark);
  const [open, setOpen] = useState(false);
  const iconClass = `material-icons-outlined ${
    dark ? "text-white/80" : "text-custom-black"
  }`;

  function toggleColorTheme() {
    setDark(!dark);
    rootElementClassList.toggle("dark");
  }

  return (
    <header className="p-6 flex justify-between items-center gap-2">
      <div className="flex justify-between w-full items-center">
        <Link to={"/"}>
          <p className="font-schwifty text-lg">
            R<span className="text-xs">ick</span>{" "}
            <span className="text-[8px]">and</span> M
            <span className="text-xs">orty</span>
          </p>
        </Link>
        <button onClick={toggleColorTheme} className="z-0 flex">
          <span className={iconClass}>{dark ? `light_mode` : `dark_mode`}</span>
        </button>
      </div>

      <button onClick={() => setOpen(!open)} className="z-20 flex">
        <span className={iconClass}>{open ? `close` : `menu`}</span>
      </button>

      <nav
        className={`z-10 bg-slate-100 dark:bg-gray-800 fixed inset-y-0 right-0 w-2/3 transition-all ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/characters"}>Characters</Link>
          </li>
          <li>
            <Link to={"/episodes"}>Epsodes</Link>
          </li>
          <li>
            <Link to={"/locations"}>Locations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
