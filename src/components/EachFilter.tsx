import React from "react";
import { BikeInterface } from "../App";

interface Props {
  filterName: string;
  dataType: string;
  toggleActive: (filterName: string) => void;
  activeFilter: string;
  allBikes: {}[];
  filterize?: (filterName: string, dataType: string) => BikeInterface[];
  toggleAll?: () => void;
  toggleFilters?: (filterName: string, dataType: string) => void;
}

const EachFilter: React.FC<Props> = ({
  filterName,
  dataType,
  toggleActive,
  activeFilter,
  allBikes,
  filterize,
  toggleAll,
  toggleFilters
}) => {
  return (
    <li
      className={`filter d-flex justify-content-between align-items-center mb-2${
        activeFilter === filterName ? " active" : ""
      }`} //if the current FilterName is active, set the active class
      data-type={dataType} //data-type from props to use it with the filterize/toggle functions
      onClick={() => {
        //use the toggle functions from App, based on them we're going to show all the bikes or all the filtered ones
        dataType === "all" ? toggleAll!() : toggleFilters!(filterName, dataType)

        //use the toggleActive function from Filters component to set only 1 active filter at a time, passing the filterName to do that
        toggleActive(filterName);
      }}
    >
      <span>{filterName}</span>
      <span className="badge badge-secondary badge-pill">
        {/* get the badge value based on the length of the allBikes array or the filtered array */}
        {dataType === "all"
          ? allBikes.length
          : filterize!(filterName.toUpperCase(), dataType).length}
      </span>
    </li>
  );
};

export default EachFilter;
