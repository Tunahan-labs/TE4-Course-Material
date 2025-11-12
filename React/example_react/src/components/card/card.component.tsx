import React from "react";
import "./card.styles.css";
type CardComponentProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const CardComponent: React.FC<CardComponentProps> = (props) => {
  return (
    <div className="card">
      <h2 className="card-header">{props.title}</h2>
      <p className="card-body">{props.description}</p>
      <img src={props.imageUrl} alt={props.title} />
    </div>
  );
};

export default CardComponent;
