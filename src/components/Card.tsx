import React from "react";
import { BikeInterface } from "../App";

const Card: React.FC<BikeInterface> = ({name, price, image}) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <a href="/" className="card text-dark h-100">
        <div className="card-img-top p-3 d-flex justify-content-center align-items-center">
          <img src={`/img/${image}.png`} className="d-block h-100 w-100" alt="" />
        </div>
        <div className="card-body bg-warning">
          <h2 className="h6 font-weight-bold">{name}</h2>
          <p className="mb-0">{price} $</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
