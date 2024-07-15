const turnOn = document.getElementById("turnOn"); // Pegando o id e colocando em uma variavel constante (não vai ser alterada)
const turnOff = document.getElementById("turnOff"); // Pegando o id e colocando em uma variavel constante (não vai ser alterada)
const lamp = document.getElementById("lamp"); // Pegando o id e colocando em uma variavel constante (não vai ser alterada)

function isLampBroken(){
    return lamp.src.indexOf("quebrada") > -1 // procura uma string em um source
}

function lampOn() {
    if(!isLampBroken()){
        lamp.src = "./img/ligada.jpg";
    }
    
}

function lampOff(){
    if(!isLampBroken()){
        lamp.src = "./img/desligada.jpg";
    }
    
}

function lampBroken(){
    lamp.src = "./img/quebrada.jpg"
}

turnOn.addEventListener("click", lampOn) // Quando alguem clicar no botão 'Ligar' a lampada irá ligar(por causa da função lampOn)
turnOff.addEventListener("click", lampOff) // Quando alguem clicar no botão 'Desligar' a lampada irá desligar (por causa da função lampOff)
lamp.addEventListener("mouseover", lampOn); // quando passar o mouse em cima a lampada irá ligar
lamp.addEventListener("mouseleave", lampOff); // quando tirar o mouse de cima da imagem da lampada ela ficará desligada
lamp.addEventListener("dblclick", lampBroken); // quando clicar duas vezes na lampada ela irá quebrar