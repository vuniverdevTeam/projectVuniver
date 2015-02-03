function show_hide(id) {
    clear();
    document.getElementById(id).style.display = 'block';
}
function show_hideUn(id2) {
    document.getElementById(id2).style.display = 'none';
}

function removeAllChild(el) {
    while(el.childNodes.length > 0){
        el.removeChild(el.childNodes[el.childNodes.length-1]);
    }
    var rt=document.createElement("option");
    rt.innerHTML = '--виберіть--';
    rt.value = "";
    rt.style.display='none';
    el.appendChild(rt);
    var rt2=document.createElement("option");
    //rt2.disabled="disabled";

    rt2.innerHTML = '--виберіть--';
    rt2.value = "";
    el.appendChild(rt2);
}
function createOptions(el, arr1) {
    for(var i=0; i<arr1.length; i++) {
        var opt = document.createElement("option");
        opt.value=arr1[i];
        opt.appendChild(document.createTextNode(arr1[++i]));
        el.appendChild(opt);
    }
}


//предмети:
var arr = ['Українська мова і література','Математика','Історія України','Біологія','Географія','Фізика','Хімія','Англійська мова','Іспанська мова','Німецька мова','Російська мова','Французька мова'];
var arr_1 = [1,1,1,1,1,1,1,1,1,1,1,1];
function getElements(c)
{
    var el = document.getElementById(c);
    if(c=='sub1') {
        var opt = document.createElement("option");
        if(arr_1[0]==1) {
            opt.innerHTML = arr[0];
            opt.value=0;
            el.appendChild(opt);
        }
    }
    else{
        removeAllChild(el);
        for(var i=0; i<arr.length; i++) {
            var opt1 = document.createElement("option");
            if(arr_1[i]==1) {
                opt1.innerHTML = arr[i];
                opt1.value = i;
                el.appendChild(opt1);
            }

        }
    }

}
function clear2(){
    //alert(1);
    var el2 = document.getElementById('sub2');
    var el3 = document.getElementById('sub3');
    if(el2.value == ""){
        show_hideUn('apDiv1');
        show_hideUn('apDiv2');
    }
    if(el3.value== ""){
        show_hideUn('apDiv2');
    }
}
function clear() {
    var el1 = document.getElementById('sub1');
    var el2 = document.getElementById('sub2');
    var el3 = document.getElementById('sub3');
    var el4 = document.getElementById('sub4');
    var block1 = document.getElementById('apDiv1');
    var block2 = document.getElementById('apDiv2');
    var inp1 = document.getElementById('m3');
    var inp2 = document.getElementById('m4');
    for(var i = 0; i<arr_1.length; i++)
    {
        arr_1[i] = 1;
    }
    arr_1[el1.value] = 0;
    arr_1[el2.value] = 0;
    if(block1.style.display == 'block')arr_1[el3.value] = 0;
    else{
        el3.selectedIndex = 0;
        inp1.value = '';
    }
    if(block2.style.display == 'block')arr_1[el4.value] = 0;
    else{
        el4.selectedIndex = 0;
        inp2.value = '';
    }
}
function Retur(v) {
    clear();
    getElements(v);
}

var k=0;
/*function labelClick(r){
    if(k==0)k=1;
    else
        k=0;
    if(k==1)document.getElementById(r).style.color = '#999999';
    else
        document.getElementById(r).style.color='#484A47'
}*/




var values = ['','','','',''];
function labelClick(r) {
    var el = document.getElementById('return-radio');
    var el2 = document.getElementById('Label');
    el.style.fontSize = "12px";
    el2.innerHTML=(el2.innerHTML=='Додати фільтри')? 'Прибрати фільтри': 'Додати фільтри';

    if (!el.checked) {
        values[0] = document.getElementById('option').value;
        document.getElementById('option').value = '';
        values[1] = document.getElementById('option1').value;
        document.getElementById('option1').value = '';
        values[2] = document.getElementById('option2').value;
        document.getElementById('option2').value = '';
        values[3] = document.getElementById('option3').value;
        document.getElementById('option3').value = '';
        values[4] = document.getElementById('option4').value;
        document.getElementById('option4').value = '';
        show_hideUn('selected');
        document.getElementById(r).style.color='#484A47';
    }
    else {
        document.getElementById(r).style.color = '#999999';
        document.getElementById('option').value = values[0];
        document.getElementById('option1').value = values[1];
        document.getElementById('option2').value = values[2];
        document.getElementById('option3').value = values[3];
        document.getElementById('option4').value = values[4];
        show_hide('selected');
    }
}



