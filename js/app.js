let accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var accordionContent = this.nextElementSibling;
        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
        } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        }
        // Close accordion panel when another one opens
        for (j = 0; j < accordion.length; j++) {
            if (j !== i) {
                accordion[j].nextElementSibling.style.maxHeight = null;
                accordion[j].classList.remove("active");
            }
        }
    });
}