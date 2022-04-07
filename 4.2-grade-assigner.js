function gradeAssigner(score) {
  if (score >= 0 && score <= 64) {
    gAssigner = "F";
    return gAssigner;
  }
  if (score >= 65 && score <= 69) {
    gAssigner = "D";
    return gAssigner;
  }
  if (score >= 70 && score <= 79) {
    gAssigner = "C";
    return gAssigner;
  }
  if (score >= 70 && score <= 79) {
    gAssigner = "C";
    return gAssigner;
  }
  if (score >= 80 && score <= 89) {
    gAssigner = "B";
    return gAssigner;
  }

  if (score >= 90 && score <= 100) {
    gAssigner = "A";
    return gAssigner;
  }
}

console.log(gradeAssigner(a));
