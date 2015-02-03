/**
 * Created by Arsen on 20.01.2015.
 */
function isNumber(obj) {
    var number = +obj;
    return (obj === String(number));
}

function func() {
    var full = true;
    if (!document.getElementsByName("M1")[0].value) {
        document.getElementsByName("M1")[0].style.borderColor = "red";
        full = false;
    }
    if (!document.getElementsByName("D1")[0].value) {
        document.getElementsByName("D1")[0].style.borderColor = "red";
        full = false;
    }
    if (!document.getElementsByName("M2")[0].value) {
        document.getElementsByName("M2")[0].style.borderColor = "red";
        full = false;
    }
    if (!document.getElementsByName("D2")[0].value) {
        document.getElementsByName("D2")[0].style.borderColor = "red";
        full = false;
    }
    if (!document.getElementsByName("M3")[0].value) {
        document.getElementsByName("M3")[0].style.borderColor = "red";
        full = false;
    }
    if (!document.getElementsByName("D3")[0].value) {
        document.getElementsByName("D3")[0].style.borderColor = "red";
        full = false;
    }
    if (!document.getElementsByName("M4")[0].value) {
        document.getElementsByName("M4")[0].style.borderColor = "red";
        full = false;
    }
    if (!document.getElementsByName("D4")[0].value) {
        document.getElementsByName("D4")[0].style.borderColor = "red";
        full = false;
    }
    if (!full) {
        document.getElementById("first").innerHTML = "Заповніть, будь ласка, всі поля";
        return;
    }
    if (document.getElementsByName("M1")[0].style.borderColor == "red") {
        document.getElementById("first").innerHTML = "Значення введені невірно";
        return;
    }
    if (document.getElementsByName("D1")[0].style.borderColor == "red") {
        document.getElementById("first").innerHTML = "Значення введені невірно";
        return;
    }
    if (document.getElementsByName("M2")[0].style.borderColor == "red") {
        document.getElementById("first").innerHTML = "Значення введені невірно";
        return;
    }
    if (document.getElementsByName("D2")[0].style.borderColor == "red") {
        document.getElementById("first").innerHTML = "Значення введені невірно";
        return;
    }
    if (document.getElementsByName("M3")[0].style.borderColor == "red") {
        document.getElementById("first").innerHTML = "Значення введені невірно";
        return;
    }
    if (document.getElementsByName("D3")[0].style.borderColor == "red") {
        document.getElementById("first").innerHTML = "Значення введені невірно";
        return;
    }
    if (document.getElementsByName("M4")[0].style.borderColor == "red") {
        document.getElementById("first").innerHTML = "Значення введені невірно";
        return;
    }
    if (document.getElementsByName("D4")[0].style.borderColor == "red") {
        document.getElementById("first").innerHTML = "Значення введені невірно";
        return;
    }
    var button1 = document.getElementById("button-1");
    if (button1.innerHTML != "Заповнити базу") return false;
    var button2 = document.getElementById("button-2");
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/distribution.cpp.o', false);
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        var message = xhr.responseText;
        if (message[0] != 'Б') {
            var i;
            for (i = 0; i < message.length; ++i) {
                if (message[i] == '1' || message[i] == '2') {
                    document.getElementsByName("M1")[0].style.borderColor = "red";
                }
                if (message[i] == '3' || message[i] == '4') {
                    document.getElementsByName("D1")[0].style.borderColor = "red";
                }
                if (message[i] == '5' || message[i] == '6') {
                    document.getElementsByName("M2")[0].style.borderColor = "red";
                }
                if (message[i] == '7' || message[i] == '8') {
                    document.getElementsByName("M3")[0].style.borderColor = "red";
                }
                if (message[i] == '9' || message[i] == 'a') {
                    document.getElementsByName("D3")[0].style.borderColor = "red";
                }
                if (message[i] == 'b' || message[i] == 'c') {
                    document.getElementsByName("M4")[0].style.borderColor = "red";
                }
            }
            document.getElementById("first").innerHTML = "Значення введені невірно";
        }
        else {
            document.getElementById("first").innerHTML = message;
        }
        button1.innerHTML = "Заповнити базу";
        button2.innerHTML = "Заповнити базу";
    };
    document.getElementById("second").innerHTML = "";
    button1.innerHTML = "Зачекайте...";
    button2.innerHTML = "Зачекайте...";
    xhr.send('M1=' + document.getElementsByName('M1')[0].value + '&D1=' + document.getElementsByName('D1')[0].value +
    '&M2=' + document.getElementsByName('M2')[0].value + '&D2=' + document.getElementsByName('D2')[0].value +
    '&M3=' + document.getElementsByName('M3')[0].value + '&D3=' + document.getElementsByName('D3')[0].value +
    '&M4=' + document.getElementsByName('M4')[0].value + '&D4=' + document.getElementsByName('D4')[0].value);
}

