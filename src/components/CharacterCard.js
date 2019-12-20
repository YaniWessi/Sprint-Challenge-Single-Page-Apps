import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";

const CharacterCard = props => {
  return (
    <Link to={`/char`}>
      <Card className="char-card">
        <img top width="100%" src={props.image} alt="card-imge" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>Status: {props.status}</CardSubtitle>
          <CardSubtitle>Current Location: {props.location}</CardSubtitle>
          <CardSubtitle>Species: {props.species}</CardSubtitle>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CharacterCard;
