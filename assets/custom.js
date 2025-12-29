theme_custom.clickEvent = function(){
  // document.getElementById('enableLiveChat').onclick = function(e) {
  var enableLiveChat = document.getElementById('enableLiveChat');
  if (enableLiveChat !== null) {
    enableLiveChat.addEventListener('click', function(e) {
      e.preventDefault(); 
      if(document.getElementById("dummy-chat-button-iframe")){ 
        document.getElementById("dummy-chat-button-iframe").contentWindow.document.getElementById("dummy-chat-button")?.addEventListener("click", dummyChatButtonIframe(), true);
      }else{
        document.getElementById("ShopifyChat").contentWindow.document.getElementsByClassName("chat-toggle")[0]?.addEventListener("click", ShopifyChat(), true);
      }
    });
  }
  function dummyChatButtonIframe() {
		var iframe = document.getElementById("dummy-chat-button-iframe");
		var elmnt  = iframe.contentWindow.document.getElementById("dummy-chat-button");
		elmnt.click(); 
  }
  function ShopifyChat() { 
    var iframe = document.getElementById("ShopifyChat");
    var elmnt = iframe.contentWindow.document.getElementsByClassName("chat-toggle")[0];
    elmnt.click();
	}

  $(document).on('click', '.custom_add_cart_main', function(){
    $(this).find('.btn_loading').removeClass('hidden');
    $(this).addClass('loading');
    $('.main__product .product-form__buttons .product-form__submit').click();
    setTimeout(() => {
      $(this).removeClass('loading');
      $(this).find('.btn_loading').addClass('hidden');
    }, 600);
  });

  

}
theme_custom.scrollEvent = function(){
  onScroll();
}

theme_custom.productReviewSlider = function(){
  $(".product_reviews_slider").slick();
}

function onScroll(){
  $(window).scroll(function(){ 
    if($("body.template__product").length > 0){
      totalHeight = ($('.template__product .product__info-wrapper')?.height() + $('.template__product .custom-banner')?.height() + 175);
      if ($(this).scrollTop() > totalHeight) {
        $('.custom_add_cart_main_sticky').fadeIn("fast");
      } else { 
        $('.custom_add_cart_main_sticky').fadeOut("fast");
      }    
    }
  });
}

$(document).ready(function(){
	theme_custom.clickEvent();
	theme_custom.scrollEvent();
  theme_custom.productReviewSlider();
	if ($('.review_slide').length > 0) {
		theme_custom.reviewSlider();
	}
});

