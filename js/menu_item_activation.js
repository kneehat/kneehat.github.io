$(".navbar-nav .nav-item").on("click", function(){
  $(".navbar-nav").find(".active").removeClass("active");
  $(this).addClass("active");
});