import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCharacter } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import "./form.css";

export function validate(input) {
  let errors = {};

  if (!input.firstName) {
    errors.firstName = "First Name required";
  } else if (isNaN(input.firstName) !== true) {
    errors.name = "Name cannot be a number";
  } else if (!input.lastName) {
    errors.lastName = "Last Name required";
  } else if (isNaN(input.lastName) !== true) {
    errors.lastName = "Last Name cannot be a number";
  } else if (!input.fullName) {
    errors.fullName = "Full Name required";
  } else if (isNaN(input.fullName) !== true) {
    errors.fullName = "Full Name cannot be a number";
  } else if (!input.title) {
    errors.title = "Title required";
  } else if (!input.houseName) {
    errors.houseName = "House Name required";
  }

  return errors;
}

export default function FormCreate() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    fullName: "",
    title: "",
    houseName: "",
  });
  const [errors, setErrors] = useState({});

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validate(input));
    const errorsSaved = validate(input);

    if (
      Object.values(errorsSaved).length !== 0 ||
      !input.firstName.length ||
      !input.lastName
    ) {
      alert("Please fill all fields");
    } else {
      dispatch(createCharacter(input));
      alert("Character created succesfully!");
      setInput({
        firstName: "",
        lastName: "",
        fullName: "",
        title: "",
        houseName: "",
      });
      //   history.push("/home");
    }
  }

  return (
    <div className="formcontainer">
        <NavBar/>
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <div className="divlabels">
          {errors.firstName && <p className="danger">{errors.firstName}</p>}
          <label className="label">First Name:</label>
          <input
            type="text"
            placeholder="First Name..."
            value={input.firstName}
            onChange={(e) => handleInputChange(e)}
            name="firstName"
            className="inputs"
          />
        </div>

        <div className="divlabels">
          {errors.lastName && <p className="danger">{errors.lastName}</p>}
          <label className="label">Last Name:</label>
          <input
            type="text"
            placeholder="Last Name..."
            value={input.lastName}
            onChange={(e) => handleInputChange(e)}
            name="lastName"
            className="inputs"
          />
        </div>

        <div className="divlabels">
          {errors.fullName && <p className="danger">{errors.fullName}</p>}
          <label className="label">Full Name:</label>
          <input
            type="text"
            placeholder="Full Name..."
            value={input.fullName}
            onChange={(e) => handleInputChange(e)}
            name="fullName"
            className="inputs"
          />
        </div>

        <div className="divlabels">
          {errors.title && <p className="danger">{errors.title}</p>}
          <label className="label">Title:</label>
          <input
            type="text"
            placeholder="Title..."
            value={input.title}
            onChange={(e) => handleInputChange(e)}
            name="title"
            className="inputs"
          />
        </div>

        <div className="divlabels">
          {errors.houseName && <p className="danger">{errors.houseName}</p>}
          <label className="label">House Name:</label>
          <input
            type="text"
            placeholder="House Name..."
            value={input.houseName}
            onChange={(e) => handleInputChange(e)}
            name="houseName"
            className="inputs"
          />
        </div>

        <div className="divlabels">
          {errors.image && <p className="danger">{errors.image}</p>}
          <label className="label">Image:</label>
          <input
            type="text"
            placeholder="Image..."
            value={input.image}
            name="image"
            className="inputs"
          />
        </div>

        <div>
          <button type="submit" name="submit">
            Create Character!
          </button>
        </div>
      </form>
    </div>
  );
}
