function recursiva(n) {
  if (n === 10) return;
  console.log(n);
  n++;
  recursiva(n);
}

recursiva(1);