function func2() {
    var full = true;
    if (!document.getElementsByName("L1")[0].value) {
        document.getElementsByName("L1")[0].style.borderColor = "red";
        full = false;
    }
    if (!document.getElementsByName("R1")[0].value) {
        document.getElementsByName("R1")[0].style.borderColor = "red";
        full = false;
    }
    if (!document.getElementsByName("L2")[0].value) {
        document.getElementsByName("L2")[0].style.borderColor = "red";
        full = false;
    }
    if (!document.getElementsByName("R2")[0].value) {
        document.getElementsByName("R2")[0].style.borderColor = "red";
        full = false;
    }
    if (!full) {
        document.getElementById("second").innerHTML = "Заповніть, будь ласка, всі поля";
        return;
    }
    if (document.getElementsByName("L1")[0].style.borderColor == "red") {
        document.getElementById("second").innerHTML = "Значення введені невірно";
        return;
    }
    if (document.getElementsByName("R1")[0].style.borderColor == "red") {
        document.getElementById("second").innerHTML = "Значення введені невірно";
        return;
    }
    if (document.getElementsByName("L2")[0].style.borderColor == "red") {
        document.getElementById("second").innerHTML = "Значення введені невірно";
        return;
    }
    if (document.getElementsByName("R2")[0].style.borderColor == "red") {
        document.getElementById("second").innerHTML = "Значення введені невірно";
        return;
    }
    var button2 = document.getElementById("button-2");
    if (button2.innerHTML != "Заповнити базу") return false;
    var button1 = document.getElementById("button-1");
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/distribution.cpp.o', false);
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        var message = xhr.responseText;
        if (message[0] != 'Б') {
            var i;
            for (i = 0; i < message.length; ++i) {
                if (message[i] == '0' || message[i] == '1') {
                    document.getElementsByName("L1")[0].style.borderColor = "red";
                }
                if (message[i] == '2' || message[i] == '3') {
                    document.getElementsByName("R1")[0].style.borderColor = "red";
                }
                if (message[i] == '4' || message[i] == '5') {
                    document.getElementsByName("L2")[0].style.borderColor = "red";
                }
                if (message[i] == '6' || message[i] == '7') {
                    document.getElementsByName("R2")[0].style.borderColor = "red";
                }
                if (message[i] == '8'){
                    document.getElementsByName("L1")[0].style.borderColor = "red";
                    document.getElementsByName("R1")[0].style.borderColor = "red";
                }
                if (message[i] == '9'){
                    document.getElementsByName("L2")[0].style.borderColor = "red";
                    document.getElementsByName("R2")[0].style.borderColor = "red";
                }
            }
            document.getElementById("second").innerHTML = "Значення введені невірно";
        }
        else {
            document.getElementById("second").innerHTML = message;
        }
        button1.innerHTML = "Заповнити базу";
        button2.innerHTML = "Заповнити базу";
    };
    document.getElementById("first").innerHTML = "";
    button1.innerHTML = "Зачекайте...";
    button2.innerHTML = "Зачекайте...";
    xhr.send('L1='+document.getElementsByName('L1')[0].value+'&R1='+document.getElementsByName('R1')[0].value+
    '&L2='+document.getElementsByName('L2')[0].value+'&R2='+document.getElementsByName('R2')[0].value);
}

function func3(obj) {
    var name = obj.name;
    if (name == "M1" || name == "D1" || name == "M2" || name == "D2") {

    }
    obj.style.borderColor = "black";
    if (!obj.value) return;
    if (!isNumber(obj.value)) {
        obj.style.borderColor = "red";
    }
}

window.onload = function () {
    func3(document.getElementsByName("M1")[0]);
    func3(document.getElementsByName("D1")[0]);
    func3(document.getElementsByName("M2")[0]);
    func3(document.getElementsByName("D2")[0]);
    func3(document.getElementsByName("M3")[0]);
    func3(document.getElementsByName("D3")[0]);
    func3(document.getElementsByName("M4")[0]);
    func3(document.getElementsByName("D4")[0]);
    func3(document.getElementsByName("L1")[0]);
    func3(document.getElementsByName("R1")[0]);
    func3(document.getElementsByName("L2")[0]);
    func3(document.getElementsByName("R2")[0]);
}