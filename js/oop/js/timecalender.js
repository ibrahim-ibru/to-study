function printValues(id, l) {
    return document.getElementById(id).innerHTML = loo(l)
}
printValues("min", 60)
printValues("hours", 24)
printValues("date", 32)
printValues("month", 13)
function day() {
    arr = ["00", "SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
    str = ``
    for (i = 0; i < 8; i++) {
        str += `<option value="${i}">${arr[i]}</option>`
    }
    return document.getElementById("day").innerHTML = str
}
day()
function loo(l) {
    str = ``
    for (i = 0; i < l; i++) {
        (i < 9) ? str += `<option value="0${i}">0${i}</option>` : str += `<option value="${i}">${i}</option>`;
    }
    return str
}

function select() {
    let min = ((document.getElementById("min").value).length < 2) ? "0" + document.getElementById("min").value : document.getElementById("min").value;
    let hours = (document.getElementById("hours").value.length < 2) ? "0" + document.getElementById("hours").value : document.getElementById("hours").value;
    let date = (document.getElementById("date").value.length < 2) ? "0" + document.getElementById("date").value : document.getElementById("date").value;
    let month = (document.getElementById("month").value.length < 2) ? "0" + document.getElementById("month").value : document.getElementById("month").value;
    let day = (document.getElementById("day").value.length < 2) ? "0" + document.getElementById("day").value : document.getElementById("day").value;
    console.log(`${min} ${hours} ${date} ${month} ${day}`);
}