/* import React, { useState } from "react";

import "./LeftDrawer.scss";

import { Sidebar } from "primereact/sidebar";

import logo from "../../assets/images/logo-small.jpg";
import Searchbar from "../Searchbar/Searchbar";
import FilterList from "../FilterList/FilterList";


const LeftDrawer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
    console.log(event.target.value);
  };

  return (
    <div>
      <Sidebar visible={true} showCloseIcon={false}>
        <div className="sidebar__label shadow-4 p-3">
          <img src={logo} alt="logo" className="sidebar__label--logo mr-3" />
          <span className="sidebar__label--title">Brewdog Punk-API</span>
        </div>
        <Searchbar
          label="Search Your Beer"
          beerToSearch={searchTerm}
          handleInput={handleInput}
        />
        <FilterList />
      </Sidebar>
    </div>
  );
};

export default LeftDrawer;
 */