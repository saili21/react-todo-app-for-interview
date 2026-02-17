import React from "react";
import { Filter } from "./index";

interface Props {
  value: Filter;
  onChange: (value: Filter) => void;
}

export default function TodoFilter({ value, onChange }: Props) {
  return (
    <div>
      <label htmlFor="filter">Filter</label>
      <select
        id="filter"
        value={value}
        onChange={(event) => {
          onChange(event.target.value as Filter);
        }}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}
