var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var bpm = 60;
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

window.onload = function () {
    document.getElementById('output').innerHTML = slider.value;
};