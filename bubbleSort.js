/*jshint esversion: 6*/
module.exports = (numbers) => {

var swapped;
var temp;
//Loops through numbers, defaults "swapped" to false.
for (var i = 0; i < numbers.length; i++){
  swapped = false;

  //Loops through numbers and swaps numbers, sets "swapped" to true.
  for (var y = 0; y < numbers.length; y++){
    if(numbers[y] > numbers[y +1]){
      temp = numbers[y];
      numbers[y] = numbers[y + 1];
      numbers[y + 1] = temp;
      swapped = true;
    }
  }

  //breaks the loop if nothing is left to be swapped
  if(swapped === false){
    break;
  }
}
return numbers;
};

