import BaseHttpService from "..src/index.js";
import instanceAxios from "./axios.js";

class Person extends BaseHttpService {
  constructor(id) {
    let relationship = { books: "books" };
    super(id, relationship, instanceAxios);
  }
}

export default (id) => new Person(id);
