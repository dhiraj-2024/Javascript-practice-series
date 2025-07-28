# JavaScript Array Methods Cheatsheet

## 🔹 Array Reverse and Sort
**📝 Notes:**
- `reverse()` reverses the original array (mutates)
- `sort()` sorts alphabetically (by Unicode, mutates)

```js
const animal = ["dog", "cat", "cow", "tiger", "elephant"];

console.log("Reverse before sort:", animal.reverse());
console.log("Sort alphabetically:", animal.sort());
console.log("Reverse after sort:", animal.reverse());
```

✅ **Output:**
```
Reverse before sort: [ 'elephant', 'tiger', 'cow', 'cat', 'dog' ]
Sort alphabetically: [ 'cat', 'cow', 'dog', 'elephant', 'tiger' ]
Reverse after sort: [ 'tiger', 'elephant', 'dog', 'cow', 'cat' ]
```

---

## 🔹 Safe Reverse/Sort (ES2023)
**📝 Notes:**
- `toReversed()` returns new reversed array
- `toSorted()` returns new sorted array
- Both keep original unchanged

```js
const birds = ["sparrow", "parrot", "crow", "eagle"];

console.log("Safe reverse:", birds.toReversed());
console.log("Safe sort:", birds.toSorted());
console.log("Original remains:", birds);
```

✅ **Output:**
```
Safe reverse: [ 'eagle', 'crow', 'parrot', 'sparrow' ]
Safe sort: [ 'crow', 'eagle', 'parrot', 'sparrow' ]
Original remains: [ 'sparrow', 'parrot', 'crow', 'eagle' ]
```

---

## 🔹 Numeric Sort Issues
**📝 Notes:**
- Default `sort()` converts numbers to strings 😤
- Always use compare function for numbers

```js
const numbers = [21, 453, 88, 46, 73, 9, 20, 1, 60, 59, 298];

console.log("WRONG sort:", numbers.sort());
console.log("RIGHT sort:", numbers.sort((a,b) => a - b));
```

✅ **Output:**
```
WRONG sort: [1, 20, 21, 298, 453, 46, 59, 60, 73, 88, 9]
RIGHT sort: [1, 9, 20, 21, 46, 59, 60, 73, 88, 298, 453]
```

---

## 🔹 Sorting Tips
```js
// Ascending (a-b)
[5,2,8].sort((a,b) => a - b); // [2,5,8]

// Descending (b-a)
[5,2,8].sort((a,b) => b - a); // [8,5,2]

// Random shuffle
[5,2,8].sort(() => 0.5 - Math.random());

// Min/Max (ES6 way)
Math.min(...[5,2,8]); // 2
Math.max(...[5,2,8]); // 8
```

---

## 🔹 Common Array Methods
```js
const arr = ["dog", "cat", "cow"];

// Convert to string
arr.toString(); // "dog,cat,cow"

// Add/remove from end
arr.push("tiger"); // Returns new length (4)
arr.pop(); // Removes/returns "tiger"

// Add/remove from start
arr.unshift("bird"); // Returns new length
arr.shift(); // Removes/returns "bird"

// Join with separator
arr.join(" * "); // "dog * cat * cow"

// Get element
arr.at(1); // "cat"
arr.at(-1); // "cow" (last element)
```

---

## 🔹 Combining Arrays
```js
const animals = ["dog", "cat"];
const birds = ["eagle", "parrot"];

// Merge arrays
animals.concat(birds); // ["dog","cat","eagle","parrot"]

// Merge multiple
animals.concat(birds, ["fish"]); // ["dog","cat","eagle","parrot","fish"]
```

---

## 🔹 Flat and FlatMap
```js
// Flatten nested arrays
[[1,2],[3,4]].flat(); // [1,2,3,4]

// Map + flatten in one step
[1,2,3].flatMap(x => [x, x*10]);
// [1,10, 2,20, 3,30]
```

---

## 🔹 Splice vs Slice
**📝 Notes:**
- `splice()` modifies original array
- `slice()` returns new array

```js
const arr = ["a", "b", "c", "d"];

// splice(start, deleteCount, items...)
arr.splice(1, 2, "x", "y");
// Returns ["b","c"]
// arr becomes ["a","x","y","d"]

// slice(start, end)
arr.slice(1, 3); // ["x","y"]
// Original unchanged
```

---

## 🔹 Important Notes

**🔸 Mutating Methods (change original):**
- `push()`, `pop()`, `shift()`, `unshift()`
- `sort()`, `reverse()`, `splice()`

**🔸 Non-Mutating (return new array):**
- `toSorted()`, `toReversed()`, `slice()`
- `concat()`, `flat()`, `flatMap()`

**💡 Performance Tips:**
- `push/pop` are faster than `shift/unshift`
- Avoid sorting inside loops
- Use `Set` for unique values

---

## 🔹 ES2023+ Features
```js
arr.toSpliced(1,2,"new"); // Safe splice
arr.with(2,"new"); // Safe index update
```
