
let places: string [] = ['IslamAbad','Peshawer','Lahore','Karachi','Quetta'];

// print your array in its orignal order
console.log('orignal'+ places);
// print your array in alphabetical order without modifying the actual list.
console.log('copy' + [...places].sort());
// show that your array is still in its orignal order by printing it.
console.log('orignal'+ places);
// print your arry in reverse aplhabetical order without changing the order of the orignal list.
console.log('copy' +[...places].sort().reverse());
// show that your array is still in its orignal order by printing it again.
console.log('copy' + [...places].sort().reverse());
// reverse the order of your list.print the array to show that its order has changed.
console.log('copy' + [...places].sort());
// reverse the order of your list again .print the list to show its back to its orignal order.
console.log('copy' + [...places].sort().reverse());
// sort your array so its alphabetical order.print the array to show that its order has been changed.
console.log('copy' + [...places].sort());
