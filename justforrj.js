//ex1
var ptag1 = document.getElementsByClassName("special");
var ptag2 = document.getElementById("first");
var ptag3 = document.getElementsByTagName("p");
console.log(ptag1[0]);
console.log(ptag2);
console.log(ptag3[0]);
//ex2
var getSpecial = document.querySelector(".special");
console.log(getSpecial);
var specialGet = document.querySelectorAll(".special");
console.log(specialGet);
//ex 3
var getH1 = document.getElementsByTagName("h1");
for (x=0;x<getH1.length;x++){
    getH1[x].style.color = "blue";
}
//ex 4
var getpTags = document.getElementsByTagName("p");
for (y=0;y<getpTags.length;y++){
    getpTags[length].style.color = "yellow";
}

/*

Put your js script at the bottom of your HTML page to fix some issues.

Question 1:
	a) Correct
Questoin 2: 
	a) Correct
Question 3:
	a) Correct
Question 4:
	a) Almost complete. You're supposed to change the 4th p tag. The first one is changing.

From Kenn
*/