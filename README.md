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
    Set low to 0(first index)
    Set high to last index
    Call partition function (mapped below)
Partition function
  Set pivot point
  Set i to low
  Set j to high
  While i <= j
    While i of numbers is < pivot, increase i
    While j of numbers is > pivot, decrease j
    If i <= j
      Swap i with j
  Return i
Once partitioned, back to Quicksort function to recursively sort
  If low < returned partitioned number - 1
    Invoke quicksort with low and returned partitioned number - 1 as paramaters
  If returned partitioned number is less than high
    Invoke quicksort with partitioned number and high as paramaters
Return sorted array

```

#### Best Case Scenario
- O(n log n) -
The best case scenario is when the partitions are as evenly sized as possible.



#### Worst Case Scenario
- O(n²) -
The worse case is when the partitions are as unbalanced as possible. This would mean that the chosen pivot would always be the lowest or highest number in the array.



## Merge Sort
#### Description
Merge sort works by splitting up the numbered array into singular arrays holding each number of the original array. It will then recursively compare and combine each number to create the new ordered array.

#### Pseudo Code
```
Uses 2 functions
  Divide function
  Conquer function
Divide function
  Set base case - If length of array is <= 1
    Return array
  Set middle to be middle index of array
  Set left to recursively divide array to the left of the middle
  Set right to recursively divide array to the right of the middle
Invoke conquer
  Set empty array
  While length of left array and right array is > 0
    If first index of left is < first of index of right
      Push first index of left index to empty array
    Else
      Push first index of right to empty array
  Concat and return left or right

```

#### Best Case / Worst Case Scenario
- O(n log n) -
The best case and worst case scenario are the same for merge sort because in both cases the array is beingly evenly halved into its single numbers and then being sorted.



## Insertion Sort
#### Description
Insertion sort sorts numbers similar to how we sort cards. Moving from left to right in the numbered array, each number is compared with the proceeding number, and if the proceeding number is larger, the numbers are swapped. Unlike bubble sort, the number is compared with all previous numbers that have not been swapped yet and will swap the number if it finds a number that is smaller.

#### Pseudo Code
```
For i < length of numbered array
  Set j = i
  While j > 0 and proceeding number is great than current index
    swap numbers
    decrease j by 1
  Return numbered array

```

#### Best Case Scenario
- O(n) -
Best case is that the array is already sorted. In this case it only has to loop over once for every number in the array.



#### Worst Case Scenario
- O(n²) -
Worst case is that the array is sorted in opposite order than is desired. It will have to loop over twice as much for each number in the array.


## Selection Sort
#### Description
Selection sort starts by finding the index of the smallest number in the array and placing this number at the beginning of the array. Next, it finds the second-smallest number in the array and moves it into index 1. This pattern is repeated until the end of the array, and all numbers will be sorted.

#### Pseudo Code
```
Outer loop sets first value as minimum
  Inner loop loops through array and sets new min value if min exists
If index does not equal min
  swap index with min
Return numbered array
```

#### Best Case / Worst Case Scenario
- O(n²) -
Best case and worse case share the same, because either way the double nested for loop will result in the algorithm having to loop doubly over the numbered array.