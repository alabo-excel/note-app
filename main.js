var list = document.getElementById("list");
var header = document.getElementById("fa-header");
var input = document.getElementById("input");
var button = document.getElementById("add-btn");
var output = document.getElementById("output");
var bold = document.getElementById("bold");
var italic = document.getElementById("italic");
var para = document.getElementById("para");
var brake = document.createElement("br");

var listContainer = document.createElement('ol')

list.addEventListener("click", () => {
  var listItem = document.createElement("li");
  listItem.innerHTML = input.value;
  button.addEventListener("click", () => {
    listContainer.appendChild(listItem)
    output.append(listContainer);
    input.value =  ''
  });
});


header.addEventListener("click", () => {
  var heading = document.createElement("h1");
  heading.innerHTML = input.value;
  button.addEventListener("click", () => {
    output.append(heading);
    input.value =  ''
  });
});

bold.addEventListener("click", () => {
  var strong = document.createElement("strong");
  var brake = document.createElement("br");
  strong.innerHTML = input.value;
  button.addEventListener("click", () => {
    output.append(strong);
    output.append(brake);
    input.value =  ''
  });
});

italic.addEventListener("click", () => {
  var italic = document.createElement("i");
  italic.innerHTML = input.value;
  button.addEventListener("click", () => {
    output.append(italic);
    output.append(brake);
    input.value =  ''
  });
});

para.addEventListener("click", () => {
  var paragraph = document.createElement("p");
  paragraph.innerHTML = input.value;
  button.addEventListener("click", () => {
    output.append(paragraph);
    output.append(brake);
    input.value =  ''
  });
});
