const Firstargs = process.argv[2];

if (Firstargs === undefined) {
  console.log("No argument");
} else {
  console.log(Firstargs); // print the value of the variable
}

