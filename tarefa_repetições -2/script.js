function tabuada(){
    let num = window.document.getElementById('tn1');
    let tab = window.document.getElementById('tabu');

    if(num.value.length == 0){
        window.alert('esse numero n é valido');
    }

    else{
        tab.innerHTML = ''
        let n = Number(num.value);
        for(let i = 1;i<=10;i++){
            let item = document.createElement('option');
            item.text = `${n} x ${i} = ${n*i}`;
            item.value = `tab ${i}`;
            tab.appendChild(item);
        }
    }

}