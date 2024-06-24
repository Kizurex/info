let clickAmount = 0;

function countClick() {
    clickAmount++;

    var plural = "time"

    if (clickAmount > 1) {
        plural = plural.concat("s")
    }

    document.getElementById("click-test").textContent = `Test button has been ${clickAmount} ${plural}.`;
}