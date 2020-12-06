var numPeople = 2;
var people = [];
var santas = [];

function addPerson() {
    numPeople++;
    var newPerson = document.createElement('input');
    var newLine = document.createElement("br");
    newPerson.setAttribute("id", "person" + numPeople);
    newPerson.setAttribute("placeholder", "Enter Person " + numPeople);

    var form = document.getElementById("getData");
    form.insertBefore(newPerson, form.childNodes[numPeople * 2]);
    form.insertBefore(newLine, form.childNodes[numPeople * 2 + 1]);


    var newCol = document.createElement("th");
    newCol.setAttribute("id", "p" + numPeople);

    var row1 = document.getElementById("row1");
    row1.appendChild(newCol);

    var newCol2 = document.createElement("td");
    newCol2.setAttribute("id", "s" + numPeople);
    newCol2.innerHTML = "N/A";

    var row2 = document.getElementById("row2");
    row2.appendChild(newCol2);

    var newCol3 = document.createElement("td");
    newCol3.setAttribute("id", "b" + numPeople);

    var newButton = document.createElement("button");
    newButton.setAttribute("id", "but" + numPeople);
    newButton.innerHTML = "Show Santa " + numPeople;
    newButton.setAttribute("onclick", "showSanta(" + numPeople + ");"); // Or: newButton.onclick = function(){showSanta(numPeople);};

    newCol3.appendChild(newButton);


    var row3 = document.getElementById("row3");
    row3.appendChild(newCol3);
}

function setPeople() {
    for(var i = 1;i <= numPeople;i++) {
        if(typeof(document.getElementById("person" + i).value) === "undefined") {
            numPeople = i - 1;
            break;
        }

        people[i - 1] = document.getElementById("person" + i).value;
        document.getElementById("p" + i).innerHTML = people[i - 1];
    }

    return numPeople;
}

function santa() {
    setPeople();
    num = [];

    if(numPeople % 2 == 0) {
        santas = people.reverse();
        if(numPeople >= 4) {
            var number = Math.floor(Math.random() * 9);
            if(number < 3) {
                //[santas[numPeople - 1], santas[numPeople - 2], santas[numPeople - 3]] = [santas[numPeople - 1], santas[numPeople - 3], santas[numPeople - 2]];
            }
            else if(number >= 3 && num < 6) {
                [santas[numPeople - 1], santas[numPeople - 2], santas[numPeople - 3]] = [santas[numPeople - 2], santas[numPeople - 3], santas[numPeople - 1]];
            }
            else if(number >= 6 && num < 9) {
                [santas[numPeople - 1], santas[numPeople - 2], santas[numPeople - 3]] = [santas[numPeople - 3], santas[numPeople - 1], santas[numPeople - 2]];
            }
        }
    }
    else {
        santas = people.reverse();
        var number = Math.floor(Math.random() * 10);
        if(number > 4) {
            [santas[0], santas[Math.floor(numPeople / 2)]] = [santas[Math.floor(numPeople / 2)], santas[0]];
        }
        else {
            [santas[numPeople - 1], santas[Math.floor(numPeople / 2)]] = [santas[Math.floor(numPeople / 2)], santas[numPeople - 1]];
        }
        
    }

    console.log(santas);
}

function showSanta(i) {
    var but = document.getElementById("but" + i);

    if(but.innerHTML == "Show Santa " + i) {
        document.getElementById("s" + i).innerHTML = santas[i - 1];
        but.innerHTML = "Hide Santa " + i;
    }
    else if(but.innerHTML == "Hide Santa " + i) {
        document.getElementById("s" + i).innerHTML = "N/A";
        but.innerHTML = "Show Santa " + i;
    }
}