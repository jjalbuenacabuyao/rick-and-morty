import React from "react";
import heroImg from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="pt-8 flex flex-col gap-10">
      <article className="px-6 text-center flex flex-col gap-5 items-center">
        <h1 className="text-2xl font-bold">
          Welcome to the website of <br />{" "}
          <span className="font-schwifty text-4xl leading-[2em]">
            Rick and Morty
          </span>
        </h1>
        <p>
          The hit Adult Swim show that follows the adventures of mad scientist
          Rick Sanchez and his good-hearted but easily influenced grandson Morty
          Smith.
        </p>
        <a
          href="https://www.adultswim.com/videos/rick-and-morty"
          className="font-bold py-2 px-6 rounded-lg w-max border-2 border-custom-black dark:border-gray-200"
        >
          Learn More
        </a>
      </article>

      <picture>
        <img src={heroImg} alt="Rick and Morty coming out from a portal" />
      </picture>
    </section>
  );
};

export default Hero;
