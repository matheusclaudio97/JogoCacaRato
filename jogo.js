var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 100;


var criaRatoTempo = 1800;


var nivel = window.location.search;
    nivel = nivel.replace("?", "");

    if(nivel === "facil"){
        tempo = 30;
        criaRatoTempo = 1800;
        
        

    }
    else if(nivel === "medio"){
        tempo = 40;
        criaRatoTempo = 1400;


    }
    else if(nivel === "dificil"){
        tempo = 50;
        criaRatoTempo = 1100;

        
    }
    else if(nivel === "expert"){
        tempo = 60;
        criaRatoTempo = 800;

        
    }

function ajustaTela(){

    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura, largura);
}
    ajustaTela();

    var cronometro = setInterval(function(){
        
        tempo--;
        if(tempo < 0) {
            clearInterval(cronometro);
            clearInterval(criaRatoTempo);
            window.location.href = "vitoria.html"
;

        }else{
        document.getElementById("cronometro").innerHTML = tempo;
        }
    },1000)


    function posicaoRandomica(){
        if(document.getElementById("rato")){
            document.getElementById("rato").remove()

            if(vidas > 3){
               window.location.href = "fim_de_jogo.html";


            }
            else{
            document.getElementById(`v${vidas}`).src = "imagens/queijovazio.png";
            vidas++;
                }
        }

        var posicaoY = Math.floor(Math.random() * altura) - 90;
        var posicaoX = Math.floor(Math.random() * largura) - 90;

            if(posicaoX <= 0){
                posicaoX = 10 + Math.floor(Math.random() * 10);

            }

            if(posicaoY <= 0){
                posicaoY = 10 + Math.floor(Math.random() * 10);

            }

        console.log(posicaoX, posicaoY);

        var rato = document.createElement("img");
        rato.src = "imagens/rato.png";
        rato.className = `${TamanhoAleatorio()} ${LadoAleatorio()}`;
        rato.style.left = `${posicaoX}px`;
        rato.style.top = `${posicaoY}px`;
        rato.style.position = "absolute";
        rato.id = "rato"; 
        rato.onclick = function(){
            this.remove();

            document.getElementById("somClick").play()
            
    
        }

        document.body.appendChild(rato);

       
    }

    function TamanhoAleatorio(){
        var classe = Math.floor(Math.random() * 3);
        
        if(classe === 0){
            return "rato1";

        }
        else if(classe === 1){
            return "rato2";

        }
        else if(classe === 2){
            return "rato3";

        }
    }

    function LadoAleatorio(){
            var classe = Math.floor(Math.random() * 2);
            
            if(classe === 0){
                return "ladoA";
    
            }
            else if(classe === 1){
                return "ladoB";
    
            }
        }
        function tocarMusicaRato(){

            //document.getElementeById("musica").play();


        }