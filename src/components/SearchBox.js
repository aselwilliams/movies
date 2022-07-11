import React from "react";

function SearchBox({ setSearchValue }) {
  return (
    <div>
      <input
        className="form-control"
        placeholder="Type movie to search..."
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
}
export default SearchBox;
