// Wait for DOM to be fully loaded

/*
        $(document).ready(function() {
            var theText = "Variable fonts are awesome!";
            $(".text-animation-container").each(function() {
                for (let i = 0; i < theText.length; i++) {
                    let delay = (i * 1.5) / theText.length;
                    let e = $("<span>" + theText[i] + "</span>");
                    $(this).append(e);
                    e.css("animation-delay", delay + "s");
                }
            });
        }); 

        */
//JS code with no space

//VariableFontsAreAwesome!

$(document).ready(function () {
  var theText = "#Learn_Web_Animations";
  $(".text-animation-container").each(function () {
    // Clear any existing content
    $(this).empty();

    // Create a wrapper div for better word wrapping
    var wrapper = $("<div class='text-wrapper'></div>");
    $(this).append(wrapper);

    for (let i = 0; i < theText.length; i++) {
      let delay = (i * 1.5) / theText.length;
      let character = theText[i];
      let e = $("<span>" + character + "</span>");
      wrapper.append(e);
      e.css("animation-delay", delay + "s");

      // Add a non-breaking space after each word to ensure proper word breaks
      if (character === " ") {
        e.html("&nbsp;");
      }
    }
  });
});
