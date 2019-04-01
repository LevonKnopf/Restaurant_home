function formValidation(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    if (name <= null) {
        alert("You must enter your name")
        return false;
    }
    if (phone <= null) {
        alert("you must enter your phone number");
        return false;
    }
    else {
        alert("information valid")
        return true;
    }
}
