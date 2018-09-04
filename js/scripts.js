$(document).ready(function(){
  $(".content_kids").show();
  $(".content_teachers").hide();
  $(".content_researchers").hide();

  $(".content_support").show();
  $(".content_volunteer").hide();
  $(".content_internships").hide();


  $(".forkids").click(function() {
    $(".content_kids").show();
    $(".content_teachers").hide();
    $(".content_researchers").hide();
  });

  $(".teachers").click(function() {
    $(".content_teachers").show();
    $(".content_kids").hide();
    $(".content_researchers").hide();
  });

  $(".researchers").click(function() {
    $(".content_researchers").show();
    $(".content_teachers").hide();
    $(".content_kids").hide();
  });

  $(".support").click(function() {
    $(".content_support").show();
    $(".content_volunteer").hide();
    $(".content_internships").hide();
  });

  $(".volunteer").click(function() {
    $(".content_volunteer").show();
    $(".content_support").hide();
    $(".content_internships").hide();
  });

  $(".internships").click(function() {
    $(".content_internships").show();
    $(".content_volunteer").hide();
    $(".content_support").hide();
  });
});


function jump(hash) { location.replace("#" + hash) }
