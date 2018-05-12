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
    img: "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/51/y4/p051y4n8.jpg",
    lastWin: 1969,
    flag: "🇪🇸",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Slovenia",
    desc: "Just english people",
    img: "https://www.slovenia.info/uploads/turisticna/Alpine-Slovenia-bled.jpg",
    lastWin: "Never",
    flag: "🇸🇮",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Lithuania",
    desc: "Just english people",
    img: "https://www.avrupa.info.tr/sites/default/files/styles/standard_page_header/public/2016-08/Lithuania%20Vilnius.jpg?itok=eCQaoGd_",
    lastWin: "Never",
    flag: "🇱🇹",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Austria",
    desc: "Just english people",
    img: "https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/europe/austria/Austria_NationalGeographic_2618017.jpg",
    lastWin: 2014,
    flag: "🇦🇹",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Estonia",
    desc: "Just english people",
    img: "https://static2.visitestonia.com/images/3129372/1000_500_false_false_83b107718934b834a1c9edf3b09a4123.jpg",
    lastWin: 2001,
    flag: "🇪🇪",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Norway",
    desc: "Just english people",
    img: "https://www.worldatlas.com/r/w728-h425-c728x425/upload/04/92/d1/shutterstock-382716112.jpg",
    lastWin: 2009,
    flag: "🇳🇴",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Portugal",
    desc: "Just english people",
    img: "https://mansion-global-app.s3.amazonaws.com/stories/portugal-special-report-round-up/media/portugalroundup_lead-mr.jpg",
    lastWin: 2017,
    flag: "🇵🇹",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "United Kingdom",
    desc: "Just english people",
    img: "http://www.nationsonline.org/gallery/UK/Palace-of-Westminster-Parliament.jpg",
    lastWin: 1997,
    flag: "🇬🇧",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Serbia",
    desc: "Just english people",
    img: "http://www.nationsonline.org/gallery/Serbia/Novi-Sad-City-Hall.jpg",
    lastWin: 2007,
    flag: "🇷🇸",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Germany",
    desc: "Interestingly also won in 82 as west germany!",
    img: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/03/21/105079854-GettyImages-726792551.1910x1000.jpg?v=1521651738",
    lastWin: 2010,
    flag: "🇩🇪",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Albania",
    desc: "Just english people",
    img: "http://www.moveabroadnow.com/wp-content/uploads/albania1.jpg",
    lastWin: "Never",
    flag: "🇦🇱",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "France",
    desc: "Just english people",
    img: "https://cdn.travel-mediaserver.com/driveaway/images/car-hire/destinations/france-large.jpg",
    lastWin: 1977,
    flag: "🇫🇷",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Czech Republic",
    desc: "Best : 25th, in 2016",
    img: "https://www.trafalgar.com/~/media/images/home/destinations/europe-and-britain/czech-republic/2016-licensed-images/czechrepublic-prague-cityscape-2016-hero-l-482676419.jpg?mw=1200&",
    lastWin: "Never",
    flag: "🇨🇿",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Denmark",
    desc: "Just english people",
    img: "https://www.worldtravelguide.net/wp-content/uploads/2017/04/Think-Denmark-Copenhagen-587892190-SeanPavonePhoto-copy.jpg",
    lastWin: 2013,
    flag: "🇩🇰",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Australia",
    desc: "Came 2nd in 2016, only been here since 2015",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Australia_Day.jpg/1200px-Australia_Day.jpg",
    lastWin: "Never",
    flag: "🇦🇺",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Finland",
    desc: "Just english people",
    img: "https://www.usnews.com/dims4/USNEWS/96415fc/2147483647/crop/4050x2700%2B0%2B0/resize/1200x1200%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F7d%2F1e%2F3b7a4be94b799c734b853d3f764c%2Fbc17-finland-gallery-14.JPG",
    lastWin: 2006,
    flag: "🇫🇮",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Bulgaria",
    desc: "Just english people",
    img: "https://globalgrasshopper.com/wp-content/uploads/2013/04/Sozopol.png",
    lastWin: "Never",
    flag: "🇧🇬",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Moldova",
    desc: "Just english people",
    img: "http://www.publicfinanceinternational.org/sites/default/files/web_chisinau_shutterstock_459050377.jpg",
    lastWin: "Never",
    flag: "🇲🇩",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Sweden",
    desc: "Just english people",
    img: "https://assets3.thrillist.com/v1/image/2706821/size/gn-gift_guide_variable_c.jpg",
    lastWin: 2015,
    flag: "🇸🇪",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Hungary",
    desc: "Just english people",
    img: "https://www.worldatlas.com/r/w728-h425-c728x425/upload/b1/ff/c9/thinkstockphotos-473481530.jpg",
    lastWin: "Never",
    flag: "🇭🇺",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Israel",
    desc: "Just english people",
    img: "https://timedotcom.files.wordpress.com/2016/12/gettyimages-511828219.jpg",
    lastWin: 1998,
    flag: "🇮🇱",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "The Netherlands",
    desc: "Just english people",
    img: "https://www.iamexpat.nl/sites/default/files/styles/article--full/public/netherlands-rentals.jpg?itok=BsbdeA6Q",
    lastWin: 1975,
    flag: "🇳🇱",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Ireland",
    desc: "They won a bunch in the 90s but have come last in the noughties",
    img: "https://cdn.tourradar.com/s3/tour/original/101761_91f4da0e.jpg",
    lastWin: 1996,
    flag: "🇮🇪",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Cyprus",
    desc: "Just english people",
    img: "https://cdn.purpleinternational.eu/blog_images/57/cyprus.jpg",
    lastWin: "Never",
    flag: "🇨🇾",
    vid: "https://www.youtube.com/embed/DJ9ajcic9fI"
  },
  {
    name: "Italy",
    desc: "Last year was a banger!",
    img: "https://www.italymototour.com/wp-content/uploads/2017/05/positano.jpg",
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

  resetDiv = createDiv('');
  resetDiv.id('startDiv');
  resetDiv.style("text-align","center");
  resetButton = createButton('Reset');
  resetButton.style("font-size", "24px");
  resetButton.style("font-family", "sans-serif");
  resetButton.style("align", "center");
  resetButton.parent('startDiv');
  resetButton.touchStarted(resetButtonHandler);

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
  for (var i = 0; i < 30; i++) {
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
    countryImg.style("max-width", "100%");
    countryImg.parent('countryDiv');
    countryLastWin = createElement("p", "Last Won : " + countries[countryFromCookie].lastWin);
    countryLastWin.style("font-family", "sans-serif");
    countryLastWin.style("text-align", "center");
    countryLastWin.style("font-size", "64px");
    countryLastWin.style("float", "left");
    var orderBruteForce = parseInt(countryFromCookie)+1;
    countryOrder = createElement("p", "Order : " + orderBruteForce);
    countryOrder.style("font-family", "sans-serif");
    countryOrder.style("text-align", "center");
    countryOrder.style("font-size", "64px");
    countryOrder.style("float", "right");
    countryTitle = createElement("br", "");
    countryTitle = createElement("h1", countries[countryFromCookie].flag);
    countryTitle.style("font-family", "sans-serif");
    countryTitle.style("text-align", "center");
    countryTitle.style("font-size", "64px");
    if(countries[countryFromCookie].desc == "Just english people"){
      countries[countryFromCookie].desc = "Just " + countries[countryFromCookie].name + " people"
    }
    countryTitle = createElement("p", countries[countryFromCookie].desc);
    countryTitle.style("font-family", "sans-serif");
    countryTitle.style("text-align", "center");
    countryTitle.style("font-size", "64px");
  }
}

function bigButtonHandler() {
  setHTML("countryData");
  for (var i = 0; i < 100; i++) {
    flagEmoji.push(new flag(innerWidth / 2, 200,20,countryFromCookie));
  }
}

function resetButtonHandler() {
  countryFromCookie = Math.floor(Math.random() * 25);
  document.cookie = countryFromCookie;
  setHTML("countryData");
  for (var i = 0; i < 100; i++) {
    flagEmoji.push(new flag(innerWidth / 2, 200,20,countryFromCookie));
  }
}
