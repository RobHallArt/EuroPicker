//--0016
//i=0,s=900,t=1200;function setup(){createCanvas(t,s);noStroke()}function draw(){fill(i++%256,25);quad(i%t,i/3%s,i/4%t,i%s,i/5%t,i/4%s,i/3%t,i/2%s)}// #p5


i=0,s=900,t=1200; //Declare variables and use them multiple times to save space.

function setup(){
    
    createCanvas(t,s); //Create Canvas based on two pre-declared variables to save space.
    
    noStroke() //Remove stroke to prevent it interfering with the transparency of the fill and the lack of a background or clear() function.
    
}
function draw(){
    
    fill(i++%256,25); //Fill with a different colour based on the current frame, incrementing the frame count as it is used. Modulus is also used to loop the frame count over possible fill levels. Opacity set to 25 so drawings overlap and build up rather than cancelling eachother out completely makes for smoother colour transitions.
    
    quad(i%t,i/3%s,i/4%t,i%s,i/5%t,i/4%s,i/3%t,i/2%s) //Draw a quad using points that change out of phase with eachother so the shapes creates appear to interlink. the use of the same variables as the createCanvas function allows the sketch not to draw outside the boundaries of the canvas.
    
}

/*

    The sketch creates shapes that increase in size and lighten as they are drawn. The shapes grow from the top left of the screen, combined with the changing colour gives them the appearance of 3D shapes. As theses different shapes build up on top of eachother they combine to create an almost architectural form.
    The longer the sketch is left running however the more these 3D forms become confused and more difficult for the eye to pick out individually. This makes the sketch increasingly abstract as it progresses. Occasionally a large form will emerge from the origin top left to obliterate most of what is on screen; because of the transparency it doesn't always obliterate all beneath but instead creates an almost glass like sheen over everything it passes, once again adding to the architectural feel.
    Sometimes the points line up in such a way that a single curved line is drawn amongst a sea of straight edged diagonals. This creates almost an optical illusion as I found myself looking and looking again to decide if what I was seeing was actually a curve or whether the gradients were deceptive.

*/