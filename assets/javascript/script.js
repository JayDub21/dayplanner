$(document).ready(function () {

    //display current time and date in jumbotron.
    var currentDate = $("#currentDate");
    var colorChangeEl = $(".color-change");

    currentDate.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    var update = function () {
        currentDate.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

        var now = moment();
        // console.log(now);

        //calculate the time with moment, and remove classes

        colorChangeEl.each(function (i, element) {
            element = $(element);
            if (now > element.attr("data-hour")) {
                element.addClass("past").removeClass("future present");
            } else if (now == element.attr("infoSlot")) {
                element.addClass("present").removeClass("future past");
            }
        });
    }
    //check every second.
    setInterval(update, 1000);
    $(".textField").text("");

});


