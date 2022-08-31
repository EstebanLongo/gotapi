import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCharacterDetail,
  setStateDetail,
} from "../../redux/actions/index.js";
import "./characterdetail.css";
import NavBar from "../NavBar/NavBar.jsx";

export default function CharacterDetail({ firstName }) {
  const { id } = useParams();
  console.log("id", id);
  const dispatch = useDispatch();
  const characterDetail = useSelector((state) => state.characterDetail);
  console.log("characterDetail: ", characterDetail);
  //   const history = useHistory();
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(getCharacterDetail(id));
    return () => {
      dispatch(setStateDetail());
    };
  }, [dispatch, id]);

  return (
    <div className="divcontcarddetail">
      <NavBar/>
      <div className="carddetail">
        {characterDetail ? (
          <div>
            <h1>{characterDetail.title}</h1>
            <img src={characterDetail.imageUrl} className='imgdetail'/>
            <h2>{characterDetail.fullName}</h2>
            <h2>{characterDetail.family}</h2>
          </div>
        ) : (
          "No id"
        )}
      </div>
    </div>
  );
}
