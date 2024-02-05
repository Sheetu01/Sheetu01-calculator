
            const display = document.querySelector(".input");
            const buttons = document.querySelectorAll("button");
            const specialChars = ["%", "*", "/", "-", "+", "="];
            let output = "";

            // Define function to calculate based on button clicked.
            const calculate = (btnValue) => {
                if (btnValue === "=" && output !== "") {
                    output = eval(output.replace("%", "/100"));
                } else if (btnValue === "AC") {
                    output = "";
                } else if (btnValue === "Del") {
                    output = output.toString().slice(0, -1);
                } else {
                    if (output === "" && specialChars.includes(btnValue)) return;
                    output += btnValue;
                }
                display.value = output;
            };

            // Add event listener to buttons, call calculate() on click.
            buttons.forEach((button) => {
                // Button click listener calls calculate() with dataset value as an argument.
                button.addEventListener("click", (e) => calculate(e.target.dataset.value));
            });
        