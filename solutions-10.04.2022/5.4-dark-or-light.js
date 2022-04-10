let color = "ORange";

switch (color.toLocaleLowerCase()) {
  case "yellow":
  case "pink":
  case "orange":
    console.log("light color");
    break;
  case "blue":
  case "purple":
  case "brown":
    console.log("dark color");
    break;

  default:
    console.log("Uknown color");
}
