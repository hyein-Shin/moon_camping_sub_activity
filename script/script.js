/*네브제이쿼리*/
$(function(){
  $(".navbar_nav> li").hover(function(){
      $(this).toggleClass("show").siblings().removeClass("show");
  });    
});
/*네브클릭시백그라운드고정제이쿼리*/
$(function(){	
	$('.tabnav a').click(function () {	
		$('.tabnav a').removeClass('active');
		$(this).addClass('active');	
	})
  });

/*AOS제이쿼리*/
AOS.init({
  duration: 1000 //aos 나타나는 속도
})


