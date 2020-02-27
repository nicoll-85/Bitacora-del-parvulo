/* SVG Icons
**********************/

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.4
 */
(function(){if("undefined"!==typeof window&&window.addEventListener){var e=Object.create(null),n,t,d=function(){clearTimeout(t);t=setTimeout(n,100)},q=function(){},u=function(){var f;window.addEventListener("resize",d,!1);window.addEventListener("orientationchange",d,!1);window.MutationObserver?(f=new MutationObserver(d),f.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),q=function(){try{f.disconnect(),window.removeEventListener("resize",d,!1),window.removeEventListener("orientationchange",
d,!1)}catch(w){}}):(document.documentElement.addEventListener("DOMSubtreeModified",d,!1),q=function(){document.documentElement.removeEventListener("DOMSubtreeModified",d,!1);window.removeEventListener("resize",d,!1);window.removeEventListener("orientationchange",d,!1)})},v=function(f){function e(a){var c;void 0!==a.protocol?c=a:(c=document.createElement("a"),c.href=a);return c.protocol.replace(/:/g,"")+c.host}var d,p;window.XMLHttpRequest&&(d=new XMLHttpRequest,p=e(location),f=e(f),d=void 0===d.withCredentials&&
""!==f&&f!==p?XDomainRequest||void 0:XMLHttpRequest);return d};n=function(){function d(){--r;0===r&&(q(),u())}function l(a){return function(){!0!==e[a.base]&&(a.isXlink?a.useEl.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+a.hash):a.useEl.setAttribute("href","#"+a.hash))}}function n(a){return function(){var c=document.body,b=document.createElement("x");a.onload=null;b.innerHTML=a.responseText;if(b=b.getElementsByTagName("svg")[0])b.setAttribute("aria-hidden","true"),b.style.position=
"absolute",b.style.width=0,b.style.height=0,b.style.overflow="hidden",c.insertBefore(b,c.firstChild);d()}}function p(a){return function(){a.onerror=null;a.ontimeout=null;d()}}var a,c,m,g,r=0,b,k=!1,h;q();h=document.getElementsByTagName("use");for(g=0;g<h.length;g+=1){try{c=h[g].getBoundingClientRect()}catch(x){c=!1}(a=h[g].getAttribute("href"))?k=!1:(a=h[g].getAttributeNS("http://www.w3.org/1999/xlink","href"),k=!0);m=a&&a.split?a.split("#"):["",""];a=m[0];m=m[1];b=c&&0===c.left&&0===c.right&&0===
c.top&&0===c.bottom;c&&0===c.width&&0===c.height&&!b?a.length&&(b=e[a],!0!==b&&setTimeout(l({useEl:h[g],base:a,hash:m,isXlink:k}),0),void 0===b&&(k=v(a),void 0!==k&&(b=new k,e[a]=b,b.onload=n(b),b.onerror=p(b),b.ontimeout=p(b),b.open("GET",a),b.send(),r+=1))):b?a.length&&e[a]&&setTimeout(l({useEl:h[g],base:a,hash:m,isXlink:k}),0):void 0===e[a]?e[a]=!0:e[a].onload&&(e[a].abort(),delete e[a].onload,e[a]=!0)}h="";r+=1;d()};var l;l=function(){window.removeEventListener("load",l,!1);t=setTimeout(n,0)};
"complete"!==document.readyState?window.addEventListener("load",l,!1):l()}})();


/* Button carousel logic */
$('.carousel__button-control').on("click",function(){
	$carouselButton = $(this);
	buttonDirection = $carouselButton.data("direction");
	$carousel = $carouselButton.parent();
	$carouselRow = $carousel.find(".carousel-row");
	$carouselRow.each(function(){
		if (buttonDirection == 'forward') {
			$(this).find(".carousel__item.carousel__item--active").first().addClass("carousel__item--hide-to-left").removeClass("carousel__item--active");
			$(this).find(".carousel__item.carousel__item--hide-to-right").first().addClass("carousel__item--active").removeClass("carousel__item--hide-to-right");
			
		} else {
			$(this).find(".carousel__item.carousel__item--active").last().addClass("carousel__item--hide-to-right").removeClass("carousel__item--active");
			$(this).find(".carousel__item.carousel__item--hide-to-left").last().addClass("carousel__item--active").removeClass("carousel__item--hide-to-left");
		}

		
		if( $(this).find(".carousel__item").first().hasClass("carousel__item--active") ){
			$carousel.find(".carousel__button--previous").addClass("carousel__button-control--hidden");
		}else{
			$carousel.find(".carousel__button--previous").removeClass("carousel__button-control--hidden");
		}
		if( $(this).find(".carousel__item").last().hasClass("carousel__item--active") ){
			$carousel.find(".carousel__button--next").addClass("carousel__button-control--hidden");
		}else{
			$carousel.find(".carousel__button--next").removeClass("carousel__button-control--hidden");
		}
	});
})