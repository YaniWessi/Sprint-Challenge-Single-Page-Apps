import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default function CharacterList() {
  const [chars, setChars] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setChars(response.data.results);
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
        <charDetails key={char.id} char={char} />
      ))}
    </section>
  );
}

function charDetails({ char }) {
  return (
    <Card className="char-card">
      <CardBody>
        <CardTitle>{char.name}</CardTitle>
        <CardSubtitle>Status: {char.status}</CardSubtitle>
        <CardSubtitle>Spacies: {char.species}</CardSubtitle>
        <CardSubtitle>Origin: {char.origin.name}</CardSubtitle>
        <CardSubtitle>Current Location: {char.location.name}</CardSubtitle>
      </CardBody>
    </Card>
  );
}
