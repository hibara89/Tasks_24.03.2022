function countryToLiveIn(language, islsland, population, country) {
  if (language.toLowerCase() === "english" && !islsland && population < 50) {
    console.log(`You should live in ${country} `);
  } else {
    console.log(`${country} does not meet your criteria `);
  }
}

countryToLiveIn("ENglish", false, 60, "Finland");
countryToLiveIn("ENGLISH", false, 25, "Australia");
