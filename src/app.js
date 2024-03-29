const suits = ["♠", "♥", "♦", "♣"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

function generateRandomCard() {
  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomValueIndex = Math.floor(Math.random() * values.length);

  const suit = suits[randomSuitIndex];
  const value = values[randomValueIndex];

  document.getElementById("suit").textContent = suit;
  document.getElementById("value").textContent = value;
}
