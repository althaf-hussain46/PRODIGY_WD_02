<h4>Project Overview</h4>

Created a STOPWATCH APPLICATION using HTML, CSS, and JavaScript. This project is a web-based application that allows users to start, pause, reset, and record lap times. Here's a detailed explanation of the components and technologies used:

<h4>Technologies Used</h4>

HTML: The structure of the webpage.

CSS: The styling of the webpage.

JavaScript: The functionality of the stopwatch

<h4>HTML (index.html)</h4>
The HTML file sets up the structure of the stopwatch. It includes:

Metadata: Basic metadata including charset and viewport settings for responsive design.

Title: The title of the webpage is set to "Stopwatch".

Link to CSS: A link to the styles.css file for styling.

Stopwatch Container: A div element with the class stopwatch that contains the main elements of the stopwatch:

A heading  displaying "Stopwatch"

A display area for showing hours, minutes, and seconds.

Buttons for starting, pausing, resetting, and recording laps.

An unordered list  for displaying lap times.

Script Link: A link to the script.js file that contains the JavaScript code.

<h4>CSS (styles.css)</h4>

The CSS file styles the stopwatch to make it visually appealing and user-friendly. Key styles include:

Body Styles: Setting the font family, text alignment, and background color.

Stopwatch Container: Centering the stopwatch on the page and setting the text color to white.

Display: Styling the display area with larger font size and different colors for hours, minutes, and seconds.

Buttons: Styling the buttons with padding, font size, border radius, and hover effects.

Lap List: Removing default list styling and adding margins for lap items.


<h4>JavaScript (script.js)</h4>

The JavaScript file handles the functionality of the stopwatch. Key functions and elements include:

Variables: Declaring variables for the timer, start time, elapsed time, and running state.

Element Selection: Selecting the display elements, buttons, and lap list using document.querySelector.

Time Formatting: A function (formatTime) to format the elapsed time into hours, minutes, and seconds.

Update Time: A function (updateTime) to update the display with the current elapsed time.

Start Timer: A function (startTimer) to start the timer by setting the start time and using setInterval to update the display every second.

Pause Timer: A function (pauseTimer) to pause the timer and update the elapsed time.

Reset Timer: A function (resetTimer) to reset the timer, display, and lap list.

Lap Timer: A function (lapTimer) to record the current lap time and display it in the lap list.

Event Listeners: Adding event listeners to the buttons to call the respective functions on click.

<h4>Summary</h4>
This project is a well-structured and functional stopwatch application using:


HTML for the structure.
CSS for styling.
JavaScript for functionality.

The application allows users to start, pause, reset, and record laps, displaying the current time in an easy-to-read format and handling user interactions smoothly.

