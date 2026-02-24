// 1. Access a Single Element by ID [cite: 48]
let title = document.getElementById('title'); [cite: 49]
console.log("Title's innerText: " + title.innerText); [cite: 50]
console.log("Title's innerHTML: " + title.innerHTML); [cite: 51]

// 2. Access Multiple Elements by Class Name [cite: 55]
// Returns an HTMLCollection; we use index [0] for the first one 
let desc = document.getElementsByClassName('desc'); [cite: 56]
console.log("Description 1's innerText: " + desc[0].innerText); [cite: 57]
console.log("Description 1's innerHTML: " + desc[0].innerHTML); [cite: 58]

// 3. Access Elements by Tag Name [cite: 62]
// Selects all <p> tags; index [2] refers to the third paragraph [cite: 64, 66]
let paragraphs = document.getElementsByTagName('p'); [cite: 63]
console.log("Paragraph 3's innerText: " + paragraphs[2].innerText); [cite: 64]
console.log("Paragraph 3's innerHTML: " + paragraphs[2].innerHTML); [cite: 65]

// 4. Access the First Element Using a CSS Selector [cite: 67]
// querySelector returns only the first match found [cite: 72]
let btn = document.querySelector("button"); [cite: 68]
console.log('Button\'s innerText: ' + btn.innerText); [cite: 69]
console.log('Button\'s innerHTML: ' + btn.innerHTML); [cite: 70]

// 5. Access Multiple Elements Using a CSS Selector [cite: 73]
// querySelectorAll returns a NodeList of all matching elements [cite: 74]
let info = document.querySelectorAll(".info"); [cite: 74]
console.log("Info Div 1's innerText: " + info[0].innerText); [cite: 75]
console.log("Info Div 1's innerHTML: " + info[0].innerHTML); [cite: 76]
