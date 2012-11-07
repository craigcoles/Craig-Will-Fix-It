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
		  
		  var replaceWithJimmy = function() {
        for(var img=document.images,i=0;i<img.length;i++){

          var imageSrc = img[i].src.match('savile|Savile');
          var imageAlt = img[i].alt.match('savile|Savile');

          if (imageSrc || imageAlt) {

            var width =  img[i].width;
            var height = img[i].height;

            $(img[i]).wrap('<div class="imgLiquid" style="width:' + width + 'px; height:' + height + 'px" />');

            if(width&&height) {
              img[i].setAttribute("width", width);
              img[i].setAttribute("height", height);
              img[i].src='http://www.craigcoles.co.uk/lab/savile/nspcc-logo.jpg';
            }
          }
        }		    
		  };
		  
      var jimmy=function(){
       
        // ImgLiquid Lib CSS
        var imgLiquidcss   = document.createElement("link");
        imgLiquidcss.rel  = "stylesheet";
        imgLiquidcss.type  = "text/css";
        imgLiquidcss.href   = "http://www.craigcoles.co.uk/lab/savile/imgLiquid.js.css";
        document.body.appendChild(imgLiquidcss);

        $.getScript("http://www.craigcoles.co.uk/lab/savile/imgLiquid-min.js", function(data, textStatus, jqxhr) {
          console.log('imgLiquid loaded');

          replaceWithJimmy();

          $(".imgLiquid").imgLiquid({fill:false});
        });
        
      return false
      
    };
    
    jimmy();
        
    })();
  }
  
})();