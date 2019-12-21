$(document).ready(function () {

    //display current time and date in jumbotron.
    var currentDate = $("#currentDate");
    var colorChangeEl = $(".color-change");
    var saveBtn = $(".saveBtn");

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



    //save text to local storage. 
    saveBtn.on("click", function (event) {

        var button = $(this);

        var btnData = $(this).attr("saveBtn");
        //console log click on THIS specific button in this class
        // console.log(btnData);
        //descriptionTarget locates the specific description element that user filled in text with.
        var textTarget = $("#textSlot" + btnData);
        // console.log(textTarget);
        //we log to ensure we're grabbing the user input.
        console.log(textTarget.val());

        //this is supposed to set the text area text to that specific textArea and store it.
        //We pick the "id" attribute from the element, descriptionTarget. This id is the key, and the key value is descriptionTarget.val().
        localStorage.setItem(textTarget.attr("id"), textTarget.val());
    });

    //site should load any saved data from localStorage.
    $("#textSlot9").text(localStorage.getItem("textSlot1"));
    $("#textSlot10").text(localStorage.getItem("textSlot2"));
    $("#textSlot11").text(localStorage.getItem("textSlot3"));
    $("#textSlot12").text(localStorage.getItem("textSlot4"));
    $("#textSlot13").text(localStorage.getItem("textSlot5"));
    $("#textSlot14").text(localStorage.getItem("textSlot6"));
    $("#textSlot15").text(localStorage.getItem("textSlot7"));
    $("#textSlot16").text(localStorage.getItem("textSlot8"));
    $("#textSlot17").text(localStorage.getItem("textSlot9"));

    console.log(localStorage)



    $("#clearBtn").on("click", function () {
        localStorage.clear();
        $("#textSlot").text("");
    });
});


