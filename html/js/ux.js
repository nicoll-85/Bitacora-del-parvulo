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