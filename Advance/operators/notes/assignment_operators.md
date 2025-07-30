##### _______________________________________________________________________________________________ by Dhiraj Barwal

# 📝 JavaScript Assignment Operators

Assignment operators are used to assign values to variables.

---

## ✅ 1. Basic Assignment

| Operator | Description             | Example        | Result           |
|----------|-------------------------|----------------|------------------|
| `=`      | Assign value            | `x = 10`       | `x` is `10`      |

```js
let x = 10;
```

---

## 🔁 2. Compound Assignment

These operators **combine** arithmetic with assignment.

| Operator | Description             | Example       | Same As        |
|----------|-------------------------|---------------|----------------|
| `+=`     | Add and assign          | `x += 5`      | `x = x + 5`    |
| `-=`     | Subtract and assign     | `x -= 3`      | `x = x - 3`    |
| `*=`     | Multiply and assign     | `x *= 2`      | `x = x * 2`    |
| `/=`     | Divide and assign       | `x /= 4`      | `x = x / 4`    |
| `%=`     | Modulus and assign      | `x %= 3`      | `x = x % 3`    |
| `**=`    | Power and assign        | `x **= 2`     | `x = x ** 2`   |

---

### 🔍 Example:

```js
let x = 10;

x += 5;   // x = x + 5 → 15
x -= 3;   // x = x - 3 → 12
x *= 2;   // x = x * 2 → 24
x /= 4;   // x = x / 4 → 6
x %= 5;   // x = x % 5 → 1
x **= 3;  // x = x ** 3 → 1
```

---

## 🔐 3. Bitwise Assignment Operators (For advanced/interviews)

| Operator | Description           |
|----------|-----------------------|
| `&=`     | AND and assign        |
| `|=`     | OR and assign         |
| `^=`     | XOR and assign        |
| `<<=`    | Left shift and assign |
| `>>=`    | Right shift and assign|

📌 These are rarely used in beginner-level code but might appear in **coding interviews** or **system-level logic**.

---

## 🧠 4. Chained Assignment

You can assign the same value to multiple variables at once:

```js
let a, b, c;
a = b = c = 100;
console.log(a, b, c); // 100 100 100
```

---

## 📌 Summary (Fast Recall)

- `=` → Assign a value
- `+=` → Add then assign
- `-=` → Subtract then assign
- `*=` → Multiply then assign
- `/=` → Divide then assign
- `%=` → Modulus then assign
- `**=` → Power then assign

---

🎓 **Interview Tip:**  
These compound operators improve code readability and reduce repetition — make sure you understand how they affect the **original variable**.

```js
let n = 5;
n *= 2 + 3; // n = n * (2 + 3) = 5 * 5 = 25
```

🧠 Parentheses matter when combining arithmetic + assignment!

