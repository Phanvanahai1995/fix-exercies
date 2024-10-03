// Bai 1

function sumTwoLargest(arr) {
  if (arr.length < 2) {
    throw new Error("Array must contain at least two numbers");
  }

  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num > firstMax) {
      secondMax = firstMax;
      firstMax = num;
    } else if (num > secondMax) {
      secondMax = num;
    }
  }

  return firstMax + secondMax;
}

console.log(sumTwoLargest([1, 4, 2, 3, 5]));

// Bai 2

function mostFrequentLengthStrings(arr) {
  const lengthMap = new Map();

  for (let str of arr) {
    const len = str.length;
    lengthMap.set(len, (lengthMap.get(len) || 0) + 1);
  }

  let maxCount = 0;
  let mostFrequentLength = 0;
  for (let [length, count] of lengthMap) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequentLength = length;
    }
  }

  return arr.filter((str) => str.length === mostFrequentLength);
}

console.log(mostFrequentLengthStrings(["a", "ab", "abc", "cd", "def", "gh"])); // Output: ['ab', 'cd', 'gh']
console.log(mostFrequentLengthStrings(["x", "xy", "xyz", "w", "pq", "rstu"])); // Output: ['xy', 'pq']
console.log(mostFrequentLengthStrings(["a", "aa", "aaa", "aaaa", "bb", "b"])); // Output: ['a']
console.log(
  mostFrequentLengthStrings(["one", "two", "three", "four", "five", "six"])
); // Output: ['one', 'two', 'six']
console.log(mostFrequentLengthStrings(["hello", "world"])); // Output: ['hello', 'world']
