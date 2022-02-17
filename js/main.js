// 搜尋效果
$("#searchBtn a").click(function(){
    $("#searchBtn div").toggleClass("active")    
})

$("#searchBtn input").blur(function(){
    $("#searchBtn div").removeClass("active")
})

// 手機版menu
$("#mobileMenu").click(function(){
    $("#mobileMenu div").toggleClass("active")
    $("#mobileMenu div ul").toggleClass("active")
})

// 購物車下拉選
$("#cart").click(function(){
    $(".cartList").toggleClass("active")
    
})

// mega menu
$("#product").click(function(){
    $(".megaMenu").toggleClass("active")  
})


// 加入購物車
$("#addCart").click(function(){
    $(".popup").show()
})

// 關閉視窗
$("#closeBtn").click(function(){
    $(".popup").hide()
})

// 跑馬燈
var slide=0
var slideCount=5

function setWidth(){
    sliderWidth = $(".rollArea").innerWidth()
    console.log(sliderWidth)
    $(".rollItemGroup").width(sliderWidth*slideCount)
    $(".rollItem").width(sliderWidth)
}

setWidth()

$(window).resize(function(){
    setWidth()
})

$(".barBtn").click(function(){
    slide=$(this).index();
    goSlider(slide)
})

function goSlider(slide){
    width=0-sliderWidth*slide+"px";
    $(".rollItemGroup").css("left", width);
    $(".barBtn h5, .barBtn p").removeClass("active");
    $(".barBtn").eq(slide).find("h5, p").addClass("active");
    $(".posBar .bar").removeClass("active").eq(slide).addClass("active");
    $(".barBtn").removeClass("active").eq(slide).addClass("active");
  }

  var autoSlide = setInterval(slideTimer, 3000);

  function slideTimer() {
      slide= slide>= (slideCount-1) ? 0 : slide+1;
      goSlider(slide);
  }
  
