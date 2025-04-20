// script.js
var theText = "Variable fonts are awesome!";
for (i = 0; i < theText.length; i++) {
  var e = $("<span>" + theText[i] + "</span>");
  $(".text-container").append(e);
}

$(document).mousemove(function(event) {
  requestAnimationFrame(function() {
    var mouseX = event.pageX;
    
    $("span").each(function() {
      var span = $(this);
      var spanRect = this.getBoundingClientRect();
      var spanCenter = spanRect.left + spanRect.width / 2;
      var distance = Math.abs(mouseX - spanCenter);
      var maxDistance = 300;
      
      // Weight calculation
      var weight = Math.max(1, Math.min(900, 900 * Math.pow(1 - Math.min(distance / maxDistance, 1), 2)));
      
      // Italic calculation
      var italicInfluence = Math.max(0, Math.min(1, 1 - (distance / (maxDistance * 0.5))));
      var slantValue = italicInfluence * 10;
      
      span.css({
        'font-variation-settings': `'wght' ${Math.round(weight)}, 'slnt' ${slantValue}`
      });
    });
  });
});