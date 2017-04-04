/*jshint esversion: 6*/
module.exports = () => {

  function mrSortyPants(numbers) {
    var swapped;
    var temp;

    //loops through numbers, defaults "swapped" to false.
    for (var i = 0; i < numbers.length; i++){
      swapped = false;

      //loops through numbers and swaps numbers, sets "swapped" to true.
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
  }

  return {
    mrSortyPants: mrSortyPants
  };

};

