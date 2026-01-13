/**
 * Array Utilities Library
 * A comprehensive collection of array manipulation and sorting functions
 */

/**
 * Sorts an array in ascending order using the quicksort algorithm
 * @param {Array} arr - The array to sort
 * @returns {Array} The sorted array
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = arr.slice(1).filter(x => x <= pivot);
  const right = arr.slice(1).filter(x => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

/**
 * Performs binary search on a sorted array
 * @param {Array} arr - The sorted array to search
 * @param {any} target - The element to search for
 * @returns {number} The index of the element or -1 if not found
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

/**
 * Removes duplicates from an array
 * @param {Array} arr - The array to process
 * @returns {Array} Array with duplicates removed
 */
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

/**
 * Reverses an array
 * @param {Array} arr - The array to reverse
 * @returns {Array} The reversed array
 */
function reverseArray(arr) {
  return arr.reverse();
}

/**
 * Flattens a nested array
 * @param {Array} arr - The array to flatten
 * @returns {Array} The flattened array
 */
function flattenArray(arr) {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}

module.exports = {
  quickSort,
  binarySearch,
  removeDuplicates,
  reverseArray,
  flattenArray
};
