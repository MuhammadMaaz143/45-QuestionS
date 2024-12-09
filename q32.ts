// Array of current users
let current_users = ['Hamdan','Huda','Hayyan','Habban','Hanoon']

// Array of new users
let new_users = ['Huzaifa','Zuha','Zoya','Haneen','Zaresh']

// Loop thrugh new_users to check for username availibity

new_users.forEach(new_one_user => {

    // making a condition for username already exist and save in out_conition variable
    let our_conition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // print diffrent messages using If Else statments 
    if(our_conition){
    console.log(`sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`this username ${new_one_user} is available`)
    }
})
    

