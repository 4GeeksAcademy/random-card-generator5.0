/* eslint-disable */
import "bootstrap";
import "./style.css";

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

  // Update the HTML to display the random card
  const suitElement = document.getElementById("suit");
  suitElement.textContent = suit;
  suitElement.style.color = suit === "♥" || suit === "♦" ? "red" : "black"; // Make hearts and diamonds red

  document.getElementById("value").textContent = value;
}

// Generate a random card when the page loads
window.onload = generateRandomCard;
