import React, { useState } from "react";
import { useEffect } from "react";

const PaginationPreviousNextBtn = (props) => {
  const { itemsPerPage, onPaginationChange, totalItems } = props;

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = itemsPerPage * counter;
    onPaginationChange(value - itemsPerPage, value);
  }, [counter]);

  const onButtonClick = (btn) => {
    if (btn === "previous") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (btn === "next") {
      if (counter === Math.ceil(totalItems / itemsPerPage)) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <div className="d-flex justify-content-around mt-5 mb-5">
      <button
        className="btn btn-primary"
        onClick={() => onButtonClick("previous")}
      >
        Previous
      </button>
      <button className="btn btn-primary" onClick={() => onButtonClick("next")}>
        Next
      </button>
    </div>
  );
};

export default PaginationPreviousNextBtn;
