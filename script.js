
function setRating(x) {
    let m = document.getElementById(x);
    m.classList.add("checked");
    document.getElementById("selectedRating").innerHTML = "You have selected " + x + " out of 5";
}
function submitRating() {
    let n = document.getElementById("ratingState");
    n.style.display = "none";
    let z = document.getElementById("thankYou");
    z.style.display = "block";
} 