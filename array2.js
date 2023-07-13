const marvel_heroes=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"];
//create array of array
marvel_heros.push(dc_heros);
//console.log(marvel_heroes);
//how to access array of  array
//console.log(marvel_heroes[3][1]);
//concat karte hai tab new array return krta hai
const allheroes=marvel_heroes.concat(dc_heros);
console.log(marvel_heroes);
console.log(allheroes);

//spread operator
const all=[...marvel_heroes,...dc_heros]
console.log(all);


console.log(array.isArray("hitesh"))//return  false
//convert array

console.log(Array.from(hitesh))