getName(); // cannot access before initialization
getName1(); // not a function
getName2(); //will give correct output

let getName = () => {
  console.log("My type is let");
};

var getName1 = () => {
  console.log("My type is let");
};

function getName2() {
  console.log("My type is let");
}
