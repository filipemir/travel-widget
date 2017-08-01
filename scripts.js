// Toggle active effect for inputs
$('.form-field input, .form-field .form-field-text')
    .on('focus focusout', function() {
        $(this).parents('.form-field').toggleClass('active');
    });

// Toggle vertical
$('.tab').on('click', function() {
    $('.tab').removeClass('active');
    $(this).addClass('active');
});

// Tooltip setup
function placeTooltipBelowElement({ selector }) {
    const element = window.document.querySelectorAll(selector)[0],
        tt = window.document.querySelectorAll('.tooltip')[0];

    if (!element || !tt) {
        return;
    }

    const ttBounds = tt.getBoundingClientRect(),
        elementBounds = element.getBoundingClientRect(),
        left = elementBounds.left + elementBounds.width/2 - ttBounds.width/2,
        top = elementBounds.top + elementBounds.height + 7;  // 7 is the size of the arrow

    tt.style.left = left;
    tt.style.top = top;
}

$('.extra-fields input').on('focus', function() {
    $('.tooltip').show();

    placeTooltipBelowElement({ selector: '.extra-fields' });
});

// $('.tooltip').show();

// $('body').on('focusout', function() {
//     $('.tooltip').hide();
// });