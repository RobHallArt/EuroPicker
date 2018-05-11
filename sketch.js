
// create vars for elements

var title, countryTitle, countryDesc, countryImg, countryVid, countryLastWin, countryOrder, countryFlag;
var flagEmoji = [10];

var countries = [
  {name: "Ukraine", desc: "Got annexed innit", img: null, lastWin: null, flag: "🇺🇦"}
  {name: "Spain", desc: "Just english people", img: null, lastWin: null, flag: "🇪🇸"}
]



function setup(){



}

function draw(){

  console.log("🇪🇸");

}

function flag(){

  this.position = createVector(width/2, height/2);
  this.country = random(0,25);
  this.speed = random(0.5,1.5);
  this.size = 10;

  this.draw = function(){

    this.physics();
    text(this.position.x,this.position.y,this.size,this.size,countries[this.country].flag);

  }

}
