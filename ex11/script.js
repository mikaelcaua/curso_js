let v= []
function adicionar(){
    
    let tn1 = window.document.getElementById('tn1') 
    let tvalores = window.document.getElementById('valores')
    n1 = Number(tn1.value)
    if (tn1.value == 0){
        window.alert('digite um numero')
    }
    else{
        if(n1<0 || n1>100){
            window.alert('insira um numero dentro do intevalo informado')
        }
        else{
            v.push(n1)
            let item = document.createElement('option')
            item.text = `valor adicionado ${v[v.length-1]}`
            tvalores.appendChild(item)
        }
    }
}

function finalizar(){
    let max = v[0]
    let min = v[0]
    let sum = 0
    for(let i =0;i<v.length;i++){
        if(v[i]>max){
            max = v[i]
        }
    }
    for(let i =0;i<v.length;i++){
        if(v[i]<min){
            min = v[i]
        }
    }
    for(let i =0;i<v.length;i++){
        sum = sum+v[i]
    }
    let tres = window.document.getElementById('res')    
    tres.innerHTML = `Ao todo temos ${v.length} numeros cadastrados <br></br> O maior valor informado foi ${max} <br></br> O menor valor informado foi ${min} <br></br> Somando todos os valores temos: ${sum} <br></br> A média dos valores é ${sum/v.length}`

    // tres.innerHTML = ''
    // tres.innerHTML = tres.innerHTML + `<p>Ao todo temos ${v.length} numeros cadastrados</p>`
    // tres.innerHTML = tres.innerHTML + `<p>O maior valor informado foi ${max}</p>`
    // tres.innerHTML = tres.innerHTML + `<p>O menor valor informado foi ${min}</p>` 
    // tres.innerHTML = tres.innerHTML + `<p>Somando todos os valores temos: ${sum}</p>`
    // tres.innerHTML = tres.innerHTML + `<p>A média dos valores é ${sum/v.length}</p>`
}
