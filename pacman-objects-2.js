
const ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange' };
console.log(ghosts);

console.log(ghosts.inky); // => 'Cyan'
console.log(ghosts.blinky); // => 'Red'

console.log(ghosts['inky']); // => 'Cyan'
console.log(ghosts['blinky']); // => 'Red'

// square bracket notation is needed when the property you want to retrieve on the object is stored in a variable

const ghostName = 'clyde';
ghosts[ghostName]; // => 'Orange'
