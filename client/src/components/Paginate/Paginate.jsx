import React from "react";
import "./paginate.css";

export default function Paginate({
  charactersPerPage,
  allCharacters,
  paginado,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ol className="paginadoCont">
        {pageNumbers?.map((number) => (
          <li key={number} className="liNum1">
            <button className="liNum" onClick={() => paginado(number)}>
              {number}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
