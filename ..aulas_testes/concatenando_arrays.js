const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8], 9, "<- números");

console.log(a3, typeof a3);

// ------------------ mais simples usar spread (...) ------------------

const b1 = [1, 2, 3];
const b2 = [4, 5, 6];

const b3 = [...b1, ...b2];

console.log(b3);
