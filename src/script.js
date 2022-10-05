"use strict";
const randomDamage = () => Math.floor(Math.random() * 10 + 1);

const chooseOption = (opt1, opt2) => {
  let randNumb = Math.floor(Math.random() * 2);
  if (randNumb === 0) {
    return opt1;
  }
  return opt2;
};

function attackPlayer(health) {
  return health - randomDamage();
}

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => {
  if (health <= 0) {
    return "true";
  }
  return "false";
};
const fight = (player1, player2, player1Health, player2Health) => {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      let player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead() === "true") {
        logDeath(player1, player2);
      } else {
        break;
      }
    } else {
      let player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead() === "true") {
        logDeath(player2, player1);
      } else {
        break;
      }
    }
  }
};
fight("Erica", "Troy", 100, 100);

// const getGrade = (grade) => {
//   switch (grade) {
//     case grade > 100:
//       return "invalid entry";
//       break;
//     case grade <= 100:
//       return "A";
//       break;
//     case grade <= 89:
//       return "B";
//       break;
//     case grade <= 79:
//       return "C";
//       break;
//     case grade <= 69:
//       return "D";
//       break;
//     case grade <= 59:
//       return "F";
//       break;
//     default:
//       return "I don't know";
//       break;
//   }
// };
// console.log(getGrade(100));

// const prioritize = (urgent, important) => {

// }
