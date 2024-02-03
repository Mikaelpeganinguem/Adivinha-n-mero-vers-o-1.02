let numeroEscolhido = Math.floor(Math.random() * 100) + 1;
let tentativas = 5;

function confirm() {
    let numero = "";
    numero = numeroEscolhido;

    let chute = parseInt(document.getElementById("chute").value);
    let resposta = document.getElementById("resposta");
    let chances = document.getElementById("tentativas");
    
    if(chute > numero && tentativas != 0){
       resposta.innerText = "Seu número é MAIOR que o meu"
       atualizarTentativas(chances);
    }else if(chute < numero && tentativas != 0){
       resposta.innerText = "Seu número é MENOR que o meu"
       atualizarTentativas(chances);
    }else if(chute === numero && tentativas != 0){
       resposta.innerText = `PARABÉNS! Você acertou o número é ${numero}`
       let denovo = document.getElementById('denovo');
       
       denovo.style.display = 'block'
       document.getElementById("chute").value = "";
   }
   
   if(tentativas == 0){
         chances.innerText = 0
         resposta.innerText = `Você perdeu ;( O número correto era ${numero}`
          
         let denovo = document.getElementById('denovo');
         denovo.style.display = 'block'
   }
}

function atualizarTentativas(chances) {
    tentativas--;
    chances.innerText = tentativas;
    document.getElementById("chute").value = ""
}

document.getElementById("chute").addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
   confirm();
  }
}); 

/* Função de recarregar a página */

function refresh(){
  location.reload();
}
