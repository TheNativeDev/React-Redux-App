import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { fetchUrbanAreas, searchUrbanCity } from "../actions";

const SearchCity = () => {
  const dispatch = useDispatch();
  const urbanAreas = useSelector(state => state.urbanAreas);

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    dispatch(fetchUrbanAreas());
  }, [dispatch]);

  useEffect(() => {
    if (urbanAreas && selectedOption) {
      const url = urbanAreas.filter(
        item => item.name === selectedOption.value
      )[0].href;
      dispatch(searchUrbanCity(url));
    }
  }, [selectedOption, urbanAreas, dispatch]);

  const options = urbanAreas.map(item => ({
    value: item.name,
    label: item.name
  }));

  const handleChange = e => {
    setSelectedOption(e);
  };

  return (
    <div style={{ color: "#000" }}>
      <Select
        value={selectedOption}
        onChange={e => handleChange(e)}
        options={options}
      />
    </div>
  );
};

export default SearchCity;