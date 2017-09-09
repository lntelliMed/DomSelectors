var btn = document.querySelector("button");
//var bdy = document.querySelector("body");

var isPink = false;

// if(btn){
// 	btn.addEventListener("click", function(){ 
// 	if (isPink){
// 		//bdy.style.background = "pink";
// 		document.body.style.background = "white";
// 		//isPink = false;
// 	} else {
// 		//bdy.style.background = "white"; 
// 		document.body.style.background = "pink";
// 		//isPink = true;
// 	}
// 	isPink = !isPink;
// });
// }


btn.addEventListener("click", function(){ 
	document.body.classList.toggle("pink");
});
