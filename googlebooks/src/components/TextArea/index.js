import React from "react";

function TextArea(props) {
  return (
    <form className="search">
      <input  onChange ={props.handleSearch} type="text"></input>
        <button type="submit" onClick={props.handleSearch} className="btn btn-success">
        Search for Books
        </button>
        
    </form>
  );
}

export default TextArea;
