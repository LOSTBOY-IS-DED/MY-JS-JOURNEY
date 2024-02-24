const userMethods = {
  about: function() {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: function() {
    return this.age >= 18;
  },
  sing: function() {
    return "Now hush little baby dont you cry everything gonna be allright";
  },
};

function createUser(firstName, lastName, email, age, address) {
  const newUser = {};
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  newUser.email = email;
  newUser.age = age;
  newUser.address = address;
  newUser.about = userMethods.about;
  newUser.is18 = userMethods.is18;
  newUser.sing = userMethods.sing;
  return newUser;
}

const user1 = createUser(
  "neha",
  "sharma",
  "hazelwillson2005@gmail.com",
  "19",
  "california,LA",
);

const user2 = createUser(
  "subh",
  "chaudhury",
  "subhajitchaudhury05@gmail.com",
  "19",
  "sidhgora, jamshedpur",
);

const user3 = createUser(
  "souvik",
  "chaudhury",
  "souvikchaudhury0011@gmail.com",
  "12",
  "sidhgora, jamshedpur",
);

// now the problem is method is being created every time we create a object hence taking more memory
// so the solution is to create a object globally with two functions in it

console.log(user1.about());
console.log(user2.about());
console.log(user3.about());

// now it again creates one problem ans that is suppose you had to write many methods and incase if you forgot to mention them in you function then it will throw an error
