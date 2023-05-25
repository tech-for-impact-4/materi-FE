// mengklarifikasi maksud dari interviewer
// 1, 1 -> 2
// 1, 2 -> 3
// 2, 2 -> 4

const sum = (x, y) => {
  return x + y
}

// module.exports = sum

// testing tanpa jest
console.log(sum(1, 1)); // 2
console.log(sum(1, 2)); // 3
console.log(sum(2, 2)); // 4