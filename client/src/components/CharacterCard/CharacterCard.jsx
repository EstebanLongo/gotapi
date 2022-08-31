import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPlanetName } from "../../redux/actions/index.js";
import "./charactercard.css";

export default function CharacterCard({ firstName, lastName, imageUrl, id }) {
  return (
    <div className="divcontcards">
      <div className="chcard">
        <h2>{`${firstName} ${lastName}`}</h2>
        <Link to={"/characterdetail/" + id}>
          <img src={imageUrl} className="chimg" />
        </Link>
      </div>
    </div>
  );
}
