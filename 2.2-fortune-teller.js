function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  let inTheFuture = `You will be a ${jobTitle} in {location} and married to ${partnerName} with ${numberOfChildren} children`;

  return inTheFuture;
}

console.log(tellFortune("programmer", "Nazareth", "Marwan", 2));
