import React, { useState } from "react";
import { BikeInterface } from "../App";
import EachFilter from "./EachFilter";

interface Props {
  allBikes: BikeInterface[];
  filterize: (filterName: string, dataType: string) => BikeInterface[];
  toggleAll: () => void;
  toggleFilters: (filterName: string, dataType: string) => void;
}

const Filters: React.FC<Props> = ({ allBikes, filterize, toggleAll, toggleFilters }) => {
  const [activeFilter, setActiveFilter] = useState("Show All"); //when you first come to the page, the Show All filter is selected

  //setting the active filter class based on the filterName that is being sent here from the EachFilter component
  const toggleActive = (filterName: string) => {
    setActiveFilter(filterName);
  };

  //helper array to print all the filters at once
  const filterBrandNames = [
    "LE GRAND BIKES",
    "KROSS",
    "EXPLORER",
    "VISITOR",
    "PONY",
    "FORCE",
    "E-BIKES",
    "IDEAL",
  ];

  return (
    <>
      <h2 className="h5 mb-4">Filter by:</h2>

      <ul className="list-unstyled">
        <EachFilter
          filterName="Show All"
          dataType="all"
          toggleActive={toggleActive}
          activeFilter={activeFilter}
          allBikes={allBikes}
          toggleAll={toggleAll}
        />
      </ul>

      <hr />

      <h3 className="h6 font-weight-bold mb-3">Gender</h3>
      <ul className="list-unstyled">
        <EachFilter
          filterName="MALE"
          dataType="gender"
          toggleActive={toggleActive}
          activeFilter={activeFilter}
          allBikes={allBikes}
          filterize={filterize}
          toggleFilters={toggleFilters}
        />
        <EachFilter
          filterName="FEMALE"
          dataType="gender"
          toggleActive={toggleActive}
          activeFilter={activeFilter}
          allBikes={allBikes}
          filterize={filterize}
          toggleFilters={toggleFilters}
        />
      </ul>

      <hr />

      <h3 className="h6 font-weight-bold mb-3">Brand</h3>
      <ul className="list-unstyled">
        {filterBrandNames.map((brandName, i) => (
          <EachFilter
            key={i}
            filterName={brandName}
            dataType="brand"
            toggleActive={toggleActive}
            activeFilter={activeFilter}
            allBikes={allBikes}
            filterize={filterize}
            toggleFilters={toggleFilters}
          />
        ))}
      </ul>
    </>
  );
};

export default Filters;