window.onload = function () {
    getElements('sub1');
    getElements('sub2');
    getElements('sub3');
    getElements('sub4');

    //document.getElementById('option').value = '';
    //document.getElementById('option1').value = '';
    //document.getElementById('option2').value = '';
    //document.getElementById('option3').value = '';
    //document.getElementById('option4').value = '';

    labelClick('Label');
    //області:
    var arr1;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/ajax.cpp.o', false);
    xhr.send('reg=0');
    arr1 = eval('(' + xhr.responseText + ')');
    var obj = document.getElementById('option');
    createOptions(obj, arr1);
    //спеціальності
    xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/ajax.cpp.o', false);
    xhr.send('spec=0');
    var i, j;
    specialities = eval('(' + xhr.responseText + ')');
    for(i = 0; i < specialities.length; i += 2)
        for(j = i + 2; j < specialities.length; j += 2)
            if(specialities[i] == specialities[j]) {
                specialities.splice(j, 2);
                j -= 2;
            }
    obj = document.getElementById('option4');
    createOptions(obj, specialities);
};







//ВНЗ:
/*xhr.onreadystatechange = function() {
 if (xhr.readyState != 4) return;
 };*/
var specialities;
function showNames(v) {
    if(+v >= 1) {
        var arr;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/ajax.cpp.o', false);
        xhr.send('city=' + v);
        arr = eval('(' + xhr.responseText + ')');
        var el = document.getElementById('option1');
        removeAllChild(el);
        createOptions(el, arr);
    }
}
function showNames1(v) {
    if(+v >= 1) {
        var arr;
        var el = document.getElementById('option2');
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/ajax.cpp.o', false);
        xhr.send('univer=' + v);
        arr = eval('(' + xhr.responseText + ')');
        removeAllChild(el);
        createOptions(el, arr);
    }
}
function showNames2(v) {
    if(+v >= 1) {
        var arr, arr1, el = document.getElementById('option3');
        var xhr = new XMLHttpRequest(), i;
        xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/ajax.cpp.o', false);
        xhr.send('fac=' + v);
        arr = eval('(' + xhr.responseText + ')');
        removeAllChild(el);
        createOptions(el, arr);

        el = document.getElementById('option4');
        removeAllChild(el);
        for(i = 0; i < arr.length; i += 2){
            xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/ajax.cpp.o', false);
            xhr.send('spec=' + arr[i]);
            arr1 = eval('(' + xhr.responseText + ')');
            createOptions(el, arr1);
            arr1.length = 0;
        }
    }
    else {
        removeAllChild(document.getElementById('option4'));
        createOptions(document.getElementById('option4'), specialities);
    }
}
function showNames3(v) {
    if(+v >= 1) {
        var arr;
        var el = document.getElementById('option4');
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/ajax.cpp.o', false);
        xhr.send('spec=' + v);
        arr = eval('(' + xhr.responseText + ')');
        removeAllChild(el);
        createOptions(el, arr);
    }
}
function clearForm(levelClear) {
    var opt1 = document.getElementById('option1');
    var opt2 = document.getElementById('option2');
    var opt3 = document.getElementById('option3');
    var opt4 = document.getElementById('option4');
    if(levelClear == 5) {
        removeAllChild(opt1);
        removeAllChild(opt2);
        removeAllChild(opt3);
    }
    if(levelClear == 4) {
        removeAllChild(opt2);
        removeAllChild(opt3);
    }
    if(levelClear == 3) {
        removeAllChild(opt3);
        removeAllChild(opt4);
    }
    if(levelClear == 2) {
        removeAllChild(opt4);
    }
}

var check;
check = function () {
    var pass1 = document.getElementById('password1').value;
    var pass2 = document.getElementById('password2').value;
    var submitButton = document.getElementById('button-calculate');
    if(pass1 != pass2)
    {
       submitButton.disabled = true;
    }
    else
    {
        submitButton.disabled = false;
    }
};
