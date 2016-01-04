var getRealContent = (function(){
		var imgDefer = document.getElementsByTagName('img'),
			bgImgDefer = document.getElementsByClassName('bgd'),
			vidDefer = document.getElementsByTagName('iframe'),
			imgL = imgDefer.length,
			bgImgL = bgImgDefer.length,
			vidL = vidDefer.length,
			i = 0;
	
		function realImages(){
			for (i; i<imgL; i+=1) {
				var realImg = imgDefer[i].getAttribute('data-src');
				if(realImg) {
					imgDefer[i].setAttribute('src', realImg );
					imgDefer[i].removeAttribute('data-src');
			}}
		}
		function realVideos(){
			for (i; i<vidL; i+=1) {
				var realVid = vidDefer[i].getAttribute('data-src');
				if(realVid) {
					vidDefer[i].setAttribute('src', realVid);
					vidDefer[i].removeAttribute('data-src');
			}}
		}
		function realBackground(){
			for (i; i<bgImgL; i+=1) {
				var realBg = bgImgDefer[i].getAttribute('data-bg');
				if(realBg) {
					bgImgDefer[i].setAttribute('style',realBg);
					bgImgDefer[i].removeAttribute('data-bg');
			}}
		}
		function getAllContent(){
			if(imgL > 0){ realImages() };
			if(vidL > 0){ realVideos() };
			if(bgImgL > 0){ realBackground() };
		}
		return {
			all : getAllContent
		}  
	})();

	function downloadJSAtOnload() {
		var element = document.createElement("script");
		element.src = "js/script.js";
		document.body.appendChild(element);
		getRealContent.all();	
	}

	if (window.addEventListener)
		window.addEventListener("load", downloadJSAtOnload, false);
	else if (window.attachEvent)
		window.attachEvent("onload", downloadJSAtOnload);
	else window.onload = downloadJSAtOnload;