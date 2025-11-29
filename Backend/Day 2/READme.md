### 🗓️ Day - 2: Express and APIs in Node.js

---

## ❌ Why We Don’t Use HTTP Module Directly
- Verbose and repetitive.
- No routing, middleware, or extra features.
- Hard to manage large applications.

---

## 🚀 Introduction to Express
- Lightweight, fast Node.js framework.
- Simplifies server creation and routing.

---

## 🛠️ Create a Server Using Express
```bash
npm install express
```
```js
const express = require('express');
const app = express();
```

---

## 📡 Express Creates the Server But Doesn’t Start It
- `express()` creates an instance of the app.
- The server doesn't listen until you call `app.listen()`.

---

## ▶️ Start the Express Server
```js
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

---

## ❗ Make the First Request
- Visit `http://localhost:PORT/`
- No API defined yet → shows **Cannot GET /**

---

## 🧠 Explanation of APIs in Express
- Define routes using:
```js
app.get(path, callback);
```
- Each route handles a specific HTTP request.

---

## 📍 Create a `/` API
```js
app.get('/', (req, res) => res.send('Hello World'));
```

---

## 📥 What is `req` (Request)?
- Object containing client request data:
  - URL
  - Headers
  - Query parameters
  - Body data, etc.

---

## 📤 What is `res` (Response)?
- Object used to send data back to client.
- Common methods:
  - `res.send()`
  - `res.json()`
  - `res.status()`

---

## 🔗 What is an API?
- **API (Application Programming Interface)**: A way for two apps to **communicate**.
- Allows one software to request data or services from another.
- Flexible in communication structure (no strict format).

---

## 🌐 What are REST APIs?
- **REST** = Representational State Transfer.
- A set of **rules** for designing APIs.
- Uses HTTP methods:
  - `GET`, `POST`, `PUT`, `DELETE`
- Follows standard request/response structures.

---

## 📨 Ways to Send Data in Requests

### 1. `req.body`
- Sent in body of request.
- Used in `POST`, `PUT`, `PATCH`.
- Example: Form data or JSON.

### 2. `req.query`
- Data in URL after `?` as key-value pairs.
- Mostly used in `GET`.
- Example:
  ```
  GET /search?city=delhi&limit=10
  ```

### 3. `req.params`
- Data in URL path.
- Example:
  ```
  GET /user/ankur_bit_io
  ```
- Accessed as:
  ```js
  req.params.username
  ```

---

## 🔄 Request-Response Lifecycle
1. **Client sends a request** to server
2. **Server receives** the request
3. **Route handler matches** the request
4. **Processes** the request
5. **Sends back a response** to client
6. **Client receives** the response