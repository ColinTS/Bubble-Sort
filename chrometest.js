function insert(numbers){
  for(var i = 1; i < numbers.length; i++){
   var j = i;
    while(j > 0 && numbers[j-1] > numbers[j]){
      swap(numbers, j, j - 1);
      j = j - 1;
    }
  }
  return numbers;
}

 function swap(numbers, i, j){
     var temp = numbers[i];
     numbers[i] = numbers[j];
     numbers[j] = temp;
  }

  console.log(insert([4,1,9,2,12,3]));