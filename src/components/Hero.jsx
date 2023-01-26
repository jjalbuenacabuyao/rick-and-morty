import React from "react";
import heroImg from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="flex flex-col gap-10 pt-8">
      <article className="flex flex-col items-center gap-5 px-6 text-center">
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
          className="w-max rounded-lg border-2 border-custom-black py-2 px-6 font-bold dark:border-gray-200"
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
