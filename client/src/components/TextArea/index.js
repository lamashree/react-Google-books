import React from "react";

function TextArea(props) {
  return (
    <form className="search">
    <input
    onChange={props.handleInputChange}
    value={props.search}
    name="search"
    type="text"
    className="form-control"
    placeholder=" "
    id="search"
  />
        <button type="submit" onClick={props.handleSearch} className="btn btn-success">
        Search for Books
        </button>
        
    </form>
  );
}

export default TextArea;
