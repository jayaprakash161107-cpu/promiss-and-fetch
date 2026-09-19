# Fetch Users Data from API using JavaScript

This project demonstrates how to fetch user data from an API using JavaScript.

I practiced two different ways of handling asynchronous operations:

1. `.then()` and `.catch()`
2. `async` and `await`

The data is fetched from the JSONPlaceholder Users API.

---

## Technologies Used

* HTML
* JavaScript
* Fetch API
* JSON
* Promises
* Async/Await

---

## API Used

```text
https://jsonplaceholder.typicode.com/users
```

This API returns sample user information in JSON format.

---

## Method 1: `.then()` and `.catch()`

```javascript
const data = fetch("https://jsonplaceholder.typicode.com/users");

console.log(data);

data
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
```

### How it works

* `fetch()` sends a request to the API.
* `fetch()` returns a Promise.
* `.then()` handles the resolved Promise.
* `res.json()` converts the response into JavaScript data.
* The second `.then()` receives the converted data.
* `.catch()` handles errors if the request fails.

---

## Method 2: `async` and `await`

```javascript
async function fetchadd() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }
}

fetchadd();
```

### How it works

* `async` makes the function asynchronous.
* `await` waits for a Promise to resolve.
* `fetch()` sends the API request.
* `await response.json()` converts the response into JavaScript data.
* `try` contains the code that may produce an error.
* `catch` handles the error.
* `fetchadd()` calls the function.

---

## What I Learned

Through this project, I learned:

* What an API is
* How to use `fetch()`
* What a Promise is
* How `.then()` works
* How `.catch()` handles errors
* Promise chaining
* How `async` and `await` work
* How to use `try` and `catch`
* How to convert API responses using `.json()`
* How to fetch and display API data in the console

---

## Example Output

The API returns an array of user objects.

```javascript
[
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
    },

    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
    }
]
```

---

## Purpose of This Project

The purpose of this project is to understand asynchronous JavaScript and learn how JavaScript communicates with external APIs using the Fetch API.

This is part of my JavaScript learning journey while learning MERN Full Stack Development.
