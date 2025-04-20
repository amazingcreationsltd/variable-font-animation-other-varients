// script.js
var theText = "Variable fonts are awesome!";
for (i = 0; i < theText.length; i++) {
  var e = $("<span>" + theText[i] + "</span>");
  $(".text-container").append(e);
}





$(document).mousemove(function(event) {
  requestAnimationFrame(function() {
    var windowWidth = $(window).width();
    var mouseX = event.pageX;
    
    $("span").each(function() {
      var spanCenter = $(this).offset().left + $(this).width() / 2;
      var distance = Math.abs(mouseX - spanCenter);
      var maxDistance = 300; // Adjust this value to control the effect radius
      
      // Smoother weight calculation with exponential falloff
      var weight = Math.max(1, Math.min(900, 900 * Math.pow(1 - Math.min(distance / maxDistance, 1), 2)));
      
      $(this).css({
        'font-variation-settings': `'wght' ${Math.round(weight)}`
      });
    });
  });
});