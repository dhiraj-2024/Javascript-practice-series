##### _______________________________________________________________________________________________ by Dhiraj Barwal

# JavaScript Strings 📘

## 1. Immutable Strings
Strings in JavaScript are **immutable**, meaning once a string is created, it cannot be changed. Any operation like `split()`, `concat()`, `replace()`, `toUpperCase()`, etc., returns a **new string**.

```js
let str = "hello";
let newStr = str.toUpperCase();
console.log(str);     // "hello"
console.log(newStr);  // "HELLO"
```

---

## 2. Template Literals `${}`

Template literals allow:
- Multi-line strings
- String interpolation using **backticks (`)**

```js
let name = "Dhiraj";
console.log(`Hello, how are you ${name}?`);
```

### 2.1 Escape Characters

Escape characters in strings take **one character space**, even though written as two characters.

| Escape | Meaning             |
|--------|---------------------|
| `\b`   | Backspace           |
| `\f`   | Form Feed           |
| `\n`   | New Line            |
| `\r`   | Carriage Return     |
| `\t`   | Horizontal Tab      |
| `\v`   | Vertical Tab        |

---

## 3. String Comparison

JavaScript compares strings **letter by letter using Unicode**.

```js
console.log("apple" > "pineapple");    // false
console.log("pineapple" < "apple");    // true
```

---

## 4. Common String Methods

| Method            | Description |
|-------------------|-------------|
| `at()`            | Returns character at index |
| `charAt()`        | Same as `at()` but older |
| `charCodeAt()`    | Unicode of character at index |
| `codePointAt()`   | Unicode value of character |
| `concat()`        | Joins two or more strings |
| `endsWith()`      | Checks if string ends with specific value |
| `includes()`      | Checks if string contains value |
| `indexOf()`       | First index of a value |
| `lastIndexOf()`   | Last index of a value |
| `length`          | Length of the string |
| `localeCompare()` | Compares two strings locale-wise |
| `match()`         | Finds match using RegExp |
| `matchAll()`      | Returns all matches using RegExp |
| `padStart()`      | Pads string from the start |
| `padEnd()`        | Pads string from the end |
| `repeat()`        | Repeats the string |
| `replace()`       | Replaces first match |
| `replaceAll()`    | Replaces all matches |
| `search()`        | Searches string using RegExp |
| `slice()`         | Extracts part of string |
| `split()`         | Splits string into array |
| `startsWith()`    | Checks if starts with specific chars |
| `substring()`     | Extracts string between positions |
| `toLowerCase()`   | Converts to lowercase |
| `toUpperCase()`   | Converts to uppercase |
| `trim()`          | Removes whitespace from both ends |
| `trimStart()`     | Removes from start only |
| `trimEnd()`       | Removes from end only |
| `valueOf()`       | Returns primitive value of string |

---

## 5. Method Examples

```js
// split()
let txt = "hello,world";
console.log(txt.split(","));    // ['hello', 'world']
console.log(txt.split(""));     // ['h','e','l','l','o',',','w','o','r','l','d']

// toUpperCase(), toLowerCase()
console.log("hello".toUpperCase()); // "HELLO"

// join() - only available on arrays, not strings
console.log(["H", "e", "y"].join("")); // "Hey"

// trim()
let s = "  hello world  ";
console.log(s.trim()); // "hello world"

// substring()
console.log("javascript".substring(0, 4)); // "java"

// indexOf()
console.log("hello world".indexOf("world")); // 6

// padStart(), padEnd()
console.log("5".padStart(3, "0")); // "005"
console.log("5".padEnd(3, "*"));   // "5**"

// includes()
console.log("hello world".includes("world")); // true

// startsWith(), endsWith()
console.log("javascript".startsWith("java")); // true
console.log("javascript".endsWith("script")); // true

// replace()
let s1 = 'Learn HTML at GfG and HTML is useful';
let s2 = s1.replace(/HTML/g, 'JavaScript');
console.log(s2); // "Learn JavaScript at GfG and JavaScript is useful"
```

---

## 6. String as Objects

Strings can also be created using `new String()` — not recommended.

```js
const str = new String("welcome user");
console.log(str); // [String: 'welcome user']
```

---

## 🔚 Summary

✅ Strings are immutable  
✅ Template literals = `${}`  
✅ Escape characters take 1 space  
✅ Useful methods: `split()`, `includes()`, `replace()`, `substring()`...  
✅ Avoid using `new String()`
