/*
TITLE: Lab 5 - APIs and Form Enhancement
AUTHOR: Andrew Hage (AH)
CREATE DATE: April 10, 2024
PURPOSE: This lab demonstrates material from chapter 13 of the textbook.
LAST MODIFIED ON: April 14,2024
LAST MODIFIED BY: Andrew Hage(AH)
MODIFICATION HISTORY: Added comment block to all files (AH)
*/
// The form contains at least one jQuery UI input widget.
// JavaScript is stored in an external file.
$(function() {
    $("#accordion").accordion();

    $("#slider").slider({
        range: "min",
        value: 2,
        min: 1,
        max: 10,
        slide: function(event, ui) {
            $("#partySize").val(ui.value);
        }
    });
    $("#partySize").val($("#slider").slider("value"));
    // All required form field values are extracted from the form and stored into variables.
    // A regular expression is used for validation of one form field. The placeholder attribute is used to show an example of valid input to the user.
    // At least one form method is used.
    // At least one form event is used.
    $("#reservationForm").on("submit", function(event) {
        event.preventDefault();
        var formData = $(this).serializeArray();
        var output = '';
        formData.forEach(function(item) {
            output += `<strong>${item.name}:</strong> ${item.value}<br>`;
        });
        $("#output").html(output);
    });

    $("#email").on("blur", function() {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!regex.test(this.value)) {
            alert("Please enter a valid email address.");
            this.focus();
        }
    });
});
