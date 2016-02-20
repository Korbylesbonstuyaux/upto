var coverflow;

FWDS3DCovUtils.onReady(function()
{
    coverflow = new FWDSimple3DCoverflow(
    {
    //required settings
    coverflowHolderDivId:"members-coverflow",
    coverflowDataListDivId:"coverflowData",
    displayType:"fluidwidth",
    autoScale:"no",
    // coverflowWidth:800,
    // coverflowHeight:500,
    coverflowWidth:400,
    coverflowHeight:330,
    skinPath:"skins/3d-coverflow/skin_black",

    //main settings
    backgroundColor:"#FFFFFF",
    backgroundImagePath:"",
    backgroundRepeat:"repeat-x",
    showDisplay2DAlways:"no",
    coverflowStartPosition:1,
    coverflowTopology:"dualsided",
    coverflowXRotation:0,
    coverflowYRotation:0,
    numberOfThumbnailsToDisplayLeftAndRight:"all",
    infiniteLoop:"no",
    rightClickContextMenu:"default",
    fluidWidthZIndex:1000,

    //thumbnail settings
    thumbnailWidth:400,
    thumbnailHeight:266,
    thumbnailXOffset3D:80,
    thumbnailXSpace3D:165,
    thumbnailZOffset3D:400,
    thumbnailZSpace3D:130,
    thumbnailYAngle3D:-40,
    thumbnailXOffset2D:20,
    thumbnailXSpace2D:30,
    thumbnailHoverOffset:100,
    thumbnailBorderSize:3,
    thumbnailBackgroundColor:"#FFFFFF",
    thumbnailBorderColor1:"#FFFFFF",
    thumbnailBorderColor2:"#FFFFFF",
    transparentImages:"no",
    thumbnailsAlignment:"bottom",
    maxNumberOfThumbnailsOnMobile:13,
    showThumbnailsGradient:"no",
    thumbnailGradientColor1:"rgba(255, 255, 255, .4)",
    thumbnailGradientColor2:"rgba(255, 255, 255, 1)",
    showText:"yes",
    textOffset:10,
    showThumbnailBoxShadow:"yes",
    thumbnailBoxShadowCss:"0px 2px 2px #BBBBBB",
    showTooltip:"no",
    dynamicTooltip:"yes",
    showReflection:"yes",
    reflectionHeight:60,
    reflectionDistance:0,
    reflectionOpacity:.2,

    //controls settings
    slideshowDelay:5000,
    autoplay:"no",
    disableNextAndPrevButtonsOnMobile:"no",
    controlsMaxWidth:400,
    slideshowTimerColor:"#FFFFFF",
    controlsPosition:"bottom",
    controlsOffset:15,
    showPrevButton:"no",
    showNextButton:"no",
    showSlideshowButton:"no",
    showScrollbar:"no",
    disableScrollbarOnMobile:"yes",
    enableMouseWheelScroll:"no",
    scrollbarHandlerWidth:200,
    scrollbarTextColorNormal:"#FFF",
    scrollbarTextColorSelected:"#FFFFFF",
    addKeyboardSupport:"yes",

    //categories settings
    showCategoriesMenu:"no",
    startAtCategory:1,
    categoriesMenuMaxWidth:700,
    categoriesMenuOffset:25,
    categoryColorNormal:"#999999",
    categoryColorSelected:"#FFFFFF",

    //lightbox settings
    addLightBoxKeyboardSupport:"yes",
    showLightBoxNextAndPrevButtons:"yes",
    showLightBoxZoomButton:"yes",
    showLightBoxInfoButton:"yes",
    showLightBoxSlideShowButton:"yes",
    showLightBoxInfoWindowByDefault:"no",
    slideShowAutoPlay:"no",
    lightBoxVideoAutoPlay:"no",
    lightBoxVideoWidth:640,
    lightBoxVideoHeight:480,
    lightBoxIframeWidth:800,
    lightBoxIframeHeight:600,
    lightBoxBackgroundColor:"#000",
    lightBoxInfoWindowBackgroundColor:"rgba(255, 255, 255, 0);",
    lightBoxItemBorderColor1:"transparent",
    lightBoxItemBorderColor2:"transparent",
    lightBoxItemBackgroundColor:"transparent",
    lightBoxMainBackgroundOpacity:.8,
    lightBoxInfoWindowBackgroundOpacity:.9,
    lightBoxBorderSize:0,
    lightBoxBorderRadius:0,
    lightBoxSlideShowDelay:4000
    });
});

var NB_PHOTO = 19;

function gotoNextCategory()
{
  coverflow.switchCategory(coverflow.getCurrentCategoryId() + 1);
}

function gotoNextThumb()
{
  var thumbId = coverflow.getCurrentThumbId();

  if(thumbId === NB_PHOTO)
  {
      thumbId = 0;
  }
  else thumbId += 1;

  coverflow.gotoThumb(thumbId);
}

function gotoPrevThumb()
{
  var thumbId = coverflow.getCurrentThumbId();

  if(thumbId === 0)
  {
      thumbId = NB_PHOTO;
  }
  else thumbId -= 1;

  coverflow.gotoThumb(thumbId);
}

var start = false;
var inter;

function playSlide()
{
  if(start)
  {
    clearInterval(inter);
    start = false;
  }
  else {
    inter = setInterval(gotoNextThumb, 3000);
    start = true;
  }
}
