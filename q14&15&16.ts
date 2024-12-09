let guest_list: string[]=['Ali','Akbar','Ahad','Aqil'];
//for (let i=0;i<guest_list.length;i++){
//  console.log('daer' + guest_list[i] + `\nyou are invited for a dinner tomorrow.\nthankyou,`);
//}
let not_coming: string = 'Ali';
let new_guest: string = 'Ahmad';
guest_list[0]= new_guest;
// for (let i=0;i<guest_list.length;i++){
 //   console.log(`dear ${guest_list[i]}\nyou are invited for a dinner tomorrow.\nthankyou\n`);
// }

// console.log(`mr ${not_coming}, is not coming for dinner tomorrow,`)

guest_list.unshift('Maaz');
guest_list.splice(guest_list.length/2, 2, 'Hamdan');
guest_list.push('Khan');
// for(let i=0;i<guest_list.length;i++){
 //   console.log('dear' + guest_list[i] + `\nyou are invited for a dinner tomorrow.\nthankyou,`);
// }
 //   console.log('we have found a bigger dinner table so we invited more guests');
 console.log(`\nunfortunatly we are out of space, so we have space for two guest,\n`);
 while(guest_list.length>2){
    let removed_guest = guest_list.pop();
    console.log(`sorry,dear ${removed_guest}, you are not invited for a dinner tomorrow`);
 }
  for(let i=0;i<guest_list.length;i++){
   console.log('dear' + guest_list[i] + `\nyou all are still invited for a dinner tomorrow.\nthankyou,`);
  }

  guest_list.splice(0,2);
  console.log(guest_list);