import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const links = [
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
    <li
      key={link.id}
      className="justify-self-center rounded-md bg-gray-900 py-2 px-4 text-[10px] uppercase leading-none text-gray-50 dark:bg-gray-800"
    >
      <Link to={link.link}>{link.id}</Link>
    </li>
  ));

  return (
    <article className="flex h-screen flex-col items-center justify-center gap-4 px-6">
      <h1 className="px-2 text-center text-4xl font-bold leading-[1.2em]">
        Rick and Morty Wiki
      </h1>
      <p>
        Built using the{" "}
        <a
          href="https://rickandmortyapi.com/"
          target="_blank"
          className="font-bold text-sky-500 underline decoration-sky-800 decoration-wavy decoration-1 underline-offset-4 dark:text-sky-400 dark:decoration-sky-300"
        >
          Rick and Morty API
        </a>
        .
      </p>
      <ul className="flex justify-center gap-2">{listItems}</ul>
      <a
        href="https://github.com/jjalbuenacabuyao/rick-and-morty"
        className="flex items-center gap-4 rounded-md bg-gray-900 py-2 px-4 text-[10px] uppercase leading-none text-gray-50 dark:bg-gray-800"
      >
        <span>Source Code</span>
      </a>
    </article>
  );
};

export default Hero;
