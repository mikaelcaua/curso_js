
function contar(){
    var tn1  = window.document.getElementById('tn1');
    var tn2  = window.document.getElementById('tn2');
    var tpassos  = window.document.getElementById('passos');
    var res  = window.document.querySelector('div#res');

    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var passos = Number(tpassos.value);

    var i;
    res.innerHTML = ''
    
    for(i = n1;i<n2;i = i+passos){
        res.innerHTML = res.innerHTML+ `${i} 👉`;
    }
    res.innerHTML = `Contando: <br> ${res.innerHTML}🏁`;
}