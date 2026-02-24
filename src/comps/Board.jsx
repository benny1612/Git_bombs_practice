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
 const hendleClick = (e) => {
    if(e.target.id === "bomb"){
        e.target.textContent=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M13.5 4.938a7 7 0 1 1-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 0 1 .572-2.759 6.026 6.026 0 0 1 2.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0 0 13.5 4.938ZM14 12a4 4 0 0 1-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 0 0 1.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 0 1 1.315-4.192.447.447 0 0 1 .431-.16A4.001 4.001 0 0 1 14 12Z" clip-rule="evenodd" />
</svg>

    }
 }
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
              onClick={hendleClick}
            >
              {element}
            </div>
          )),
        )}
      </div>
    </>
  );
}
