
// create vars for elements

var title, countryTitle, countryDesc, countryImg, countryVid, countryLastWin, countryOrder, countryFlag;
var textScrollers = [10];




function setup(){


}

function draw(){
  scrollTextUpdate();
}

function onMouseDown(){
  scrollTextInit("WORDS");
}

function scrollTextInit(message){
    for(var i = 0; i<textScrollers.length; i++){
        if(textScrollers[i] == null){
            console.log("1");
            textScrollers[i] = {message: message, posx: 0-(message.length*60), posy: random(innerHeight-100)};
            textScrollers[i].element = createElement('h1',message);
            textScrollers[i].element.position(textScrollers[i].posx,textScrollers[i].posy);
            textScrollers[i].element.style('font-family','sans-serif');
            textScrollers[i].element.style('font-size','72pt');
            return true;
        }
    }
    console.log("2");
    var newScroller = textScrollers.length;
    textScrollers[newScroller] = {message: message, posx: 0-(message.length*60), posy: random(innerHeight-100)};
    textScrollers[newScroller].element = createElement('h1',message);
    textScrollers[newScroller].element.position(textScrollers[newScroller].posx,textScrollers[newScroller].posy);
    textScrollers[newScroller].element.style('font-family','sans-serif');
    textScrollers[newScroller].element.style('font-size','72pt');
}

function scrollTextUpdate(){
    for(var i = 0; i<textScrollers.length; i++){
        if(textScrollers[i] != null){
            if(textScrollers[i].posx>innerWidth){
                textScrollers[i].element.remove();
                textScrollers[i] = null;
            } else {
                textScrollers[i].element.position(textScrollers[i].posx,textScrollers[i].posy);
                textScrollers[i].posx+=2;
            }
        }
    }
}
