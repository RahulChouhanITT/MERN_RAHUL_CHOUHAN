import React from "react";
import "./style.css";
import { EMPTY } from "../../utils/constants/constants";
import type { SelectFilterProps } from "../../utils/types/bookType";

const SelectFilter: React.FC<SelectFilterProps> = ({
  value,
  options,
  placeholder,
  onChange,
}) => {
  return (
    <select
      className="select-filter"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value={EMPTY.STRING}>{placeholder}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default SelectFilter;
