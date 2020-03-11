// Arguments
// An array representing previous state: 'original'
// An array representing the indexes where you want to change things. They need to be ordered smallest to largest. 
// The values, in corresponding order, you want to change things to. 
// Example
// [0, 1, 2, 3] = 'original'
// [1, 3] = 'indexes'
// [5, 11] = 'values'
// result: [0, 5, 2, 11]

export default function changeStateArray(original, indexes, values) {

  let currentIndex = 0;

  const newArray = original.map((item, index) => {
    if (index === indexes[currentIndex]) {
      currentIndex += 1;
      return values[currentIndex - 1];
    }
    else return original[index];
  })

  return newArray;
}

// console.log(
//   changeStateArray(
//     [0, 1, 2, 3, 4, 5, 6, 7, 10],
//     [0, 3, 8],
//     [-1, 7, 17]
//   )
// )