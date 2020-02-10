//retrieves the node in the DOM
const canvas = document.getElementById('tutorial');

//this will let me access the drawing context
const ctx = canvas.getContext('2d');

ctx.font = "30px Arial"
ctx.fillText("Hello World", 10, 50);