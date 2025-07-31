####_____________________________________________________________________________By Dhiraj Barwal

# JavaScript Operators Notes

Complete revision-friendly notes covering:

- ✅ Comparison Operators  
- ✅ Logical Operators  
- ✅ Conditional (Ternary) Operator  
- ✅ Nullish Coalescing Operator (`??`)  

---

## 🔸 1. Comparison Operators

Used to **compare two values** — returns a **boolean** (`true` or `false`).

| Operator | Description                    | Example                   | Result     |
|----------|--------------------------------|---------------------------|------------|
| `==`     | Equal to (loose check)         | `5 == '5'`                | `true`     |
| `===`    | Equal value & type (strict)    | `5 === '5'`               | `false`    |
| `!=`     | Not equal (loose check)        | `5 != '5'`                | `false`    |
| `!==`    | Not equal (strict)             | `5 !== '5'`               | `true`     |
| `>`      | Greater than                   | `10 > 5`                  | `true`     |
| `<`      | Less than                      | `3 < 7`                   | `true`     |
| `>=`     | Greater than or equal to       | `8 >= 8`                  | `true`     |
| `<=`     | Less than or equal to          | `5 <= 4`                  | `false`    |

**🧠 Tip:** Use `===` and `!==` instead of `==` and `!=` to avoid type conversion bugs.

---

## 🔸 2. Logical Operators

Used to **combine multiple conditions** (true/false values).

| Operator | Name   | Description                                  | Example            | Result     |
|----------|--------|----------------------------------------------|--------------------|------------|
| `&&`     | AND    | All conditions must be `true`                | `true && true`     | `true`     |
| `||`     | OR     | Returns `true` if any one is `true`          | `false || true`    | `true`     |
| `!`      | NOT    | Reverses the condition                       | `!true`            | `false`    |

```js
let age = 20;
console.log(age > 18 && age < 25); // true

let isAdmin = false;
console.log(!isAdmin); // true
```

---

## 🔸 3. Conditional (Ternary) Operator

✅ Short form of `if...else`

**Syntax:**
```js
condition ? value_if_true : value_if_false
```

**Example:**
```js
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // "Adult"
```

📌 Useful for quick decisions in one line.

---

## 🔸 4. Nullish Coalescing Operator (`??`)

✅ Used to set **default value** if the variable is `null` or `undefined`.

**Syntax:**
```js
let result = variable ?? defaultValue;
```

**Example:**
```js
let username = null;
let nameToDisplay = username ?? "Guest";
console.log(nameToDisplay); // "Guest"
```

🧠 Only checks for `null` or `undefined` — not `""` or `0`.

```js
let score = 0;
console.log(score ?? 100); // Output: 0 ✅
```

---

## 🔁 Quick Summary Table

| Concept                     | Purpose                                 |
|----------------------------|------------------------------------------|
| `==`, `===`, `!=`, `!==`   | Compare values/types                    |
| `>`, `<`, `>=`, `<=`       | Number or string comparison             |
| `&&`, `||`, `!`            | Combine or invert logic                 |
| `? :`                      | Short form of `if...else`               |
| `??`                       | Fallback for `null`/`undefined` values  |

---

✅ Perfect for **JavaScript revision**  
💼 Helpful in **interviews**  
🚀 Used in real-world **web development**
