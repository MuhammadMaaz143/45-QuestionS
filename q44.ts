// Definwea function with a rest parameter that accept items arugments representing our sandwich
function makeSandwich(...items: string []){
    console.log('making a sandwich with the following items: \n');

    items.forEach(singleItem => console.log(singleItem));

    console.log('\nNow enjoy sandwich');
}

// Call the function 3 items with 3 diffrent number of arguments
makeSandwich('Checken','Cheese','Mayo','Egg'); 

makeSandwich('Bread','Butter');

makeSandwich('Bread','Butter','Mayo','Egg','Cheese','Checken','Lettuce','Tomato');
