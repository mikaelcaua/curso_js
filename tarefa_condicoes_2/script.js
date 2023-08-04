
function verificar(){
    var data = new Date();
    var actualyear = data.getFullYear();

    var txtyear = window.document.getElementById('year');
    var year = Number(txtyear.value);
    var teste = window.document.querySelector('div#res');
    var img = window.document.querySelector('div.imagens img');
    var result = actualyear - year;

    var tsex = window.document.getElementsByName('sex');


    if(year>actualyear || txtyear.value.length==0){
        window.alert('Esta data de nascimento não é válida');
    }

    else if(result<18){
        teste.innerHTML = `Sua idade é ${actualyear - year}`;
        if(tsex[0].checked){
            img.src = 'imagens/masc_child.jpeg'
        }
        else if(tsex[1].checked){
            img.src = 'imagens/fem_child.jpg'
        }
    }

    else if(result>=18 &&  result<60){
        teste.innerHTML = `Sua idade é ${actualyear - year}`
        if(tsex[0].checked){
            img.src = 'imagens/masc_man.jpeg'
        }
        else if(tsex[1].checked){
            img.src = 'imagens/fem_woman.jpeg'
        }
    }

    else if(result>=60){
        teste.innerHTML = `Sua idade é ${actualyear - year}`;
        if(tsex[0].checked){
            img.src = 'imagens/masc_old.jpg'
        }
        else if(tsex[1].checked){
            img.src = 'imagens/fem_old.jpg'
        }
        
    }



}


