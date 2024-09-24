let input = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');
let string = "";

// Load the click sound
let clickSound = document.getElementById('click-sound');

// Convert NodeList to Array
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // Play the click sound
        clickSound.play();

        // Check button content for different operations
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
            } catch (error) {
                string = "Error";
            }
            input.value = string;
        } 
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } 
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } 
        else {
            string += e.target.innerHTML;
            input.value = string;
        }

        // Add the "active" class to the button on click
        button.classList.add("active");

        // Change pointer temporarily
        button.style.cursor = 'url("./assets/pointer.cur"), auto';

        // Remove the "active" class and restore cursor after a short delay for a fast click effect
        setTimeout(() => {
            button.classList.remove("active");
            button.style.cursor = 'url("./assets/clicked.cur"), auto'; // Restore pointer style
        }, 100); // 30 milliseconds for a super-fast effect
    });
});
