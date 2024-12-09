// Define the function to show magicians names

function show_magicians(magicians: string []){
    magicians.forEach(name => console.log(name));
}

// Function to make magicians great through .map() it will modify array
function make_great(magician: string[]){
   return magician.map(name => `the great ${name}`);
}

// Define an array of magicians name
let magician_name = ['Harry Poter','Rony','Efren']

// Call make_great function to modify magicians name
let great_magician = make_great(magician_name);

// Call show_magicians that shpw modified list of magicians
show_magicians(great_magician);