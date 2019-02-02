var numQuadrados = 6;
var colors = coresAleatorias(numQuadrados);
var squares = document.querySelectorAll(".square");
var corAlvo = corSorteada();
var colorDipslay = document.querySelector("#colorDisplay");
var mensagem = document.querySelector("#mensagem");
var h1 = document.querySelector("h1");
var botaoMudaCores = document.querySelector("#reset");
var botoesDificuldade = document.querySelectorAll(".modo");

for(var i = 0; i < botoesDificuldade.length; i++){
    botoesDificuldade[i].addEventListener("click", function(){
        botoesDificuldade[0].classList.remove("selected");
        botoesDificuldade[1].classList.remove("selected");
        this.classList.add("selected");
        
        this.textContent === "Easy" ? numQuadrados = 3: numQuadrados = 6;
          
        reset();
    });
 }

function reset(){
     //Gerar novas cores
     colors = coresAleatorias(numQuadrados);
     //Escolher a cor aleatoria do array
     corAlvo = corSorteada();
     //Mudar para que a cor do display (RGB) seja a mesma da corAlvo
     colorDisplay.textContent = corAlvo;
     //Mudar as cores dos quadrados
     for(var i = 0; i < squares.length; i++){
         if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
         }else{
            squares[i].style.display = "none";
         }
         
     }
     h1.style.backgroundColor = "steelblue";
 
     botaoMudaCores.textContent = "New Colors"
     mensagem.textContent = "";
}




//easy.addEventListener("click",function(){
//    hard.classList.remove("selected");
//    easy.classList.add("selected");
//    numQuadrados = 3;
//    colors = coresAleatorias(numQuadrados);
//    corAlvo = corSorteada();
//    colorDisplay.textContent = corAlvo;
//    for(var i = 0; i < squares.length; i++){
//        if(colors[i]){
//            squares[i].style.backgroundColor = colors[i];
//        }else{
//            squares[i].style.display = "none";
//        }
//    }
//})

//hard.addEventListener("click",function(){
//   hard.classList.add("selected");
//    easy.classList.remove("selected");
//    numQuadrados = 6;
//    colors = coresAleatorias(numQuadrados);
//   corAlvo = corSorteada();
//    colorDisplay.textContent = corAlvo;
//    for(var i = 0; i < squares.length; i++){
//            squares[i].style.backgroundColor = colors[i];
//            squares[i].style.display = "block";
//        }       
//})

botaoMudaCores.addEventListener("click", function(){
    reset();
})


colorDisplay.textContent = corAlvo;

for(var i = 0; i < squares.length; i++){
    //Adicionando cores aos quadrados
    squares[i].style.backgroundColor = colors[i];
    //Adicionando evento de clique aos quadrados
    squares[i].addEventListener("click",function(){
        //pegar a cor
        var corClicada = this.style.backgroundColor;
        //comparar a cor clicada
        console.log(corClicada, corAlvo)
        if(corClicada === corAlvo ){
            mensagem.textContent = "Acertou!";
            mudaCores(corClicada);
            h1.style.backgroundColor = corClicada;
            botaoMudaCores.textContent = "Jogar Novamente?";
        }else{
            this.style.backgroundColor = "#232323";
            mensagem.textContent = "Tente Novamente!";
        }

    })
}

function mudaCores (cor){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = cor;
    }
}

function corSorteada(){
    var aleatorio = Math.floor(Math.random() * colors.length);
    return colors[aleatorio];
}

function coresAleatorias (num){
    //criar array
    var arr = [];
    
    //repeat num times
    for(var i = 0; i < num; i++){
        //pegar as cores geradas aleatoriamente e colocar dentro do arr; 
        arr.push(corAleatoria());     
    }

    //retornar array
     return arr;
}

function corAleatoria (){
    //escolher "r" (red) de 0 - 255
    var r = Math.floor(Math.random() * 256);
    //escolher "g" (green) de 0 - 255
    var g = Math.floor(Math.random() * 256);
    //escolher "b" (blue) de 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}