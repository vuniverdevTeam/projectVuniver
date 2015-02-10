
function restoreCabinetData(){
    what = checkAuth();
    alert(1);
    if(what["field"]== true)
    {

        var xhr5 = new XMLHttpRequest();
        xhr5.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/SELECT_objects.cpp.o', false);
        var id = checkAuth();
        xhr5.send(id['field']);
        var date = eval('('+xhr5.responseText+')');//Вот тут лежат оценки и предметы в таком порядке: атестат(оценка), укр мова(оценка), предмет2, оценка2, предмет3,оценка3, предмет4, оценка4.
        clear();
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
        alert(date.marks[4]);
        if(date.marks[3] != '' && date.marks[3] != 0)
        {
            if(date.marks[4] == '' || date.marks[4] == 0)
            {
                getElements('sub4');
                show_hide('apDiv1');
                show_hide('apDiv2');
            }
            else
                show_hide('apDiv1');
            var rt2=document.createElement("option");
            rt2.innerHTML = arr[date.subjs[2]];
            rt2.value = date.subjs[2];
            subj3.appendChild(rt2);
        }
        if(date.marks[3] == ''  || date.marks[3] == 0)
        {
            clear2();
            show_hide('apDiv1');
        }
        if(date.marks[4] != '' && date.marks[4] != 0)
        {
            show_hide('apDiv2');
            var rt3=document.createElement("option");
            rt3.innerHTML = arr[date.subjs[3]];
            rt3.value = date.subjs[3];
            subj4.appendChild(rt3);
        }
        var rt=document.createElement("option");
        rt.innerHTML = arr[0];
        rt.value = 0;
        subj1.appendChild(rt);
        var rt1=document.createElement("option");
        rt1.innerHTML = arr[date.subjs[1]];
        rt1.value = date.subjs[1];
        subj2.appendChild(rt1);

        numb1.value = date.marks[1];
        numb2.value = date.marks[2];
        if(date.marks[3]!=0)numb3.value = date.marks[3];
        if(date.marks[4]!=0)numb4.value = date.marks[4];
        numb5.value = date.marks[0];
    }
}
