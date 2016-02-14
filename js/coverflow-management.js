$(document).ready(function()
{
  NB_PHOTO = $("ul[data-cat='Members'] ul").length - 1;
});

$("button[name='prev']").click(function()
{
  gotoPrevThumb();
});

$("button[name='next']").click(function()
{
  gotoNextThumb();
});

$("button[name='play']").click(function()
{
  playSlide();

  if(start)
  {
    $("button[name='play'] span").attr('class', 'fa fa-pause');
  }
  else $("button[name='play'] span").attr('class', 'fa fa-play');
});

$("button[name='show']").click(function()
{
  // visibility: hidden;

  var visibility = $(".smallLabel").css('visibility');

  if(visibility === "hidden")
  {
    $(".smallLabel").css('visibility', 'visible');
  }
  else $(".smallLabel").css('visibility', 'hidden');
});
