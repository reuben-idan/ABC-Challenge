function generateRandomColors() {
    const colors = ['green', 'blue', 'red'];
    const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor3 = colors[Math.floor(Math.random() * colors.length)];
    return [randomColor1, randomColor2, randomColor3];
  }

  const h5Elements = document.querySelectorAll('h5');

h5Elements.forEach(h5 => {
  h5.addEventListener('click', function() {
    const colors = generateRandomColors();
    this.style.color = colors[0]; // Set first random color
    this.style.backgroundColor = colors[1]; // Set second random color
    this.style.border = `2px solid ${colors[2]}`; // Set border with third random color
  });
});
