let userName = ['Hamdan','Hayyan','Habban','Admin','Hanoon']

userName = []

if (userName.length === 0){
    console.log('your array in empty we need to find some users!')
}else{
    // Using ForEach Loop non Array
    userName.forEach(oneuser =>{
        if(oneuser === 'Admin'){
            console.log(`Hello ${oneuser}, would you like to see a status report?`)
        }else{
            console.log(`Hello ${oneuser}, would you for logging in again.`)
        }
    })
}