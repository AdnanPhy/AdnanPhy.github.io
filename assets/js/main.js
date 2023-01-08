var sectionHeight = function() {
  var total    = $(window).height(),
      $section = $('section').css('height','auto');

  if ($section.outerHeight(true) < total) {
    var margin = $section.outerHeight(true) - $section.height();
    $section.height(total - margin - 20);
  } else {
    $section.css('height','auto');
  }
}

$(window).resize(sectionHeight);

$(function() {
  $("section h1, section h2, section h3").each(function(){
    $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</a></li>");
    $(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
    $("nav ul li:first-child a").parent().addClass("active");
  });

  $("nav ul li").on("click", "a", function(event) {
    e.preventDefault();
    var position = $(this).attr("href"));
    $("html, body").animate({scrollTop: position}, 400);
    $("nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    window.open(url, '_blank');
  });

  $(document).ready(function(){
        $('a[href^="http://"]').each(function(){ 
            var oldUrl = $(this).attr("href"); // Get current url
            var newUrl = oldUrl.replace("http://", "https://"); // Create new url
            $(this).attr("href", newUrl); // Set herf value
        });
    });
  
  
  
  sectionHeight();

  $('img').on('load', sectionHeight);
});
