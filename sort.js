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


//Merge Sort Algo

  //recursively divides numbers array into single arrays for each number
  function divide(numbers){
    //base case
    if (numbers.length <= 1){
      return numbers;
    }
    var middle = Math.floor(numbers.length / 2);
    var leftGroup = divide(numbers.slice(0, middle));
    var rightGroup = divide(numbers.slice(middle));

    return conquer(leftGroup, rightGroup);
  }

  //compares and combines each number into one ordered array.
  function conquer(left, right){
    var ordered = [];

    while(left.length > 0 && right.length > 0){
      if(left[0] < right[0]){
        ordered.push(left.shift());
      } else{
        ordered.push(right.shift());
      }
    }
    return ordered.concat(left.length? left : right);
  }

//Insertion Sort Algo
function insert(numbers){
  var temp;

  for(var i = 1; i < numbers.length; i++){
   var j = i;
    while(j > 0 && numbers[j-1] > numbers[j]){
      temp = numbers[j];
      numbers[j] = numbers[j - 1];
      numbers[j - 1] = temp;
      j = j -1;
    }
  }
  return numbers;
}

//Selection Sort Algo
function selection(numbers){
  var min;

  //outer loop sets first value as minimum
  for(var i = 0; i < numbers.length; i++){
    min = i;
    //inner loop loops through array and sets new minimum value if there is one
    for(var j = i + 1; j < numbers.length; j++) {
        if(numbers[j] < numbers[min]) {
          min = j;
        }
      }
    if(i !== min){
      swap(numbers, i, min);
    }
  }
  return numbers;
}

  return {
    mrSortyPants: mrSortyPants,
    howBoutAQuickie: howBoutAQuickie,
    partition: partition,
    swap: swap,
    divide: divide,
    conquer: conquer,
    insert: insert,
    selection: selection
  };

})();

