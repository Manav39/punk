import React, { useState, useEffect } from "react";

import "./Home.scss";

import { Sidebar } from "primereact/sidebar";

import Searchbar from "../components/Searchbar/Searchbar";
import FilterList from "../components/FilterList/FilterList";
import CardList from "../components/CardList/CardList";
import SidebarLabel from "../components/SidebarLabel/SidebarLabel";

const Home = () => {
  const [isHighABVchecked, setIsHighABVchecked] = useState(false);
  const [isClassicRangeChecked, setIsClassicRangeChecked] = useState(false);
  const [isAcidicChecked, setIsAcidicChecked] = useState(false);
  const [valueIbu, setValueIbu] = useState(0);

  const [beersArr, setBeersArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //const [beersFilteredByHighABV, setBeersFilteredByHighABV] = useState([]);

  const handleSlider = (e) => {
    setValueIbu(e.value);

    fetch(`https://api.punkapi.com/v2/beers?ibu_lt=${valueIbu}`)
      .then((response) => {
        return response.json();
      })
      .then((beerData) => {
        console.log(beerData);
        setBeersArr(beerData);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => {
        return response.json();
      })
      .then((beerData) => {
        setBeersArr(beerData);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilters = (event) => {
    if (event.value === "High ABV") {
      setIsHighABVchecked(event.target.checked);

      const filteredByHighABV = beersArr.filter((beer) => beer.abv > 6);
      //setBeersFilteredByHighABV(filteredByHighABV);
      setBeersArr(filteredByHighABV);
    } else if (event.value === "Classic Range") {
      setIsClassicRangeChecked(event.target.checked);

      const filteredByClassicRange = beersArr.filter((beer) => {
        const yearFirstBrew = beer.first_brewed;
        const twoDigitYearValue = yearFirstBrew.slice(-2);

        return parseInt(twoDigitYearValue) < 10;
      });
      setBeersArr(filteredByClassicRange);
    } else if (event.value === "Acidic Range") {
      setIsAcidicChecked(event.target.checked);

      const filteredByAcidicRange = beersArr.filter((beer) => {
        let filteredBeer = null;
        if (beer.ph != null && beer.ph < 4) {
          filteredBeer = beer;
        }
        return filteredBeer;
      });
      setBeersArr(filteredByAcidicRange);
    }
  };

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredBeers = beersArr.filter((beer) => {
    const beerNameToLowerC = beer.name.toLowerCase();
    const searchTermToLowerC = searchTerm.toLowerCase();

    return beerNameToLowerC.includes(searchTermToLowerC);
  });
  console.log(filteredBeers);

  return (
    <div className="home">
      <Sidebar
        visible={true}
        showCloseIcon={false}
        style={{ backgroundColor: "#FFD36D", color: "black" }}
      >
        <SidebarLabel />
        <Searchbar
          label="Search Your Beer"
          beerToSearch={searchTerm}
          handleInput={handleInput}
        />
        <FilterList
          isHighABVchecked={isHighABVchecked}
          isClassicRangeChecked={isClassicRangeChecked}
          isAcidicChecked={isAcidicChecked}
          handleFilters={handleFilters}
          handleSlider={handleSlider}
          valueIbu={valueIbu}
        />
      </Sidebar>

      <CardList beerData={filteredBeers} />
    </div>
  );
};

export default Home;
