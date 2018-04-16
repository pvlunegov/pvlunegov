$(document).ready(function() {

	// табы
	(function(){
		$('.tabs__link').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this),
				item = $this.closest('.tabs__item'),
				container = $this.closest('.tabs'),
				content = container.find('.tabs__content-item'),
				ndx = item.index(),
				reqItem = content.eq(ndx),
				activeItem = content.filter('.active');

			item.addClass('active')
				.siblings()
				.removeClass('active');

			activeItem.fadeOut(500, function () {
				reqItem.fadeIn(500, function () {
					$(this).addClass('active')
						.siblings()
						.removeClass('active');
				});
			});
		});
	}());

	// слайдшоу
	(function(){
		$('.slideshow__thumbs-link').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this),
				container = $this.closest('.slideshow'),
				display = container.find('.slideshow__display'),
				item = $this.closest('.slideshow__thumbs-item'),
				path = $this.attr('href'),
				duration = 600,
				preloader = $('.slideshow__preloader');

			if (!item.hasClass('active')) {
				preloader.show();

				display.fadeOut(duration, function () {
					//$(this).attr('src', path).load(function() {
					$(this).attr('src', path).on('load',function() {						
						$(this).fadeIn(duration);
						preloader.hide();
					});
				});

				item.addClass('active')
					.siblings()
					.removeClass('active');
			}
		});
	}());
	
	(function(){
		var flag = true;

		$('.acco__trigger').on('click', function(e){
		    e.preventDefault();

			var
				$this = $(this),
				container = $this.closest('.acco'),
				item = $this.closest('.acco__item'),
				currentContent = item.find('.acco__content'),
				duration = 500;

			if (flag) {
				flag = false;
				if (!item.hasClass('active')) {

					item
						.addClass('active')
						.siblings()
						.removeClass('active')
						.find('.acco__content')
						.slideUp(duration);

					currentContent.slideDown(duration, function () {
						flag = true
					});
				} else {

					item.removeClass('active');
					currentContent.slideUp(function() {
						flag = true
					});
				}
			}
		});
	})();

	//слайдер

	var slider = $('.slider__list').bxSlider({
		speed : 1500,
		onSlideNext : function () {
			console.log('next');
		}
	});

	slider.goToSlide(2);

});

// $(window).load(function () {
// 	console.log('load');
// });
//
// $(window).resize(function () {
// 	console.log('resize');
// });
//
// $(window).scroll(function () {
// 	var wScroll = $(window).scrollTop();
//
// 	console.log(wScroll);
// });
//
//
//
//
