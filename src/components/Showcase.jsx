import React from "react";

const Showcase = ({ apiData }) => {
  return apiData === undefined ? (
    <span className="block text-center">Character doesn't exist</span>
  ) : (
    <div className="grid grid-cols-2 gap-4">
      {apiData.map((character) => (
        <div
          key={character.id}
          className="rounded-md border-[1px] border-gray-700 text-sm"
        >
          <div className="relative">
            <img src={character.image} alt="" className="rounded-t-md" />
            <p
              className={`absolute top-3 right-3 rounded-full bg-gray-800 py-1 pl-5 pr-2 text-[0.625rem] capitalize leading-none text-gray-50 before:absolute before:left-[6px] before:top-0 before:bottom-0 before:my-auto before:block before:aspect-square before:w-[6px] before:rounded-full ${
                character.status === "Alive"
                  ? "before:bg-green-500"
                  : "before:bg-red-500"
              }`}
            >
              {character.status}
            </p>
          </div>
          <div className="flex flex-col gap-2 px-3 py-4">
            <p className="text-base font-bold leading-none">{character.name}</p>
            <p className="text-xs leading-none">
              Gender:{" "}
              <span className="rounded-full bg-gray-900 px-2 py-[1px] text-[0.625rem] text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                {character.gender}
              </span>
            </p>
            <p className="text-xs leading-none">
              Location: {character.location.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Showcase;
