/*jshint esversion: 6*/
module.exports = (function()  {

//Bubble Sort Algo
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

      //breaks the loop if nothing is low to be swapped
      if(swapped === false){
        break;
      }
    }
    return numbers;
  }


//Quick Sort Algo
  function howBoutAQuickie(numbers, low, high){
    var index;

    if (numbers.length > 1) {

      low = typeof low != "number" ? 0 : low;
      high = typeof high != "number" ? numbers.length - 1 : high;

      index = partition(numbers, low, high);

      if (low < index - 1) {
          howBoutAQuickie(numbers, low, index - 1);
      }

      if (index < high) {
          howBoutAQuickie(numbers, index, high);
      }

    }
    return numbers;
    }

  function partition(numbers, low, high){
    var pivot = numbers[Math.floor((high + low) / 2)];
    var i = low;
    var j = high;

    while (i <= j) {

      while (numbers[i] < pivot) {
          i++;
      }

      while (numbers[j] > pivot) {
          j--;
      }

      if (i <= j) {
          swap(numbers, i, j);
          i++;
          j--;
      }
  }
  return i;
}

  function swap(numbers, i, j){
     var temp = numbers[i];
     numbers[i] = numbers[j];
     numbers[j] = temp;
  }


  return {
    mrSortyPants: mrSortyPants,
    howBoutAQuickie: howBoutAQuickie,
    partition: partition,
    swap: swap
  };

})();

