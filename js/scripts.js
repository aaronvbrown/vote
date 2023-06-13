window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit = function(event) {
        event.preventDefault();

        // let votingProcess = document.getElementById("votingProcess");
        // votingProcess.setAttribute("class", "hidden");
        // let underAgeMessage = document.getElementById("voting-requirements")
        // underAgeMessage.setAttribute("class", "hidden");
        const age = parseInt(document.querySelector("input#age").value);

        if (age >= 18) {
            votingProcess.removeAttribute("class");
        } else {
            underAgeMessage.removeAttribute("class");
        }
    }
}