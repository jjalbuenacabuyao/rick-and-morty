import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const currentTheme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
  const [theme, setTheme] = useState(currentTheme);
  const [open, setOpen] = useState(false);
  const iconClass = `material-icons-outlined ${
    theme === "dark" ? "text-white/80" : "text-custom-black"
  }`;

  function toggleColorTheme() {
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
      <Link to={link.link}>{link.id}</Link>
    </li>
  ));

  return (
    <header className="absolute right-0 left-0 top-0 mx-auto mx-36-140 mt-6 flex max-w-screen-2xl items-center justify-between gap-2">
      <div className="flex w-full items-center justify-between">
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

      <button onClick={() => setOpen(!open)} className="z-20 flex">
        <span className={iconClass}>{open ? `close` : `menu`}</span>
      </button>

      <nav
        className={`fixed inset-y-0 right-0 z-10 w-2/3 bg-slate-100 transition-all dark:bg-gray-800 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul>{listItems}</ul>
      </nav>
    </header>
  );
};

export default Header;
