import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCharacter } from "../../redux/actions";
import './searchbar.css'

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length === 0) alert("Type name of continent");
    if (isNaN(name) !== true) alert("Continent name cannot be a number");
    dispatch(searchCharacter(name)); //name es el estado local
    setName("");
    // setCurrentPage(1)
  }

  return (
    <div className="searchbar">
      <input
        className="input"
        value={name}
        type="text"
        placeholder="Search..."
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className="button"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Search
      </button>
    </div>
  );
}
