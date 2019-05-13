(function ($, Drupal) {

$(document).on("scroll", function() {

	if($(document).scrollTop()>50) {
		$("a.gizra-logo").removeClass("large").addClass("small");
    $("header").removeClass("large").addClass("small");
	} else {
		$("a.gizra-logo").removeClass("small").addClass("large");
    $("header").removeClass("small").addClass("large");
	}

});

})(jQuery, Drupal);

function openNav() {
    document.getElementById("myNav").style.width = "100%";
};

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
};
