console.log('canvas');
var canvas = document.querySelector('canvas');
 
canvas.width = window.innerWidth;
canvas.heigh = window.innerHieght; 

var c = canvas.getContext('2d');

var image = document.getElementById('dirt');
console.log(image);
var dx = Math.random()*(window.innerWidth-image.width);
var dy = Math.random()*(window.innerHeight-image.height);

c.drawImage(image, dx, dy);