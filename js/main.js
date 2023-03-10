//メニューのスライドイン
$(function(){
    $(".c-menubtn,.c-sidebarbtn").on("click",function(){
      $(".l-sidebar,.c-sidebarbtn").toggleClass("active")
    });
  });