import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../redux/actions/index.js";
import CharacterCard from "../CharacterCard/CharacterCard";
import NavBar from "../NavBar/NavBar.jsx";
import Paginate from "../Paginate/Paginate.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import FilterByHouse from "../Filter/Filter.jsx";
import "./home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.characters);

  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(9);
  const indexOfLastCharacter = currentPage * charactersPerPage; //10
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage; //0
  const currentCharacters = allCharacters.slice(
    //currentCountries es todos los paises de la pagina
    indexOfFirstCharacter,
    indexOfLastCharacter
  ); //me divide el array de todo y me toma desde el primer indice hasta el ultimo
  // console.log("ALLCHRCTS: ", currentCharacters);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [currentCharacters.length]);

  return (
    <div>
      <NavBar />

        <SearchBar />
        <FilterByHouse setCurrentPage={setCurrentPage}/>
      <div className="cardcontchar">


        {currentCharacters.length === 0
          ? "not charcts"
          : currentCharacters.map((ch) => {
              return (
                <div className="cardshome">
                  <CharacterCard
                    firstName={ch.firstName}
                    lastName={ch.lastName}
                    id={ch.id}
                    imageUrl={ch.image}
                  />
                </div>
              );
            })}
      </div>
      <Paginate
        className="paginhome"
        charactersPerPage={charactersPerPage}
        allCharacters={allCharacters.length}
        paginado={paginado}
      />
    </div>
  );
}
