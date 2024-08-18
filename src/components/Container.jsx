import React from "react";
import "./styles.scss";

export const Container = ({
  title,
  returnFormattedFn,
  value,
  setValue,
  color,
}) => {
  return (
    <div className="cont">
      <h1 style={{ color: color }}>{title}</h1>
      <textarea
        style={{ borderColor: color }}
        cols="60"
        rows="10"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        style={{ background: color }}
        onClick={() => returnFormattedFn(value)}
      >
        Format
      </button>
    </div>
  );
};
