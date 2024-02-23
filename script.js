// Function to add a new card
function addCard() {
  // Prompt user for input
  const profileImage = window.prompt("Enter profile image link:");
  const name = window.prompt("Enter name:");
  const description = window.prompt("Enter description:");

  // Check if user clicked cancel
  if (profileImage === null || name === null || description === null) return;

  // Create card with user input
  const cardContainer = document.getElementById("cardContainer");
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
<img src="${profileImage}" alt="Profile Image">
<div class="text-lg font-bold">${name}</div>
<div class="text-sm text-gray-500 text-wrap ">${description}</div>
`;
  cardContainer.appendChild(card);
}


// Function to edit an existing card
function editCard() {
  const index = window.prompt("Enter the index of the card you want to edit:");
  if (index === null) return; // Check if user clicked cancel
  const cardContainer = document.getElementById("cardContainer");
  const cards = cardContainer.getElementsByClassName("card");
  const cardIndex = parseInt(index, 10);
  if (!isNaN(cardIndex) && cardIndex >= 0 && cardIndex < cards.length) {
    // Prompt user for new details
    const profileImage = window.prompt("Enter new profile image link:");
    const name = window.prompt("Enter new name:");
    const description = window.prompt("Enter new description:");

    // Update card with new details
    if (profileImage !== null && name !== null && description !== null) {
      const card = cards[cardIndex];
      const img = card.querySelector("img");
      img.src = profileImage;
      const nameElement = card.querySelector(".text-lg");
      nameElement.textContent = name;
      const descriptionElement = card.querySelector(".text-sm");
      descriptionElement.textContent = description;
    }
  } else {
    alert("Invalid index or no card found at the specified index.");
  }
}

// Function to update an existing card
function updateCard() {
  const index1 = window.prompt("Enter the index of the first card you want to swap:");
  if (index1 === null) return; // Check if user clicked cancel
  const index2 = window.prompt("Enter the index of the second card you want to swap:");
  if (index2 === null) return; // Check if user clicked cancel
  const cardContainer = document.getElementById("cardContainer");
  const cards = cardContainer.getElementsByClassName("card");
  const cardIndex1 = parseInt(index1, 10);
  const cardIndex2 = parseInt(index2, 10);
  if (!isNaN(cardIndex1) && cardIndex1 >= 0 && cardIndex1 < cards.length &&
    !isNaN(cardIndex2) && cardIndex2 >= 0 && cardIndex2 < cards.length) {
    // Swap cards
    const card1 = cards[cardIndex1];
    const card2 = cards[cardIndex2];
    const temp = card1.innerHTML;
    card1.innerHTML = card2.innerHTML;
    card2.innerHTML = temp;
  } else {
    alert("Invalid index or no card found at the specified index.");
  }
}

// Function to delete a card
function deleteCard() {
  const index = window.prompt("Enter the index of the card you want to delete:");
  if (index === null) return; // Check if user clicked cancel
  const cardContainer = document.getElementById("cardContainer");
  const cards = cardContainer.getElementsByClassName("card");
  const cardIndex = parseInt(index, 10);
  if (!isNaN(cardIndex) && cardIndex >= 0 && cardIndex < cards.length) {
    cardContainer.removeChild(cards[cardIndex]);
  } else {
    alert("Invalid index or no card found at the specified index.");
  }
}

// Toggle responsive menu
document.getElementById('toggleMenu').addEventListener('click', function () {
  document.getElementById('responsiveMenu').classList.toggle('hidden');
  document.getElementById('toggleMenu').classList.toggle('open');
});