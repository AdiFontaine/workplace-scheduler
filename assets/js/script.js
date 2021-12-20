$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on("click", function () {

        var userInput = $(this).siblings(".description").val();

        var time = $(this).parent().find('.hour').attr("id");

        localStorage.setItem(time, userInput);
    });

    $("#8-textarea").val(localStorage.getItem("8am"));
    $("#9-textarea").val(localStorage.getItem("9am"));
    $("#10-textarea").val(localStorage.getItem("10am"));
    $("#11-textarea").val(localStorage.getItem("11am"));
    $("#12-textarea").val(localStorage.getItem("12pm"));
    $("#13-textarea").val(localStorage.getItem("1pm"));
    $("#14-textarea").val(localStorage.getItem("2pm"));
    $("#15-textarea").val(localStorage.getItem("3pm"));
    $("#16-textarea").val(localStorage.getItem("4pm"));
    $("#17-textarea").val(localStorage.getItem("5pm"));

    function displayCurrent() {
        var currentTime = moment().hour();

        $(".time-block").each(function() {
            var timeBlock = this.getAttribute('time');
      
            if (timeBlock < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }

            else if (timeBlock == currentTime) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            }

            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    displayCurrent();
});