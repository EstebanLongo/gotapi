import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByHouseName } from "../../redux/actions";

export default function FilterByHouse({ setCurrentPage }) {
  const dispatch = useDispatch();

  function handleFilterHouses(e) {
    e.preventDefault();
    dispatch(filterByHouseName(e.target.value));
    setCurrentPage(1);
  }

  return (
    <div className='orders'>
      <span>Filter by House</span>
      <br />
      <select
        onChange={(e) => handleFilterHouses(e)}
        className='select'
      >
        <option value="All">All</option>
        <option value="Stark">Stark</option>
        <option value="Targaryen">Targaryen</option>
        <option value="Lannister">Lannister</option>
        <option value="Baratheon">Baratheon</option>
        <option value="Greyjoy">Greyjoy</option>
        <option value="Martell">Martell</option>
      </select>
    </div>
  );
}