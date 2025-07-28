
# 1. JavaScript Array Methods

## 🔹 Array Reverse and Sort

```js
const animal = ["dog", "cat", "cow", "tiger", "elephant"];

console.log("Reverse array element before sorting: ", animal.reverse());
console.log("Sort animals alphabetically: ", animal.sort());
console.log("Reverse array element after sorting: ", animal.reverse());
```

**📝 Notes:**
- `reverse()` reverses the original array.
- `sort()` sorts alphabetically (by Unicode code points).
- Order matters: `.reverse().sort().reverse()` can control alphabetical descending order.

**✅ Output:**
```
Reverse array element before sorting: [ 'elephant', 'tiger', 'cow', 'cat', 'dog' ]
Sort animals alphabetically: [ 'cat', 'cow', 'dog', 'elephant', 'tiger' ]
Reverse array element after sorting: [ 'tiger', 'elephant', 'dog', 'cow', 'cat' ]
```

---

## 🔹 Safe Reverse and Sort (ES2023)

```js
const birds = ["sparrow", "parrot", "crow", "egale"];

console.log("Reverse birds array using toReversed(): ", birds.toReversed());
console.log("Sort birds array using toSorted(): ", birds.toSorted());
```

**📝 Notes:**
- `toReversed()` creates a reversed copy (original stays unchanged).
- `toSorted()` returns a new sorted array (original remains same).

**✅ Output:**
```
toReversed: [ 'egale', 'crow', 'parrot', 'sparrow' ]
toSorted: [ 'crow', 'egale', 'parrot', 'sparrow' ]
```

---

## 🔹 Numeric Sort Issues

```js
const numbers = [21, 453, 88, 46, 73, 9, 20, 1, 60, 59, 298];

console.log("Incorrect sort: ", numbers.sort());
console.log("Correct numeric sort: ", numbers.sort((a, b) => a - b));
```

**📝 Notes:**
- Default `sort()` treats elements as strings.
- Use compare function for correct number sort.

**✅ Output:**
```
Incorrect sort: [ 1, 20, 21, 298, 453, 46, 59, 60, 73, 88, 9 ]
Correct sort: [ 1, 9, 20, 21, 46, 59, 60, 73, 88, 298, 453 ]
```

---

## 🔹 Sorting Tips

```js
// Ascending
arr.sort((a, b) => a - b);

// Descending
arr.sort((a, b) => b - a);

// Random
arr.sort(() => 0.5 - Math.random());

// Min / Max
Math.min.apply(null, arr);
Math.max.apply(null, arr);
```

---

## 🔹 Common Array Methods

```js
const animal = ["dog", "cat", "cow", "tiger", "elephant"];
console.log(animal.toString());  // "dog,cat,cow,tiger,elephant"
console.log(animal.push("ox"));  // Adds "ox"
console.log(animal.pop());       // Removes last element
console.log(animal.length);      // Array length
console.log(animal.at(2));       // Element at index 2
console.log(animal.shift());     // Removes first element
console.log(animal.unshift("buffelo")); // Adds at start
console.log(animal.join("-"));   // Join with "-"
```

---

## 🔹 Concat Arrays

```js
console.log(animal.concat(birds));
console.log(animal.concat(birds, trees));
```

---

## 🔹 Flat and FlatMap

```js
const numbers = [[1,2],[3,4],[5,6],[7,8]];
console.log(numbers.flat());  // Flattened one level

const num = [1,2,3];
console.log(num.flatMap(x => [x, x * 10])); 
```

**✅ Output:**
```
flat: [1, 2, 3, 4, 5, 6, 7, 8]
flatMap: [1, 10, 2, 20, 3, 30]
```

---

## 🔹 Splice and Slice

```js
animal.splice(2, 0, "jiraf", "zebra", "donkey"); // Add elements
animal.slice(3); // Copy portion from index 3
```

**📝 Notes:**
- `splice(start, deleteCount, items...)` modifies the original array.
- `slice(start, end?)` returns a shallow copy.
