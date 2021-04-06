
$(document).ready(function() {
    $('h1').click(function() {
        $(this).css('background-color', 'rebeccapurple');
    });
    $('p').click(function() {
        $(this).css('font-size', '18px');
    });
    $('li').hover(function () {
        $(this).css('color', 'red');
    }, function () {
        $(this).css('color', 'black');
    });

    //making the h2's capitalized:

    $('h2').hover(function() {
        var value = $(this).html();
        $(this).html(value.toUpperCase());
    }, function () {
        var value = $(this).html();
        $(this).html(value.toLowerCase());
    })
});

