import React from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import SearchCity from "./SearchCity";
import Chart from "./Chart";
import "./DisplayCity.css";

const DisplayCity = () => {
  const urbanAreaScores = useSelector(state => state.urbanAreaScores);
  const error = useSelector(state => state.error);

  const renderInfo = () => {
    return (
      <>
        <p>Overall score: {Math.round(urbanAreaScores.teleport_city_score)}</p>
        {parse(urbanAreaScores.summary)}
      </>
    );
  };
  return (
    <div className="DisplayCity">
      <h1 className="titleHeader">Quality of Life Metrics</h1>
      <p>{error ? error : null}</p>
      <SearchCity />
      <Chart />
      {urbanAreaScores ? (
        renderInfo()
      ) : (
        <h2 className="subTitleHeader">Search for a city</h2>
      )}
    </div>
  );
};

export default DisplayCity;