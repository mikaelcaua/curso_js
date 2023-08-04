var msg = window.document.querySelector('div#principal p');
var img = window.document.querySelector('div.imagens img');
var data = new Date();
var hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas`

if(hora>0 && hora<12){
    img.src = 'imagens/day.jpg'
    document.body.style.background = 'yellow';
}

else if(hora>=12 && hora<18){
    img.src = 'imagens/afternoon.jpg'
    document.body.style.background = 'red';
}

else{
    img.src = 'imagens/night.jpg'
    document.body.style.background = 'blue';
}