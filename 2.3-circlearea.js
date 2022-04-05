function circleArea(r) {
  let area = r ** r * 3.141;

  return area;
}

console.log(circleArea(5));

console.log(Math.round(circleArea(5) * 100) / 100);
