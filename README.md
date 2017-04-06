# Sort-Algorithms
A collection of common sorting algorithms done in Javascript.

## Bubble Sort
#### Description
Bubble Sort traverses an array of numbers, comparing every number to the number that proeeds it. If it finds a number that is larger than the number that prooceeds it then it will swap the larger with the smaller so that the smaller number comes first. If at least one swap is made by the time the loop hits the end of the array, then it will loop again. Only when it loops all the way through without making a swap, will the newly ordered array be returned.

### Pseudo Code
```
Declare "swapped"
Outer loop - sets "swapped" to false
  Inner loop - loops through numbers and swaps highs with low
  Sets "swapped" to true
If "swapped" remains false, loop is broken
Return numbers

```

### Best Case Scenario
- O(n)
The best case scenario is when the numbers are already sorted, for it will just have to loop through once.



### Worst Case Scenario
- O(n²)
The worse case is when each proceeding number is greater than the one before it. Therefore, it will have to loop through as many times as there are numbers in the array.