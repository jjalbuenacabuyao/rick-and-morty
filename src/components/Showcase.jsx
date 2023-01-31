import React from "react";

const Showcase = ({ apiData }) => {
  let characterCard = apiData.map((character) => (
    <div key={character.id} className="border-2 border-gray-700 rounded-lg">
      <div>
        <img src={character.image} alt="" className="rounded-lg"/>
        <p>{character.status}</p>
      </div>
      
      <p>{character.name}</p>
    </div>
  ));
  return <div className="grid grid-cols-2 gap-5">{characterCard}</div>;
};

export default Showcase;
