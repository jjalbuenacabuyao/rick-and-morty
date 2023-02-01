import React from "react";

const Showcase = ({ apiData }) => {
  return apiData === undefined ? (
    <span className="text-center block">Character doesn't exist</span>
  ) : (
    <div className="grid grid-cols-2 gap-5">
      {
        (apiData.map((character) => (
          <div
            key={character.id}
            className="rounded-lg border-2 border-gray-700"
          >
            <div>
              <img src={character.image} alt="" className="rounded-lg" />
              <p>{character.status}</p>
            </div>

            <p>{character.name}</p>
            <p>{character.gender}</p>
            <p>{character.location.name}</p>
          </div>
        )))
      }
    </div>
  );
};

export default Showcase;
