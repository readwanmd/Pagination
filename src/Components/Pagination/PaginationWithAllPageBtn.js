import React, {useState} from 'react';
import {useEffect} from 'react';

const PaginationWithAllPageBtn = (props) => {
  const { itemsPerPage, onPaginationChange, totalItems } = props;

  const [counter, setCounter] = useState(1);
  useEffect(() => {
    const value = itemsPerPage * counter;
    onPaginationChange(value - itemsPerPage, value);
  }, [counter]);

  const numberOfbtns = Math.ceil(totalItems / itemsPerPage);

  const onButtonClick = (btn) => {
    if (btn === "previous") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (btn === "next") {
      if (counter === numberOfbtns) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
      <nav aria-label="Page navigation example">
        <ul className="pagination" style={{ cursor: "pointer" }}>
          <li
            className="page-item page-link"
            onClick={() => onButtonClick("previous")}
          >
            Previous
          </li>
          {new Array(numberOfbtns).fill().map((element, index) => (
            <li
              className={`page-item ${index + 1 === counter ? "active" : null}`}
              key={index}
            >
              <a className="page-link" onClick={() => setCounter(index + 1)}>
                {index + 1}
              </a>
            </li>
          ))}
          <li
            className="page-item page-link"
            onClick={() => onButtonClick("next")}
          >
            Next
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationWithAllPageBtn;