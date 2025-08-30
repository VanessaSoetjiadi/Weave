// Wait for the document to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Get the button element by its ID
    const button = document.getElementById('clickMe');

    // Add a 'click' event listener to the button
    button.addEventListener('click', function() {
        // This code runs when the button is clicked
        alert('Hello! You clicked the button!');
    });
});