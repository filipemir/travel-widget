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
$('.extra-fields input').on('focus', function() {
    $('.tooltip').show();
});

// $('.tooltip').show();

// $('body').on('focusout', function() {
//     $('.tooltip').hide();
// });