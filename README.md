# Array Utilities

A comprehensive collection of array manipulation and utility functions for JavaScript/TypeScript projects.

## Features

- **Array Sorting**: Efficient sorting algorithms including quicksort, mergesort, and heapsort
- **Array Search**: Binary search, linear search, and pattern matching functions
- **Array Manipulation**: Filter, map, reduce, and other functional programming utilities
- **Data Processing**: Tools for transforming and processing array data
- **Performance Optimized**: Highly optimized implementations for production use

## Installation

```bash
git clone https://github.com/asmitaipper/array.git
cd array
```

## Usage

### Basic Example

```javascript
const { sortArray, searchArray } = require('./array');

const numbers = [64, 34, 25, 12, 22, 11, 90];
const sorted = sortArray(numbers);
console.log(sorted); // [11, 12, 22, 25, 34, 64, 90]

const searchResult = searchArray(sorted, 25);
console.log(searchResult); // true or index
```

## Available Functions

- `sortArray(arr)` - Sort array in ascending order
- `searchArray(arr, target)` - Search for element in array
- `reverseArray(arr)` - Reverse array elements
- `filterArray(arr, condition)` - Filter array based on condition
- `mapArray(arr, transform)` - Transform array elements
- `reduceArray(arr, callback)` - Reduce array to single value

## API Documentation

### sortArray(arr)
- **Parameters**: `arr` (Array) - Array to sort
- **Returns**: Sorted array
- **Time Complexity**: O(n log n)

### searchArray(arr, target)
- **Parameters**: `arr` (Array), `target` (any) - Element to find
- **Returns**: Boolean or index of element
- **Time Complexity**: O(log n) for sorted arrays, O(n) for unsorted

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Testing

```bash
npm test
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

**Asmita Ipper**
- GitHub: [@asmitaipper](https://github.com/asmitaipper)
- Email: asmita@example.com

## Acknowledgments

- Thanks to all contributors who have helped with this project
- Inspired by popular array utility libraries

## Support

If you have any questions or issues, please open an issue on GitHub.

---

**Made with ❤️ by Asmita Ipper**
