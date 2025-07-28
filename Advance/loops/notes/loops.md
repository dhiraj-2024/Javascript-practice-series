##### _______________________________________________________________________________________________ by Dhiraj Barwal
# JavaScript Loops 

---

## 🔹 1. For Loop

**📝 Notes:**
- Structure: `for (start; condition; update)`
- Runs until condition becomes false.
- Used when number of iterations is known.

```js
// Print "dhiraj" 11 times
for (let i = 0; i <= 10; i++) {
    console.log("dhiraj");
}
```

✅ **Output:**
```
dhiraj
dhiraj
... (11 times)
```

---

### 🧮 Example: Sum of 1 to 5

```js
let sum = 0;
for (let i = 0; i <= 5; i++) {
    sum = sum + i;
}
console.log(sum);
```

✅ **Output:**
```
15
```

---

## 🔹 2. While Loop

**📝 Notes:**
- Condition is checked before executing block.
- Initialization done before loop.
- Update inside the loop.
- Beware of infinite loops if update is missed.

```js
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
```

✅ **Output:**
```
1
2
...
10
```

---

### 🧮 Example: Sum of 1 to 10

```js
let j = 1;
let sum = 1;
while (j <= 10) {
    sum += j;
    j++;
}
console.log("sum:", sum);
```

✅ **Output:**
```
sum: 56
```

---

## 🔹 3. Do...While Loop

**📝 Notes:**
- Executes block **at least once**, even if condition is false.
- Condition checked **after** the loop block.
- Must end with a semicolon after `while()`.

```js
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
```

✅ **Output:**
```
1
2
3
4
5
```

---

## 🔹 4. For...of Loop

**📝 Notes:**
- Used for arrays and strings.
- Iterates over **values** of an iterable.
- Cleaner syntax, no index needed.

```js
const cars = ["bmw", "tata", "suzuki", "mahindra"];

for (let car of cars) {
    console.log(car);
}
```

✅ **Output:**
```
bmw
tata
suzuki
mahindra
```

---

### 🔤 Example: Iterate String

```js
const text = "LearnJS";

for (let char of text) {
    console.log(char);
}
```

✅ **Output:**
```
L
e
a
r
n
J
S
```

---

## 🔹 5. For...in Loop

**📝 Notes:**
- Used for iterating over **keys** in objects.
- Use `object[key]` to get value.
- Ideal for objects, not arrays.

```js
const student = {
    name: "dhiraj",
    age: 22,
    cgpa: 8.0,
    isPass: true
};

for (let key in student) {
    console.log("key =", key, "value =", student[key]);
}
```

✅ **Output:**
```
key = name value = dhiraj
key = age value = 22
key = cgpa value = 8
key = isPass value = true
```

---

## 🔹 Summary of Loop Types

| Loop Type     | Best For               | Checks Condition | Runs at least once |
|---------------|------------------------|------------------|--------------------|
| `for`         | Known iterations       | Before           | No                 |
| `while`       | Unknown iterations     | Before           | No                 |
| `do...while`  | Run once then check    | After            | ✅ Yes             |
| `for...of`    | Arrays & Strings       | N/A              | ✅ Simplified      |
| `for...in`    | Objects (keys)         | N/A              | ✅ Simplified      |

---

## ⚠️ Tips & Warnings
- Infinite Loop Risk 🚨: Always update counter in `while` or `do...while`.
- Prefer `for...of` for arrays, `for...in` for objects.
- Use `break` to exit loop early.
- Use `continue` to skip current iteration.
