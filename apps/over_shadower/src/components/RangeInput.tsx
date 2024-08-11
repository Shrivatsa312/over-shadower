import * as React from "react";
import { ShadowReducerActionTypeKey } from "../hooks/useShadowReducer";

type RangeInputProps = {
  defaultValue: number;
  id: string;
  label: string;
  field: Exclude<ShadowReducerActionTypeKey, "SET_COLOR">;
  min?: number;
  max?: number;
  onChange: (
    field: Exclude<ShadowReducerActionTypeKey, "SET_COLOR">
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RangeInput = ({
  field,
  label,
  defaultValue,
  id,
  min,
  max,
  onChange,
}: RangeInputProps) => {
  return (
    <div className="flex gap-10">
      <label className="w-fit" htmlFor={id}>
        {label}
      </label>
      <input
        type="range"
        id={id}
        defaultValue={defaultValue}
        min={min}
        max={max}
        className="w-[400px]"
        step={1}
        onChange={onChange(field)}
      />
    </div>
  );
};

export default RangeInput;
