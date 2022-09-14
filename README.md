# http beautify

Elegant HTTP client based on Axios

## Table of Contents

- [Features](#features)
- [Installing](#installing)

## Features

    - All axios features
    - Make HTTP requests
    - Code clean on usage
    - Reuse client HTTP
    - Beautify implemetation

## Installing

Using npm:

```bash
$ npm i http-beautify
```

## Example

### Module usage

```js
import httpBeautify from "http-beautify";
```

Performing a `GET` request

```js
import httpBeautify from "http-beautify";
import yourAxiosInstance from "axios";

class Users extends httpBeautify {
  constructor(id) {
    let relationship = { books: "books" };
    super(id, relationship, yourAxiosInstance);
  }
}

const users = new Users(id);

let data = users().show();
//this will build this URL: https://yourdomain.com/users
```
