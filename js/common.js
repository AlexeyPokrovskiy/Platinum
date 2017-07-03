
 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
  $(document).ready(function(){
    $("#Home").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$('.sl').slick({
	autoplay: true,
	autoplaySpeed: 3000,
	fade: true,

});


$(window).load(function() {
  $(".loader_inner").fadeOut();
  $(".loader").delay(1000).fadeOut("slow");
});