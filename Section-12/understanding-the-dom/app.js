// console.log(window);
//
// alert('This should work the same as window.alert()');
// window.alert('This should work the same as simple alert()');

//   console.dir(document);

//   color = prompt("Input color name");

// let textH1 = document.getElementById("textH1");
//   textH1.style = "color:" + color;
//   console.log(textH1);

let aTag = document.body.children[1].children[0];
console.log(aTag);
aTag.href =
  "https://www." +
  prompt(
    "Enter website name to redirect to. (https and .com stuff will automatically be added.)"
  ) +
  ".com";
