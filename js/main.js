const text = document.querySelectorAll("#anshul path");
console.log(text);
for (let i = 0; i < text.length; i++) {
  var n = text[i].getTotalLength();
  console.log(n);
}
