// Creating a Array
let userName = ["Hamadn","Hayyan","Habban","Admin","Hanoon"];

// Using ForEach Loop on Array

userName.forEach(oneuser =>{
    if(oneuser === "Admin"){
        console.log(`Hello ${oneuser}, would you like to see a status report?`)
    }else {
        console.log(`Hello ${oneuser}, thank you for logging in again.`)
    }
})
