import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import Filters from "./components/Filters";

export interface BikeInterface {
 name: string;
  price: number;
  gender?: string;
  brand?: string;
  image: string;
}

const App: React.FC = () => {
  const [allBikes, setAllBikes] = useState<BikeInterface[]>([]); //we'll use this to keep all bikes at all times here
  const [filteredBikes, setFilteredBikes] = useState<BikeInterface[]>([]); //we'll use this for filtering each category

  useEffect(() => {
    fetch("https://challenges.brainster.tech/ajax_data/data.json")
      .then((res) => res.json())
      .then((data) => setAllBikes(data.products));
  }, []);

  const filterize = (filterName: string, dataType: string) => {
    const filterizedBikes = allBikes.filter((item: any) => {
      return item[dataType] === filterName;
    });

    return filterizedBikes;
  };

  //if you click on all, just set the filteredBikes like they were at start
  const toggleAll = () => {
    setFilteredBikes(allBikes);
  };

  //the actual click on every filter (based on the name and type, filter the bikes and put them in the filteredBikes array)
  const toggleFilters = (filterName: string, dataType: string) => {
    let filteredArr = filterize(filterName, dataType);

    setFilteredBikes(filteredArr);
  };

  return (
    <div className="App container-lg bg-white">
      <Header />

      <div className="row py-5">
        <div className="col">
          <h1>Bikes</h1>

          <div className="row">
            {/* left-column - filters */}
            <div className="col-12 col-md-3">
              <Filters
                allBikes={allBikes}
                filterize={filterize}
                toggleAll={toggleAll}
                toggleFilters={toggleFilters}
              />
            </div>

            {/* right-colum - cards */}
            <div className="col-12 col-md-9">
              <div className="row card-cont">
                {filteredBikes.length === 0
                  ? allBikes.map(({ name, price, image }, i) => (
                      <Card key={i} name={name} price={price} image={image} />
                    ))
                  : filteredBikes.map(({ name, price, image }, i) => (
                      <Card key={i} name={name} price={price} image={image} />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
