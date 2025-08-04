# 📘 JavaScript Chapter 2 Notes

---

## Q1. What are variables? What is the difference between `var`, `let`, and `const`?

Variables are used to store data.

**Example:**
```javascript
let name = "Dhiraj";
const age = 25;
var isStudent = true;
```

- Always prefer `let` and `const` in modern JavaScript.
- Use `const` by default, and switch to `let` only when reassignment is needed.

### 🔍 Detailed Comparison

| Feature            | `var`                    | `let`                      | `const`                      |
| ------------------ | ------------------------ | -------------------------- | ---------------------------- |
| **Scope**          | Function Scope           | Block Scope                | Block Scope                  |
| **Re-declaration** | ✅ Allowed                | ❌ Not Allowed              | ❌ Not Allowed                |
| **Re-assignment**  | ✅ Allowed                | ✅ Allowed                  | ❌ Not Allowed (after init)  |
| **Hoisting**       | ✅ Hoisted as `undefined` | ✅ Hoisted but in TDZ       | ✅ Hoisted but in TDZ        |
| **Initialization** | Optional                 | Optional                   | Required                     |
| **Use case**       | Legacy Code              | Preferred for variable use | For constants / fixed values |

### 🔧 Examples

```javascript
// var example
var x = 10;
var x = 20; // ✅ Allowed
x = 30;     // ✅ Allowed
console.log(x); // 30

// let example
let y = 10;
// let y = 20; // ❌ Error: Identifier 'y' has already been declared
y = 25;     // ✅ Allowed
console.log(y); // 25

// const example 
const z = 10;
// z = 15; // ❌ Error: Assignment to constant variable
// const z = 20; // ❌ Error: Identifier 'z' has already been declared
console.log(z); // 10
```

---

## Q2. What are datatypes in JavaScript?

A **data type** determines the type of value a variable holds.

### 📦 Two Categories:
#### 1. Primitive Data Types:
- string
- number
- boolean
- undefined
- null
- symbol
- bigint

#### 2. Non-Primitive (Reference) Data Types:
- object
- array
- function
- RegExp
- date

---

## Q3. Difference between Primitive and Non-Primitive Data Types

| Feature           | Primitive              | Non-Primitive (Reference) |
| ----------------- | ---------------------- | -------------------------- |
| Stored By         | Value                  | Reference                  |
| Mutability        | Immutable              | Mutable                    |
| Comparison        | By Value               | By Reference               |
| Memory Allocation | Stack                  | Heap                       |
| Types             | string, number, etc.   | object, array, function    |

---

## Q4. What is the difference between `null` and `undefined`?

| Feature     | `undefined`                          | `null`                                  |
| ----------- | ------------------------------------ | ---------------------------------------- |
| Meaning     | Variable declared but not assigned   | Intentional absence of value             |
| Type        | `undefined`                          | `object`                                 |
| Set By      | JavaScript (implicitly)              | Developer (explicitly)                   |
| Used For    | Uninitialized variables, missing args| Resetting or clearing variable manually  |
| Example     | `let a; console.log(a); // undefined`| `let a = null;`                          |

> ✅ Use `undefined` when JavaScript hasn’t assigned a value yet.  
> ✅ Use `null` when you intentionally want to clear or reset the value.

---

## Q5. What is the use of `typeof` operator in JavaScript?

The `typeof` operator is used to determine the **data type** of a given operand.

### 🔎 Example:
```javascript
typeof 42;             // "number"
typeof "Hello";        // "string"
typeof true;           // "boolean"
typeof undefined;      // "undefined"
typeof null;           // "object" ❗ (known JS quirk)
typeof {};             // "object"
typeof [];             // "object" (arrays are objects)
typeof function() {};  // "function"
```

> 💡 `typeof null === "object"` is a known historical bug in JS.

---

## Q6. What is Type Coercion in JavaScript?

**Type coercion** is the automatic or implicit conversion of values from one data type to another.

### 🔀 Types of Coercion

#### 1. Implicit Coercion (by JS):
```javascript
"5" + 2       // "52"
"5" - 2       // 3
true + 1      // 2
false + "1"   // "false1"
null + 1      // 1
undefined + 1 // NaN
```

#### 2. Explicit Coercion (by Developer):
```javascript
Number("5");     // 5
String(100);     // "100"
Boolean("");     // false
Boolean("Hi");   // true
```

> 🔐 Use explicit coercion when clarity is important.  
> Avoid relying too much on implicit coercion — it can lead to bugs!

---