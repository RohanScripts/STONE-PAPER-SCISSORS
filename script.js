let userScore = 0;
let bhaiScore = 0;

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    asliGame(userChoice);
  });
});

const asliGame = (userChoice) => {
  console.log("user's", userChoice);
  const bhaiChoice = genBhaiChoice();
  console.log("bhai is", bhaiChoice);

  if (userChoice === bhaiChoice) {
    drawGame(bhaiChoice);
  } else {
    if (userChoice === "stone") {
      if (bhaiChoice === "paper") {
        bhaiJeete(bhaiChoice);
      } else if (bhaiChoice === "scissors") {
        tumJeete(bhaiChoice);
      }
    } else if (userChoice === "paper") {
      if (bhaiChoice === "stone") {
        tumJeete(bhaiChoice);
      } else if (bhaiChoice === "scissors") {
        bhaiJeete(bhaiChoice);
      }
    } else if (userChoice === "scissors") {
      if (bhaiChoice === "stone") {
        bhaiJeete(bhaiChoice);
      } else if (bhaiChoice === "paper") {
        tumJeete(bhaiChoice);
      }
    }
  }

  document.querySelector("#user-score").innerHTML = userScore;
  document.querySelector("#system-score").innerHTML = bhaiScore;
};

const genBhaiChoice = () => {
  const options = ["stone", "paper", "scissors"];
  const rand = Math.floor(Math.random() * 3);
  return options[rand];
};

const drawGame = (bhaiChoice) => {
  console.log("game was draw !");
  document.querySelector("#msg").innerHTML = "game was draw !";
  document.querySelector("#msg2").innerHTML = `bhai also chose : ${bhaiChoice}`;
  document.querySelector("#msg").style.backgroundColor = "black";
};

const tumJeete = (bhaiChoice) => {
  document.querySelector("#msg").innerHTML = "aaj khush to bahut hoge tum !";
  document.querySelector("#msg").style.backgroundColor = "green";
  document.querySelector("#msg2").innerHTML = `bhai chose : ${bhaiChoice}`;
  userScore++;
};

const bhaiJeete = (bhaiChoice) => {
  document.querySelector("#msg").innerHTML =
    "bhai ke aage koi bol sakta hai kya !";
  document.querySelector("#msg").style.backgroundColor = "red";
  document.querySelector("#msg2").innerHTML = `bhai chose : ${bhaiChoice}`;
  bhaiScore++;
};
