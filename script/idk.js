
// Run function upon click.
document.onclick = makeDiv;

function makeDiv(elem) {
  
  // Create a new div element.
  let circle = document.createElement("div");

  // Add the .circle class.
  circle.classList.add("circle");
  circle.setAttribute("id", "quote");

var quotes="i.@ he tells me not to hold back, @that he doesn't mind the turbulence, @that the ebb and flow of the current is peaceful, @he says he finds solace in the honesty. @ i'm too scared to let down the floodgates, @i'm afraid he'll drown in that honesty, @ because it is not always beautiful, @he's been promising me for months that he's a good swimmer, @but i don't even trust myself to just float. @ii.@ my anchor has left me. @and i began to wonder if she was really an anchor at all. @she was more of a buoy floating just out of reach, @ moving with the wind,@a mirage tricking me into believing her when she said loved me,@ that she'd always be there for me, @she must have been drawn to me because my dark water contrasted her enough to make her stand out, @and she was there for me if i lost my way,@but only if i had the energy to seek out her bright colours@iii. @ my mom is gaia herself. @the world takes advantage of her, @and she gives and gives not realizing there's going to be nothing left. @she is losing all her resources, @and when she sends that hurricane, it is a call for help, @and she knows it falls on deaf ears. @i feel clumsy with my stuttering waters, @ trying to reach out, but i cannot tie her here, @and she is the reason i am who i am. @iv. @i am starting to feel like im drowning in my own feelings. @and sometimes i almost let the waves pull me under, @ if it will make the world quiet for one fucking minute.@";
var text=document.getElementById("myText");


function quot () {
   var newArray= quotes.split("@");

   var searchTerm =  text.innerHTML;
      var index=newArray.indexOf(searchTerm)+1;
       if(index == newArray.length )index=0;
          var result=newArray[index];
          text.innerHTML = result;
          console.log (result);
        return result;
       }
       
 function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function fade(elem) {
    for(var i = 0; i < 10; i++) {
      elem.style.opacity = "" + i / 10;
      await sleep(50);
    }
  }

var quote = quot();

 
var add= document.createTextNode(quote);
 var neg = -1;
  if(Math.random() >= 0.5) {
    neg = -neg;
  }
var degree = Math.random() * 20 - 5;



  // Position of Div

  circle.style.top = elem.clientY - 50 + "px";
  circle.style.left = elem.clientX - 50 + "px";
  circle.style.transform = 'rotate(' + degree + 'deg)';
  fade(circle);

  // Append the div to the article element.
  document.querySelector("article").appendChild(circle);
  circle.appendChild(add);

}

