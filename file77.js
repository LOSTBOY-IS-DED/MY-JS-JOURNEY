// proto , prototype , class

const user = {
  firstName: "Subhajit",
  lastName: "Chaudhury",
  email: "subhajitchaudhury05@gmail.com",
  age: 19,
  address: " House Number, Colony , Pincode, State",
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

// we cant make lakshs ohf object like this coz its a tidious task
// so we need to create a function which will take some values and return a object

// function ( that function crate object)
// 2nd task is add key value pair
// 3rd task is to return the object

function createUser(firstName, lastName, email, age, address) {
  const newUser = {};
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  newUser.email = email;
  newUser.age = age;
  newUser.address = address;
  newUser.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
  };
  newUser.is18 = function () {
    return this.age >= 18;
  };
  return newUser;
}

const user1 = createUser(
  "neha",
  "sharma",
  "hazelwillson2005@gmail.com",
  "19",
  "california,LA",
);
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);
