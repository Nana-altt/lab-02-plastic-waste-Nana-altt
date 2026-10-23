const actionButton = document.getElementById('actionButton');
const goalFill = document.getElementById('goalFill');
const goalText = document.getElementById('goalText');
const plasticItems = document.getElementById('plasticItems');
const itemValue = document.getElementById('itemValue');
const impactSummary = document.getElementById('impactSummary');

let progress = 0;

actionButton.addEventListener('click', () => {
  progress = (progress + 25) % 101;
  goalFill.style.width = `${progress}%`;
  goalText.textContent = `${progress}% completed`;
});

plasticItems.addEventListener('input', (event) => {
  const value = Number(event.target.value);
  itemValue.textContent = value;
  impactSummary.textContent = `You’ve avoided ${value} plastic items today.`;
});
