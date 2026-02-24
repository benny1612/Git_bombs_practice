import React from "react";
import { useRef } from "react";
export default function Board() {
  const randomNum = useRef(Math.floor(Math.random() * 10) + 1);

  function createMatrix(rows, cols) {
    const matrix = [];
    let counter = 1;

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(counter++);
      }
      matrix.push(row);
    }

    return matrix;
  }

  const size = Math.floor(Math.random() * 9) + 2;
  console.log(size);

  const matrix = createMatrix(size, size);
  console.log(matrix);

  function getRandomNumbersArray(max) {
    const randomArray = [];
    for (let i = 0; i < max / 2; i++) {
      let randomNumber = Math.floor(Math.random() * max) + 1;
      while (randomArray.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * max) + 1;
      }
      randomArray.push(randomNumber);
    }
    return randomArray;
  }
  const randomArray = getRandomNumbersArray((size * size));
console.log(randomArray);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${size}, 1fr)`,
          gridTemplateRows: `repeat(${size}, 1fr)`,
          gap: "4px",
        }}
        className={`bg-[#0b1424] p-2 border rounded-xl ml-5 mr-5 mt-5`}
      >
        {matrix.map((arr, i) =>
          arr.map((element, j) => (
            <div
              className=" bg-[#2c3b58] hover:bg-gray-300 border p-4 rounded-lg aspect-square  shadow-sm transition-colors"
              id={randomArray.includes(element) ? "bomb" : `${element}`}
            >
              {element}
            </div>
          )),
        )}
      </div>
    </>
  );
}
