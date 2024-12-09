// Describe a function
function describe_city(city: string, country: string = 'Pakistan'){
    console.log(`${city} is in ${country}`);
}

// Calling the function
describe_city('Karachi');

describe_city('Peshawer');

describe_city('Mexico','USA');