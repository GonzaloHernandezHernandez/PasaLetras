const dice = document.getElementById('dice');
const slider = document.getElementById('slider');
const teamElements = [
    document.getElementById('team-1'),
    document.getElementById('team-2'),
    document.getElementById('team-3'),
    document.getElementById('team-4')
];

let numTeams = 2; // Default number of teams
let currentTeam = 1;
let positions = {}; // Tracks each team's position
const alphabet = '*ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Initialize teams dynamically based on user input
function initializeTeams(n) {
    numTeams = n;
    positions = {};
    for (let i = 1; i <= numTeams; i++) {
        positions[i] = 0; // Set initial position for each team
    }
    currentTeam = 1; // Reset to team 1

    // Show or hide team elements based on the number of teams
    teamElements.forEach((element, index) => {
        if (index < numTeams) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}

// Call this function when the number of teams is selected (replace with actual selection logic)
initializeTeams(2); // Example: Initialize for 2 teams

// Initialize the alphabet slider
alphabet.split('').forEach((letter, index) => {
    const letterDiv = document.createElement('div');
    letterDiv.classList.add('letter');
    letterDiv.textContent = letter;
    if (index === 0) letterDiv.classList.add('home'); // Mark the home position
    letterDiv.dataset.index = index;
    slider.appendChild(letterDiv);
});

// Roll the dice
dice.addEventListener('click', () => {
    const roll = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
    dice.textContent = roll;

    let position = positions[currentTeam] + roll; // Increment position by dice roll

    // Wrap around if position exceeds the alphabet length
    position = (position - 1) % alphabet.length + 1; // Ensure position stays within 1-26

    positions[currentTeam] = position; // Update position for current team
    updatePosition(currentTeam);

    // Display a question if not on the home position
    if (position !== 0) {
        alert(`Pregunta para la letra: ${alphabet[position - 1]}`); // Adjust index for 0-based array
    }

    // Switch to the next team's turn
    currentTeam = currentTeam === numTeams ? 1 : currentTeam + 1;
});

function updatePosition(team) {
    const position = positions[team];

    // Highlight the current letter for the team
    Array.from(slider.children).forEach((child, index) => {
        if (index === position - 1) { // Adjust index for 0-based array
            child.style.backgroundColor = getColorForTeam(team); // Highlight color per team
        } else {
            child.style.backgroundColor = '#fff'; // Reset others
        }
    });
}

function getColorForTeam(team) {
    const colors = ['#87ceeb', '#ffa07a', '#90ee90', '#ffb6c1']; // Colors for up to 4 teams
    return colors[team - 1] || '#ddd'; // Default color if more than 4 teams
}
