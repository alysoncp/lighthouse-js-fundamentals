const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while(i <= (ingredients.length - 1)){
  console.log(ingredients[i])
  i++
}

// Write a for loop that prints out the contents of ingredients:
let j = 0;
for(j; j <= (ingredients.length - 1); j++){
  console.log(ingredients[j])
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let k = ingredients.length - 1;
for(k; k >= 0; k--){
  console.log(ingredients[k])
}