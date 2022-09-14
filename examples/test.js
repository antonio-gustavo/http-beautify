import Person from "./Person.js";

let data;

data = await Person().show();

data = await Person(1).show();

data = await Person().show({ name: "John Dee" });

data = await Person().store({ name: "John Dee", age: 21 });

data = await Person(1).update({ age: 22 });
