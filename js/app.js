document.getElementById("contact_info").addEventListener("click", function() {
    const headrContact = document.getElementById("contact");
    headrContact.classList.toggle("show_contact");
    console.log(headrContact);
});

$("html").on("contextmenu", function(e) {
    return false;
});
$(document).keydown(function(e) {

    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
});

var $animation_elements = $('.LmB2SmaalBox');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


/**Animation OF Happier Box 1 */
var $animation_elementsBox1 = $('.happierBox1');
var $window = $(window);

function check_if_in_view1() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elementsBox1, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}
$window.on('scroll resize', check_if_in_view1);
$window.trigger('scroll');
/**Animation OF Happier Box 1 */



/**Animation OF Happier Box 2 */

var $animation_elementsBox2 = $('.happierBox2');
var $window = $(window);

function check_if_in_view2() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elementsBox2, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}
$window.on('scroll resize', check_if_in_view2);
$window.trigger('scroll');
/**Animation OF Happier Box 2 */


/**Animation OF Happier Box 3 */

var $animation_elementsBox3 = $('.happierBox3');
var $window = $(window);

function check_if_in_view3() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elementsBox3, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}
$window.on('scroll resize', check_if_in_view3);
$window.trigger('scroll');
/**Animation OF Happier Box 2 */


/**Sweet Alert */
function MeetingBooked() {
    Swal.fire(
        'Thank You!',
        'We Will Contact You Soon!',
        'success'
    )
}




/**Sweet Alert */