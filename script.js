//your JS code here. If required.

 function focusNext(input) {
            const maxLength = parseInt(input.getAttribute('maxlength'));
            if (input.value.length >= maxLength) {
                const nextInput = input.nextElementSibling;
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }

        function focusPrevious(input) {
            if (event.key === "Backspace" && input.value.length === 0) {
                const previousInput = input.previousElementSibling;
                if (previousInput) {
                    previousInput.focus();
                }
            }
        }