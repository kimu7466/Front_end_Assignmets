document.addEventListener('DOMContentLoaded', function() {
    let colorPicker = document.getElementById('color_picker');
    let applyColorButton = document.getElementById('set_color');
    let colorDisplay = document.getElementById('color_display');

    applyColorButton.addEventListener('click', function() {
        let selectedColor = colorPicker.value;
        colorDisplay.style.backgroundColor = selectedColor;
    });
});
