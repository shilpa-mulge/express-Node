const array = ["apple", "oranges", " ", "mango", " ", "lemon"];
const newArray = array.map((ele) => {
  if (ele === " ") {
    return "empty string";
  } else {
    return ele;
  }
});

console.log("a");

console.log("b");
new Promise((res, rej) => {
  setTimeout(() => res("c"), 3000);
})
  .then((msg) => {
    console.log(msg);
    return new Promise((res, rej) => {
      setTimeout(() => res("d"), 0);
    });
  })
  .then((msg1) => {
    console.log(msg1);
    console.log("e");
  });

async function fun1() {
  console.log("a");

  console.log("b");

  const p1 = await new Promise((res, rej) => {
    setTimeout(() => res("c"), 1000);
  });

  console.log(p1);

  const p2 = await new Promise((res, rej) => {
    setTimeout(() => res("d"), 0);
  });

  console.log(p2);

  console.log("e");
}

fun1();
