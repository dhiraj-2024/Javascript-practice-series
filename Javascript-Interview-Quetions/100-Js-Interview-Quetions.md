# 📘 JavaScript Notes – Chapter 1 (V.IMP)

---

### ❓ Q1. What is JavaScript? What is the role of JavaScript engine?

- JavaScript is a programming language used to convert **static webpages** into **interactive and dynamic** webpages.
- JavaScript engine is a program present in a browser that executes JavaScript code.

#### ⚙️ JavaScript Engines:
- Chrome – V8  
- Firefox – SpiderMonkey  
- Safari – JavaScriptCore  
- Edge – Chakra

---

### ❓ Q2. What are client side and server side?

- **Client side**: A device, application or software component that **requests and consumes** services/resources from a server.
- **Server side**: A device, computer, or software application that **provides services, resources and functions** to the client.

---

### ❓ Q3. What is scope in JavaScript?

- Scope determines **where variables are defined** and **where they can be accessed**.

#### 🧠 Types of Scope:
1. **Global Scope**  
   - Variables declared outside any function or block.
   - Can be accessed from anywhere in the code.

2. **Function Scope**  
   - Defined in block scope, accessible within a function and its inner blocks.

3. **Block Scope**  
   - Accessible only within the block `{}` where defined.

#### ✅ Example:

```javascript
let globalVar = "🌍 Global";

function scopeExample() {
    let functionVar = "🔧 Function Scope";

    if (true) {
        let blockVar = "🧱 Block Scope";
        var leakedVar = "😬 I leak outside blocks with var";
        console.log(globalVar);     // ✅ Global
        console.log(functionVar);   // ✅ Function
        console.log(blockVar);      // ✅ Block
    }

    console.log(leakedVar);  // ✅ var leaks outside block
    // console.log(blockVar); // ❌ Error: blockVar not defined
}

scopeExample();
```

---

### ❓ Q4. What is the type of variable if we declare without using a keyword var, let, or const?

- `var` is implicitly assumed when a variable is assigned without using `var`, `let`, or `const` in non-strict mode.
- This leads to the variable becoming **global**.

#### ✅ Example:

```javascript
if (true) {
    variable = 10; // Implicit global variable
}
console.log(variable); // output: 10
```

---

### ❓ Q5. What is Hoisting in JavaScript?

> Hoisting is JavaScript’s behavior where **function and variable declarations are moved to the top** of their respective scopes during the compilation phase.

#### ✅ Key Points:
- "Hoisting moves declarations, not initializations, to the top of their scope."
- "`var` is hoisted and initialized as `undefined`, but `let` and `const` are hoisted without initialization (TDZ)."
- "Function declarations are hoisted fully, but function expressions are not."

---

### ❓ Q6. What is JSON?

> **JSON (JavaScript Object Notation)** is a lightweight data format used to **store**, **exchange**, and **transfer** data between systems, especially between **client and server**.

- Used in APIs, localStorage, databases, etc.
- Based on JavaScript syntax but is language-independent.

#### ✅ Example:

```json
{
  "name": "Dhiraj",
  "age": 25,
  "isStudent": true,
  "skills": ["JavaScript", "React", "Node"],
  "address": {
    "city": "Delhi",
    "zip": "110001"
  }
}
```
