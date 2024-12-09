// Define a function to print each magician name from an array

function show_magicians(magician: string[]){
     magician.forEach(name => console.log(name));
}

// Define an array containing magicians name
let magician_name = ['Harry poter','Rony','Efren']

// Call the function to print each magician name
show_magicians(magician_name);