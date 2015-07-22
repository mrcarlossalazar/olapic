$(document).ready(function(){
		
			//Variable Declaration
			var normalURLs = new Array();
			var tb1, tb2, tb3, img1, img2, img3;
			var finalimgHTML = "", finaltbHTML = "";
			
			//REST URL
			var jsonURL = "https://photorankapi-a.akamaihd.net/customers/215757/media/photorank?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18";
			
			//Get JSON from site and grab URLs of normal size images
			$.getJSON(jsonURL, function(result){
				$.each(result["data"]["_embedded"], function(key, val){
					normalURLs.push(val.images.normal);
				});
			
			//Wait until AJAX request completes, then build HTML from URLs
			}).then(function(){
				$.each(normalURLs, function(key, val){
					tb1 = '<li><a id="carousel-selector-';
					tb2 = '" class="selected"><img src="';
					tb3 = '" width="45" height="45" class="img-circle"></a></li>';						
					finaltbHTML = finaltbHTML + tb1 + key + tb2 + val + tb3;
					
					if (key == 0){img1 = '<div class="active item" data-slide-number="';}
					else {img1 = '<div class="item" data-slide-number="';}
					img2 = '"><img src="';
					img3 = '" class="img-thumbnail"></div>';
					finalimgHTML = finalimgHTML + img1 + key + img2 + val + img3;
          return key<6;					
				});
				
				//Apply new HTML
				$(".list-inline").html(finaltbHTML);
				$(".carousel-inner").html(finalimgHTML);			
				
				//Controls for the carousel
				$('#myCarousel').carousel({interval: 2000});
				
				//Carousel thumbnails
				$('[id^=carousel-selector-]').click(function(){
					var id_selector = $(this).attr("id");
					var id = id_selector.substr(id_selector.length -1);
					id = parseInt(id);
					$('#myCarousel').carousel(id);
					$('[id^=carousel-selector-]').removeClass('selected');
					$(this).addClass('selected');
				});
				
				//Auto update main images
				$('#myCarousel').on('slid', function (e) {
					var id = $('.item.active').data('slide-number');
					id = parseInt(id);
					$('[id^=carousel-selector-]').removeClass('selected');
					$('[id=carousel-selector-'+id+']').addClass('selected');
				});
			});
});
