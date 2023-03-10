import React from "react";

const Showcase = ({ apiData }) => {
  const pill =
    "rounded-full bg-gray-900 px-2 py-[1px] text-[0.625rem] text-gray-50 dark:bg-gray-50 dark:text-gray-900 capitalize";
  const label = "text-xs leading-none capitalize";

  return apiData === undefined ? (
    <span className="block text-center">Character's gone missing, broh.</span>
  ) : (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {apiData.map((character) => (
        // Main Container
        <div
          key={character.id}
          className="overflow-hidden rounded-md border-[1px] border-gray-700 text-sm"
        >
          {/* Image and Status */}
          <div className="relative">
            <img src={character.image} alt="" className=" w-full" />

            {/* Status (Alive, Dead, Unknown) */}
            <p
              className={`absolute top-3 right-3 rounded-full bg-gray-800 py-1 pl-5 pr-2 text-[0.625rem] capitalize leading-none text-gray-50 before:absolute before:left-[6px] before:top-0 before:bottom-0 before:my-auto before:block before:aspect-square before:w-[6px] before:rounded-full ${
                character.status === "Alive"
                  ? "before:bg-green-500"
                  : "before:bg-red-500"
              } before:animate-pulse`}
            >
              {character.status}
            </p>
          </div>

          {/* Informations */}
          <div className="flex flex-col gap-3 px-3 py-4">
            {/* Name */}
            <p className="text-base font-bold leading-none dark:text-sky-500">
              {character.name}
            </p>

            {/* Gender */}
            <p className={label}>
              Gender: <span className={pill}>{character.gender}</span>
            </p>

            {/* Species */}
            <p className={label}>
              Species:{" "}
              <span className={pill}>
                {character.species === "Mythological Creature"
                  ? `Mythological`
                  : character.species}
              </span>
            </p>

            {/* Location */}
            <p className={label}>Location: {character.location.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Showcase;
