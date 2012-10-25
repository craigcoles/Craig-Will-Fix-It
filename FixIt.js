(function(){

	// the minimum version of jQuery we want
	var v = "1.3.2";

	// check prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}
	
	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
      var jimmy=function(){
        
       for(var img=document.images,i=0;i<img.length;i++){
          // var imagename = img[i].src.match('.*/(.*?).(jpe?g|gif|png)'); 
          
          var imageSrc = img[i].src.match('savile|Savile');
          var imageAlt = img[i].alt.match('savile|Savile');
          
          if (imageSrc || imageAlt) {
            
            var width = img[i].width; 
            var height = img[i].height;
            
            img[i].style.height = height;
            img[i].style.width = width;
            
            if(width&&height) {
              img[i].src='http://www.craigcoles.co.uk/lab/savile/savile-glass.gif';
              img[i].style.background="url('http://www.craigcoles.co.uk/lab/savile/nspcc-logo.jpg') no-repeat center center";
            }
            
          }
      }
      
      return false
      
    };
    
    jimmy();
    
		})();
	}

})();