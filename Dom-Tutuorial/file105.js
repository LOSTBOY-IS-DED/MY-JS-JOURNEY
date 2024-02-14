// changing text
// textContent and InnerText
// textContent property is used to show and change the selected text 

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent);
console.log(mainHeading.innerText); //innerText will only show the visible text 

// check line 53 of index.html if we set the display to none in span then it will hide the text from the sit but it will be visible in console
mainHeading.textContent = " This is something else ";
console.log(mainHeading.textContent);