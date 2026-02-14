const results = {
    "101": {name:"Rahul", marks:85},
    "102": {name:"Anita", marks:92},
    "103": {name:"Soubik", marks:88}
};

function checkResult() {
    let roll = document.getElementById("roll").value;
    let resBox = document.getElementById("result");

    if(results[roll]) {
        resBox.innerHTML =
            "Name: " + results[roll].name +
            "<br>Marks: " + results[roll].marks;
    } else {
        resBox.innerHTML = "Result not found";
    }
}
