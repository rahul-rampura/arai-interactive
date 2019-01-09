// Add next/previous buttons
var addNav = function(base) {
    base.$el.addClass('current');
    $("body").css('padding-bottom', '250px'); // keep Donate Now button in view
    var inputs = $('input'),
        len = inputs.length - 1,
        indx = inputs.index(base.$el),
        topPadding = 50; // distance from top where the focused input is placed
    // make sure input is in view
    $(window).scrollTop(inputs.eq(indx).offset().top - topPadding);

    // see if nav is already set up
    if (base.$keyboard.find('.ui-keyboard-nav').length) {
        return;
    }

    // add nav window & buttons
    base.$keyboard.append('<div class="ui-keyboard-nav"><button class="prev ui-state-default ui-corner-all">prev</button><button class="next ui-state-default ui-corner-all">next</button></div>');

    base.$keyboard.find('.next').hover(function() {
        $(this).addClass('ui-state-hover');
    }, function() {
        $(this).removeClass('ui-state-hover');
    }).click(function() {
        var n = indx + 1;
        if (n >= len) {
            return;
        }
        base.close(true); // true = auto accept
        // set focus to next input
        inputs.eq(n).focus();
        // make sure input is in view
        $(window).scrollTop(inputs.eq(n).offset().top - topPadding);
    });

    base.$keyboard.find('.prev').hover(function() {
        $(this).addClass('ui-state-hover');
    }, function() {
        $(this).removeClass('ui-state-hover');
    }).click(function() {
        var n = indx - 1;
        if (n < 0) {
            return;
        }
        base.close(true); // true = auto accept
        // set focus to previous input
        inputs.eq(n).focus();
        // make sure input is in view
        $(window).scrollTop(inputs.eq(n).offset().top - topPadding);
    });

}; // end prev/next button code
// Keyboard Layouts
$('.keyboard-normal').keyboard({
    layout: 'qwerty',
    autoAccept: 'true',
    usePreview: false,
    visible: function(e, keyboard, el) {
        addNav(keyboard);
    },
    beforeClose: function(e, keyboard, el, accepted) {
        $('input.current').removeClass('current');
        $("body").css('padding-bottom', '0px');
    }
});

$('.keyboard-zip').keyboard({
    layout: 'custom',
    autoAccept: 'true',
    maxLength: 5,
    customLayout: {
        'default': [
            '7 8 9',
            '4 5 6',
            '1 2 3',
            '0 {bksp}',
            '{accept}'
            ]
    },
    usePreview: false,
    visible: function(e, keyboard, el) {
        addNav(keyboard);
    },
    beforeClose: function(e, keyboard, el, accepted) {
        $('input.current').removeClass('current');
        $("body").css('padding-bottom', '0px');
    }
});

$('.keyboard-num').keyboard({
    layout: 'custom',
    autoAccept: 'true',
    customLayout: {
        'default': [
            '7 8 9',
            '4 5 6',
            '1 2 3',
            '0 {bksp}',
            '{accept}'
            ]
    },
    usePreview: false,
    visible: function(e, keyboard, el) {
        addNav(keyboard);
    },
    beforeClose: function(e, keyboard, el, accepted) {
        $('input.current').removeClass('current');
        $("body").css('padding-bottom', '0px');
    }
});

/*
$('.keyboard-states').keyboard({
    layout: 'custom',
    customLayout: {
        'default': [
            'AL AK AZ AR CA CO CT DE FL GA',
            'HI ID IL IN IA KS KY LA ME MD',
            'MA MI MN MS MO MT NE NV NH NJ',
            'NM NY NC ND OH OK OR PA RI SC',
            'SD TN TX UT VT VA WA WV WI WY',
            '{accept}{clear}'
            ]
    },
    usePreview: false,
    visible: function(e, keyboard, el) {
        addNav(keyboard);
    },
    // prevent entering more than one state
    change: function(e, keyboard, el) {
        var v = keyboard.$el.val();
        if (v.length > 2) {
            keyboard.$el.val(v.slice(-2));
        }
    },
    beforeClose: function(e, keyboard, el, accepted) {
        $('input.current').removeClass('current');
        $("button.ui-keyboard-widekey").removeClass('state-button');
        $("body").css('padding-bottom', '0px');
    }
});
*/
            form_quit_img.addEventListener('click', function() {
                location.href = "home.html";
            });