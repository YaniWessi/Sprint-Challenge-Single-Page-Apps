import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

// import { getHeapSpaceStatistics } from "v8";

export default function CharacterList() {
  const [chars, setChars] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setChars(response.data);
        console.log(response.data.results);
      })
      .catch(error => {
        console.log("the data and result was not returned", error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {chars.map(char => (
        <CharDetails
          image={char.image}
          name={char.name}
          status={char.status}
          location={char.location}
          species={char.spacies}
        />
      ))}
    </section>
  );
}

function CharDetails({ char }) {
  return (
    <Card className="char-card">
      <CardBody>
        <CardTitle>{char.name}</CardTitle>
        <p>Status: {char.status}</p>
        <p>Spacies: {char.species}</p>
        <p>Origin: {char.origin.name}</p>
        <p>Current Location: {char.location.name}</p>
      </CardBody>
    </Card>
  );
}
