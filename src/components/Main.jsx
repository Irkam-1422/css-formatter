import React, { useState } from "react";
import { Container } from "./Container";

export const Main = () => {
  const [cssValue, setCssValue] = useState("");
  const [reactValue, setReactValue] = useState("");

  const cssToReact = (value) => {
    const last = (a) =>
      a
        .split(";")[0]
        .split(":")
        .map((a) => a.trim())
        .join(': "') + '"';

    const modified = value.split(";\n").map((a) => {
      if (a.trim().split("-").length === 1) return last(a);
      else {
        let arr = a.split(':')[0]
          .split("-")
          .map((a, i) => (i === 0 ? a : a[0].toUpperCase() + a.slice(1)));
        let l = last(arr.pop()+":"+a.split(':')[1]);
        return arr.map((a) => a.trim()).join("") + l;
      }
    });
    setReactValue(modified.join(",\n"));
  };

  const reactToCss = (value) => {
    const last = (a) => a.slice(1, -1) + ";";

    const modified = value
      .split(",").join('').split('\n')
      .map((a) => a.trim())
      .map((a) => {
        const arr = a.split(":").map((a) => a.trim());
        let divider = arr[0].split("").find((a) => a === a.toUpperCase());
        let property = arr[0];
        if (divider) {
         property = arr[0]
            .split('')
            .map((a) => (a === a.toUpperCase() ? "-" + a.toLowerCase() : a))
            .join('');
        }
        console.log(arr[1], '-', last(arr[1]));
        return property + ": " + last(arr[1]);
      });

    setCssValue(modified.join("\n"));
  };

  return (
    <div className="main">
        <Container
          title={"Css"}
          returnFormattedFn={(value) => {
            cssToReact(value);
          }}
          value={cssValue}
          setValue={setCssValue}
          color={"#e866a7"}
        />
        <Container
          title={"React"}
          returnFormattedFn={reactToCss}
          value={reactValue}
          setValue={setReactValue}
          color={"#4f9ddb"}
        />
    </div>
  );
};
