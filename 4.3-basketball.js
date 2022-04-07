const averageScore = function (a, b, c) {
  return (a + b + c) / 3;
};

let johnTeamScore = averageScore(90, 90, 90);
let mikeTeamScore = averageScore(90, 90, 90);
let maryTeamScore = averageScore(90, 90, 90);

if (johnTeamScore > mikeTeamScore && johnTeamScore > maryTeamScore) {
  console.log(
    `The winner team is Johns with average score of ${johnTeamScore}`
  );
} else if (johnTeamScore < mikeTeamScore && mikeTeamScore > maryTeamScore) {
  console.log(
    `The winner team is Mike's with average score of ${mikeTeamScore}`
  );
} else if (maryTeamScore > johnTeamScore && maryTeamScore > mikeTeamScore) {
  console.log(
    `The winner team is Mary's with average score of ${maryTeamScore}`
  );
} else {
  console.log(`all teams have the same average score ${mikeTeamScore}, a draw`);
}
