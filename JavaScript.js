const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value +"&nbsp;";
}
console.log(txt); //innerHTML-ben pl. a html-kódok is működnek!
document.getElementById("szam1").innerText += numbers[0];
document.getElementById("szam2").innerText += numbers[1];
document.getElementById("szam3").innerText += numbers[2];
document.getElementById("szam4").innerText += numbers[3];
document.getElementById("szam5").innerText += numbers[4];