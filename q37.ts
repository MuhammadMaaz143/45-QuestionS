// Making a function
function make_shirt (size: string ='Large', printMessage: string = 'I love Typescript'){
    console.log(`creatinga ${size} shirt with the ${printMessage} prints on shirt`)
}

// Calling a function with by-default values
make_shirt();

//  Calling a function now with medium size and default message
make_shirt('medium');


// Calling a function now with small size and different print message
make_shirt('small','I love Phyton')