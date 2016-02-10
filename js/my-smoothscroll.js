var top_space = 50;
var nav_height = $(".navbar").height();

$(window).resize(function()
{
  nav_height = $(".navbar").height();
});

$(document).ready(function()
{
    $("body").scrollspy(
    {
    target: ".navbar",
    offset: nav_height + 1
    })

		$('#go-top').click(function()
    {
      $('.active').removeClass();
			var offset = $('body').offset();
			$('html,body').animate({scrollTop: offset.top - 100}, 1000);
		});

    $('.navbar-nav li').click(function()
    {
      var href = $('a', this).attr('href');
      $('html, body').animate({scrollTop: $(href).offset().top - nav_height + 1}, 1000);
		});
});
