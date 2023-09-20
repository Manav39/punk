import React from "react";

import "./Searchbar.scss";

import { InputText } from "primereact/inputtext";
import "primereact/resources/primereact.min.css";

const Searchbar = (props) => {
  const { label, handleInput, beerToSearch } = props;

  return (
    <div className="p-fluid mt-6 m-3">
      <span className=" p-input-icon-left p-float-label">
        <i className="pi pi-search" />
        <InputText
          type="text"
          name={label}
          id="searchBeer"
          value={beerToSearch}
          onChange={handleInput}
        />
        <label htmlFor="searchBeer">{label}</label>
      </span>
    </div>
  );
};

export default Searchbar;
