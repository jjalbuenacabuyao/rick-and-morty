import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let currentTheme;

  if (window.localStorage.getItem("darkmode") === "enabled") {
    currentTheme = "dark";
  } else {
    currentTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  }

  const [theme, setTheme] = useState(currentTheme);
  const [open, setOpen] = useState(false);
  const iconClass = `material-icons-outlined ${
    theme === "dark" ? "text-white/80" : "text-custom-black"
  }`;

  function toggleColorTheme() {
    theme === "dark" ? window.localStorage.setItem("darkmode", "disabled") : window.localStorage.setItem("darkmode", "enabled")
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const links = [
    {
      id: "Home",
      link: "/",
    },
    {
      id: "Characters",
      link: "/characters",
    },
    {
      id: "Episodes",
      link: "/episodes",
    },
    {
      id: "Locations",
      link: "/locations",
    },
  ];

  const listItems = links.map((link) => (
    <li key={link.id}>
      <Link 
        to={link.link}
        className={`${window.location.pathname === link.link ? "text-sky-400 font-bold " : ""} transition-all`}
      >{link.id}</Link>
    </li>
  ));

  return (
    <header className="absolute right-0 left-0 top-0 flex max-w-screen-2xl items-center justify-between gap-2 px-36-140 pt-6 2xl:m-auto">
      <div className="flex w-full items-center justify-between md:pr-3 md:border-r-2 md:border-r-gray-400 md:dark:border-r-gray-600">
        <Link to={"/"}>
          <p className="font-schwifty text-lg">
            R<span className="text-xs">ick</span>{" "}
            <span className="text-[8px]">and</span> M
            <span className="text-xs">orty</span>
          </p>
        </Link>
        <button onClick={toggleColorTheme} className="z-0 flex">
          <span className={iconClass}>
            {theme === "dark" ? `light_mode` : `dark_mode`}
          </span>
        </button>
      </div>

      <button onClick={() => setOpen(!open)} className="z-20 flex md:hidden">
        <span className={iconClass}>{open ? `close` : `menu`}</span>
      </button>

      <nav
        className={`fixed inset-y-0 right-0 z-10 w-2/3 bg-slate-200/[0.5] transition-all dark:bg-gray-700/[0.5] backdrop-blur-[50px] ${
          open ? "translate-x-0" : "translate-x-full"
        } md:static md:transform-none md:dark:bg-transparent md:bg-transparent md:pl-3 md:backdrop-blur-none`}
      >
        <ul className="pt-32 pl-10 flex flex-col gap-6 md:p-0 md:flex-row">{listItems}</ul>
      </nav>
    </header>
  );
};

export default Header;
