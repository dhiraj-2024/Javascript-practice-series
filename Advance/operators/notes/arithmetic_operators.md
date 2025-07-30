# 🧮 JavaScript Arithmetic Operations

JavaScript supports all standard arithmetic operations you’ve seen in math. Let’s break them down:

---

## 🔢 1. Basic Arithmetic Operators

| Operator | Name             | Example           | Result        |
|----------|------------------|-------------------|---------------|
| `+`      | Addition          | `5 + 3`           | `8`           |
| `-`      | Subtraction       | `5 - 3`           | `2`           |
| `*`      | Multiplication    | `5 * 3`           | `15`          |
| `/`      | Division          | `6 / 2`           | `3`           |
| `%`      | Modulus (Remainder) | `5 % 2`         | `1`           |
| `**`     | Exponentiation (Power) | `2 ** 3`     | `8` (2³ = 8)  |

---

## 🧠 2. Arithmetic Examples

```js
let a = 10, b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(2 ** 4); // 16
```

---

## 🔁 3. Increment & Decrement

| Syntax   | Meaning            | Example       | Result       |
|----------|--------------------|---------------|--------------|
| `++x`    | Pre-increment      | `++a`         | Increases first, then returns |
| `x++`    | Post-increment     | `a++`         | Returns, then increases       |
| `--x`    | Pre-decrement      | `--a`         | Decreases first, then returns |
| `x--`    | Post-decrement     | `a--`         | Returns, then decreases       |

```js
let x = 5;
console.log(++x); // 6 (incremented before)
console.log(x++); // 6 (then becomes 7)
console.log(x);   // 7
```

---

## 🧠 4. Operator Precedence (Order of Execution)

JavaScript follows **BODMAS** (Brackets, Orders, Division/Multiplication, Addition/Subtraction).

```js
let result = 10 + 2 * 3;      // 10 + (2*3) = 16
let result2 = (10 + 2) * 3;   // (10+2) * 3 = 36
```

📌 Use `()` parentheses to control precedence.

---

## 🎯 5. Type Coercion with `+` Operator

If one operand is a **string**, `+` will **concatenate** instead of adding.

```js
console.log(5 + "2");    // "52"  ← string
console.log("Hello " + 5); // "Hello 5"
```

Other operators automatically convert strings to numbers:

```js
console.log("10" - 2);   // 8
console.log("5" * "2");  // 10
console.log("10" / 2);   // 5
```

---

## 🚫 6. NaN (Not a Number)

Invalid arithmetic will return `NaN`.

```js
console.log(0 / 0);         // NaN
console.log("abc" - 2);     // NaN
```

Check with:
```js
isNaN("abc" - 2); // true
```

---

## ✅ Quick Recap

- `+`, `-`, `*`, `/`, `%`, `**` → Basic math
- `++`, `--` → Increment/Decrement
- `+` with string → Concatenation
- Operator Precedence → BODMAS
- `NaN` means invalid number result

---

🎓 **Interview Tip:**  
Know the difference between:
```js
console.log(5 + "5");   // "55"
console.log(5 - "5");   // 0
```

Because `+` does **string concat** if any operand is a string, while other operators force number conversion.

