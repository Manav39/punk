import React from "react";

import "./FilterItem.scss";

import { Checkbox } from "primereact/checkbox";

const FilterItem = (props) => {
  
  const { 
    tooltip,
    inputId, 
    value, 
    onChange, 
    checked, 
    label 
  } = props;

  return (
    <div>
      <div className="text-left mt-5 ml-4">
        <div className="p-field-checkbox">
          <Checkbox
            tooltip={tooltip}
            inputId={inputId}
            value={value}
            onChange={onChange}
            checked={checked}
          />
          <label className="ml-5" htmlFor={inputId}>
            {label}
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterItem;
