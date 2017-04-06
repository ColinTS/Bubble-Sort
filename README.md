# Sort-Algorithms
A collection of common sorting algorithms done in Javascript.

## Bubble Sort
#### Description
Bubble Sort traverses an array of numbers, comparing every number to the number that proeeds it. If it finds a number that is larger than the number that prooceeds it then it will swap the larger with the smaller so that the smaller number comes first. If at least one swap is made by the time the loop hits the end of the array, then it will loop again. Only when it loops all the way through without making a swap, will the newly ordered array be returned.

#### Pseudo Code
```
Declare "swapped"
Outer loop - sets "swapped" to false
  Inner loop - loops through numbers and swaps highs with low
  Sets "swapped" to true
If "swapped" remains false, loop is broken
Return numbers

```

#### Best Case Scenario
- O(n) -
The best case scenario is when the numbers are already sorted, for it will just have to loop through once.



#### Worst Case Scenario
- O(n²) -
The worse case is when each proceeding number is greater than the one before it. Therefore, it will have to loop through as many times as there are numbers in the array.


## Quick Sort
#### Description
Quicksort starts by selecting any number from the array -- known as the "pivot". Using the pivot as a point of reference, it sorts all numbers in the array that are smaller than the pivot to the left of the pivot and all numbers that are larger to the right. We call this partitioning. This is done until all numbers are separated into their own sub-arrays. The magic happens when we recursively call the sorting function to sort the sub-arrays.

#### Pseudo Code
```
Uses 2 functions and a helper function
  Quicksort function
  Partition function
  Swap function (helper)
Quicksort function
  If length of array is > 1
    set low to 0(first index)
    set high to last index


```

#### Best Case Scenario
- O(n) -
The best case scenario is when the numbers are already sorted, for it will just have to loop through once.



#### Worst Case Scenario
- O(n²) -
The worse case is when each proceeding number is greater than the one before it. Therefore, it will have to loop through as many times as there are numbers in the array.