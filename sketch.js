// create vars for elements

var title, countryTitle, countryDesc, countryImg, countryVid, countryLastWin, countryOrder, countryFlag, bigButton;
var flagEmoji = [];
var startDiv;
var countryFromCookie;

var countries = [{
    name: "Ukraine",
    desc: "Got annexed innit",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: 2016,
    flag: "🇺🇦",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Spain",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: 1969,
    flag: "🇪🇸",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Slovenia",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: "Never",
    flag: "🇸🇮",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Lithuania",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: "Never",
    flag: "🇱🇹",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Austria",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: 2014,
    flag: "🇦🇹",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Estonia",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: 2001,
    flag: "🇪🇪",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Norway",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: 2009,
    flag: "🇳🇴",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Portugal",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: 2017,
    flag: "🇵🇹",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "United Kingdom",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: 1997,
    flag: "🇬🇧",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Serbia",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: 2007,
    flag: "🇷🇸",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Germany",
    desc: "Interestingly also won in 82 as west germany!",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: 2010,
    flag: "🇩🇪",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Albania",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: "Never",
    flag: "🇦🇱",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "France",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: 1977,
    flag: "🇫🇷",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Czech Republic",
    desc: "Best : 25th, in 2016",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: "Never",
    flag: "🇨🇿",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Denmark",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: 2013,
    flag: "🇩🇰",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Australia",
    desc: "Came 2nd in 2016, only been here since 2015",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: "Never",
    flag: "🇦🇺",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Finland",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: 2006,
    flag: "🇫🇮",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Bulgaria",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: "Never",
    flag: "🇧🇬",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Moldova",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: "Never",
    flag: "🇲🇩",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Sweden",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: 2015,
    flag: "🇸🇪",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Hungary",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: "Never",
    flag: "🇭🇺",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Israel",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: 1998,
    flag: "🇮🇱",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "The Netherlands",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: 1975,
    flag: "🇳🇱",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Ireland",
    desc: "They won a bunch in the 90s but have come last in the noughties",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: 1996,
    flag: "🇮🇪",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Cyprus",
    desc: "Just english people",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: "Never",
    flag: "🇨🇾",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Italy",
    desc: "Last year was a banger!",
    img: "https://emerging-europe.com/wp-content/uploads/2016/11/bigstock-140187299-1024x682.jpg",
    lastWin: 1990,
    flag: "🇮🇹",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
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

  for (var i = 0; i < 300; i++) {
    flagEmoji.push(new flag(innerWidth / 2, 200,10));
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
    flagEmoji.push(new flag(mouseX, mouseY,3));
  }
}

function flag(_x, _y, _maxLife,_flagOveride) {

  this.position = createVector(_x, _y);
  if(_flagOveride == null){
    this.country = Math.floor(Math.random() * countries.length);
  } else {
    this.country = _flagOveride;
  }

  this.speed = createVector(random(-3, 3), random(-3, 3)).limit(3);
  this.size = 10;
  this.age = random(_maxLife/3, _maxLife);
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
  if (countryTitle != null) {
    countryTitle.remove();
  }
  if (countryImg != null) {
    countryImg.remove();
  }
  if (countryVid != null) {
    countryVid.remove();
  }
  if (countryDesc != null) {
    countryDesc.remove();
  }
  if (countryLastWin != null) {
    countryLastWin.remove();
  }
  if (countryOrder != null) {
    countryOrder.remove();
  }
  if (bigButton != null) {
    bigButton.remove();
  }


  if (_scene == "chooseButton") {
    startDiv = createDiv('');
    startDiv.id('startDiv');
    startDiv.style("text-align","center");
    bigButton = createButton('Choose Country!');
    bigButton.style("font-size", "64px");
    bigButton.style("font-family", "sans-serif");
    bigButton.style("align", "center");
    bigButton.parent('startDiv');
    bigButton.touchStarted(bigButtonHandler);

  }

  if (_scene == "countryData") {
    countryDiv = createDiv('');
    countryDiv.id('countryDiv');
    countryDiv.style("text-align","center");
    countryTitle = createElement("h1", countries[countryFromCookie].name);
    countryTitle.style("font-family", "sans-serif");
    countryTitle.style("text-align", "center");
    countryTitle.style("font-size", "64px");
    countryTitle.parent('countryDiv');
    countryImg = createImg(countries[countryFromCookie].img);
    countryImg.style("text-align", "center");
    countryImg.parent('countryDiv');
    countryLastWin = createElement("p", countries[countryFromCookie].lastWin);
    countryLastWin.style("font-family", "sans-serif");
    countryLastWin.style("text-align", "center");
    countryLastWin.style("font-size", "64px");
    countryLastWin.style("float", "left");
    countryOrder = createElement("p", countryFromCookie+1);
    countryOrder.style("font-family", "sans-serif");
    countryOrder.style("text-align", "center");
    countryOrder.style("font-size", "64px");
    countryOrder.style("float", "right");
    countryTitle = createElement("h1", countries[countryFromCookie].name);
    countryTitle.style("font-family", "sans-serif");
    countryTitle.style("text-align", "center");
    countryTitle.style("font-size", "64px");
    countryTitle = createElement("h1", countries[countryFromCookie].name);
    countryTitle.style("font-family", "sans-serif");
    countryTitle.style("text-align", "center");
    countryTitle.style("font-size", "64px");
    countryTitle = createElement("h1", countries[countryFromCookie].name);
    countryTitle.style("font-family", "sans-serif");
    countryTitle.style("text-align", "center");
    countryTitle.style("font-size", "64px");
    countryTitle = createElement("h1", countries[countryFromCookie].name);
    countryTitle.style("font-family", "sans-serif");
    countryTitle.style("text-align", "center");
    countryTitle.style("font-size", "64px");

  }
}

function bigButtonHandler() {
  setHTML("countryData");
  for (var i = 0; i < 300; i++) {
    flagEmoji.push(new flag(innerWidth / 2, 200,20,countryFromCookie));
  }
}
