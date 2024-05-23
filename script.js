// Function to generate a random color
function getRandomColor() {
  const colors = ['green', 'blue', 'red'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Function to apply random colors to an element
function changeColors(element) {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const color3 = getRandomColor();

  element.style.color = color1;
  element.style.listStyleColor = color2; // Change list style color
  element.style.borderColor = color3; // Add a border with random color
}
