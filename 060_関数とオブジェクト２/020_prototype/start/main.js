function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function () {
  console.log("Hello" + this.name);
};

Person.bye = function () {
  console.log("Bye" + this.name);
};

const bob = new Person("Bob", 18);
const tom = new Person("Tom", 33);
const sun = new Person("Sun", 20);

bob.hello();
