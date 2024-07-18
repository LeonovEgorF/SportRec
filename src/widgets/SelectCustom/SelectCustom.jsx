import React from "react";
import Select from "react-select";

import "./SelectCustom.scss";

const SelectCustom = ({ options, type }) => {
  const customOption = (props) => {
    return (
      <div
        className={`custom-option ${props.type === "lang" && "custom_option"}`}
        {...props.innerProps}
      >
        {type === "avatar" ? (
          props.data.label
        ) : (
          <>
            <img src={props.data.image} alt={props.data.label} />
            {props.data.label}
          </>
        )}
      </div>
    );
  };

  const customSingleValue = ({ data }) => {
    return (
      <div
        className={`custom-single-value ${
          type === "avatar" ? "avatarStyle" : "custom__value"
        }`}
      >
        {type === "avatar" ? (
          <img src={data.avatar} alt="avatar" />
        ) : (
          <>
            <img src={data.image} alt={data.label} />
            {data.label}
          </>
        )}
      </div>
    );
  };

  const commonStyles = {
    control: (provided) => ({
      ...provided,
      boxShadow: "none",
      border: "none",
      fontFamily: "inherit",
    }),
    option: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      border: "none",
      padding: 0,
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: 0,
    }),
    valueContainer: (provided) => ({
      ...provided,
      display: "flex",
    }),
    menu: (provided) => ({
      ...provided,
      width: "100px",
    }),
  };

  return (
    <Select
      options={options}
      components={{
        Option: customOption,
        SingleValue: customSingleValue,
      }}
      styles={commonStyles}
      defaultValue={options[0]}
      isSearchable={false}
      placeholder=""
    />
  );
};

export default SelectCustom;
