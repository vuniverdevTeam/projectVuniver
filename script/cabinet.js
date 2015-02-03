"use strict";
var user;
var res;
    if(document.location.search != '') {
        var location_search = document.location.search.split('?')[1];
        var xhrConfirm = new XMLHttpRequest();
        xhrConfirm.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/confirm.cpp.o', false);
        xhrConfirm.send(location_search);
        if(xhrConfirm.responseText == 'All right') {
            var d = new Date;
            location_search = location_search.split('=')[1];
            d.setTime(d.getTime() + 180*1000);
            d = d.toUTCString();
            document.cookie = 'auth=' + location_search + '; expires=' + d;
            document.location.replace("cabinet.html");
        }
        else document.location.replace("index.html");
    }
    res = checkAuth();
    if (!res.isAuth) document.location.replace("index.html");
window.onload = function() {
    //
    var xhr5 = new XMLHttpRequest();
    xhr5.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/SELECT_objects.cpp.o', false);
    var id = checkAuth();
    xhr5.send(id['field']);
    var date = xhr5.responseText.split("~");//Вот тут лежат оценки и предметы в таком порядке: атестат(оценка), укр мова(оценка), предмет2, оценка2, предмет3,оценка3, предмет4, оценка4.
    var subj1 = document.getElementById('sub1');
    var numb1 = document.getElementById('m1');
    var subj2 = document.getElementById('sub2');
    var numb2 = document.getElementById('m2');
    var subj3 = document.getElementById('sub3');
    var numb3 = document.getElementById('m3');
    var subj4 = document.getElementById('sub4');
    var numb4 = document.getElementById('m4');
    var numb5 = document.getElementById('m5');
    while(subj1.childNodes.length > 0){
        subj1.removeChild(subj1.childNodes[subj1.childNodes.length-1]);
    }
    while(subj2.childNodes.length > 0){
        subj2.removeChild(subj2.childNodes[subj2.childNodes.length-1]);
    }
    while(subj3.childNodes.length > 0){
        subj3.removeChild(subj3.childNodes[subj3.childNodes.length-1]);
    }
    while(subj4.childNodes.length > 0){
        subj4.removeChild(subj4.childNodes[subj4.childNodes.length-1]);
    }

    if(date[4] != '')
    {
        show_hide('apDiv1');
        var rt2=document.createElement("option");
        rt2.innerHTML = arr[date[4]];
        rt2.value = date[4];
        subj3.appendChild(rt2);
    }
    if(date[6] != '')
    {
        show_hide('apDiv2');
        var rt3=document.createElement("option");
        rt3.innerHTML = arr[date[6]];
        rt3.value = date[6];
        subj4.appendChild(rt3);
    }
    if(date[4] == '')
    {
        clear2();
        show_hide('apDiv1');
    }
    var rt=document.createElement("option");
    rt.innerHTML = arr[0];
    rt.value = 0;
    subj1.appendChild(rt);

    var rt1=document.createElement("option");
    rt1.innerHTML = arr[date[2]];
    rt1.value = date[2];
    subj2.appendChild(rt1);

    numb1.value = date[1];
    numb2.value = date[3];
    numb3.value = date[5];
    numb4.value = date[7];
    numb5.value = date[0];

    var i = 0;
    var xhr = new XMLHttpRequest();
    var xhr2 = new XMLHttpRequest();
    xhr2.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/cabinet.cpp.o', true);
    xhr2.onreadystatechange = function() {
        if (xhr2.readyState != 4) return;

        var resObj = eval('(' + xhr2.responseText + ')');
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(i >> 1));
        tr.appendChild(td);

        td = document.createElement("td");
        td.appendChild(document.createTextNode(resObj.U));
        tr.appendChild(td);

        td = document.createElement("td");
        td.appendChild(document.createTextNode(resObj.F));
        tr.appendChild(td);

        td = document.createElement("td");
        td.appendChild(document.createTextNode(resObj.S));
        tr.appendChild(td);

        td = document.createElement("td");
        td.appendChild(document.createTextNode(resObj.B + '%'));
        tr.appendChild(td);

        td = document.createElement("td");
        td.appendChild(document.createTextNode(resObj.C + '%'));
        tr.appendChild(td);
        document.getElementById('tbody').appendChild(tr);
        if(i >= user.arr.length) return;
        xhr2.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/cabinet.cpp.o', true);

        var str = 'm1=' + user.mark[0];
        for(var x = 1; x < 5; x++)
            str += '&m' + (x+1) + '=' + user.mark[x];
        str += '&sub1=' + user.sub[0] +  '&sub1=' + user.sub[0] +  '&sub1=' + user.sub[0];
        str += '&Fac=' + user.arr[i+1] + '&Spec=' + user.arr[i];
        i += 2;

        xhr2.send(str);
    };
    xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/cabinet.cpp.o', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        user = eval('(' + xhr.responseText + ')');

        if(i >= user.arr.length) return;
        var str = 'm1=' + user.mark[0];
        for(var x = 1; x < 5; x++)
            str += '&m' + (x+1) + '=' + user.mark[x];
        str += '&sub1=' + user.sub[0] +  '&sub2=' + user.sub[1] +  '&sub3=' + user.sub[2];
        str += '&Fac=' + user.arr[i+1] + '&Spec=' + user.arr[i];
        i += 2;

        xhr2.send(str);
    };
    xhr.send(')))=' + res.field);
};

var commit = function()
{
    var subj1 = document.getElementById('sub1').value;
    var numb1 = document.getElementById('m1').value;
    var subj2 = document.getElementById('sub2').value;
    var numb2 = document.getElementById('m2').value;
    var subj3 = document.getElementById('sub3').value;
    var numb3 = document.getElementById('m3').value;
    var subj4 = document.getElementById('sub4').value;
    var numb4 = document.getElementById('m4').value;
    var numb5 = document.getElementById('m5').value;
    var xhr5 = new XMLHttpRequest();
    xhr5.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/saveMarks.cpp.o', false);
    var id = checkAuth();
    xhr5.send("id="+id['field']+"&m1="+numb1+"&sub2="+subj2+"&m2="+numb2+"&sub3="+subj3+"&m3="+numb3+"&sub4="+subj4+"&m4="+numb4+"&m5="+numb5);
    location.reload(true);
};


function logout(){
		var date = new Date(1);
		document.cookie="auth=0; path=/; expires="+date.toUTCString();
    document.location.href = 'index.html'
}
