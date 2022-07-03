// Console & DOM Basics
{
  // console.log(window);
  //
  // alert('This should work the same as window.alert()');
  // window.alert('This should work the same as simple alert()');
  //   console.dir(document);
}

// Colorful H1
{
  //   color = prompt("Input color name");
  // let textH1 = document.getElementById("textH1");
  //   textH1.style = "color:" + color;
  //   console.log(textH1);
}

// Modifying anchor tag
{
  // let aTag = document.body.children[1].children[0];  // Not Robust.
  // Better Approach to use getElementByID() as it's more independent.
  //
  // let aTag = document.querySelector('#aTag');
  // let aTag = document.querySelector('body a');
  //
  // So think of it as CSS code only, and use it as you would with CSS :)
  //
  // let aTag = document.getElementById("aTag");
  // let inputWebsiteName = prompt(
  //   "Enter website name to redirect to. (https and .com stuff will automatically be added.)"
  // );
  // let aTag = document.querySelector('#aTag');
  // aTag.href = "https://www." + inputWebsiteName + ".com";
}

// Adding New Element
{
  // let newMarquee = document.createElement("marquee");
  // let newP = document.createElement("p");
  // newP.appendChild(newMarquee);
  // newMarquee.textContent = "🚞🚃🚃🚃🚃🚃";
  // document.body.append(newP);
}

// Removing Element
{
  // let userInput = prompt("Press enter to delete H1 text 'Hi There!'");

  // if (userInput == "") {
  //   let textH1 = document.querySelector("#textH1");
  //   textH1.remove();
  //   // Better for Older browsers :)
  //   // textH1.parentElement.removeChild(textH1);
  // }
}
