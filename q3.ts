let personName: string = 'Maaz';
console.log('LowerCase:',personName.toLowerCase());

console.log('UpperCase',personName.toUpperCase());

console.log('titleCase',personName.replace(/\bw/g,c => c.toLowerCase()));
