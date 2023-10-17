     var ancho= window.innerWidth;
      var alto = window.innerHeight;
			console.log("el ancho00 es " + ancho);
			console.log("el alt00o es " + alto);
			
    
    
    function abrirMenu() {
    var divmenu = document.getElementById("menu-abierto");
    var divmultimedia = document.getElementById("menu-multimedia");
    
    if (getComputedStyle(divmenu).visibility != "visible") {
    	
      	   divmenu.style.animation = "aparecer 1s linear forwards";
      	   if (getComputedStyle(divmultimedia).visibility == "visible") {
      	   	divmultimedia.style.animation = "desaparecer .5s linear forwards";
      	   }
      	   
    }else {
    
    	divmenu.style.animation = "desaparecer .5s linear forwards";
     	
    }
    	
    }
    
    function multimedia() {
    var divmenu = document.getElementById("menu-abierto");
    var divmultimedia = document.getElementById("menu-multimedia");
    
    if (getComputedStyle(divmultimedia).visibility != "visible") {
    	
      	   divmultimedia.style.animation = "aparecer 1s linear forwards";
      	   if (getComputedStyle(divmenu).visibility == "visible") {
      	   	divmenu.style.animation = "desaparecer .5s linear forwards";
      	   }
      	   
    }else {
    
    	divmultimedia.style.animation = "desaparecer .5s linear forwards";
     	
    }
    	
    }
    
    function clickexp(){
        var divs = ["exp-geo", "exp-vel", "exp-motor", "exp-notifi", "exp-espejo", "exp-golpe", "exp-gas", "exp-moni"];
        var quienllamo = event.target.id.split("-");
			var comparar = "exp-" + quienllamo[1];
        console.log("quien llamo fue " + comparar);
        
        var div = document.getElementById(comparar);
        div.style.animation = "aparecer 1s linear forwards";
        
        for (var i=0; i < divs.length; i++) {
        		var css = document.getElementById(divs[i]);
        		console.log("el elemento " + divs[i] + "esta " + getComputedStyle(css).visibility);
        		if (getComputedStyle(css).visibility == "visible") {
        			css.style.animation = "desaparecer .5s linear forwards";
        		}
        }
   }
   
function linkWhats() {
    	
    	window.open("https://wa.me/+525514522182", "_blank");
    }
     
function linkPlataforma(){
    	window.open("http://gechdell.duckdns.org:8082", "_blank");
    }
