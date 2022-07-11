import React from "react";

function FilterYear({setFilterYearValue}) {
  return (
    <div>
      <input
        className="form-control"
        placeholder="Type movie year..."
        onChange={(event) => setFilterYearValue(event.target.value)}
      />
    </div>
  );
}
export default FilterYear;
