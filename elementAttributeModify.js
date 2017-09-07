// google.com
var logo = document.querySelector("#hplogo");

logo.setAttribute("src", "https://i.pinimg.com/736x/69/0c/86/690c86315eaf9277e007508bae889c2c--cute-cat-video-video-of-cats.jpg");
logo.style.width = "200px";
logo.style.hieght = "100px";
logo.style.border = "1px dashed pink";


var links = document.getElementsByTagName("a");

for(var i=0; i<links.length; i++){
    console.log(links[i].getAttribute("href"));
}

for(var i=0; i<links.length; i++){
    links[i].setAttribute("href", "http://www.bing.com");
}

for(var i=0; i<links.length; i++){
    console.log(links[i].getAttribute("href"));
}

for(var i=0; i<links.length; i++){
    links[i].style.background = "pink";
}

for(var i=0; i<links.length; i++){
    links[i].style.color = "orange";
}

logo.addEventListener("click", function(){
    console.log("You clicked on the logo!");
    logo.style.border = "1px solid yello";
});

for(var i=0; i<links.length; i++){
    links[i].addEventListener("click", function(){
    	this.style.background = "green"
    });
}