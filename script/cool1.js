


// Run function upon click.
document.onclick = makeDiv;

function makeDiv(elem) {
  
  // Create a new div element.
  let circle = document.createElement("div");

  // Add the .circle class.
  circle.classList.add("circle");
  circle.setAttribute("id", "quote");


	var quotes="Currently a Graduate Student in the Department of Computer Science at Northern Illinois University.@ A great lover of web programming, in search of an full-time oppurtunity to showbiz my skills and more prominently to develop myself into a master in web programming.@Apart from programming and related stuff, i play and follow sports a lot.@ I am a great soccer and cricket follower. Currently i am part of the Northern Illinois University Huskies Cricket Team that won the Midwest Regional Championship 2015.@I have great passion towards solo travelling too.";

var quot = function () {
   var newArray= quotes.split("@");
   var searchTerm = newArray[0];
		var index=newArray.indexOf(searchTerm)+1;
       if(index == newArray.length )index=0;
          var result=newArray[index];
          console.log(result);
    	  return result;
       }

var quote = quot();

 
var text= document.createTextNode(quote);

  // Position of Div
  circle.style.top = elem.clientY - 50 + "px";
  circle.style.left = elem.clientX - 50 + "px";



  // Append the div to the article element.
  document.querySelector("article").appendChild(circle);
  circle.appendChild(text);

 // document.getElementById("quote").textContent = quote;
}


