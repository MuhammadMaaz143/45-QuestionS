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

// Making a copy of orignal array through .Slice() function

let copy_magician_names = magician_name.slice()

// Modify the copied array to 'the great' with thier name
let copy_great_magicians = make_great(copy_magician_names);

// Show both arrays orignal and copied

// Orinal
console.log('Orignal Array\n')
show_magicians(magician_name);

// Copied
console.log('\nCopied Array\n')
show_magicians(copy_great_magicians);
