const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    result.textContent = roundResult;
  });
});

function computerPlay() {
  const weapons = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * weapons.length);
  return weapons[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `I have selected ${computerSelection} so It's a tie!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `I have selected ${computerSelection} so You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `I have selected ${computerSelection} so You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}