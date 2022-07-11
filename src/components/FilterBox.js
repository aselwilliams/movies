import React from "react";

function FilterBox({ setFilterValue }) {
  return (
    <div>
      <select
        className="form-control ml-3"
        onChange={(event) => setFilterValue(event.target.value)}
      >
        <option defaultValue={""}>Choose type</option>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
        <option value="episodes">Episodes</option>
      </select>
    </div>
  );
}
export default FilterBox;
