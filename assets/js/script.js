$(document).ready(function() {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on("click", function() {

        var userInput = $(this).siblings(".description").val();

        var time = $(this).parent().attr("id");

        localStorage.setItem(userInput, time);
    })

    $("#8am .description").val(localStorage.getItem("8am"));
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));
});