// create vars for elements

var title, countryTitle, countryDesc, countryImg, countryVid, countryLastWin, countryOrder, countryFlag, bigButton;
var flagEmoji = [];

var countryFromCookie;

var countries = [{
    name: "Ukraine",
    desc: "Got annexed innit",
    img: null,
    lastWin: null,
    flag: "🇺🇦"
  },
  {
    name: "Spain",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇪🇸"
  },
  {
    name: "Slovenia",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇸🇮"
  },
  {
    name: "Lithuania",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇱🇹"
  },
  {
    name: "Austria",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇦🇹"
  },
  {
    name: "Estonia",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇪🇪"
  },
  {
    name: "Norway",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇳🇴"
  },
  {
    name: "Portugal",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇵🇹"
  },
  {
    name: "United Kingdom",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇬🇧"
  },
  {
    name: "Serbia",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇷🇸"
  },
  {
    name: "Germany",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇩🇪"
  },
  {
    name: "Albania",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇦🇱"
  },
  {
    name: "France",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇫🇷"
  },
  {
    name: "Czech Republic",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇨🇿"
  },
  {
    name: "Denmark",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇩🇰"
  },
  {
    name: "Australia",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇦🇺"
  },
  {
    name: "Finland",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇫🇮"
  },
  {
    name: "Bulgaria",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇧🇬"
  },
  {
    name: "Moldova",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇲🇩"
  },
  {
    name: "Sweden",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇸🇪"
  },
  {
    name: "Hungary",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇭🇺"
  },
  {
    name: "Israel",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇮🇱"
  },
  {
    name: "The Netherlands",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇳🇱"
  },
  {
    name: "Ireland",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇮🇪"
  },
  {
    name: "Cyprus",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇨🇾"
  },
  {
    name: "Italy",
    desc: "Just english people",
    img: null,
    lastWin: null,
    flag: "🇮🇹"
  }
]



function setup() {

  if (document.cookie != "") {
    countryFromCookie = document.cookie;
  } else {
    countryFromCookie = Math.floor(Math.random() * 25);
    document.cookie = countryFromCookie;
  }

  setHTML("chooseButton");

  for (var i = 0; i < 100; i++) {
    flagEmoji.push(new flag(innerWidth / 2, innerHeight / 2));
  }



}

function draw() {
  for (var i = 0; i < flagEmoji.length; i++) {
    flagEmoji[i].update();
  }

  for (var i = 0; i < flagEmoji.length; i++) {
    if (flagEmoji[i].age < 0) {
      flagEmoji[i].kill();
      flagEmoji.splice(i, 1);
    }
  }
}

function touchStarted() {
  for (var i = 0; i < 50; i++) {
    flagEmoji.push(new flag(mouseX, mouseY));
  }
}

function flag(_x, _y) {

  this.position = createVector(_x, _y);
  this.country = Math.floor(Math.random() * countries.length);
  this.speed = createVector(random(-5, 5), random(-5, 5)).limit(3);
  this.size = 10;
  this.age = random(1, 3);
  this.flagElement = createP(countries[this.country].flag).position(this.position.x, this.position.y);

  this.update = function() {
    this.age -= random(0.01, 0.1);
    this.physics();
    //text(this.position.x,this.position.y,this.size,this.size,countries[this.country].flag);
    this.flagElement.position(this.position.x, this.position.y);
  }

  this.kill = function() {
    this.flagElement.remove();
  }

  this.physics = function() {
    this.position.y += this.speed.y;
    this.position.x += this.speed.x;
  }
}

function setHTML(_scene) {
  //remove all previous relevant html
  if(countryTitle != null){
    countryTitle.remove();
  }
  if(countryImg != null){
    countryImg.remove();
  }
  if(countryVid != null){
    countryVid.remove();
  }
  if(countryDesc != null){
    countryDesc.remove();
  }
  if(countryLastWin != null){
    countryLastWin.remove();
  }
  if(countryOrder != null){
    countryOrder.remove();
  }
  if(bigButton != null){
    bigButton.remove();
  }


  if (_scene == "chooseButton") {
    bigButton = createButton('Choose Country!');
    bigButton.style("font-size","64px");
    bigButton.touchStarted(bigButtonHandler);
    //bigButton.touchStarted(buttonHandler("bigButton"));
  }

  if (_scene == "countryData") {
     countryTitle = createElement("h1", countries[countryFromCookie].name );
  }
}

function bigButtonHandler() {
  console.log("test");
  setHTML("countryData");
}
