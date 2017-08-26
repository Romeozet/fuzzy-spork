for (var i = 0; i < 10; i++) {
  var linia = "";
  for (var j = 0; j < 10; j++) {
    if (j <= i) linia += "*";
    else linia += j;
  }
  console.log(linia);
}
