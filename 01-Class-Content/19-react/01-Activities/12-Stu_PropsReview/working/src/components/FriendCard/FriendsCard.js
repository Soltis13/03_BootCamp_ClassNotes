import React from "react";
import "./SpongeBobCard.css";

const FriendsCard = () => (
  <div className="card">
    <div className="img-container">
      <img
        alt={Props.name} src={props.image}
     />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {Props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {Props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {Props.location}
        </li>
      </ul>
    </div>
  </div>
);

export default FriendsCard;
