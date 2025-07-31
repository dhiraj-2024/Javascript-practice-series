
# 🧠 JavaScript Variables: `var`, `let`, and `const`

Understanding how to declare variables is one of the **first and most important concepts** in JavaScript. Let’s dive deep into the differences between `var`, `let`, and `const`.

---

## 🔹 1. `var` — The Old Way (ES5)

### ✅ Features:
- Declared globally or function-scoped.
- Can be **re-declared** and **updated** in the same scope.
- Can be **hoisted** (moved to the top of the scope), initialized with `undefined`.
- Does **NOT** follow the Temporal Dead Zone (TDZ).
- Variables declared with `var` inside a block `{}` are **accessible outside** the block.

### ❌ Issues:
- Prone to **bugs** due to scope leakage.
- Avoid using in modern JS.

### 🧪 Example:

```js
var name = "Dhiraj";
var name = "CodeWithDhiraj";  // ✅ Re-declaration allowed
name = "JavaScript";          // ✅ Update allowed
console.log(name);            // Output: JavaScript
```

---

## 🔹 2. `let` — The Modern Way (ES6)

### ✅ Features:
- Block-scoped (works within `{}`).
- Can be **updated** but **not re-declared** in the same scope.
- **Hoisted** but not initialized (leads to TDZ error if accessed before declaration).
- Safer and recommended over `var`.

### 🧪 Example:

```js
let age = 25;
// let age = 30; ❌ Error: Cannot re-declare
age = 30;       // ✅ Update allowed
console.log(age); // Output: 30
```

---

## 🔹 3. `const` — Constant Variables

### ✅ Features:
- Block-scoped like `let`.
- **Cannot be re-declared or updated**.
- Must be **initialized** at the time of declaration.
- Ideal for values that never change (like constants, arrays, objects).

### 🧪 Example:

```js
const pi = 3.14;
// pi = 3.14159; ❌ Error: Assignment to constant variable
console.log(pi); // Output: 3.14
```

### ⚠️ Note:
You **can change the contents** of arrays/objects declared with `const`, but not reassign the variable itself.

```js
const arr = [1, 2, 3];
arr.push(4);       // ✅ Allowed
// arr = [5, 6];   ❌ Error
```

---

## 🧾 Comparison Table

| Feature                     | `var`                | `let`                  | `const`                  |
|----------------------------|----------------------|------------------------|--------------------------|
| Scope                      | Function/global      | Block (`{}`)           | Block (`{}`)             |
| Can be re-declared         | ✅ Yes                | ❌ No                  | ❌ No                    |
| Can be updated             | ✅ Yes                | ✅ Yes                 | ❌ No                    |
| Hoisted                   | ✅ Yes (initialized to `undefined`) | ✅ Yes (TDZ applies) | ✅ Yes (TDZ applies)     |
| Must initialize?           | ❌ No                 | ❌ No                  | ✅ Yes                   |
| Temporal Dead Zone (TDZ)?  | ❌ No                 | ✅ Yes                 | ✅ Yes                   |
| Use in modern JS?          | ❌ Avoid              | ✅ Yes                 | ✅ Yes                   |

---

## 🎯 Real-Life Analogy

- `var` → Like a whiteboard anyone can overwrite any time.
- `let` → Like a personal notebook; others can’t redefine it, but you can update.
- `const` → Like a permanent label; once set, it doesn’t change.

---

## 💼 Interview Tips

1. **Avoid using `var`** in modern code unless needed for legacy support.
2. **Use `let`** when the variable value can change.
3. **Use `const`** as default — it makes code more predictable.
4. Expect questions like:
   - What is TDZ?
   - Can you re-declare `let` or `const`?
   - Why prefer `const` over `let`?
   - Are `let` and `const` hoisted?

---

## 🧪 Common Mistakes

```js
console.log(x); // undefined
var x = 10;

console.log(y); // ❌ ReferenceError
let y = 10;
```

---

## ✅ Best Practice

🔸 Use `const` by default  
🔸 Use `let` only if value changes  
🔸 Avoid `var` unless absolutely needed

---

📌 *Follow me for more step-by-step JavaScript concepts and interview prep tips!*
