import React from "react";

function Search( { searchValue, update } ) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchValue} onChange={(e) => update(e.target.value)} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
