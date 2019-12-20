import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
// import { getHeapSpaceStatistics } from "v8";

const CharacterList = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    const getChars = () => {
      axios
        .get("https://rickandmortyapi.com/api/character")
        .then(res => {
          console.log(res.data);
          setChars(res.data);
        })
        .catch(error => {
          console.log("the data and result was not returned", error);
        });
    };
    getChars();
  }, []);

  return (
    <div>
      {chars.map((item, index) => (
        <CharacterCard
          key={index}
          image={item.image}
          name={item.name}
          status={item.status}
          location={item.lation}
          species={item.species}
        />
      ))}
    </div>
  );
};

export default CharacterList;
