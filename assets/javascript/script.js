$(document).ready(function () {

    //display current time and date in jumbotron.
    var currentEl = $("#currentDay");


    currentEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    console.log(currentEl);
    var inputBlockEl = $(".time-block");

    var update = function () {
        currentEl.text(moment().format('MMMM Do YYYY, hh:mm:ss'));

        var now = moment();


        //calculate the time with moment, and remove classes

        inputBlockEl.each(function (i, element) {
            element = $(element);
            if (now > element.attr("data-hour")) {
                element.addClass("past").removeClass("future present");
            } else if (now == element.attr("data-hour")) {
                element.addClass("present").removeClass("future past");
            }
        });
    }
    //check every second.
    setInterval(update, 1000);
});
